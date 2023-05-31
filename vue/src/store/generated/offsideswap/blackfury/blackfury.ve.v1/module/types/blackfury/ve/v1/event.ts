/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.ve.v1";

export interface EventCreate {
  sender: string;
  receiver: string;
  ve_id: string;
  amount: Coin | undefined;
  unlock_time: number;
}

export interface EventDeposit {
  sender: string;
  ve_id: string;
  amount: Coin | undefined;
}

export interface EventExtendTime {
  sender: string;
  ve_id: string;
  unlock_time: number;
}

export interface EventMerge {
  sender: string;
  from_ve_id: string;
  to_ve_id: string;
}

export interface EventWithdraw {
  sender: string;
  ve_id: string;
}

const baseEventCreate: object = {
  sender: "",
  receiver: "",
  ve_id: "",
  unlock_time: 0,
};

export const EventCreate = {
  encode(message: EventCreate, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.ve_id !== "") {
      writer.uint32(26).string(message.ve_id);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.unlock_time !== 0) {
      writer.uint32(40).uint64(message.unlock_time);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreate } as EventCreate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.ve_id = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.unlock_time = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreate {
    const message = { ...baseEventCreate } as EventCreate;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
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
    if (object.unlock_time !== undefined && object.unlock_time !== null) {
      message.unlock_time = Number(object.unlock_time);
    } else {
      message.unlock_time = 0;
    }
    return message;
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.unlock_time !== undefined &&
      (obj.unlock_time = message.unlock_time);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = { ...baseEventCreate } as EventCreate;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
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
    if (object.unlock_time !== undefined && object.unlock_time !== null) {
      message.unlock_time = object.unlock_time;
    } else {
      message.unlock_time = 0;
    }
    return message;
  },
};

const baseEventDeposit: object = { sender: "", ve_id: "" };

export const EventDeposit = {
  encode(message: EventDeposit, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ve_id !== "") {
      writer.uint32(18).string(message.ve_id);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDeposit } as EventDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ve_id = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeposit {
    const message = { ...baseEventDeposit } as EventDeposit;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
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

  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeposit>): EventDeposit {
    const message = { ...baseEventDeposit } as EventDeposit;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
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

const baseEventExtendTime: object = { sender: "", ve_id: "", unlock_time: 0 };

export const EventExtendTime = {
  encode(message: EventExtendTime, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ve_id !== "") {
      writer.uint32(18).string(message.ve_id);
    }
    if (message.unlock_time !== 0) {
      writer.uint32(24).uint64(message.unlock_time);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventExtendTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExtendTime } as EventExtendTime;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ve_id = reader.string();
          break;
        case 3:
          message.unlock_time = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExtendTime {
    const message = { ...baseEventExtendTime } as EventExtendTime;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = String(object.ve_id);
    } else {
      message.ve_id = "";
    }
    if (object.unlock_time !== undefined && object.unlock_time !== null) {
      message.unlock_time = Number(object.unlock_time);
    } else {
      message.unlock_time = 0;
    }
    return message;
  },

  toJSON(message: EventExtendTime): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.unlock_time !== undefined &&
      (obj.unlock_time = message.unlock_time);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExtendTime>): EventExtendTime {
    const message = { ...baseEventExtendTime } as EventExtendTime;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = "";
    }
    if (object.unlock_time !== undefined && object.unlock_time !== null) {
      message.unlock_time = object.unlock_time;
    } else {
      message.unlock_time = 0;
    }
    return message;
  },
};

const baseEventMerge: object = { sender: "", from_ve_id: "", to_ve_id: "" };

export const EventMerge = {
  encode(message: EventMerge, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.from_ve_id !== "") {
      writer.uint32(18).string(message.from_ve_id);
    }
    if (message.to_ve_id !== "") {
      writer.uint32(26).string(message.to_ve_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventMerge {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventMerge } as EventMerge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.from_ve_id = reader.string();
          break;
        case 3:
          message.to_ve_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMerge {
    const message = { ...baseEventMerge } as EventMerge;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.from_ve_id !== undefined && object.from_ve_id !== null) {
      message.from_ve_id = String(object.from_ve_id);
    } else {
      message.from_ve_id = "";
    }
    if (object.to_ve_id !== undefined && object.to_ve_id !== null) {
      message.to_ve_id = String(object.to_ve_id);
    } else {
      message.to_ve_id = "";
    }
    return message;
  },

  toJSON(message: EventMerge): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.from_ve_id !== undefined && (obj.from_ve_id = message.from_ve_id);
    message.to_ve_id !== undefined && (obj.to_ve_id = message.to_ve_id);
    return obj;
  },

  fromPartial(object: DeepPartial<EventMerge>): EventMerge {
    const message = { ...baseEventMerge } as EventMerge;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.from_ve_id !== undefined && object.from_ve_id !== null) {
      message.from_ve_id = object.from_ve_id;
    } else {
      message.from_ve_id = "";
    }
    if (object.to_ve_id !== undefined && object.to_ve_id !== null) {
      message.to_ve_id = object.to_ve_id;
    } else {
      message.to_ve_id = "";
    }
    return message;
  },
};

const baseEventWithdraw: object = { sender: "", ve_id: "" };

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ve_id !== "") {
      writer.uint32(18).string(message.ve_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventWithdraw } as EventWithdraw;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ve_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdraw {
    const message = { ...baseEventWithdraw } as EventWithdraw;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = String(object.ve_id);
    } else {
      message.ve_id = "";
    }
    return message;
  },

  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    return obj;
  },

  fromPartial(object: DeepPartial<EventWithdraw>): EventWithdraw {
    const message = { ...baseEventWithdraw } as EventWithdraw;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = "";
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
