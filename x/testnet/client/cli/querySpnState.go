package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/lubtd/ibclab/x/testnet/types"
	"github.com/spf13/cobra"
)

func CmdListSpnState() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-spnState",
		Short: "list all spnState",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSpnStateRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SpnStateAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowSpnState() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-spnState [index]",
		Short: "shows a spnState",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetSpnStateRequest{
				Index: args[0],
			}

			res, err := queryClient.SpnState(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
