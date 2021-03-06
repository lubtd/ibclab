import { txClient, queryClient, MissingWalletError } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { TxResponse } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { ABCIMessageLog } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { StringEvent } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { Attribute } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { GasInfo } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { Result } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { SimulationResponse } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { MsgData } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { TxMsgData } from "./module/types/cosmos/base/abci/v1beta1/abci"
import { SearchTxsResult } from "./module/types/cosmos/base/abci/v1beta1/abci"


export { TxResponse, ABCIMessageLog, StringEvent, Attribute, GasInfo, Result, SimulationResponse, MsgData, TxMsgData, SearchTxsResult };

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
        
        _Structure: {
            TxResponse: getStructure(TxResponse.fromPartial({})),
            ABCIMessageLog: getStructure(ABCIMessageLog.fromPartial({})),
            StringEvent: getStructure(StringEvent.fromPartial({})),
            Attribute: getStructure(Attribute.fromPartial({})),
            GasInfo: getStructure(GasInfo.fromPartial({})),
            Result: getStructure(Result.fromPartial({})),
            SimulationResponse: getStructure(SimulationResponse.fromPartial({})),
            MsgData: getStructure(MsgData.fromPartial({})),
            TxMsgData: getStructure(TxMsgData.fromPartial({})),
            SearchTxsResult: getStructure(SearchTxsResult.fromPartial({})),
            
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
        
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: cosmos.base.abci.v1beta1 initialized!')
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
		
		
		
	}
}
