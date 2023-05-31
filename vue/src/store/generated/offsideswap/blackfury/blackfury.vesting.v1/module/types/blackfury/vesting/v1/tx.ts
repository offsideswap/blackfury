/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Airdrop } from "../../../blackfury/vesting/v1/vesting";

export const protobufPackage = "blackfury.vesting.v1";

/** MsgAddAirdrops represents a message to add airdrop targets. */
export interface MsgAddAirdrops {
  sender: string;
  airdrops: Airdrop[];
}

/** MsgMintBySwapResponse defines the Msg/AddAirdrops response type. */
export interface MsgAddAirdropsResponse {}

export interface MsgExecuteAirdrops {
  sender: string;
  /** max count of airdrops performed this time */
  max_count: number;
}

export interface MsgExecuteAirdropsResponse {}

/** MsgSetAllocationAddress represents a message to set allocation address. */
export interface MsgSetAllocationAddress {
  sender: string;
  team_vesting_addr: string;
  strategic_reserve_custodian_addr: string;
}

/**
 * MsgSetAllocationAddressResponse defines the Msg/SetAllocationAddress response
 * type.
 */
export interface MsgSetAllocationAddressResponse {}

const baseMsgAddAirdrops: object = { sender: "" };

export const MsgAddAirdrops = {
  encode(message: MsgAddAirdrops, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAirdrops {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAirdrops } as MsgAddAirdrops;
    message.airdrops = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAirdrops {
    const message = { ...baseMsgAddAirdrops } as MsgAddAirdrops;
    message.airdrops = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.airdrops !== undefined && object.airdrops !== null) {
      for (const e of object.airdrops) {
        message.airdrops.push(Airdrop.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgAddAirdrops): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) =>
        e ? Airdrop.toJSON(e) : undefined
      );
    } else {
      obj.airdrops = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAirdrops>): MsgAddAirdrops {
    const message = { ...baseMsgAddAirdrops } as MsgAddAirdrops;
    message.airdrops = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.airdrops !== undefined && object.airdrops !== null) {
      for (const e of object.airdrops) {
        message.airdrops.push(Airdrop.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgAddAirdropsResponse: object = {};

export const MsgAddAirdropsResponse = {
  encode(_: MsgAddAirdropsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAirdropsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAirdropsResponse } as MsgAddAirdropsResponse;
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

  fromJSON(_: any): MsgAddAirdropsResponse {
    const message = { ...baseMsgAddAirdropsResponse } as MsgAddAirdropsResponse;
    return message;
  },

  toJSON(_: MsgAddAirdropsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddAirdropsResponse>): MsgAddAirdropsResponse {
    const message = { ...baseMsgAddAirdropsResponse } as MsgAddAirdropsResponse;
    return message;
  },
};

const baseMsgExecuteAirdrops: object = { sender: "", max_count: 0 };

export const MsgExecuteAirdrops = {
  encode(
    message: MsgExecuteAirdrops,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.max_count !== 0) {
      writer.uint32(16).uint64(message.max_count);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExecuteAirdrops {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecuteAirdrops } as MsgExecuteAirdrops;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.max_count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteAirdrops {
    const message = { ...baseMsgExecuteAirdrops } as MsgExecuteAirdrops;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.max_count !== undefined && object.max_count !== null) {
      message.max_count = Number(object.max_count);
    } else {
      message.max_count = 0;
    }
    return message;
  },

  toJSON(message: MsgExecuteAirdrops): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.max_count !== undefined && (obj.max_count = message.max_count);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecuteAirdrops>): MsgExecuteAirdrops {
    const message = { ...baseMsgExecuteAirdrops } as MsgExecuteAirdrops;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.max_count !== undefined && object.max_count !== null) {
      message.max_count = object.max_count;
    } else {
      message.max_count = 0;
    }
    return message;
  },
};

const baseMsgExecuteAirdropsResponse: object = {};

export const MsgExecuteAirdropsResponse = {
  encode(
    _: MsgExecuteAirdropsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExecuteAirdropsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExecuteAirdropsResponse,
    } as MsgExecuteAirdropsResponse;
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

  fromJSON(_: any): MsgExecuteAirdropsResponse {
    const message = {
      ...baseMsgExecuteAirdropsResponse,
    } as MsgExecuteAirdropsResponse;
    return message;
  },

  toJSON(_: MsgExecuteAirdropsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExecuteAirdropsResponse>
  ): MsgExecuteAirdropsResponse {
    const message = {
      ...baseMsgExecuteAirdropsResponse,
    } as MsgExecuteAirdropsResponse;
    return message;
  },
};

const baseMsgSetAllocationAddress: object = {
  sender: "",
  team_vesting_addr: "",
  strategic_reserve_custodian_addr: "",
};

export const MsgSetAllocationAddress = {
  encode(
    message: MsgSetAllocationAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.team_vesting_addr !== "") {
      writer.uint32(18).string(message.team_vesting_addr);
    }
    if (message.strategic_reserve_custodian_addr !== "") {
      writer.uint32(26).string(message.strategic_reserve_custodian_addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetAllocationAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetAllocationAddress,
    } as MsgSetAllocationAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.team_vesting_addr = reader.string();
          break;
        case 3:
          message.strategic_reserve_custodian_addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAllocationAddress {
    const message = {
      ...baseMsgSetAllocationAddress,
    } as MsgSetAllocationAddress;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (
      object.team_vesting_addr !== undefined &&
      object.team_vesting_addr !== null
    ) {
      message.team_vesting_addr = String(object.team_vesting_addr);
    } else {
      message.team_vesting_addr = "";
    }
    if (
      object.strategic_reserve_custodian_addr !== undefined &&
      object.strategic_reserve_custodian_addr !== null
    ) {
      message.strategic_reserve_custodian_addr = String(
        object.strategic_reserve_custodian_addr
      );
    } else {
      message.strategic_reserve_custodian_addr = "";
    }
    return message;
  },

  toJSON(message: MsgSetAllocationAddress): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.team_vesting_addr !== undefined &&
      (obj.team_vesting_addr = message.team_vesting_addr);
    message.strategic_reserve_custodian_addr !== undefined &&
      (obj.strategic_reserve_custodian_addr =
        message.strategic_reserve_custodian_addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetAllocationAddress>
  ): MsgSetAllocationAddress {
    const message = {
      ...baseMsgSetAllocationAddress,
    } as MsgSetAllocationAddress;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (
      object.team_vesting_addr !== undefined &&
      object.team_vesting_addr !== null
    ) {
      message.team_vesting_addr = object.team_vesting_addr;
    } else {
      message.team_vesting_addr = "";
    }
    if (
      object.strategic_reserve_custodian_addr !== undefined &&
      object.strategic_reserve_custodian_addr !== null
    ) {
      message.strategic_reserve_custodian_addr =
        object.strategic_reserve_custodian_addr;
    } else {
      message.strategic_reserve_custodian_addr = "";
    }
    return message;
  },
};

const baseMsgSetAllocationAddressResponse: object = {};

export const MsgSetAllocationAddressResponse = {
  encode(
    _: MsgSetAllocationAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetAllocationAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetAllocationAddressResponse,
    } as MsgSetAllocationAddressResponse;
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

  fromJSON(_: any): MsgSetAllocationAddressResponse {
    const message = {
      ...baseMsgSetAllocationAddressResponse,
    } as MsgSetAllocationAddressResponse;
    return message;
  },

  toJSON(_: MsgSetAllocationAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetAllocationAddressResponse>
  ): MsgSetAllocationAddressResponse {
    const message = {
      ...baseMsgSetAllocationAddressResponse,
    } as MsgSetAllocationAddressResponse;
    return message;
  },
};

/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * AddAirdrops adds airdrop targets.
   * Should only be called by core team multisig.
   */
  AddAirdrops(request: MsgAddAirdrops): Promise<MsgAddAirdropsResponse>;
  /**
   * ExecuteAirdrops performs airdrops.
   * Should only be called by core team multisig.
   */
  ExecuteAirdrops(
    request: MsgExecuteAirdrops
  ): Promise<MsgExecuteAirdropsResponse>;
  /**
   * SetAllocationAddress sets allocation address of team vesting or
   * strategic_reserve_custodian.
   */
  SetAllocationAddress(
    request: MsgSetAllocationAddress
  ): Promise<MsgSetAllocationAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AddAirdrops(request: MsgAddAirdrops): Promise<MsgAddAirdropsResponse> {
    const data = MsgAddAirdrops.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.vesting.v1.Msg",
      "AddAirdrops",
      data
    );
    return promise.then((data) =>
      MsgAddAirdropsResponse.decode(new Reader(data))
    );
  }

  ExecuteAirdrops(
    request: MsgExecuteAirdrops
  ): Promise<MsgExecuteAirdropsResponse> {
    const data = MsgExecuteAirdrops.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.vesting.v1.Msg",
      "ExecuteAirdrops",
      data
    );
    return promise.then((data) =>
      MsgExecuteAirdropsResponse.decode(new Reader(data))
    );
  }

  SetAllocationAddress(
    request: MsgSetAllocationAddress
  ): Promise<MsgSetAllocationAddressResponse> {
    const data = MsgSetAllocationAddress.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.vesting.v1.Msg",
      "SetAllocationAddress",
      data
    );
    return promise.then((data) =>
      MsgSetAllocationAddressResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
