package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/lubtd/ibclab/x/testnet/types"
)

func createNSpnState(keeper *Keeper, ctx sdk.Context, n int) []types.SpnState {
	items := make([]types.SpnState, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetSpnState(ctx, items[i])
	}
	return items
}

func TestSpnStateGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSpnState(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSpnState(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestSpnStateRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSpnState(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSpnState(ctx, item.Index)
		_, found := keeper.GetSpnState(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestSpnStateGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSpnState(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllSpnState(ctx))
}
