package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/modules/core/02-client/types"
	"github.com/lubtd/ibclab/x/testnet/types"
)

func (k msgServer) SendFoo(goCtx context.Context, msg *types.MsgSendFoo) (*types.MsgSendFooResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.FooPacketData

	// Transmit the packet
	err := k.TransmitFooPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendFooResponse{}, nil
}
