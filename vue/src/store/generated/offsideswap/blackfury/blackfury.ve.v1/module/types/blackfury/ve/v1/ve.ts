/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.ve.v1";

/** LockedBalance represents locked amount and unlock time of a ve. */
export interface LockedBalance {
  /** locked amount */
  amount: string;
  /** unlocking unix time */
  end: number;
}

/** Checkpoint defines a checkpoint of voting power. */
export interface Checkpoint {
  /** voting power at checkpoint */
  bias: string;
  /**
   * weight decay slope
   * so voting power at time t: bias - slope * (t - timestamp)
   */
  slope: string;
  /** unix timestamp at checkpoint */
  timestamp: number;
  /** block height at checkpoint */
  block: number;
}

const baseLockedBalance: object = { amount: "", end: 0 };

export const LockedBalance = {
  encode(message: LockedBalance, writer: Writer = Writer.create()): Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.end !== 0) {
      writer.uint32(16).uint64(message.end);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LockedBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockedBalance } as LockedBalance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedBalance {
    const message = { ...baseLockedBalance } as LockedBalance;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Number(object.end);
    } else {
      message.end = 0;
    }
    return message;
  },

  toJSON(message: LockedBalance): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedBalance>): LockedBalance {
    const message = { ...baseLockedBalance } as LockedBalance;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = 0;
    }
    return message;
  },
};

const baseCheckpoint: object = { bias: "", slope: "", timestamp: 0, block: 0 };

export const Checkpoint = {
  encode(message: Checkpoint, writer: Writer = Writer.create()): Writer {
    if (message.bias !== "") {
      writer.uint32(10).string(message.bias);
    }
    if (message.slope !== "") {
      writer.uint32(18).string(message.slope);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint64(message.timestamp);
    }
    if (message.block !== 0) {
      writer.uint32(32).int64(message.block);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Checkpoint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCheckpoint } as Checkpoint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bias = reader.string();
          break;
        case 2:
          message.slope = reader.string();
          break;
        case 3:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.block = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Checkpoint {
    const message = { ...baseCheckpoint } as Checkpoint;
    if (object.bias !== undefined && object.bias !== null) {
      message.bias = String(object.bias);
    } else {
      message.bias = "";
    }
    if (object.slope !== undefined && object.slope !== null) {
      message.slope = String(object.slope);
    } else {
      message.slope = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Number(object.block);
    } else {
      message.block = 0;
    }
    return message;
  },

  toJSON(message: Checkpoint): unknown {
    const obj: any = {};
    message.bias !== undefined && (obj.bias = message.bias);
    message.slope !== undefined && (obj.slope = message.slope);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.block !== undefined && (obj.block = message.block);
    return obj;
  },

  fromPartial(object: DeepPartial<Checkpoint>): Checkpoint {
    const message = { ...baseCheckpoint } as Checkpoint;
    if (object.bias !== undefined && object.bias !== null) {
      message.bias = object.bias;
    } else {
      message.bias = "";
    }
    if (object.slope !== undefined && object.slope !== null) {
      message.slope = object.slope;
    } else {
      message.slope = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = object.block;
    } else {
      message.block = 0;
    }
    return message;
  },
};

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
