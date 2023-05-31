/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.vesting.v1";

/** GenesisState defines the vesting module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  allocation_addresses: AllocationAddresses | undefined;
}

/** Params defines the parameters for the module. */
export interface Params {
  allocation: AllocationAmounts | undefined;
}

export interface AllocationAmounts {
  total_amount: string;
  airdrop_amount: string;
  ve_vesting_amount: string;
  staking_reward_amount: string;
  community_pool_amount: string;
  strategic_reserve_amount: string;
  team_vesting_amount: string;
}

export interface AllocationAddresses {
  team_vesting_addr: string;
  strategic_reserve_custodian_addr: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocation_addresses !== undefined) {
      AllocationAddresses.encode(
        message.allocation_addresses,
        writer.uint32(18).fork()
      ).ldelim();
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
          message.allocation_addresses = AllocationAddresses.decode(
            reader,
            reader.uint32()
          );
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
    if (
      object.allocation_addresses !== undefined &&
      object.allocation_addresses !== null
    ) {
      message.allocation_addresses = AllocationAddresses.fromJSON(
        object.allocation_addresses
      );
    } else {
      message.allocation_addresses = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.allocation_addresses !== undefined &&
      (obj.allocation_addresses = message.allocation_addresses
        ? AllocationAddresses.toJSON(message.allocation_addresses)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.allocation_addresses !== undefined &&
      object.allocation_addresses !== null
    ) {
      message.allocation_addresses = AllocationAddresses.fromPartial(
        object.allocation_addresses
      );
    } else {
      message.allocation_addresses = undefined;
    }
    return message;
  },
};

const baseParams: object = {};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.allocation !== undefined) {
      AllocationAmounts.encode(
        message.allocation,
        writer.uint32(10).fork()
      ).ldelim();
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
          message.allocation = AllocationAmounts.decode(
            reader,
            reader.uint32()
          );
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
    if (object.allocation !== undefined && object.allocation !== null) {
      message.allocation = AllocationAmounts.fromJSON(object.allocation);
    } else {
      message.allocation = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.allocation !== undefined &&
      (obj.allocation = message.allocation
        ? AllocationAmounts.toJSON(message.allocation)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.allocation !== undefined && object.allocation !== null) {
      message.allocation = AllocationAmounts.fromPartial(object.allocation);
    } else {
      message.allocation = undefined;
    }
    return message;
  },
};

const baseAllocationAmounts: object = {
  total_amount: "",
  airdrop_amount: "",
  ve_vesting_amount: "",
  staking_reward_amount: "",
  community_pool_amount: "",
  strategic_reserve_amount: "",
  team_vesting_amount: "",
};

export const AllocationAmounts = {
  encode(message: AllocationAmounts, writer: Writer = Writer.create()): Writer {
    if (message.total_amount !== "") {
      writer.uint32(10).string(message.total_amount);
    }
    if (message.airdrop_amount !== "") {
      writer.uint32(18).string(message.airdrop_amount);
    }
    if (message.ve_vesting_amount !== "") {
      writer.uint32(26).string(message.ve_vesting_amount);
    }
    if (message.staking_reward_amount !== "") {
      writer.uint32(34).string(message.staking_reward_amount);
    }
    if (message.community_pool_amount !== "") {
      writer.uint32(42).string(message.community_pool_amount);
    }
    if (message.strategic_reserve_amount !== "") {
      writer.uint32(50).string(message.strategic_reserve_amount);
    }
    if (message.team_vesting_amount !== "") {
      writer.uint32(58).string(message.team_vesting_amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AllocationAmounts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocationAmounts } as AllocationAmounts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_amount = reader.string();
          break;
        case 2:
          message.airdrop_amount = reader.string();
          break;
        case 3:
          message.ve_vesting_amount = reader.string();
          break;
        case 4:
          message.staking_reward_amount = reader.string();
          break;
        case 5:
          message.community_pool_amount = reader.string();
          break;
        case 6:
          message.strategic_reserve_amount = reader.string();
          break;
        case 7:
          message.team_vesting_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationAmounts {
    const message = { ...baseAllocationAmounts } as AllocationAmounts;
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.total_amount = String(object.total_amount);
    } else {
      message.total_amount = "";
    }
    if (object.airdrop_amount !== undefined && object.airdrop_amount !== null) {
      message.airdrop_amount = String(object.airdrop_amount);
    } else {
      message.airdrop_amount = "";
    }
    if (
      object.ve_vesting_amount !== undefined &&
      object.ve_vesting_amount !== null
    ) {
      message.ve_vesting_amount = String(object.ve_vesting_amount);
    } else {
      message.ve_vesting_amount = "";
    }
    if (
      object.staking_reward_amount !== undefined &&
      object.staking_reward_amount !== null
    ) {
      message.staking_reward_amount = String(object.staking_reward_amount);
    } else {
      message.staking_reward_amount = "";
    }
    if (
      object.community_pool_amount !== undefined &&
      object.community_pool_amount !== null
    ) {
      message.community_pool_amount = String(object.community_pool_amount);
    } else {
      message.community_pool_amount = "";
    }
    if (
      object.strategic_reserve_amount !== undefined &&
      object.strategic_reserve_amount !== null
    ) {
      message.strategic_reserve_amount = String(
        object.strategic_reserve_amount
      );
    } else {
      message.strategic_reserve_amount = "";
    }
    if (
      object.team_vesting_amount !== undefined &&
      object.team_vesting_amount !== null
    ) {
      message.team_vesting_amount = String(object.team_vesting_amount);
    } else {
      message.team_vesting_amount = "";
    }
    return message;
  },

  toJSON(message: AllocationAmounts): unknown {
    const obj: any = {};
    message.total_amount !== undefined &&
      (obj.total_amount = message.total_amount);
    message.airdrop_amount !== undefined &&
      (obj.airdrop_amount = message.airdrop_amount);
    message.ve_vesting_amount !== undefined &&
      (obj.ve_vesting_amount = message.ve_vesting_amount);
    message.staking_reward_amount !== undefined &&
      (obj.staking_reward_amount = message.staking_reward_amount);
    message.community_pool_amount !== undefined &&
      (obj.community_pool_amount = message.community_pool_amount);
    message.strategic_reserve_amount !== undefined &&
      (obj.strategic_reserve_amount = message.strategic_reserve_amount);
    message.team_vesting_amount !== undefined &&
      (obj.team_vesting_amount = message.team_vesting_amount);
    return obj;
  },

  fromPartial(object: DeepPartial<AllocationAmounts>): AllocationAmounts {
    const message = { ...baseAllocationAmounts } as AllocationAmounts;
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.total_amount = object.total_amount;
    } else {
      message.total_amount = "";
    }
    if (object.airdrop_amount !== undefined && object.airdrop_amount !== null) {
      message.airdrop_amount = object.airdrop_amount;
    } else {
      message.airdrop_amount = "";
    }
    if (
      object.ve_vesting_amount !== undefined &&
      object.ve_vesting_amount !== null
    ) {
      message.ve_vesting_amount = object.ve_vesting_amount;
    } else {
      message.ve_vesting_amount = "";
    }
    if (
      object.staking_reward_amount !== undefined &&
      object.staking_reward_amount !== null
    ) {
      message.staking_reward_amount = object.staking_reward_amount;
    } else {
      message.staking_reward_amount = "";
    }
    if (
      object.community_pool_amount !== undefined &&
      object.community_pool_amount !== null
    ) {
      message.community_pool_amount = object.community_pool_amount;
    } else {
      message.community_pool_amount = "";
    }
    if (
      object.strategic_reserve_amount !== undefined &&
      object.strategic_reserve_amount !== null
    ) {
      message.strategic_reserve_amount = object.strategic_reserve_amount;
    } else {
      message.strategic_reserve_amount = "";
    }
    if (
      object.team_vesting_amount !== undefined &&
      object.team_vesting_amount !== null
    ) {
      message.team_vesting_amount = object.team_vesting_amount;
    } else {
      message.team_vesting_amount = "";
    }
    return message;
  },
};

const baseAllocationAddresses: object = {
  team_vesting_addr: "",
  strategic_reserve_custodian_addr: "",
};

export const AllocationAddresses = {
  encode(
    message: AllocationAddresses,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.team_vesting_addr !== "") {
      writer.uint32(10).string(message.team_vesting_addr);
    }
    if (message.strategic_reserve_custodian_addr !== "") {
      writer.uint32(18).string(message.strategic_reserve_custodian_addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AllocationAddresses {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocationAddresses } as AllocationAddresses;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.team_vesting_addr = reader.string();
          break;
        case 2:
          message.strategic_reserve_custodian_addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationAddresses {
    const message = { ...baseAllocationAddresses } as AllocationAddresses;
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

  toJSON(message: AllocationAddresses): unknown {
    const obj: any = {};
    message.team_vesting_addr !== undefined &&
      (obj.team_vesting_addr = message.team_vesting_addr);
    message.strategic_reserve_custodian_addr !== undefined &&
      (obj.strategic_reserve_custodian_addr =
        message.strategic_reserve_custodian_addr);
    return obj;
  },

  fromPartial(object: DeepPartial<AllocationAddresses>): AllocationAddresses {
    const message = { ...baseAllocationAddresses } as AllocationAddresses;
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
