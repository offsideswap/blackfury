// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRedeemCollateral } from "./types/blackfury/maker/v1/tx";
import { MsgMintByCollateral } from "./types/blackfury/maker/v1/tx";
import { MsgMintBySwap } from "./types/blackfury/maker/v1/tx";
import { MsgBuyBacking } from "./types/blackfury/maker/v1/tx";
import { MsgDepositCollateral } from "./types/blackfury/maker/v1/tx";
import { MsgBurnBySwap } from "./types/blackfury/maker/v1/tx";
import { MsgLiquidateCollateral } from "./types/blackfury/maker/v1/tx";
import { MsgSellBacking } from "./types/blackfury/maker/v1/tx";
import { MsgBurnByCollateral } from "./types/blackfury/maker/v1/tx";


const types = [
  ["/blackfury.maker.v1.MsgRedeemCollateral", MsgRedeemCollateral],
  ["/blackfury.maker.v1.MsgMintByCollateral", MsgMintByCollateral],
  ["/blackfury.maker.v1.MsgMintBySwap", MsgMintBySwap],
  ["/blackfury.maker.v1.MsgBuyBacking", MsgBuyBacking],
  ["/blackfury.maker.v1.MsgDepositCollateral", MsgDepositCollateral],
  ["/blackfury.maker.v1.MsgBurnBySwap", MsgBurnBySwap],
  ["/blackfury.maker.v1.MsgLiquidateCollateral", MsgLiquidateCollateral],
  ["/blackfury.maker.v1.MsgSellBacking", MsgSellBacking],
  ["/blackfury.maker.v1.MsgBurnByCollateral", MsgBurnByCollateral],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgRedeemCollateral: (data: MsgRedeemCollateral): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgRedeemCollateral", value: MsgRedeemCollateral.fromPartial( data ) }),
    msgMintByCollateral: (data: MsgMintByCollateral): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgMintByCollateral", value: MsgMintByCollateral.fromPartial( data ) }),
    msgMintBySwap: (data: MsgMintBySwap): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgMintBySwap", value: MsgMintBySwap.fromPartial( data ) }),
    msgBuyBacking: (data: MsgBuyBacking): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgBuyBacking", value: MsgBuyBacking.fromPartial( data ) }),
    msgDepositCollateral: (data: MsgDepositCollateral): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgDepositCollateral", value: MsgDepositCollateral.fromPartial( data ) }),
    msgBurnBySwap: (data: MsgBurnBySwap): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgBurnBySwap", value: MsgBurnBySwap.fromPartial( data ) }),
    msgLiquidateCollateral: (data: MsgLiquidateCollateral): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgLiquidateCollateral", value: MsgLiquidateCollateral.fromPartial( data ) }),
    msgSellBacking: (data: MsgSellBacking): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgSellBacking", value: MsgSellBacking.fromPartial( data ) }),
    msgBurnByCollateral: (data: MsgBurnByCollateral): EncodeObject => ({ typeUrl: "/blackfury.maker.v1.MsgBurnByCollateral", value: MsgBurnByCollateral.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
