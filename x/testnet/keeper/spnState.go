package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lubtd/ibclab/x/testnet/types"
)

// SetSpnState set a specific spnState in the store from its index
func (k Keeper) SetSpnState(ctx sdk.Context, spnState types.SpnState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SpnStateKey))
	b := k.cdc.MustMarshal(&spnState)
	store.Set(types.KeyPrefix(spnState.Index), b)
}

// GetSpnState returns a spnState from its index
func (k Keeper) GetSpnState(ctx sdk.Context, index string) (val types.SpnState, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SpnStateKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// DeleteSpnState removes a spnState from the store
func (k Keeper) RemoveSpnState(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SpnStateKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllSpnState returns all spnState
func (k Keeper) GetAllSpnState(ctx sdk.Context) (list []types.SpnState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SpnStateKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SpnState
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
