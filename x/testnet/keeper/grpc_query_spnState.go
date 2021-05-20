package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/lubtd/ibclab/x/testnet/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SpnStateAll(c context.Context, req *types.QueryAllSpnStateRequest) (*types.QueryAllSpnStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var spnStates []*types.SpnState
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	spnStateStore := prefix.NewStore(store, types.KeyPrefix(types.SpnStateKey))

	pageRes, err := query.Paginate(spnStateStore, req.Pagination, func(key []byte, value []byte) error {
		var spnState types.SpnState
		if err := k.cdc.UnmarshalBinaryBare(value, &spnState); err != nil {
			return err
		}

		spnStates = append(spnStates, &spnState)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSpnStateResponse{SpnState: spnStates, Pagination: pageRes}, nil
}

func (k Keeper) SpnState(c context.Context, req *types.QueryGetSpnStateRequest) (*types.QueryGetSpnStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSpnState(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSpnStateResponse{SpnState: &val}, nil
}
