/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.maker.v1";

/** MsgMintBySwap represents a message to mint Black stablecoins by swapping. */
export interface MsgMintBySwap {
  sender: string;
  to: string;
  backing_in_max: Coin | undefined;
  fury_in_max: Coin | undefined;
  mint_out_min: Coin | undefined;
  full_backing: boolean;
}

/** MsgMintBySwapResponse defines the Msg/MintBySwap response type. */
export interface MsgMintBySwapResponse {
  backing_in: Coin | undefined;
  fury_in: Coin | undefined;
  mint_out: Coin | undefined;
  mint_fee: Coin | undefined;
}

/** MsgBurnBySwap represents a message to burn Black stablecoins by swapping. */
export interface MsgBurnBySwap {
  sender: string;
  to: string;
  burn_in: Coin | undefined;
  backing_out_min: Coin | undefined;
  fury_out_min: Coin | undefined;
}

/** MsgBurnBySwapResponse defines the Msg/BurnBySwap response type. */
export interface MsgBurnBySwapResponse {
  backing_out: Coin | undefined;
  fury_out: Coin | undefined;
  burn_fee: Coin | undefined;
}

/** MsgBuyBacking represents a message to buy strong-backing assets. */
export interface MsgBuyBacking {
  sender: string;
  to: string;
  fury_in: Coin | undefined;
  backing_out_min: Coin | undefined;
}

/** MsgBuyBackingResponse defines the Msg/BuyBacking response type. */
export interface MsgBuyBackingResponse {
  backing_out: Coin | undefined;
  buyback_fee: Coin | undefined;
}

/**
 * MsgSellBacking represents a message to sell strong-backing
 * assets.
 */
export interface MsgSellBacking {
  sender: string;
  to: string;
  backing_in: Coin | undefined;
  fury_out_min: Coin | undefined;
}

/** MsgSellBackingResponse defines the Msg/SellBacking response type. */
export interface MsgSellBackingResponse {
  fury_out: Coin | undefined;
  reback_fee: Coin | undefined;
}

/**
 * MsgMintByCollateral represents a message to mint Black stablecoins by locking
 * collateral.
 */
export interface MsgMintByCollateral {
  sender: string;
  to: string;
  collateral_denom: string;
  mint_out: Coin | undefined;
}

/** MsgMintByCollateralResponse defines the Msg/MintByCollateral response type. */
export interface MsgMintByCollateralResponse {
  mint_fee: Coin | undefined;
}

/**
 * MsgBurnByCollateral represents a message to burn Black stablecoins by unlocking
 * collateral.
 */
export interface MsgBurnByCollateral {
  sender: string;
  collateral_denom: string;
  repay_in_max: Coin | undefined;
}

/** MsgBurnByCollateralResponse defines the Msg/BurnByCollateral response type. */
export interface MsgBurnByCollateralResponse {
  repay_in: Coin | undefined;
}

/** MsgDepositCollateral represents a message to deposit collateral assets. */
export interface MsgDepositCollateral {
  sender: string;
  to: string;
  collateral_in: Coin | undefined;
  fury_in: Coin | undefined;
}

/** MsgDepositCollateralResponse defines the Msg/DepositCollateral response type. */
export interface MsgDepositCollateralResponse {}

/**
 * MsgRedeemCollateral represents a message to redeem collateral assets and
 * collateralized Fury coins.
 */
export interface MsgRedeemCollateral {
  sender: string;
  to: string;
  collateral_out: Coin | undefined;
  fury_out: Coin | undefined;
}

/** MsgRedeemCollateralResponse defines the Msg/RedeemCollateral response type. */
export interface MsgRedeemCollateralResponse {}

/** MsgLiquidateCollateral represents a message to liquidates collateral assets. */
export interface MsgLiquidateCollateral {
  sender: string;
  to: string;
  debtor: string;
  collateral: Coin | undefined;
  repay_in_max: Coin | undefined;
}

/**
 * MsgLiquidateCollateralResponse defines the Msg/LiquidateCollateral response
 * type.
 */
export interface MsgLiquidateCollateralResponse {
  repay_in: Coin | undefined;
  collateral_out: Coin | undefined;
}

const baseMsgMintBySwap: object = { sender: "", to: "", full_backing: false };

export const MsgMintBySwap = {
  encode(message: MsgMintBySwap, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.backing_in_max !== undefined) {
      Coin.encode(message.backing_in_max, writer.uint32(26).fork()).ldelim();
    }
    if (message.fury_in_max !== undefined) {
      Coin.encode(message.fury_in_max, writer.uint32(34).fork()).ldelim();
    }
    if (message.mint_out_min !== undefined) {
      Coin.encode(message.mint_out_min, writer.uint32(42).fork()).ldelim();
    }
    if (message.full_backing === true) {
      writer.uint32(48).bool(message.full_backing);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintBySwap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintBySwap } as MsgMintBySwap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.backing_in_max = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.fury_in_max = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.mint_out_min = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.full_backing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBySwap {
    const message = { ...baseMsgMintBySwap } as MsgMintBySwap;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.backing_in_max !== undefined && object.backing_in_max !== null) {
      message.backing_in_max = Coin.fromJSON(object.backing_in_max);
    } else {
      message.backing_in_max = undefined;
    }
    if (object.fury_in_max !== undefined && object.fury_in_max !== null) {
      message.fury_in_max = Coin.fromJSON(object.fury_in_max);
    } else {
      message.fury_in_max = undefined;
    }
    if (object.mint_out_min !== undefined && object.mint_out_min !== null) {
      message.mint_out_min = Coin.fromJSON(object.mint_out_min);
    } else {
      message.mint_out_min = undefined;
    }
    if (object.full_backing !== undefined && object.full_backing !== null) {
      message.full_backing = Boolean(object.full_backing);
    } else {
      message.full_backing = false;
    }
    return message;
  },

  toJSON(message: MsgMintBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.backing_in_max !== undefined &&
      (obj.backing_in_max = message.backing_in_max
        ? Coin.toJSON(message.backing_in_max)
        : undefined);
    message.fury_in_max !== undefined &&
      (obj.fury_in_max = message.fury_in_max
        ? Coin.toJSON(message.fury_in_max)
        : undefined);
    message.mint_out_min !== undefined &&
      (obj.mint_out_min = message.mint_out_min
        ? Coin.toJSON(message.mint_out_min)
        : undefined);
    message.full_backing !== undefined &&
      (obj.full_backing = message.full_backing);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintBySwap>): MsgMintBySwap {
    const message = { ...baseMsgMintBySwap } as MsgMintBySwap;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.backing_in_max !== undefined && object.backing_in_max !== null) {
      message.backing_in_max = Coin.fromPartial(object.backing_in_max);
    } else {
      message.backing_in_max = undefined;
    }
    if (object.fury_in_max !== undefined && object.fury_in_max !== null) {
      message.fury_in_max = Coin.fromPartial(object.fury_in_max);
    } else {
      message.fury_in_max = undefined;
    }
    if (object.mint_out_min !== undefined && object.mint_out_min !== null) {
      message.mint_out_min = Coin.fromPartial(object.mint_out_min);
    } else {
      message.mint_out_min = undefined;
    }
    if (object.full_backing !== undefined && object.full_backing !== null) {
      message.full_backing = object.full_backing;
    } else {
      message.full_backing = false;
    }
    return message;
  },
};

const baseMsgMintBySwapResponse: object = {};

export const MsgMintBySwapResponse = {
  encode(
    message: MsgMintBySwapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_in !== undefined) {
      Coin.encode(message.backing_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.fury_in !== undefined) {
      Coin.encode(message.fury_in, writer.uint32(18).fork()).ldelim();
    }
    if (message.mint_out !== undefined) {
      Coin.encode(message.mint_out, writer.uint32(26).fork()).ldelim();
    }
    if (message.mint_fee !== undefined) {
      Coin.encode(message.mint_fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintBySwapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintBySwapResponse } as MsgMintBySwapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_in = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fury_in = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mint_out = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.mint_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBySwapResponse {
    const message = { ...baseMsgMintBySwapResponse } as MsgMintBySwapResponse;
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromJSON(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromJSON(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (object.mint_out !== undefined && object.mint_out !== null) {
      message.mint_out = Coin.fromJSON(object.mint_out);
    } else {
      message.mint_out = undefined;
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = Coin.fromJSON(object.mint_fee);
    } else {
      message.mint_fee = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintBySwapResponse): unknown {
    const obj: any = {};
    message.backing_in !== undefined &&
      (obj.backing_in = message.backing_in
        ? Coin.toJSON(message.backing_in)
        : undefined);
    message.fury_in !== undefined &&
      (obj.fury_in = message.fury_in
        ? Coin.toJSON(message.fury_in)
        : undefined);
    message.mint_out !== undefined &&
      (obj.mint_out = message.mint_out
        ? Coin.toJSON(message.mint_out)
        : undefined);
    message.mint_fee !== undefined &&
      (obj.mint_fee = message.mint_fee
        ? Coin.toJSON(message.mint_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMintBySwapResponse>
  ): MsgMintBySwapResponse {
    const message = { ...baseMsgMintBySwapResponse } as MsgMintBySwapResponse;
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromPartial(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromPartial(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (object.mint_out !== undefined && object.mint_out !== null) {
      message.mint_out = Coin.fromPartial(object.mint_out);
    } else {
      message.mint_out = undefined;
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = Coin.fromPartial(object.mint_fee);
    } else {
      message.mint_fee = undefined;
    }
    return message;
  },
};

const baseMsgBurnBySwap: object = { sender: "", to: "" };

export const MsgBurnBySwap = {
  encode(message: MsgBurnBySwap, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.burn_in !== undefined) {
      Coin.encode(message.burn_in, writer.uint32(26).fork()).ldelim();
    }
    if (message.backing_out_min !== undefined) {
      Coin.encode(message.backing_out_min, writer.uint32(34).fork()).ldelim();
    }
    if (message.fury_out_min !== undefined) {
      Coin.encode(message.fury_out_min, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnBySwap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnBySwap } as MsgBurnBySwap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.burn_in = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backing_out_min = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.fury_out_min = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnBySwap {
    const message = { ...baseMsgBurnBySwap } as MsgBurnBySwap;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.burn_in !== undefined && object.burn_in !== null) {
      message.burn_in = Coin.fromJSON(object.burn_in);
    } else {
      message.burn_in = undefined;
    }
    if (
      object.backing_out_min !== undefined &&
      object.backing_out_min !== null
    ) {
      message.backing_out_min = Coin.fromJSON(object.backing_out_min);
    } else {
      message.backing_out_min = undefined;
    }
    if (object.fury_out_min !== undefined && object.fury_out_min !== null) {
      message.fury_out_min = Coin.fromJSON(object.fury_out_min);
    } else {
      message.fury_out_min = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.burn_in !== undefined &&
      (obj.burn_in = message.burn_in
        ? Coin.toJSON(message.burn_in)
        : undefined);
    message.backing_out_min !== undefined &&
      (obj.backing_out_min = message.backing_out_min
        ? Coin.toJSON(message.backing_out_min)
        : undefined);
    message.fury_out_min !== undefined &&
      (obj.fury_out_min = message.fury_out_min
        ? Coin.toJSON(message.fury_out_min)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnBySwap>): MsgBurnBySwap {
    const message = { ...baseMsgBurnBySwap } as MsgBurnBySwap;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.burn_in !== undefined && object.burn_in !== null) {
      message.burn_in = Coin.fromPartial(object.burn_in);
    } else {
      message.burn_in = undefined;
    }
    if (
      object.backing_out_min !== undefined &&
      object.backing_out_min !== null
    ) {
      message.backing_out_min = Coin.fromPartial(object.backing_out_min);
    } else {
      message.backing_out_min = undefined;
    }
    if (object.fury_out_min !== undefined && object.fury_out_min !== null) {
      message.fury_out_min = Coin.fromPartial(object.fury_out_min);
    } else {
      message.fury_out_min = undefined;
    }
    return message;
  },
};

const baseMsgBurnBySwapResponse: object = {};

export const MsgBurnBySwapResponse = {
  encode(
    message: MsgBurnBySwapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_out !== undefined) {
      Coin.encode(message.backing_out, writer.uint32(10).fork()).ldelim();
    }
    if (message.fury_out !== undefined) {
      Coin.encode(message.fury_out, writer.uint32(18).fork()).ldelim();
    }
    if (message.burn_fee !== undefined) {
      Coin.encode(message.burn_fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnBySwapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnBySwapResponse } as MsgBurnBySwapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_out = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fury_out = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burn_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnBySwapResponse {
    const message = { ...baseMsgBurnBySwapResponse } as MsgBurnBySwapResponse;
    if (object.backing_out !== undefined && object.backing_out !== null) {
      message.backing_out = Coin.fromJSON(object.backing_out);
    } else {
      message.backing_out = undefined;
    }
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromJSON(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.burn_fee !== undefined && object.burn_fee !== null) {
      message.burn_fee = Coin.fromJSON(object.burn_fee);
    } else {
      message.burn_fee = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnBySwapResponse): unknown {
    const obj: any = {};
    message.backing_out !== undefined &&
      (obj.backing_out = message.backing_out
        ? Coin.toJSON(message.backing_out)
        : undefined);
    message.fury_out !== undefined &&
      (obj.fury_out = message.fury_out
        ? Coin.toJSON(message.fury_out)
        : undefined);
    message.burn_fee !== undefined &&
      (obj.burn_fee = message.burn_fee
        ? Coin.toJSON(message.burn_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBurnBySwapResponse>
  ): MsgBurnBySwapResponse {
    const message = { ...baseMsgBurnBySwapResponse } as MsgBurnBySwapResponse;
    if (object.backing_out !== undefined && object.backing_out !== null) {
      message.backing_out = Coin.fromPartial(object.backing_out);
    } else {
      message.backing_out = undefined;
    }
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromPartial(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.burn_fee !== undefined && object.burn_fee !== null) {
      message.burn_fee = Coin.fromPartial(object.burn_fee);
    } else {
      message.burn_fee = undefined;
    }
    return message;
  },
};

const baseMsgBuyBacking: object = { sender: "", to: "" };

export const MsgBuyBacking = {
  encode(message: MsgBuyBacking, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.fury_in !== undefined) {
      Coin.encode(message.fury_in, writer.uint32(26).fork()).ldelim();
    }
    if (message.backing_out_min !== undefined) {
      Coin.encode(message.backing_out_min, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyBacking } as MsgBuyBacking;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.fury_in = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backing_out_min = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBacking {
    const message = { ...baseMsgBuyBacking } as MsgBuyBacking;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromJSON(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (
      object.backing_out_min !== undefined &&
      object.backing_out_min !== null
    ) {
      message.backing_out_min = Coin.fromJSON(object.backing_out_min);
    } else {
      message.backing_out_min = undefined;
    }
    return message;
  },

  toJSON(message: MsgBuyBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.fury_in !== undefined &&
      (obj.fury_in = message.fury_in
        ? Coin.toJSON(message.fury_in)
        : undefined);
    message.backing_out_min !== undefined &&
      (obj.backing_out_min = message.backing_out_min
        ? Coin.toJSON(message.backing_out_min)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyBacking>): MsgBuyBacking {
    const message = { ...baseMsgBuyBacking } as MsgBuyBacking;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromPartial(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (
      object.backing_out_min !== undefined &&
      object.backing_out_min !== null
    ) {
      message.backing_out_min = Coin.fromPartial(object.backing_out_min);
    } else {
      message.backing_out_min = undefined;
    }
    return message;
  },
};

const baseMsgBuyBackingResponse: object = {};

export const MsgBuyBackingResponse = {
  encode(
    message: MsgBuyBackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_out !== undefined) {
      Coin.encode(message.backing_out, writer.uint32(10).fork()).ldelim();
    }
    if (message.buyback_fee !== undefined) {
      Coin.encode(message.buyback_fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyBackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyBackingResponse } as MsgBuyBackingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_out = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.buyback_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBackingResponse {
    const message = { ...baseMsgBuyBackingResponse } as MsgBuyBackingResponse;
    if (object.backing_out !== undefined && object.backing_out !== null) {
      message.backing_out = Coin.fromJSON(object.backing_out);
    } else {
      message.backing_out = undefined;
    }
    if (object.buyback_fee !== undefined && object.buyback_fee !== null) {
      message.buyback_fee = Coin.fromJSON(object.buyback_fee);
    } else {
      message.buyback_fee = undefined;
    }
    return message;
  },

  toJSON(message: MsgBuyBackingResponse): unknown {
    const obj: any = {};
    message.backing_out !== undefined &&
      (obj.backing_out = message.backing_out
        ? Coin.toJSON(message.backing_out)
        : undefined);
    message.buyback_fee !== undefined &&
      (obj.buyback_fee = message.buyback_fee
        ? Coin.toJSON(message.buyback_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBuyBackingResponse>
  ): MsgBuyBackingResponse {
    const message = { ...baseMsgBuyBackingResponse } as MsgBuyBackingResponse;
    if (object.backing_out !== undefined && object.backing_out !== null) {
      message.backing_out = Coin.fromPartial(object.backing_out);
    } else {
      message.backing_out = undefined;
    }
    if (object.buyback_fee !== undefined && object.buyback_fee !== null) {
      message.buyback_fee = Coin.fromPartial(object.buyback_fee);
    } else {
      message.buyback_fee = undefined;
    }
    return message;
  },
};

const baseMsgSellBacking: object = { sender: "", to: "" };

export const MsgSellBacking = {
  encode(message: MsgSellBacking, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.backing_in !== undefined) {
      Coin.encode(message.backing_in, writer.uint32(26).fork()).ldelim();
    }
    if (message.fury_out_min !== undefined) {
      Coin.encode(message.fury_out_min, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellBacking } as MsgSellBacking;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.backing_in = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.fury_out_min = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBacking {
    const message = { ...baseMsgSellBacking } as MsgSellBacking;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromJSON(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    if (object.fury_out_min !== undefined && object.fury_out_min !== null) {
      message.fury_out_min = Coin.fromJSON(object.fury_out_min);
    } else {
      message.fury_out_min = undefined;
    }
    return message;
  },

  toJSON(message: MsgSellBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.backing_in !== undefined &&
      (obj.backing_in = message.backing_in
        ? Coin.toJSON(message.backing_in)
        : undefined);
    message.fury_out_min !== undefined &&
      (obj.fury_out_min = message.fury_out_min
        ? Coin.toJSON(message.fury_out_min)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellBacking>): MsgSellBacking {
    const message = { ...baseMsgSellBacking } as MsgSellBacking;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromPartial(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    if (object.fury_out_min !== undefined && object.fury_out_min !== null) {
      message.fury_out_min = Coin.fromPartial(object.fury_out_min);
    } else {
      message.fury_out_min = undefined;
    }
    return message;
  },
};

const baseMsgSellBackingResponse: object = {};

export const MsgSellBackingResponse = {
  encode(
    message: MsgSellBackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fury_out !== undefined) {
      Coin.encode(message.fury_out, writer.uint32(10).fork()).ldelim();
    }
    if (message.reback_fee !== undefined) {
      Coin.encode(message.reback_fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellBackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellBackingResponse } as MsgSellBackingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fury_out = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.reback_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBackingResponse {
    const message = { ...baseMsgSellBackingResponse } as MsgSellBackingResponse;
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromJSON(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.reback_fee !== undefined && object.reback_fee !== null) {
      message.reback_fee = Coin.fromJSON(object.reback_fee);
    } else {
      message.reback_fee = undefined;
    }
    return message;
  },

  toJSON(message: MsgSellBackingResponse): unknown {
    const obj: any = {};
    message.fury_out !== undefined &&
      (obj.fury_out = message.fury_out
        ? Coin.toJSON(message.fury_out)
        : undefined);
    message.reback_fee !== undefined &&
      (obj.reback_fee = message.reback_fee
        ? Coin.toJSON(message.reback_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSellBackingResponse>
  ): MsgSellBackingResponse {
    const message = { ...baseMsgSellBackingResponse } as MsgSellBackingResponse;
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromPartial(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.reback_fee !== undefined && object.reback_fee !== null) {
      message.reback_fee = Coin.fromPartial(object.reback_fee);
    } else {
      message.reback_fee = undefined;
    }
    return message;
  },
};

const baseMsgMintByCollateral: object = {
  sender: "",
  to: "",
  collateral_denom: "",
};

export const MsgMintByCollateral = {
  encode(
    message: MsgMintByCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateral_denom !== "") {
      writer.uint32(26).string(message.collateral_denom);
    }
    if (message.mint_out !== undefined) {
      Coin.encode(message.mint_out, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintByCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintByCollateral } as MsgMintByCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.collateral_denom = reader.string();
          break;
        case 4:
          message.mint_out = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintByCollateral {
    const message = { ...baseMsgMintByCollateral } as MsgMintByCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = String(object.collateral_denom);
    } else {
      message.collateral_denom = "";
    }
    if (object.mint_out !== undefined && object.mint_out !== null) {
      message.mint_out = Coin.fromJSON(object.mint_out);
    } else {
      message.mint_out = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateral_denom !== undefined &&
      (obj.collateral_denom = message.collateral_denom);
    message.mint_out !== undefined &&
      (obj.mint_out = message.mint_out
        ? Coin.toJSON(message.mint_out)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintByCollateral>): MsgMintByCollateral {
    const message = { ...baseMsgMintByCollateral } as MsgMintByCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = object.collateral_denom;
    } else {
      message.collateral_denom = "";
    }
    if (object.mint_out !== undefined && object.mint_out !== null) {
      message.mint_out = Coin.fromPartial(object.mint_out);
    } else {
      message.mint_out = undefined;
    }
    return message;
  },
};

const baseMsgMintByCollateralResponse: object = {};

export const MsgMintByCollateralResponse = {
  encode(
    message: MsgMintByCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mint_fee !== undefined) {
      Coin.encode(message.mint_fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMintByCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMintByCollateralResponse,
    } as MsgMintByCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mint_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintByCollateralResponse {
    const message = {
      ...baseMsgMintByCollateralResponse,
    } as MsgMintByCollateralResponse;
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = Coin.fromJSON(object.mint_fee);
    } else {
      message.mint_fee = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintByCollateralResponse): unknown {
    const obj: any = {};
    message.mint_fee !== undefined &&
      (obj.mint_fee = message.mint_fee
        ? Coin.toJSON(message.mint_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMintByCollateralResponse>
  ): MsgMintByCollateralResponse {
    const message = {
      ...baseMsgMintByCollateralResponse,
    } as MsgMintByCollateralResponse;
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = Coin.fromPartial(object.mint_fee);
    } else {
      message.mint_fee = undefined;
    }
    return message;
  },
};

const baseMsgBurnByCollateral: object = { sender: "", collateral_denom: "" };

export const MsgBurnByCollateral = {
  encode(
    message: MsgBurnByCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateral_denom !== "") {
      writer.uint32(18).string(message.collateral_denom);
    }
    if (message.repay_in_max !== undefined) {
      Coin.encode(message.repay_in_max, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnByCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnByCollateral } as MsgBurnByCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateral_denom = reader.string();
          break;
        case 3:
          message.repay_in_max = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateral {
    const message = { ...baseMsgBurnByCollateral } as MsgBurnByCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = String(object.collateral_denom);
    } else {
      message.collateral_denom = "";
    }
    if (object.repay_in_max !== undefined && object.repay_in_max !== null) {
      message.repay_in_max = Coin.fromJSON(object.repay_in_max);
    } else {
      message.repay_in_max = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collateral_denom !== undefined &&
      (obj.collateral_denom = message.collateral_denom);
    message.repay_in_max !== undefined &&
      (obj.repay_in_max = message.repay_in_max
        ? Coin.toJSON(message.repay_in_max)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnByCollateral>): MsgBurnByCollateral {
    const message = { ...baseMsgBurnByCollateral } as MsgBurnByCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = object.collateral_denom;
    } else {
      message.collateral_denom = "";
    }
    if (object.repay_in_max !== undefined && object.repay_in_max !== null) {
      message.repay_in_max = Coin.fromPartial(object.repay_in_max);
    } else {
      message.repay_in_max = undefined;
    }
    return message;
  },
};

const baseMsgBurnByCollateralResponse: object = {};

export const MsgBurnByCollateralResponse = {
  encode(
    message: MsgBurnByCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.repay_in !== undefined) {
      Coin.encode(message.repay_in, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgBurnByCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgBurnByCollateralResponse,
    } as MsgBurnByCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repay_in = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateralResponse {
    const message = {
      ...baseMsgBurnByCollateralResponse,
    } as MsgBurnByCollateralResponse;
    if (object.repay_in !== undefined && object.repay_in !== null) {
      message.repay_in = Coin.fromJSON(object.repay_in);
    } else {
      message.repay_in = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnByCollateralResponse): unknown {
    const obj: any = {};
    message.repay_in !== undefined &&
      (obj.repay_in = message.repay_in
        ? Coin.toJSON(message.repay_in)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBurnByCollateralResponse>
  ): MsgBurnByCollateralResponse {
    const message = {
      ...baseMsgBurnByCollateralResponse,
    } as MsgBurnByCollateralResponse;
    if (object.repay_in !== undefined && object.repay_in !== null) {
      message.repay_in = Coin.fromPartial(object.repay_in);
    } else {
      message.repay_in = undefined;
    }
    return message;
  },
};

const baseMsgDepositCollateral: object = { sender: "", to: "" };

export const MsgDepositCollateral = {
  encode(
    message: MsgDepositCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateral_in !== undefined) {
      Coin.encode(message.collateral_in, writer.uint32(26).fork()).ldelim();
    }
    if (message.fury_in !== undefined) {
      Coin.encode(message.fury_in, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDepositCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositCollateral } as MsgDepositCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.collateral_in = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.fury_in = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositCollateral {
    const message = { ...baseMsgDepositCollateral } as MsgDepositCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.collateral_in !== undefined && object.collateral_in !== null) {
      message.collateral_in = Coin.fromJSON(object.collateral_in);
    } else {
      message.collateral_in = undefined;
    }
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromJSON(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    return message;
  },

  toJSON(message: MsgDepositCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateral_in !== undefined &&
      (obj.collateral_in = message.collateral_in
        ? Coin.toJSON(message.collateral_in)
        : undefined);
    message.fury_in !== undefined &&
      (obj.fury_in = message.fury_in
        ? Coin.toJSON(message.fury_in)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDepositCollateral>): MsgDepositCollateral {
    const message = { ...baseMsgDepositCollateral } as MsgDepositCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.collateral_in !== undefined && object.collateral_in !== null) {
      message.collateral_in = Coin.fromPartial(object.collateral_in);
    } else {
      message.collateral_in = undefined;
    }
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromPartial(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    return message;
  },
};

const baseMsgDepositCollateralResponse: object = {};

export const MsgDepositCollateralResponse = {
  encode(
    _: MsgDepositCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDepositCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
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

  fromJSON(_: any): MsgDepositCollateralResponse {
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
    return message;
  },

  toJSON(_: MsgDepositCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositCollateralResponse>
  ): MsgDepositCollateralResponse {
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
    return message;
  },
};

const baseMsgRedeemCollateral: object = { sender: "", to: "" };

export const MsgRedeemCollateral = {
  encode(
    message: MsgRedeemCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateral_out !== undefined) {
      Coin.encode(message.collateral_out, writer.uint32(26).fork()).ldelim();
    }
    if (message.fury_out !== undefined) {
      Coin.encode(message.fury_out, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRedeemCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeemCollateral } as MsgRedeemCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.collateral_out = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.fury_out = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemCollateral {
    const message = { ...baseMsgRedeemCollateral } as MsgRedeemCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.collateral_out !== undefined && object.collateral_out !== null) {
      message.collateral_out = Coin.fromJSON(object.collateral_out);
    } else {
      message.collateral_out = undefined;
    }
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromJSON(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedeemCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateral_out !== undefined &&
      (obj.collateral_out = message.collateral_out
        ? Coin.toJSON(message.collateral_out)
        : undefined);
    message.fury_out !== undefined &&
      (obj.fury_out = message.fury_out
        ? Coin.toJSON(message.fury_out)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeemCollateral>): MsgRedeemCollateral {
    const message = { ...baseMsgRedeemCollateral } as MsgRedeemCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.collateral_out !== undefined && object.collateral_out !== null) {
      message.collateral_out = Coin.fromPartial(object.collateral_out);
    } else {
      message.collateral_out = undefined;
    }
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromPartial(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    return message;
  },
};

const baseMsgRedeemCollateralResponse: object = {};

export const MsgRedeemCollateralResponse = {
  encode(
    _: MsgRedeemCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRedeemCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRedeemCollateralResponse,
    } as MsgRedeemCollateralResponse;
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

  fromJSON(_: any): MsgRedeemCollateralResponse {
    const message = {
      ...baseMsgRedeemCollateralResponse,
    } as MsgRedeemCollateralResponse;
    return message;
  },

  toJSON(_: MsgRedeemCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRedeemCollateralResponse>
  ): MsgRedeemCollateralResponse {
    const message = {
      ...baseMsgRedeemCollateralResponse,
    } as MsgRedeemCollateralResponse;
    return message;
  },
};

const baseMsgLiquidateCollateral: object = { sender: "", to: "", debtor: "" };

export const MsgLiquidateCollateral = {
  encode(
    message: MsgLiquidateCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.debtor !== "") {
      writer.uint32(26).string(message.debtor);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.repay_in_max !== undefined) {
      Coin.encode(message.repay_in_max, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLiquidateCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.debtor = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.repay_in_max = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateral {
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.debtor !== undefined && object.debtor !== null) {
      message.debtor = String(object.debtor);
    } else {
      message.debtor = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.repay_in_max !== undefined && object.repay_in_max !== null) {
      message.repay_in_max = Coin.fromJSON(object.repay_in_max);
    } else {
      message.repay_in_max = undefined;
    }
    return message;
  },

  toJSON(message: MsgLiquidateCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.repay_in_max !== undefined &&
      (obj.repay_in_max = message.repay_in_max
        ? Coin.toJSON(message.repay_in_max)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateral>
  ): MsgLiquidateCollateral {
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.debtor !== undefined && object.debtor !== null) {
      message.debtor = object.debtor;
    } else {
      message.debtor = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.repay_in_max !== undefined && object.repay_in_max !== null) {
      message.repay_in_max = Coin.fromPartial(object.repay_in_max);
    } else {
      message.repay_in_max = undefined;
    }
    return message;
  },
};

const baseMsgLiquidateCollateralResponse: object = {};

export const MsgLiquidateCollateralResponse = {
  encode(
    message: MsgLiquidateCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.repay_in !== undefined) {
      Coin.encode(message.repay_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateral_out !== undefined) {
      Coin.encode(message.collateral_out, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repay_in = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.collateral_out = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    if (object.repay_in !== undefined && object.repay_in !== null) {
      message.repay_in = Coin.fromJSON(object.repay_in);
    } else {
      message.repay_in = undefined;
    }
    if (object.collateral_out !== undefined && object.collateral_out !== null) {
      message.collateral_out = Coin.fromJSON(object.collateral_out);
    } else {
      message.collateral_out = undefined;
    }
    return message;
  },

  toJSON(message: MsgLiquidateCollateralResponse): unknown {
    const obj: any = {};
    message.repay_in !== undefined &&
      (obj.repay_in = message.repay_in
        ? Coin.toJSON(message.repay_in)
        : undefined);
    message.collateral_out !== undefined &&
      (obj.collateral_out = message.collateral_out
        ? Coin.toJSON(message.collateral_out)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateralResponse>
  ): MsgLiquidateCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    if (object.repay_in !== undefined && object.repay_in !== null) {
      message.repay_in = Coin.fromPartial(object.repay_in);
    } else {
      message.repay_in = undefined;
    }
    if (object.collateral_out !== undefined && object.collateral_out !== null) {
      message.collateral_out = Coin.fromPartial(object.collateral_out);
    } else {
      message.collateral_out = undefined;
    }
    return message;
  },
};

/** Msg defines the maker Msg service. */
export interface Msg {
  /**
   * MintBySwap mints Black stablecoins by swapping in strong-backing assets and
   * Fury coins.
   */
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse>;
  /**
   * BurnBySwap burns Black stablecoins by swapping out strong-backing assets and
   * Fury coins.
   */
  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse>;
  /** BuyBacking buys strong-backing assets by spending Fury coins. */
  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse>;
  /**
   * SellBacking sells strong-backing assets by earning Fury
   * coins.
   */
  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse>;
  /**
   * MintByCollateral mints Black stablecoins by locking collateral assets and
   * spending Fury coins.
   */
  MintByCollateral(
    request: MsgMintByCollateral
  ): Promise<MsgMintByCollateralResponse>;
  /**
   * BurnByCollateral burns Black stablecoins by unlocking collateral assets and
   * earning Fury coins.
   */
  BurnByCollateral(
    request: MsgBurnByCollateral
  ): Promise<MsgBurnByCollateralResponse>;
  /** DepositCollateral deposits collateral assets. */
  DepositCollateral(
    request: MsgDepositCollateral
  ): Promise<MsgDepositCollateralResponse>;
  /** RedeemCollateral redeems collateral assets and collateralized Fury coins. */
  RedeemCollateral(
    request: MsgRedeemCollateral
  ): Promise<MsgRedeemCollateralResponse>;
  /**
   * LiquidateCollateral liquidates collateral assets which is
   * undercollateralized.
   */
  LiquidateCollateral(
    request: MsgLiquidateCollateral
  ): Promise<MsgLiquidateCollateralResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse> {
    const data = MsgMintBySwap.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "MintBySwap",
      data
    );
    return promise.then((data) =>
      MsgMintBySwapResponse.decode(new Reader(data))
    );
  }

  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse> {
    const data = MsgBurnBySwap.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "BurnBySwap",
      data
    );
    return promise.then((data) =>
      MsgBurnBySwapResponse.decode(new Reader(data))
    );
  }

  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse> {
    const data = MsgBuyBacking.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "BuyBacking",
      data
    );
    return promise.then((data) =>
      MsgBuyBackingResponse.decode(new Reader(data))
    );
  }

  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse> {
    const data = MsgSellBacking.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "SellBacking",
      data
    );
    return promise.then((data) =>
      MsgSellBackingResponse.decode(new Reader(data))
    );
  }

  MintByCollateral(
    request: MsgMintByCollateral
  ): Promise<MsgMintByCollateralResponse> {
    const data = MsgMintByCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "MintByCollateral",
      data
    );
    return promise.then((data) =>
      MsgMintByCollateralResponse.decode(new Reader(data))
    );
  }

  BurnByCollateral(
    request: MsgBurnByCollateral
  ): Promise<MsgBurnByCollateralResponse> {
    const data = MsgBurnByCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "BurnByCollateral",
      data
    );
    return promise.then((data) =>
      MsgBurnByCollateralResponse.decode(new Reader(data))
    );
  }

  DepositCollateral(
    request: MsgDepositCollateral
  ): Promise<MsgDepositCollateralResponse> {
    const data = MsgDepositCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "DepositCollateral",
      data
    );
    return promise.then((data) =>
      MsgDepositCollateralResponse.decode(new Reader(data))
    );
  }

  RedeemCollateral(
    request: MsgRedeemCollateral
  ): Promise<MsgRedeemCollateralResponse> {
    const data = MsgRedeemCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "RedeemCollateral",
      data
    );
    return promise.then((data) =>
      MsgRedeemCollateralResponse.decode(new Reader(data))
    );
  }

  LiquidateCollateral(
    request: MsgLiquidateCollateral
  ): Promise<MsgLiquidateCollateralResponse> {
    const data = MsgLiquidateCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Msg",
      "LiquidateCollateral",
      data
    );
    return promise.then((data) =>
      MsgLiquidateCollateralResponse.decode(new Reader(data))
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
