package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/offsideswap/blackfury/testutil/keeper"
	"github.com/offsideswap/blackfury/x/erc20/keeper"
	"github.com/offsideswap/blackfury/x/erc20/types"
)

func setupMsgServer(t *testing.T) (types.MsgServer, context.Context) {
	k, ctx := keepertest.Erc20Keeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
