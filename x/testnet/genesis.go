package testnet

import (
	"encoding/base64"
	"encoding/hex"
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

	timestamp, err := time.Parse(time.RFC3339, "2021-06-08T13:32:47.164930Z")
	if err != nil {
		panic(err)
	}
	nextValSetHash, _ := hex.DecodeString("AA91D1BADE40BC9E0D5577B570FE133A24D35229671173C05EA0463C0CEB3E51")
	rootHash, _ := base64.StdEncoding.DecodeString("g2ZaAj5ZnEFVmQaQEb+Jd/zzWtOJkenBJ0NakQvQfXo=")
	consensusState := ibctmtypes.NewConsensusState(
		timestamp,
		commitmenttypes.NewMerkleRoot(rootHash),
		nextValSetHash,
	)

	clientState := ibctmtypes.NewClientState(
		"testnet",
		ibctmtypes.NewFractionFromTm(light.DefaultTrustLevel),
		1209600 * time.Second,
		1814400 * time.Second,
		time.Minute*10,
		clienttypes.NewHeight(0, 4),
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
