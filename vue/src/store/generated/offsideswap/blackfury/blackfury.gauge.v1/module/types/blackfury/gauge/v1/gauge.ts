/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.gauge.v1";

export interface Checkpoint {
  /** unix timestamp */
  timestamp: number;
  amount: string;
}

export interface Reward {
  /** reward coin denom */
  denom: string;
  /** reward amount per second */
  rate: string;
  /** reward finish unix time */
  finish_time: number;
  /** unix time of last reward update */
  last_update_time: number;
  /** cumulative reward per voting ticket */
  cumulative_per_ticket: string;
  /** accrued reward amount which has not been used for distributing rateably */
  accrued_amount: string;
}

export interface UserReward {
  /** reward coin denom */
  denom: string;
  /** ve id */
  ve_id: number;
  /** last claim unix time */
  last_claim_time: number;
  /** cumulative reward per voting ticket */
  cumulative_per_ticket: string;
}

const baseCheckpoint: object = { timestamp: 0, amount: "" };

export const Checkpoint = {
  encode(message: Checkpoint, writer: Writer = Writer.create()): Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
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
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.amount = reader.string();
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: Checkpoint): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<Checkpoint>): Checkpoint {
    const message = { ...baseCheckpoint } as Checkpoint;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseReward: object = {
  denom: "",
  rate: "",
  finish_time: 0,
  last_update_time: 0,
  cumulative_per_ticket: "",
  accrued_amount: "",
};

export const Reward = {
  encode(message: Reward, writer: Writer = Writer.create()): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (message.finish_time !== 0) {
      writer.uint32(24).uint64(message.finish_time);
    }
    if (message.last_update_time !== 0) {
      writer.uint32(32).uint64(message.last_update_time);
    }
    if (message.cumulative_per_ticket !== "") {
      writer.uint32(42).string(message.cumulative_per_ticket);
    }
    if (message.accrued_amount !== "") {
      writer.uint32(50).string(message.accrued_amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Reward {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReward } as Reward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rate = reader.string();
          break;
        case 3:
          message.finish_time = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.last_update_time = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.cumulative_per_ticket = reader.string();
          break;
        case 6:
          message.accrued_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Reward {
    const message = { ...baseReward } as Reward;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = String(object.rate);
    } else {
      message.rate = "";
    }
    if (object.finish_time !== undefined && object.finish_time !== null) {
      message.finish_time = Number(object.finish_time);
    } else {
      message.finish_time = 0;
    }
    if (
      object.last_update_time !== undefined &&
      object.last_update_time !== null
    ) {
      message.last_update_time = Number(object.last_update_time);
    } else {
      message.last_update_time = 0;
    }
    if (
      object.cumulative_per_ticket !== undefined &&
      object.cumulative_per_ticket !== null
    ) {
      message.cumulative_per_ticket = String(object.cumulative_per_ticket);
    } else {
      message.cumulative_per_ticket = "";
    }
    if (object.accrued_amount !== undefined && object.accrued_amount !== null) {
      message.accrued_amount = String(object.accrued_amount);
    } else {
      message.accrued_amount = "";
    }
    return message;
  },

  toJSON(message: Reward): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rate !== undefined && (obj.rate = message.rate);
    message.finish_time !== undefined &&
      (obj.finish_time = message.finish_time);
    message.last_update_time !== undefined &&
      (obj.last_update_time = message.last_update_time);
    message.cumulative_per_ticket !== undefined &&
      (obj.cumulative_per_ticket = message.cumulative_per_ticket);
    message.accrued_amount !== undefined &&
      (obj.accrued_amount = message.accrued_amount);
    return obj;
  },

  fromPartial(object: DeepPartial<Reward>): Reward {
    const message = { ...baseReward } as Reward;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    } else {
      message.rate = "";
    }
    if (object.finish_time !== undefined && object.finish_time !== null) {
      message.finish_time = object.finish_time;
    } else {
      message.finish_time = 0;
    }
    if (
      object.last_update_time !== undefined &&
      object.last_update_time !== null
    ) {
      message.last_update_time = object.last_update_time;
    } else {
      message.last_update_time = 0;
    }
    if (
      object.cumulative_per_ticket !== undefined &&
      object.cumulative_per_ticket !== null
    ) {
      message.cumulative_per_ticket = object.cumulative_per_ticket;
    } else {
      message.cumulative_per_ticket = "";
    }
    if (object.accrued_amount !== undefined && object.accrued_amount !== null) {
      message.accrued_amount = object.accrued_amount;
    } else {
      message.accrued_amount = "";
    }
    return message;
  },
};

const baseUserReward: object = {
  denom: "",
  ve_id: 0,
  last_claim_time: 0,
  cumulative_per_ticket: "",
};

export const UserReward = {
  encode(message: UserReward, writer: Writer = Writer.create()): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.ve_id !== 0) {
      writer.uint32(16).uint64(message.ve_id);
    }
    if (message.last_claim_time !== 0) {
      writer.uint32(24).uint64(message.last_claim_time);
    }
    if (message.cumulative_per_ticket !== "") {
      writer.uint32(34).string(message.cumulative_per_ticket);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserReward {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserReward } as UserReward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.ve_id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.last_claim_time = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.cumulative_per_ticket = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserReward {
    const message = { ...baseUserReward } as UserReward;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = Number(object.ve_id);
    } else {
      message.ve_id = 0;
    }
    if (
      object.last_claim_time !== undefined &&
      object.last_claim_time !== null
    ) {
      message.last_claim_time = Number(object.last_claim_time);
    } else {
      message.last_claim_time = 0;
    }
    if (
      object.cumulative_per_ticket !== undefined &&
      object.cumulative_per_ticket !== null
    ) {
      message.cumulative_per_ticket = String(object.cumulative_per_ticket);
    } else {
      message.cumulative_per_ticket = "";
    }
    return message;
  },

  toJSON(message: UserReward): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.last_claim_time !== undefined &&
      (obj.last_claim_time = message.last_claim_time);
    message.cumulative_per_ticket !== undefined &&
      (obj.cumulative_per_ticket = message.cumulative_per_ticket);
    return obj;
  },

  fromPartial(object: DeepPartial<UserReward>): UserReward {
    const message = { ...baseUserReward } as UserReward;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = 0;
    }
    if (
      object.last_claim_time !== undefined &&
      object.last_claim_time !== null
    ) {
      message.last_claim_time = object.last_claim_time;
    } else {
      message.last_claim_time = 0;
    }
    if (
      object.cumulative_per_ticket !== undefined &&
      object.cumulative_per_ticket !== null
    ) {
      message.cumulative_per_ticket = object.cumulative_per_ticket;
    } else {
      message.cumulative_per_ticket = "";
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
