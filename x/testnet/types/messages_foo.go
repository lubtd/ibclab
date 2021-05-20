package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendFoo{}

func NewMsgSendFoo(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
) *MsgSendFoo {
	return &MsgSendFoo{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
	}
}

func (msg *MsgSendFoo) Route() string {
	return RouterKey
}

func (msg *MsgSendFoo) Type() string {
	return "SendFoo"
}

func (msg *MsgSendFoo) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendFoo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendFoo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
