/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.maker.v1";

/** GenesisState defines the maker module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  backing_ratio: string;
}

/** Params defines the parameters for the maker module. */
export interface Params {
  /** step of adjusting backing ratio */
  backing_ratio_step: string;
  /** price band for adjusting backing ratio */
  backing_ratio_price_band: string;
  /** cooldown period for adjusting backing ratio */
  backing_ratio_cooldown_period: number;
  /** mint Black price bias ratio */
  mint_price_bias: string;
  /** burn Black price bias ratio */
  burn_price_bias: string;
  /** reback bonus ratio */
  reback_bonus: string;
  /** liquidation commission fee ratio */
  liquidation_commission_fee: string;
}

const baseGenesisState: object = { backing_ratio: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing_ratio !== "") {
      writer.uint32(18).string(message.backing_ratio);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing_ratio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.backing_ratio !== undefined && object.backing_ratio !== null) {
      message.backing_ratio = String(object.backing_ratio);
    } else {
      message.backing_ratio = "";
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.backing_ratio !== undefined &&
      (obj.backing_ratio = message.backing_ratio);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.backing_ratio !== undefined && object.backing_ratio !== null) {
      message.backing_ratio = object.backing_ratio;
    } else {
      message.backing_ratio = "";
    }
    return message;
  },
};

const baseParams: object = {
  backing_ratio_step: "",
  backing_ratio_price_band: "",
  backing_ratio_cooldown_period: 0,
  mint_price_bias: "",
  burn_price_bias: "",
  reback_bonus: "",
  liquidation_commission_fee: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.backing_ratio_step !== "") {
      writer.uint32(10).string(message.backing_ratio_step);
    }
    if (message.backing_ratio_price_band !== "") {
      writer.uint32(18).string(message.backing_ratio_price_band);
    }
    if (message.backing_ratio_cooldown_period !== 0) {
      writer.uint32(24).int64(message.backing_ratio_cooldown_period);
    }
    if (message.mint_price_bias !== "") {
      writer.uint32(34).string(message.mint_price_bias);
    }
    if (message.burn_price_bias !== "") {
      writer.uint32(42).string(message.burn_price_bias);
    }
    if (message.reback_bonus !== "") {
      writer.uint32(50).string(message.reback_bonus);
    }
    if (message.liquidation_commission_fee !== "") {
      writer.uint32(58).string(message.liquidation_commission_fee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_ratio_step = reader.string();
          break;
        case 2:
          message.backing_ratio_price_band = reader.string();
          break;
        case 3:
          message.backing_ratio_cooldown_period = longToNumber(
            reader.int64() as Long
          );
          break;
        case 4:
          message.mint_price_bias = reader.string();
          break;
        case 5:
          message.burn_price_bias = reader.string();
          break;
        case 6:
          message.reback_bonus = reader.string();
          break;
        case 7:
          message.liquidation_commission_fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.backing_ratio_step !== undefined &&
      object.backing_ratio_step !== null
    ) {
      message.backing_ratio_step = String(object.backing_ratio_step);
    } else {
      message.backing_ratio_step = "";
    }
    if (
      object.backing_ratio_price_band !== undefined &&
      object.backing_ratio_price_band !== null
    ) {
      message.backing_ratio_price_band = String(
        object.backing_ratio_price_band
      );
    } else {
      message.backing_ratio_price_band = "";
    }
    if (
      object.backing_ratio_cooldown_period !== undefined &&
      object.backing_ratio_cooldown_period !== null
    ) {
      message.backing_ratio_cooldown_period = Number(
        object.backing_ratio_cooldown_period
      );
    } else {
      message.backing_ratio_cooldown_period = 0;
    }
    if (
      object.mint_price_bias !== undefined &&
      object.mint_price_bias !== null
    ) {
      message.mint_price_bias = String(object.mint_price_bias);
    } else {
      message.mint_price_bias = "";
    }
    if (
      object.burn_price_bias !== undefined &&
      object.burn_price_bias !== null
    ) {
      message.burn_price_bias = String(object.burn_price_bias);
    } else {
      message.burn_price_bias = "";
    }
    if (object.reback_bonus !== undefined && object.reback_bonus !== null) {
      message.reback_bonus = String(object.reback_bonus);
    } else {
      message.reback_bonus = "";
    }
    if (
      object.liquidation_commission_fee !== undefined &&
      object.liquidation_commission_fee !== null
    ) {
      message.liquidation_commission_fee = String(
        object.liquidation_commission_fee
      );
    } else {
      message.liquidation_commission_fee = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.backing_ratio_step !== undefined &&
      (obj.backing_ratio_step = message.backing_ratio_step);
    message.backing_ratio_price_band !== undefined &&
      (obj.backing_ratio_price_band = message.backing_ratio_price_band);
    message.backing_ratio_cooldown_period !== undefined &&
      (obj.backing_ratio_cooldown_period =
        message.backing_ratio_cooldown_period);
    message.mint_price_bias !== undefined &&
      (obj.mint_price_bias = message.mint_price_bias);
    message.burn_price_bias !== undefined &&
      (obj.burn_price_bias = message.burn_price_bias);
    message.reback_bonus !== undefined &&
      (obj.reback_bonus = message.reback_bonus);
    message.liquidation_commission_fee !== undefined &&
      (obj.liquidation_commission_fee = message.liquidation_commission_fee);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.backing_ratio_step !== undefined &&
      object.backing_ratio_step !== null
    ) {
      message.backing_ratio_step = object.backing_ratio_step;
    } else {
      message.backing_ratio_step = "";
    }
    if (
      object.backing_ratio_price_band !== undefined &&
      object.backing_ratio_price_band !== null
    ) {
      message.backing_ratio_price_band = object.backing_ratio_price_band;
    } else {
      message.backing_ratio_price_band = "";
    }
    if (
      object.backing_ratio_cooldown_period !== undefined &&
      object.backing_ratio_cooldown_period !== null
    ) {
      message.backing_ratio_cooldown_period =
        object.backing_ratio_cooldown_period;
    } else {
      message.backing_ratio_cooldown_period = 0;
    }
    if (
      object.mint_price_bias !== undefined &&
      object.mint_price_bias !== null
    ) {
      message.mint_price_bias = object.mint_price_bias;
    } else {
      message.mint_price_bias = "";
    }
    if (
      object.burn_price_bias !== undefined &&
      object.burn_price_bias !== null
    ) {
      message.burn_price_bias = object.burn_price_bias;
    } else {
      message.burn_price_bias = "";
    }
    if (object.reback_bonus !== undefined && object.reback_bonus !== null) {
      message.reback_bonus = object.reback_bonus;
    } else {
      message.reback_bonus = "";
    }
    if (
      object.liquidation_commission_fee !== undefined &&
      object.liquidation_commission_fee !== null
    ) {
      message.liquidation_commission_fee = object.liquidation_commission_fee;
    } else {
      message.liquidation_commission_fee = "";
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
