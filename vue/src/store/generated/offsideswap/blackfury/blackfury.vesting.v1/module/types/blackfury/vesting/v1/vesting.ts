/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.vesting.v1";

export interface Airdrop {
  target_addr: string;
  amount: Coin | undefined;
}

const baseAirdrop: object = { target_addr: "" };

export const Airdrop = {
  encode(message: Airdrop, writer: Writer = Writer.create()): Writer {
    if (message.target_addr !== "") {
      writer.uint32(10).string(message.target_addr);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAirdrop } as Airdrop;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target_addr = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Airdrop {
    const message = { ...baseAirdrop } as Airdrop;
    if (object.target_addr !== undefined && object.target_addr !== null) {
      message.target_addr = String(object.target_addr);
    } else {
      message.target_addr = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: Airdrop): unknown {
    const obj: any = {};
    message.target_addr !== undefined &&
      (obj.target_addr = message.target_addr);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Airdrop>): Airdrop {
    const message = { ...baseAirdrop } as Airdrop;
    if (object.target_addr !== undefined && object.target_addr !== null) {
      message.target_addr = object.target_addr;
    } else {
      message.target_addr = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
