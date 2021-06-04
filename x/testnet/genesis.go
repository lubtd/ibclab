package testnet

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	commitmenttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/23-commitment/types"
	ibctmtypes "github.com/cosmos/cosmos-sdk/x/ibc/light-clients/07-tendermint/types"
	"github.com/lubtd/ibclab/x/testnet/keeper"
	"github.com/lubtd/ibclab/x/testnet/types"
	"github.com/tendermint/tendermint/light"
	"time"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the spnState
	for _, elem := range genState.SpnStateList {
		k.SetSpnState(ctx, *elem)
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

	//timestamp, err := time.Parse(time.RFC3339, "2021-06-03T08:47:14.734876Z")
	//if err != nil {
	//	panic(err)
	//}
	//consensusState := ibctmtypes.ConsensusState{
	//	NextValidatorsHash: []byte("D3C5C630CCA8CDB937142B2601A7F7131C0A8A1022E7A08729D5714CBA546D77"),
	//	Root: commitmenttypes.MerkleRoot{
	//		Hash: []byte("UDVeoH8tPTnDkmuuClwAHjKsJOejfrpoS4s+Xzdjj4M="),
	//	},
	//	Timestamp: timestamp,
	//}
	timestamp, err := time.Parse(time.RFC3339, "2021-06-04T07:31:52.740319Z")
	if err != nil {
		panic(err)
	}
	consensusState := ibctmtypes.NewConsensusState(
		timestamp,
		commitmenttypes.NewMerkleRoot([]byte("2gfxiCQ4xHAm948Qm9oNSVDVQ31QONKCsfe/dS9B05A=")),
		[]byte("4D52FE990913CCA4160AF4A553A8ABA1EFBD1CC0331906772A33A2F6396A592D"),
	)

	clientState := ibctmtypes.NewClientState(
		"testnet",
		ibctmtypes.NewFractionFromTm(light.DefaultTrustLevel),
		1209600 * time.Second,
		1814400 * time.Second,
		time.Minute*10,
		clienttypes.NewHeight(0, 0),
		commitmenttypes.GetSDKSpecs(),
		[]string{"upgrade", "upgradedIBCState"},
		false,
		false,
	)


	clientID, err := k.ClientKeeper.CreateClient(ctx, clientState, consensusState)
	if err != nil {
		panic(err)
	}

	k.SetSpnState(
		ctx,
		types.SpnState{
			Index: types.SPNKey,
			ClientID: clientID,
		},
	)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all spnState
	spnStateList := k.GetAllSpnState(ctx)
	for _, elem := range spnStateList {
		elem := elem
		genesis.SpnStateList = append(genesis.SpnStateList, &elem)
	}

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
