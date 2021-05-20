import { txClient, queryClient, MissingWalletError } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { TestnetPacketData } from "./module/types/testnet/packet"
import { NoData } from "./module/types/testnet/packet"
import { FooPacketData } from "./module/types/testnet/packet"
import { FooPacketAck } from "./module/types/testnet/packet"
import { SpnState } from "./module/types/testnet/spnState"


export { TestnetPacketData, NoData, FooPacketData, FooPacketAck, SpnState };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				SpnState: {},
				SpnStateAll: {},
				
				_Structure: {
						TestnetPacketData: getStructure(TestnetPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						FooPacketData: getStructure(FooPacketData.fromPartial({})),
						FooPacketAck: getStructure(FooPacketAck.fromPartial({})),
						SpnState: getStructure(SpnState.fromPartial({})),
						
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
				getSpnState: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SpnState[JSON.stringify(params)] ?? {}
		},
				getSpnStateAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SpnStateAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: lubtd.ibclab.testnet initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					await dispatch(subscription.action, subscription.payload)
				}catch(e) {
					throw new SpVuexError('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QuerySpnState({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySpnState( key.index)).data
				
					
				commit('QUERY', { query: 'SpnState', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySpnState', payload: { options: { all }, params: {...key},query }})
				return getters['getSpnState']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QuerySpnState', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySpnStateAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySpnStateAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.querySpnStateAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SpnStateAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySpnStateAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSpnStateAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QuerySpnStateAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSendFoo({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendFoo(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendFoo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendFoo:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSendFoo({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendFoo(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendFoo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendFoo:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		
	}
}
