package spn

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lubtd/ibclab/x/spn/keeper"
	"github.com/lubtd/ibclab/x/spn/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the testnetState
	for _, elem := range genState.TestnetStateList {
		k.SetTestnetState(ctx, *elem)
	}

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all testnetState
	testnetStateList := k.GetAllTestnetState(ctx)
	for _, elem := range testnetStateList {
		elem := elem
		genesis.TestnetStateList = append(genesis.TestnetStateList, &elem)
	}

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
