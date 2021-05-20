package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/lubtd/ibclab/x/spn/types"
	"github.com/spf13/cobra"
)

func CmdListTestnetState() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-testnetState",
		Short: "list all testnetState",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllTestnetStateRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.TestnetStateAll(context.Background(), params)
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

func CmdShowTestnetState() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-testnetState [index]",
		Short: "shows a testnetState",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetTestnetStateRequest{
				Index: args[0],
			}

			res, err := queryClient.TestnetState(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
