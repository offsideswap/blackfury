/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.oracle.v1";

/** TargetSource enumerates the quotation source of a target asset. */
export enum TargetSource {
  /** TARGET_SOURCE_UNSPECIFIED - TARGET_SOURCE_UNSPECIFIED defines an invalid/undefined target source. */
  TARGET_SOURCE_UNSPECIFIED = 0,
  /** TARGET_SOURCE_VALIDATORS - TARGET_SOURCE_VALIDATORS target quotation source is from validators. */
  TARGET_SOURCE_VALIDATORS = 1,
  /** TARGET_SOURCE_DEX - TARGET_SOURCE_DEX target quotation source is from on-chain DEX. */
  TARGET_SOURCE_DEX = 2,
  /**
   * TARGET_SOURCE_INTERCHAIN_DEX - TARGET_SOURCE_INTERCHAIN_DEX target quotation source is from inter-chain
   * DEX.
   */
  TARGET_SOURCE_INTERCHAIN_DEX = 3,
  /**
   * TARGET_SOURCE_INTERCHAIN_ORACLE - TARGET_SOURCE_INTERCHAIN_ORACLE target quotation source is from inter-chain
   * oracle.
   */
  TARGET_SOURCE_INTERCHAIN_ORACLE = 4,
  UNRECOGNIZED = -1,
}

export function targetSourceFromJSON(object: any): TargetSource {
  switch (object) {
    case 0:
    case "TARGET_SOURCE_UNSPECIFIED":
      return TargetSource.TARGET_SOURCE_UNSPECIFIED;
    case 1:
    case "TARGET_SOURCE_VALIDATORS":
      return TargetSource.TARGET_SOURCE_VALIDATORS;
    case 2:
    case "TARGET_SOURCE_DEX":
      return TargetSource.TARGET_SOURCE_DEX;
    case 3:
    case "TARGET_SOURCE_INTERCHAIN_DEX":
      return TargetSource.TARGET_SOURCE_INTERCHAIN_DEX;
    case 4:
    case "TARGET_SOURCE_INTERCHAIN_ORACLE":
      return TargetSource.TARGET_SOURCE_INTERCHAIN_ORACLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TargetSource.UNRECOGNIZED;
  }
}

export function targetSourceToJSON(object: TargetSource): string {
  switch (object) {
    case TargetSource.TARGET_SOURCE_UNSPECIFIED:
      return "TARGET_SOURCE_UNSPECIFIED";
    case TargetSource.TARGET_SOURCE_VALIDATORS:
      return "TARGET_SOURCE_VALIDATORS";
    case TargetSource.TARGET_SOURCE_DEX:
      return "TARGET_SOURCE_DEX";
    case TargetSource.TARGET_SOURCE_INTERCHAIN_DEX:
      return "TARGET_SOURCE_INTERCHAIN_DEX";
    case TargetSource.TARGET_SOURCE_INTERCHAIN_ORACLE:
      return "TARGET_SOURCE_INTERCHAIN_ORACLE";
    default:
      return "UNKNOWN";
  }
}

/** Params defines the parameters for the oracle module. */
export interface Params {
  vote_period: number;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: number;
  slash_fraction: string;
  slash_window: number;
  min_valid_per_window: string;
}

/**
 * AggregateExchangeRatePrevote represents the aggregate prevoting on the
 * ExchangeRateVote. The purpose of aggregate prevoting is to hide vote exchange
 * rates with hash which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submit_block: number;
}

/**
 * AggregateExchangeRateVote represents the voting on
 * the exchange rates of various assets denominated in uUSD.
 */
export interface AggregateExchangeRateVote {
  exchange_rate_tuples: ExchangeRateTuple[];
  voter: string;
}

/** ExchangeRateTuple stores interpreted exchange rates data. */
export interface ExchangeRateTuple {
  denom: string;
  exchange_rate: string;
}

/**
 * RegisterTargetProposal is a gov Content type to register eligible
 * target asset which will be price quoted.
 */
export interface RegisterTargetProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** target params */
  target_params: TargetParams | undefined;
}

export interface TargetParams {
  /** coin denom */
  denom: string;
  /** quotation source */
  source: TargetSource;
  /** quotation source DEX contract address */
  source_dex_contract: string;
}

const baseParams: object = {
  vote_period: 0,
  vote_threshold: "",
  reward_band: "",
  reward_distribution_window: 0,
  slash_fraction: "",
  slash_window: 0,
  min_valid_per_window: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.vote_period !== 0) {
      writer.uint32(8).uint64(message.vote_period);
    }
    if (message.vote_threshold !== "") {
      writer.uint32(18).string(message.vote_threshold);
    }
    if (message.reward_band !== "") {
      writer.uint32(26).string(message.reward_band);
    }
    if (message.reward_distribution_window !== 0) {
      writer.uint32(32).uint64(message.reward_distribution_window);
    }
    if (message.slash_fraction !== "") {
      writer.uint32(42).string(message.slash_fraction);
    }
    if (message.slash_window !== 0) {
      writer.uint32(48).uint64(message.slash_window);
    }
    if (message.min_valid_per_window !== "") {
      writer.uint32(58).string(message.min_valid_per_window);
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
          message.vote_period = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.vote_threshold = reader.string();
          break;
        case 3:
          message.reward_band = reader.string();
          break;
        case 4:
          message.reward_distribution_window = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 5:
          message.slash_fraction = reader.string();
          break;
        case 6:
          message.slash_window = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.min_valid_per_window = reader.string();
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
    if (object.vote_period !== undefined && object.vote_period !== null) {
      message.vote_period = Number(object.vote_period);
    } else {
      message.vote_period = 0;
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.vote_threshold = String(object.vote_threshold);
    } else {
      message.vote_threshold = "";
    }
    if (object.reward_band !== undefined && object.reward_band !== null) {
      message.reward_band = String(object.reward_band);
    } else {
      message.reward_band = "";
    }
    if (
      object.reward_distribution_window !== undefined &&
      object.reward_distribution_window !== null
    ) {
      message.reward_distribution_window = Number(
        object.reward_distribution_window
      );
    } else {
      message.reward_distribution_window = 0;
    }
    if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
      message.slash_fraction = String(object.slash_fraction);
    } else {
      message.slash_fraction = "";
    }
    if (object.slash_window !== undefined && object.slash_window !== null) {
      message.slash_window = Number(object.slash_window);
    } else {
      message.slash_window = 0;
    }
    if (
      object.min_valid_per_window !== undefined &&
      object.min_valid_per_window !== null
    ) {
      message.min_valid_per_window = String(object.min_valid_per_window);
    } else {
      message.min_valid_per_window = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.vote_period !== undefined &&
      (obj.vote_period = message.vote_period);
    message.vote_threshold !== undefined &&
      (obj.vote_threshold = message.vote_threshold);
    message.reward_band !== undefined &&
      (obj.reward_band = message.reward_band);
    message.reward_distribution_window !== undefined &&
      (obj.reward_distribution_window = message.reward_distribution_window);
    message.slash_fraction !== undefined &&
      (obj.slash_fraction = message.slash_fraction);
    message.slash_window !== undefined &&
      (obj.slash_window = message.slash_window);
    message.min_valid_per_window !== undefined &&
      (obj.min_valid_per_window = message.min_valid_per_window);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.vote_period !== undefined && object.vote_period !== null) {
      message.vote_period = object.vote_period;
    } else {
      message.vote_period = 0;
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.vote_threshold = object.vote_threshold;
    } else {
      message.vote_threshold = "";
    }
    if (object.reward_band !== undefined && object.reward_band !== null) {
      message.reward_band = object.reward_band;
    } else {
      message.reward_band = "";
    }
    if (
      object.reward_distribution_window !== undefined &&
      object.reward_distribution_window !== null
    ) {
      message.reward_distribution_window = object.reward_distribution_window;
    } else {
      message.reward_distribution_window = 0;
    }
    if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
      message.slash_fraction = object.slash_fraction;
    } else {
      message.slash_fraction = "";
    }
    if (object.slash_window !== undefined && object.slash_window !== null) {
      message.slash_window = object.slash_window;
    } else {
      message.slash_window = 0;
    }
    if (
      object.min_valid_per_window !== undefined &&
      object.min_valid_per_window !== null
    ) {
      message.min_valid_per_window = object.min_valid_per_window;
    } else {
      message.min_valid_per_window = "";
    }
    return message;
  },
};

const baseAggregateExchangeRatePrevote: object = {
  hash: "",
  voter: "",
  submit_block: 0,
};

export const AggregateExchangeRatePrevote = {
  encode(
    message: AggregateExchangeRatePrevote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.submit_block !== 0) {
      writer.uint32(24).uint64(message.submit_block);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AggregateExchangeRatePrevote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submit_block = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.submit_block !== undefined && object.submit_block !== null) {
      message.submit_block = Number(object.submit_block);
    } else {
      message.submit_block = 0;
    }
    return message;
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.voter !== undefined && (obj.voter = message.voter);
    message.submit_block !== undefined &&
      (obj.submit_block = message.submit_block);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AggregateExchangeRatePrevote>
  ): AggregateExchangeRatePrevote {
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.submit_block !== undefined && object.submit_block !== null) {
      message.submit_block = object.submit_block;
    } else {
      message.submit_block = 0;
    }
    return message;
  },
};

const baseAggregateExchangeRateVote: object = { voter: "" };

export const AggregateExchangeRateVote = {
  encode(
    message: AggregateExchangeRateVote,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.exchange_rate_tuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AggregateExchangeRateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchange_rate_tuples = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchange_rate_tuples.push(
            ExchangeRateTuple.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchange_rate_tuples = [];
    if (
      object.exchange_rate_tuples !== undefined &&
      object.exchange_rate_tuples !== null
    ) {
      for (const e of object.exchange_rate_tuples) {
        message.exchange_rate_tuples.push(ExchangeRateTuple.fromJSON(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    return message;
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchange_rate_tuples) {
      obj.exchange_rate_tuples = message.exchange_rate_tuples.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined
      );
    } else {
      obj.exchange_rate_tuples = [];
    }
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AggregateExchangeRateVote>
  ): AggregateExchangeRateVote {
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchange_rate_tuples = [];
    if (
      object.exchange_rate_tuples !== undefined &&
      object.exchange_rate_tuples !== null
    ) {
      for (const e of object.exchange_rate_tuples) {
        message.exchange_rate_tuples.push(ExchangeRateTuple.fromPartial(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    return message;
  },
};

const baseExchangeRateTuple: object = { denom: "", exchange_rate: "" };

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: Writer = Writer.create()): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchange_rate !== "") {
      writer.uint32(18).string(message.exchange_rate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchange_rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchange_rate = String(object.exchange_rate);
    } else {
      message.exchange_rate = "";
    }
    return message;
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exchange_rate !== undefined &&
      (obj.exchange_rate = message.exchange_rate);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchange_rate = object.exchange_rate;
    } else {
      message.exchange_rate = "";
    }
    return message;
  },
};

const baseRegisterTargetProposal: object = { title: "", description: "" };

export const RegisterTargetProposal = {
  encode(
    message: RegisterTargetProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.target_params !== undefined) {
      TargetParams.encode(
        message.target_params,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterTargetProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterTargetProposal } as RegisterTargetProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.target_params = TargetParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterTargetProposal {
    const message = { ...baseRegisterTargetProposal } as RegisterTargetProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.target_params !== undefined && object.target_params !== null) {
      message.target_params = TargetParams.fromJSON(object.target_params);
    } else {
      message.target_params = undefined;
    }
    return message;
  },

  toJSON(message: RegisterTargetProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.target_params !== undefined &&
      (obj.target_params = message.target_params
        ? TargetParams.toJSON(message.target_params)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterTargetProposal>
  ): RegisterTargetProposal {
    const message = { ...baseRegisterTargetProposal } as RegisterTargetProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.target_params !== undefined && object.target_params !== null) {
      message.target_params = TargetParams.fromPartial(object.target_params);
    } else {
      message.target_params = undefined;
    }
    return message;
  },
};

const baseTargetParams: object = {
  denom: "",
  source: 0,
  source_dex_contract: "",
};

export const TargetParams = {
  encode(message: TargetParams, writer: Writer = Writer.create()): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.source !== 0) {
      writer.uint32(16).int32(message.source);
    }
    if (message.source_dex_contract !== "") {
      writer.uint32(26).string(message.source_dex_contract);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TargetParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetParams } as TargetParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.source = reader.int32() as any;
          break;
        case 3:
          message.source_dex_contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetParams {
    const message = { ...baseTargetParams } as TargetParams;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = targetSourceFromJSON(object.source);
    } else {
      message.source = 0;
    }
    if (
      object.source_dex_contract !== undefined &&
      object.source_dex_contract !== null
    ) {
      message.source_dex_contract = String(object.source_dex_contract);
    } else {
      message.source_dex_contract = "";
    }
    return message;
  },

  toJSON(message: TargetParams): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.source !== undefined &&
      (obj.source = targetSourceToJSON(message.source));
    message.source_dex_contract !== undefined &&
      (obj.source_dex_contract = message.source_dex_contract);
    return obj;
  },

  fromPartial(object: DeepPartial<TargetParams>): TargetParams {
    const message = { ...baseTargetParams } as TargetParams;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    if (
      object.source_dex_contract !== undefined &&
      object.source_dex_contract !== null
    ) {
      message.source_dex_contract = object.source_dex_contract;
    } else {
      message.source_dex_contract = "";
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
