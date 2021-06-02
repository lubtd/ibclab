package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/lubtd/ibclab/x/spn/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TestnetStateAll(c context.Context, req *types.QueryAllTestnetStateRequest) (*types.QueryAllTestnetStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var testnetStates []*types.TestnetState
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	testnetStateStore := prefix.NewStore(store, types.KeyPrefix(types.TestnetStateKey))

	pageRes, err := query.Paginate(testnetStateStore, req.Pagination, func(key []byte, value []byte) error {
		var testnetState types.TestnetState
		if err := k.cdc.Unmarshal(value, &testnetState); err != nil {
			return err
		}

		testnetStates = append(testnetStates, &testnetState)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTestnetStateResponse{TestnetState: testnetStates, Pagination: pageRes}, nil
}

func (k Keeper) TestnetState(c context.Context, req *types.QueryGetTestnetStateRequest) (*types.QueryGetTestnetStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetTestnetState(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetTestnetStateResponse{TestnetState: &val}, nil
}
