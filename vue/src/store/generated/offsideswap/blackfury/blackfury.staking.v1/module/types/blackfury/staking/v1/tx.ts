/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.staking.v1";

export interface MsgVeDelegate {
  delegator_address: string;
  validator_address: string;
  ve_id: string;
  amount: Coin | undefined;
}

export interface MsgVeDelegateResponse {}

const baseMsgVeDelegate: object = {
  delegator_address: "",
  validator_address: "",
  ve_id: "",
};

export const MsgVeDelegate = {
  encode(message: MsgVeDelegate, writer: Writer = Writer.create()): Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.ve_id !== "") {
      writer.uint32(26).string(message.ve_id);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVeDelegate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVeDelegate } as MsgVeDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.ve_id = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVeDelegate {
    const message = { ...baseMsgVeDelegate } as MsgVeDelegate;
    if (
      object.delegator_address !== undefined &&
      object.delegator_address !== null
    ) {
      message.delegator_address = String(object.delegator_address);
    } else {
      message.delegator_address = "";
    }
    if (
      object.validator_address !== undefined &&
      object.validator_address !== null
    ) {
      message.validator_address = String(object.validator_address);
    } else {
      message.validator_address = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = String(object.ve_id);
    } else {
      message.ve_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgVeDelegate): unknown {
    const obj: any = {};
    message.delegator_address !== undefined &&
      (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined &&
      (obj.validator_address = message.validator_address);
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVeDelegate>): MsgVeDelegate {
    const message = { ...baseMsgVeDelegate } as MsgVeDelegate;
    if (
      object.delegator_address !== undefined &&
      object.delegator_address !== null
    ) {
      message.delegator_address = object.delegator_address;
    } else {
      message.delegator_address = "";
    }
    if (
      object.validator_address !== undefined &&
      object.validator_address !== null
    ) {
      message.validator_address = object.validator_address;
    } else {
      message.validator_address = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgVeDelegateResponse: object = {};

export const MsgVeDelegateResponse = {
  encode(_: MsgVeDelegateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVeDelegateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVeDelegateResponse } as MsgVeDelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgVeDelegateResponse {
    const message = { ...baseMsgVeDelegateResponse } as MsgVeDelegateResponse;
    return message;
  },

  toJSON(_: MsgVeDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVeDelegateResponse>): MsgVeDelegateResponse {
    const message = { ...baseMsgVeDelegateResponse } as MsgVeDelegateResponse;
    return message;
  },
};

/** Msg defines the staking Msg service. */
export interface Msg {
  /**
   * VeDelegate defines a method for performing a delegation of ve-locked coins
   * from a delegator to a validator.
   */
  VeDelegate(request: MsgVeDelegate): Promise<MsgVeDelegateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  VeDelegate(request: MsgVeDelegate): Promise<MsgVeDelegateResponse> {
    const data = MsgVeDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.staking.v1.Msg",
      "VeDelegate",
      data
    );
    return promise.then((data) =>
      MsgVeDelegateResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
