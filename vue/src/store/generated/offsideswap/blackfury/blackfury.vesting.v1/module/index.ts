// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetAllocationAddress } from "./types/blackfury/vesting/v1/tx";
import { MsgAddAirdrops } from "./types/blackfury/vesting/v1/tx";
import { MsgExecuteAirdrops } from "./types/blackfury/vesting/v1/tx";


const types = [
  ["/blackfury.vesting.v1.MsgSetAllocationAddress", MsgSetAllocationAddress],
  ["/blackfury.vesting.v1.MsgAddAirdrops", MsgAddAirdrops],
  ["/blackfury.vesting.v1.MsgExecuteAirdrops", MsgExecuteAirdrops],
  
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
    msgSetAllocationAddress: (data: MsgSetAllocationAddress): EncodeObject => ({ typeUrl: "/blackfury.vesting.v1.MsgSetAllocationAddress", value: MsgSetAllocationAddress.fromPartial( data ) }),
    msgAddAirdrops: (data: MsgAddAirdrops): EncodeObject => ({ typeUrl: "/blackfury.vesting.v1.MsgAddAirdrops", value: MsgAddAirdrops.fromPartial( data ) }),
    msgExecuteAirdrops: (data: MsgExecuteAirdrops): EncodeObject => ({ typeUrl: "/blackfury.vesting.v1.MsgExecuteAirdrops", value: MsgExecuteAirdrops.fromPartial( data ) }),
    
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
