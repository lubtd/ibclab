package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/lubtd/ibclab/x/spn/types"
)

func createNTestnetState(keeper *Keeper, ctx sdk.Context, n int) []types.TestnetState {
	items := make([]types.TestnetState, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetTestnetState(ctx, items[i])
	}
	return items
}

func TestTestnetStateGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTestnetState(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTestnetState(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestTestnetStateRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTestnetState(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTestnetState(ctx, item.Index)
		_, found := keeper.GetTestnetState(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestTestnetStateGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTestnetState(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllTestnetState(ctx))
}
