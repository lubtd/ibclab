package keeper

import (
	"github.com/lubtd/ibclab/x/testnet/types"
)

var _ types.QueryServer = Keeper{}
