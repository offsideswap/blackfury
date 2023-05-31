/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.staking.v1";

export interface VeValidator {
  operator_address: string;
  ve_delegator_shares: string;
}

export interface VeDelegation {
  delegator_address: string;
  validator_address: string;
  ve_shares: VeShares[];
}

export interface VeShares {
  ve_id: number;
  tokens_may_unsettled: string;
  shares: string;
}

export interface VeUnbondingDelegation {
  delegator_address: string;
  validator_address: string;
  entries: VeUnbondingDelegationEntry[];
}

export interface VeUnbondingDelegationEntry {
  ve_balances: VeUnbondingDelegationEntryBalances[];
}

export interface VeUnbondingDelegationEntryBalances {
  ve_id: number;
  initial_balance: string;
  balance: string;
}

export interface VeRedelegation {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  entries: VeRedelegationEntry[];
}

export interface VeRedelegationEntry {
  ve_shares: VeRedelegationEntryShares[];
}

export interface VeRedelegationEntryShares {
  ve_id: number;
  initial_balance: string;
  shares_dst: string;
}

export interface VeTokens {
  ve_id: number;
  tokens: string;
}

const baseVeValidator: object = {
  operator_address: "",
  ve_delegator_shares: "",
};

export const VeValidator = {
  encode(message: VeValidator, writer: Writer = Writer.create()): Writer {
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }
    if (message.ve_delegator_shares !== "") {
      writer.uint32(18).string(message.ve_delegator_shares);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeValidator } as VeValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;
        case 2:
          message.ve_delegator_shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeValidator {
    const message = { ...baseVeValidator } as VeValidator;
    if (
      object.operator_address !== undefined &&
      object.operator_address !== null
    ) {
      message.operator_address = String(object.operator_address);
    } else {
      message.operator_address = "";
    }
    if (
      object.ve_delegator_shares !== undefined &&
      object.ve_delegator_shares !== null
    ) {
      message.ve_delegator_shares = String(object.ve_delegator_shares);
    } else {
      message.ve_delegator_shares = "";
    }
    return message;
  },

  toJSON(message: VeValidator): unknown {
    const obj: any = {};
    message.operator_address !== undefined &&
      (obj.operator_address = message.operator_address);
    message.ve_delegator_shares !== undefined &&
      (obj.ve_delegator_shares = message.ve_delegator_shares);
    return obj;
  },

  fromPartial(object: DeepPartial<VeValidator>): VeValidator {
    const message = { ...baseVeValidator } as VeValidator;
    if (
      object.operator_address !== undefined &&
      object.operator_address !== null
    ) {
      message.operator_address = object.operator_address;
    } else {
      message.operator_address = "";
    }
    if (
      object.ve_delegator_shares !== undefined &&
      object.ve_delegator_shares !== null
    ) {
      message.ve_delegator_shares = object.ve_delegator_shares;
    } else {
      message.ve_delegator_shares = "";
    }
    return message;
  },
};

const baseVeDelegation: object = {
  delegator_address: "",
  validator_address: "",
};

export const VeDelegation = {
  encode(message: VeDelegation, writer: Writer = Writer.create()): Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    for (const v of message.ve_shares) {
      VeShares.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeDelegation } as VeDelegation;
    message.ve_shares = [];
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
          message.ve_shares.push(VeShares.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeDelegation {
    const message = { ...baseVeDelegation } as VeDelegation;
    message.ve_shares = [];
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
    if (object.ve_shares !== undefined && object.ve_shares !== null) {
      for (const e of object.ve_shares) {
        message.ve_shares.push(VeShares.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeDelegation): unknown {
    const obj: any = {};
    message.delegator_address !== undefined &&
      (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined &&
      (obj.validator_address = message.validator_address);
    if (message.ve_shares) {
      obj.ve_shares = message.ve_shares.map((e) =>
        e ? VeShares.toJSON(e) : undefined
      );
    } else {
      obj.ve_shares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VeDelegation>): VeDelegation {
    const message = { ...baseVeDelegation } as VeDelegation;
    message.ve_shares = [];
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
    if (object.ve_shares !== undefined && object.ve_shares !== null) {
      for (const e of object.ve_shares) {
        message.ve_shares.push(VeShares.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeShares: object = { ve_id: 0, tokens_may_unsettled: "", shares: "" };

export const VeShares = {
  encode(message: VeShares, writer: Writer = Writer.create()): Writer {
    if (message.ve_id !== 0) {
      writer.uint32(8).uint64(message.ve_id);
    }
    if (message.tokens_may_unsettled !== "") {
      writer.uint32(18).string(message.tokens_may_unsettled);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeShares {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeShares } as VeShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ve_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokens_may_unsettled = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeShares {
    const message = { ...baseVeShares } as VeShares;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = Number(object.ve_id);
    } else {
      message.ve_id = 0;
    }
    if (
      object.tokens_may_unsettled !== undefined &&
      object.tokens_may_unsettled !== null
    ) {
      message.tokens_may_unsettled = String(object.tokens_may_unsettled);
    } else {
      message.tokens_may_unsettled = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = String(object.shares);
    } else {
      message.shares = "";
    }
    return message;
  },

  toJSON(message: VeShares): unknown {
    const obj: any = {};
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.tokens_may_unsettled !== undefined &&
      (obj.tokens_may_unsettled = message.tokens_may_unsettled);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },

  fromPartial(object: DeepPartial<VeShares>): VeShares {
    const message = { ...baseVeShares } as VeShares;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = 0;
    }
    if (
      object.tokens_may_unsettled !== undefined &&
      object.tokens_may_unsettled !== null
    ) {
      message.tokens_may_unsettled = object.tokens_may_unsettled;
    } else {
      message.tokens_may_unsettled = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    } else {
      message.shares = "";
    }
    return message;
  },
};

const baseVeUnbondingDelegation: object = {
  delegator_address: "",
  validator_address: "",
};

export const VeUnbondingDelegation = {
  encode(
    message: VeUnbondingDelegation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    for (const v of message.entries) {
      VeUnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeUnbondingDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeUnbondingDelegation } as VeUnbondingDelegation;
    message.entries = [];
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
          message.entries.push(
            VeUnbondingDelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegation {
    const message = { ...baseVeUnbondingDelegation } as VeUnbondingDelegation;
    message.entries = [];
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
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeUnbondingDelegationEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeUnbondingDelegation): unknown {
    const obj: any = {};
    message.delegator_address !== undefined &&
      (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined &&
      (obj.validator_address = message.validator_address);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? VeUnbondingDelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeUnbondingDelegation>
  ): VeUnbondingDelegation {
    const message = { ...baseVeUnbondingDelegation } as VeUnbondingDelegation;
    message.entries = [];
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
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeUnbondingDelegationEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeUnbondingDelegationEntry: object = {};

export const VeUnbondingDelegationEntry = {
  encode(
    message: VeUnbondingDelegationEntry,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ve_balances) {
      VeUnbondingDelegationEntryBalances.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VeUnbondingDelegationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVeUnbondingDelegationEntry,
    } as VeUnbondingDelegationEntry;
    message.ve_balances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ve_balances.push(
            VeUnbondingDelegationEntryBalances.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegationEntry {
    const message = {
      ...baseVeUnbondingDelegationEntry,
    } as VeUnbondingDelegationEntry;
    message.ve_balances = [];
    if (object.ve_balances !== undefined && object.ve_balances !== null) {
      for (const e of object.ve_balances) {
        message.ve_balances.push(
          VeUnbondingDelegationEntryBalances.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: VeUnbondingDelegationEntry): unknown {
    const obj: any = {};
    if (message.ve_balances) {
      obj.ve_balances = message.ve_balances.map((e) =>
        e ? VeUnbondingDelegationEntryBalances.toJSON(e) : undefined
      );
    } else {
      obj.ve_balances = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeUnbondingDelegationEntry>
  ): VeUnbondingDelegationEntry {
    const message = {
      ...baseVeUnbondingDelegationEntry,
    } as VeUnbondingDelegationEntry;
    message.ve_balances = [];
    if (object.ve_balances !== undefined && object.ve_balances !== null) {
      for (const e of object.ve_balances) {
        message.ve_balances.push(
          VeUnbondingDelegationEntryBalances.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseVeUnbondingDelegationEntryBalances: object = {
  ve_id: 0,
  initial_balance: "",
  balance: "",
};

export const VeUnbondingDelegationEntryBalances = {
  encode(
    message: VeUnbondingDelegationEntryBalances,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ve_id !== 0) {
      writer.uint32(8).uint64(message.ve_id);
    }
    if (message.initial_balance !== "") {
      writer.uint32(18).string(message.initial_balance);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VeUnbondingDelegationEntryBalances {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVeUnbondingDelegationEntryBalances,
    } as VeUnbondingDelegationEntryBalances;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ve_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.initial_balance = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegationEntryBalances {
    const message = {
      ...baseVeUnbondingDelegationEntryBalances,
    } as VeUnbondingDelegationEntryBalances;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = Number(object.ve_id);
    } else {
      message.ve_id = 0;
    }
    if (
      object.initial_balance !== undefined &&
      object.initial_balance !== null
    ) {
      message.initial_balance = String(object.initial_balance);
    } else {
      message.initial_balance = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    return message;
  },

  toJSON(message: VeUnbondingDelegationEntryBalances): unknown {
    const obj: any = {};
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.initial_balance !== undefined &&
      (obj.initial_balance = message.initial_balance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeUnbondingDelegationEntryBalances>
  ): VeUnbondingDelegationEntryBalances {
    const message = {
      ...baseVeUnbondingDelegationEntryBalances,
    } as VeUnbondingDelegationEntryBalances;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = 0;
    }
    if (
      object.initial_balance !== undefined &&
      object.initial_balance !== null
    ) {
      message.initial_balance = object.initial_balance;
    } else {
      message.initial_balance = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    return message;
  },
};

const baseVeRedelegation: object = {
  delegator_address: "",
  validator_src_address: "",
  validator_dst_address: "",
};

export const VeRedelegation = {
  encode(message: VeRedelegation, writer: Writer = Writer.create()): Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    for (const v of message.entries) {
      VeRedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeRedelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeRedelegation } as VeRedelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
          break;
        case 4:
          message.entries.push(
            VeRedelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegation {
    const message = { ...baseVeRedelegation } as VeRedelegation;
    message.entries = [];
    if (
      object.delegator_address !== undefined &&
      object.delegator_address !== null
    ) {
      message.delegator_address = String(object.delegator_address);
    } else {
      message.delegator_address = "";
    }
    if (
      object.validator_src_address !== undefined &&
      object.validator_src_address !== null
    ) {
      message.validator_src_address = String(object.validator_src_address);
    } else {
      message.validator_src_address = "";
    }
    if (
      object.validator_dst_address !== undefined &&
      object.validator_dst_address !== null
    ) {
      message.validator_dst_address = String(object.validator_dst_address);
    } else {
      message.validator_dst_address = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeRedelegationEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeRedelegation): unknown {
    const obj: any = {};
    message.delegator_address !== undefined &&
      (obj.delegator_address = message.delegator_address);
    message.validator_src_address !== undefined &&
      (obj.validator_src_address = message.validator_src_address);
    message.validator_dst_address !== undefined &&
      (obj.validator_dst_address = message.validator_dst_address);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? VeRedelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VeRedelegation>): VeRedelegation {
    const message = { ...baseVeRedelegation } as VeRedelegation;
    message.entries = [];
    if (
      object.delegator_address !== undefined &&
      object.delegator_address !== null
    ) {
      message.delegator_address = object.delegator_address;
    } else {
      message.delegator_address = "";
    }
    if (
      object.validator_src_address !== undefined &&
      object.validator_src_address !== null
    ) {
      message.validator_src_address = object.validator_src_address;
    } else {
      message.validator_src_address = "";
    }
    if (
      object.validator_dst_address !== undefined &&
      object.validator_dst_address !== null
    ) {
      message.validator_dst_address = object.validator_dst_address;
    } else {
      message.validator_dst_address = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeRedelegationEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeRedelegationEntry: object = {};

export const VeRedelegationEntry = {
  encode(
    message: VeRedelegationEntry,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ve_shares) {
      VeRedelegationEntryShares.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeRedelegationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeRedelegationEntry } as VeRedelegationEntry;
    message.ve_shares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ve_shares.push(
            VeRedelegationEntryShares.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegationEntry {
    const message = { ...baseVeRedelegationEntry } as VeRedelegationEntry;
    message.ve_shares = [];
    if (object.ve_shares !== undefined && object.ve_shares !== null) {
      for (const e of object.ve_shares) {
        message.ve_shares.push(VeRedelegationEntryShares.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeRedelegationEntry): unknown {
    const obj: any = {};
    if (message.ve_shares) {
      obj.ve_shares = message.ve_shares.map((e) =>
        e ? VeRedelegationEntryShares.toJSON(e) : undefined
      );
    } else {
      obj.ve_shares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VeRedelegationEntry>): VeRedelegationEntry {
    const message = { ...baseVeRedelegationEntry } as VeRedelegationEntry;
    message.ve_shares = [];
    if (object.ve_shares !== undefined && object.ve_shares !== null) {
      for (const e of object.ve_shares) {
        message.ve_shares.push(VeRedelegationEntryShares.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeRedelegationEntryShares: object = {
  ve_id: 0,
  initial_balance: "",
  shares_dst: "",
};

export const VeRedelegationEntryShares = {
  encode(
    message: VeRedelegationEntryShares,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ve_id !== 0) {
      writer.uint32(8).uint64(message.ve_id);
    }
    if (message.initial_balance !== "") {
      writer.uint32(18).string(message.initial_balance);
    }
    if (message.shares_dst !== "") {
      writer.uint32(26).string(message.shares_dst);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VeRedelegationEntryShares {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVeRedelegationEntryShares,
    } as VeRedelegationEntryShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ve_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.initial_balance = reader.string();
          break;
        case 3:
          message.shares_dst = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegationEntryShares {
    const message = {
      ...baseVeRedelegationEntryShares,
    } as VeRedelegationEntryShares;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = Number(object.ve_id);
    } else {
      message.ve_id = 0;
    }
    if (
      object.initial_balance !== undefined &&
      object.initial_balance !== null
    ) {
      message.initial_balance = String(object.initial_balance);
    } else {
      message.initial_balance = "";
    }
    if (object.shares_dst !== undefined && object.shares_dst !== null) {
      message.shares_dst = String(object.shares_dst);
    } else {
      message.shares_dst = "";
    }
    return message;
  },

  toJSON(message: VeRedelegationEntryShares): unknown {
    const obj: any = {};
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.initial_balance !== undefined &&
      (obj.initial_balance = message.initial_balance);
    message.shares_dst !== undefined && (obj.shares_dst = message.shares_dst);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeRedelegationEntryShares>
  ): VeRedelegationEntryShares {
    const message = {
      ...baseVeRedelegationEntryShares,
    } as VeRedelegationEntryShares;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = 0;
    }
    if (
      object.initial_balance !== undefined &&
      object.initial_balance !== null
    ) {
      message.initial_balance = object.initial_balance;
    } else {
      message.initial_balance = "";
    }
    if (object.shares_dst !== undefined && object.shares_dst !== null) {
      message.shares_dst = object.shares_dst;
    } else {
      message.shares_dst = "";
    }
    return message;
  },
};

const baseVeTokens: object = { ve_id: 0, tokens: "" };

export const VeTokens = {
  encode(message: VeTokens, writer: Writer = Writer.create()): Writer {
    if (message.ve_id !== 0) {
      writer.uint32(8).uint64(message.ve_id);
    }
    if (message.tokens !== "") {
      writer.uint32(18).string(message.tokens);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeTokens {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeTokens } as VeTokens;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ve_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeTokens {
    const message = { ...baseVeTokens } as VeTokens;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = Number(object.ve_id);
    } else {
      message.ve_id = 0;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = String(object.tokens);
    } else {
      message.tokens = "";
    }
    return message;
  },

  toJSON(message: VeTokens): unknown {
    const obj: any = {};
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },

  fromPartial(object: DeepPartial<VeTokens>): VeTokens {
    const message = { ...baseVeTokens } as VeTokens;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = 0;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    } else {
      message.tokens = "";
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
