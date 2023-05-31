package types_test

import (
	"math/rand"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	blackfury "github.com/offsideswap/blackfury/types"
	"github.com/offsideswap/blackfury/x/oracle/types"
	"github.com/stretchr/testify/require"
)

func TestMsgAggregateExchangeRatePrevote(t *testing.T) {
	addrs := []sdk.AccAddress{
		sdk.AccAddress([]byte("addr1_______________")),
	}

	exchangeRates := sdk.DecCoins{sdk.NewDecCoinFromDec(blackfury.AttoFuryDenom, sdk.OneDec()), sdk.NewDecCoinFromDec(blackfury.MicroUSMDenom, sdk.NewDecWithPrec(32121, 1))}
	bz := types.GetAggregateVoteHash("1", exchangeRates.String(), sdk.ValAddress(addrs[0]))

	tests := []struct {
		hash          types.AggregateVoteHash
		exchangeRates sdk.DecCoins
		voter         sdk.AccAddress
		expectPass    bool
	}{
		{bz, exchangeRates, addrs[0], true},
		{bz[1:], exchangeRates, addrs[0], false},
		{bz, exchangeRates, sdk.AccAddress{}, false},
		{types.AggregateVoteHash{}, exchangeRates, addrs[0], false},
	}

	for i, tc := range tests {
		msg := types.NewMsgAggregateExchangeRatePrevote(tc.hash, tc.voter, sdk.ValAddress(tc.voter))
		if tc.expectPass {
			require.NoError(t, msg.ValidateBasic(), "test: %v", i)
		} else {
			require.Error(t, msg.ValidateBasic(), "test: %v", i)
		}
	}
}

func TestMsgAggregateExchangeRateVote(t *testing.T) {
	addrs := []sdk.AccAddress{
		sdk.AccAddress([]byte("addr1_______________")),
	}

	invalidExchangeRates := "a,b"
	exchangeRates := "foo:1.0,bar:1232.132"
	abstainExchangeRates := "foo:0.0,bar:1232.132"
	overFlowExchangeRates := "foo:1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.0,bar:1232.132"

	tests := []struct {
		voter         sdk.AccAddress
		validator     sdk.ValAddress
		salt          string
		exchangeRates string
		expectPass    bool
	}{
		{addrs[0], sdk.ValAddress(addrs[0]), "123", exchangeRates, true},
		{addrs[0], sdk.ValAddress(addrs[0]), "123", invalidExchangeRates, false},
		{addrs[0], sdk.ValAddress(addrs[0]), "123", abstainExchangeRates, true},
		{addrs[0], sdk.ValAddress(addrs[0]), "123", overFlowExchangeRates, false},
		{sdk.AccAddress{}, sdk.ValAddress(addrs[0]), "123", exchangeRates, false},
		{addrs[0], sdk.ValAddress(addrs[0]), "123", "", false},
		{addrs[0], sdk.ValAddress(addrs[0]), "", randSeq(4097), false},
		{addrs[0], sdk.ValAddress{}, "123", abstainExchangeRates, false},
		{addrs[0], sdk.ValAddress(addrs[0]), "", abstainExchangeRates, false},
	}

	for i, tc := range tests {
		msg := types.NewMsgAggregateExchangeRateVote(tc.salt, tc.exchangeRates, tc.voter, tc.validator)
		if tc.expectPass {
			require.Nil(t, msg.ValidateBasic(), "test: %v", i)
		} else {
			require.NotNil(t, msg.ValidateBasic(), "test: %v", i)
		}
	}
}

var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

func randSeq(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}

func TestMsgFeederDelegation(t *testing.T) {
	addrs := []sdk.AccAddress{
		sdk.AccAddress([]byte("addr1_______________")),
		sdk.AccAddress([]byte("addr2_______________")),
	}

	tests := []struct {
		delegator  sdk.ValAddress
		delegate   sdk.AccAddress
		expectPass bool
	}{
		{sdk.ValAddress(addrs[0]), addrs[1], true},
		{sdk.ValAddress{}, addrs[1], false},
		{sdk.ValAddress(addrs[0]), sdk.AccAddress{}, false},
		{nil, nil, false},
	}

	for i, tc := range tests {
		msg := types.NewMsgDelegateFeedConsent(tc.delegator, tc.delegate)
		if tc.expectPass {
			require.Nil(t, msg.ValidateBasic(), "test: %v", i)
		} else {
			require.NotNil(t, msg.ValidateBasic(), "test: %v", i)
		}

	}
}
