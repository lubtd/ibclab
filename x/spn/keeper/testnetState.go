package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lubtd/ibclab/x/spn/types"
)

// SetTestnetState set a specific testnetState in the store from its index
func (k Keeper) SetTestnetState(ctx sdk.Context, testnetState types.TestnetState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TestnetStateKey))
	b := k.cdc.MustMarshalBinaryBare(&testnetState)
	store.Set(types.KeyPrefix(testnetState.Index), b)
}

// GetTestnetState returns a testnetState from its index
func (k Keeper) GetTestnetState(ctx sdk.Context, index string) (val types.TestnetState, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TestnetStateKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// DeleteTestnetState removes a testnetState from the store
func (k Keeper) RemoveTestnetState(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TestnetStateKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllTestnetState returns all testnetState
func (k Keeper) GetAllTestnetState(ctx sdk.Context) (list []types.TestnetState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TestnetStateKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TestnetState
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
