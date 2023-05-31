package types

import (
	"testing"

	blackfury "github.com/offsideswap/blackfury/types"
	"github.com/stretchr/testify/require"
)

func TestDefaultParams(t *testing.T) {
	params := DefaultParams()
	require.Equal(t, blackfury.BaseDenom, params.LockDenom)
}
