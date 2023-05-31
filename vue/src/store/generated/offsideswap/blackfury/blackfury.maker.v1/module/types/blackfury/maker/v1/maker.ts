/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.maker.v1";

/** BackingRiskParams represents an object of backing coin risk parameters. */
export interface BackingRiskParams {
  /** backing coin denom */
  backing_denom: string;
  /** whether enabled */
  enabled: boolean;
  /** maximum total backing amount */
  max_backing: string;
  /** maximum mintable Black amount */
  max_black_mint: string;
  /** mint fee rate */
  mint_fee: string;
  /** burn fee rate */
  burn_fee: string;
  /** buyback fee rate */
  buyback_fee: string;
  /** reback fee rate */
  reback_fee: string;
}

/** CollateralRiskParams represents an object of collateral risk parameters. */
export interface CollateralRiskParams {
  /** collateral coin denom */
  collateral_denom: string;
  /** whether enabled */
  enabled: boolean;
  /** maximum total collateral amount; empty means no limit */
  max_collateral: string;
  /** maximum total mintable Black amount; empty means no limit */
  max_black_mint: string;
  /** ratio at which a position is defined as undercollateralized */
  liquidation_threshold: string;
  /**
   * maximum ratio of maximum amount of currency that can be borrowed with a
   * specific collateral
   */
  loan_to_value: string;
  /**
   * basic ratio of maximum amount of currency that can be borrowed with a
   * specific collateral
   */
  basic_loan_to_value: string;
  /**
   * catalytic ratio of collateralized Fury to asset, to maximize the LTV
   * in [basic-LTV, LTV]
   */
  catalytic_fury_ratio: string;
  /**
   * liquidation fee rate, i.e., the discount a liquidator gets when buying
   * collateral flagged for a liquidation
   */
  liquidation_fee: string;
  /** mint fee rate, i.e., extra fee debt */
  mint_fee: string;
  /** annual interest fee rate (APR) */
  interest_fee: string;
}

/**
 * RegisterBackingProposal is a gov Content type to register eligible
 * strong-backing asset with backing risk parameters.
 */
export interface RegisterBackingProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** backing risk params */
  risk_params: BackingRiskParams | undefined;
}

/**
 * RegisterCollateralProposal is a gov Content type to register eligible
 * collateral with collateral risk parameters.
 */
export interface RegisterCollateralProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** collateral risk params */
  risk_params: CollateralRiskParams | undefined;
}

/**
 * SetBackingRiskParamsProposal is a gov Content type to set backing coin risk
 * parameters.
 */
export interface SetBackingRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** backing risk params */
  risk_params: BackingRiskParams | undefined;
}

/**
 * SetCollateralRiskParamsProposal is a gov Content type to set collateral risk
 * parameters.
 */
export interface SetCollateralRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** collateral risk params */
  risk_params: CollateralRiskParams | undefined;
}

export interface BatchBackingRiskParams {
  /** batch of collateral risk params */
  risk_params: BackingRiskParams[];
}

/**
 * BatchSetBackingRiskParamsProposal is a gov Content type to batch set backing
 * coin risk parameters.
 */
export interface BatchSetBackingRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** batch of collateral risk params */
  risk_params: BackingRiskParams[];
}

export interface BatchCollateralRiskParams {
  /** batch of collateral risk params */
  risk_params: CollateralRiskParams[];
}

/**
 * BatchSetCollateralRiskParamsProposal is a gov Content type to batch set
 * collateral risk parameters.
 */
export interface BatchSetCollateralRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** batch of collateral risk params */
  risk_params: CollateralRiskParams[];
}

export interface TotalBacking {
  /** total backing value in uUSD */
  backing_value: string;
  /** total minted black; negative value means burned black */
  black_minted: Coin | undefined;
  /** total burned fury; negative value means minted fury */
  fury_burned: Coin | undefined;
}

export interface PoolBacking {
  /** total minted black; negative value means burned black */
  black_minted: Coin | undefined;
  /** total backing */
  backing: Coin | undefined;
  /** total burned fury; negative value means minted fury */
  fury_burned: Coin | undefined;
}

export interface AccountBacking {}

export interface TotalCollateral {
  /**
   * total existing black debt, including minted by collateral, mint fee, last
   * interest
   */
  black_debt: Coin | undefined;
  /** total collateralized fury */
  fury_collateralized: Coin | undefined;
}

export interface PoolCollateral {
  /** total collateral */
  collateral: Coin | undefined;
  /**
   * total existing black debt, including minted by collateral, mint fee, last
   * interest
   */
  black_debt: Coin | undefined;
  /** total collateralized fury */
  fury_collateralized: Coin | undefined;
}

export interface AccountCollateral {
  /** account who owns collateral */
  account: string;
  /** existing collateral */
  collateral: Coin | undefined;
  /** remaining black debt, including minted by collateral, mint fee, last interest */
  black_debt: Coin | undefined;
  /** total collateralized fury */
  fury_collateralized: Coin | undefined;
  /** remaining interest debt at last settlement */
  last_interest: Coin | undefined;
  /** the block of last settlement */
  last_settlement_block: number;
}

const baseBackingRiskParams: object = {
  backing_denom: "",
  enabled: false,
  max_backing: "",
  max_black_mint: "",
  mint_fee: "",
  burn_fee: "",
  buyback_fee: "",
  reback_fee: "",
};

export const BackingRiskParams = {
  encode(message: BackingRiskParams, writer: Writer = Writer.create()): Writer {
    if (message.backing_denom !== "") {
      writer.uint32(10).string(message.backing_denom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.max_backing !== "") {
      writer.uint32(26).string(message.max_backing);
    }
    if (message.max_black_mint !== "") {
      writer.uint32(34).string(message.max_black_mint);
    }
    if (message.mint_fee !== "") {
      writer.uint32(42).string(message.mint_fee);
    }
    if (message.burn_fee !== "") {
      writer.uint32(50).string(message.burn_fee);
    }
    if (message.buyback_fee !== "") {
      writer.uint32(58).string(message.buyback_fee);
    }
    if (message.reback_fee !== "") {
      writer.uint32(66).string(message.reback_fee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BackingRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackingRiskParams } as BackingRiskParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_denom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.max_backing = reader.string();
          break;
        case 4:
          message.max_black_mint = reader.string();
          break;
        case 5:
          message.mint_fee = reader.string();
          break;
        case 6:
          message.burn_fee = reader.string();
          break;
        case 7:
          message.buyback_fee = reader.string();
          break;
        case 8:
          message.reback_fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackingRiskParams {
    const message = { ...baseBackingRiskParams } as BackingRiskParams;
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = String(object.backing_denom);
    } else {
      message.backing_denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.max_backing !== undefined && object.max_backing !== null) {
      message.max_backing = String(object.max_backing);
    } else {
      message.max_backing = "";
    }
    if (object.max_black_mint !== undefined && object.max_black_mint !== null) {
      message.max_black_mint = String(object.max_black_mint);
    } else {
      message.max_black_mint = "";
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = String(object.mint_fee);
    } else {
      message.mint_fee = "";
    }
    if (object.burn_fee !== undefined && object.burn_fee !== null) {
      message.burn_fee = String(object.burn_fee);
    } else {
      message.burn_fee = "";
    }
    if (object.buyback_fee !== undefined && object.buyback_fee !== null) {
      message.buyback_fee = String(object.buyback_fee);
    } else {
      message.buyback_fee = "";
    }
    if (object.reback_fee !== undefined && object.reback_fee !== null) {
      message.reback_fee = String(object.reback_fee);
    } else {
      message.reback_fee = "";
    }
    return message;
  },

  toJSON(message: BackingRiskParams): unknown {
    const obj: any = {};
    message.backing_denom !== undefined &&
      (obj.backing_denom = message.backing_denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.max_backing !== undefined &&
      (obj.max_backing = message.max_backing);
    message.max_black_mint !== undefined &&
      (obj.max_black_mint = message.max_black_mint);
    message.mint_fee !== undefined && (obj.mint_fee = message.mint_fee);
    message.burn_fee !== undefined && (obj.burn_fee = message.burn_fee);
    message.buyback_fee !== undefined &&
      (obj.buyback_fee = message.buyback_fee);
    message.reback_fee !== undefined && (obj.reback_fee = message.reback_fee);
    return obj;
  },

  fromPartial(object: DeepPartial<BackingRiskParams>): BackingRiskParams {
    const message = { ...baseBackingRiskParams } as BackingRiskParams;
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = object.backing_denom;
    } else {
      message.backing_denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.max_backing !== undefined && object.max_backing !== null) {
      message.max_backing = object.max_backing;
    } else {
      message.max_backing = "";
    }
    if (object.max_black_mint !== undefined && object.max_black_mint !== null) {
      message.max_black_mint = object.max_black_mint;
    } else {
      message.max_black_mint = "";
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = object.mint_fee;
    } else {
      message.mint_fee = "";
    }
    if (object.burn_fee !== undefined && object.burn_fee !== null) {
      message.burn_fee = object.burn_fee;
    } else {
      message.burn_fee = "";
    }
    if (object.buyback_fee !== undefined && object.buyback_fee !== null) {
      message.buyback_fee = object.buyback_fee;
    } else {
      message.buyback_fee = "";
    }
    if (object.reback_fee !== undefined && object.reback_fee !== null) {
      message.reback_fee = object.reback_fee;
    } else {
      message.reback_fee = "";
    }
    return message;
  },
};

const baseCollateralRiskParams: object = {
  collateral_denom: "",
  enabled: false,
  max_collateral: "",
  max_black_mint: "",
  liquidation_threshold: "",
  loan_to_value: "",
  basic_loan_to_value: "",
  catalytic_fury_ratio: "",
  liquidation_fee: "",
  mint_fee: "",
  interest_fee: "",
};

export const CollateralRiskParams = {
  encode(
    message: CollateralRiskParams,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collateral_denom !== "") {
      writer.uint32(10).string(message.collateral_denom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.max_collateral !== "") {
      writer.uint32(26).string(message.max_collateral);
    }
    if (message.max_black_mint !== "") {
      writer.uint32(34).string(message.max_black_mint);
    }
    if (message.liquidation_threshold !== "") {
      writer.uint32(42).string(message.liquidation_threshold);
    }
    if (message.loan_to_value !== "") {
      writer.uint32(50).string(message.loan_to_value);
    }
    if (message.basic_loan_to_value !== "") {
      writer.uint32(58).string(message.basic_loan_to_value);
    }
    if (message.catalytic_fury_ratio !== "") {
      writer.uint32(66).string(message.catalytic_fury_ratio);
    }
    if (message.liquidation_fee !== "") {
      writer.uint32(74).string(message.liquidation_fee);
    }
    if (message.mint_fee !== "") {
      writer.uint32(82).string(message.mint_fee);
    }
    if (message.interest_fee !== "") {
      writer.uint32(90).string(message.interest_fee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CollateralRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollateralRiskParams } as CollateralRiskParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral_denom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.max_collateral = reader.string();
          break;
        case 4:
          message.max_black_mint = reader.string();
          break;
        case 5:
          message.liquidation_threshold = reader.string();
          break;
        case 6:
          message.loan_to_value = reader.string();
          break;
        case 7:
          message.basic_loan_to_value = reader.string();
          break;
        case 8:
          message.catalytic_fury_ratio = reader.string();
          break;
        case 9:
          message.liquidation_fee = reader.string();
          break;
        case 10:
          message.mint_fee = reader.string();
          break;
        case 11:
          message.interest_fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralRiskParams {
    const message = { ...baseCollateralRiskParams } as CollateralRiskParams;
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = String(object.collateral_denom);
    } else {
      message.collateral_denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.max_collateral !== undefined && object.max_collateral !== null) {
      message.max_collateral = String(object.max_collateral);
    } else {
      message.max_collateral = "";
    }
    if (object.max_black_mint !== undefined && object.max_black_mint !== null) {
      message.max_black_mint = String(object.max_black_mint);
    } else {
      message.max_black_mint = "";
    }
    if (
      object.liquidation_threshold !== undefined &&
      object.liquidation_threshold !== null
    ) {
      message.liquidation_threshold = String(object.liquidation_threshold);
    } else {
      message.liquidation_threshold = "";
    }
    if (object.loan_to_value !== undefined && object.loan_to_value !== null) {
      message.loan_to_value = String(object.loan_to_value);
    } else {
      message.loan_to_value = "";
    }
    if (
      object.basic_loan_to_value !== undefined &&
      object.basic_loan_to_value !== null
    ) {
      message.basic_loan_to_value = String(object.basic_loan_to_value);
    } else {
      message.basic_loan_to_value = "";
    }
    if (
      object.catalytic_fury_ratio !== undefined &&
      object.catalytic_fury_ratio !== null
    ) {
      message.catalytic_fury_ratio = String(object.catalytic_fury_ratio);
    } else {
      message.catalytic_fury_ratio = "";
    }
    if (
      object.liquidation_fee !== undefined &&
      object.liquidation_fee !== null
    ) {
      message.liquidation_fee = String(object.liquidation_fee);
    } else {
      message.liquidation_fee = "";
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = String(object.mint_fee);
    } else {
      message.mint_fee = "";
    }
    if (object.interest_fee !== undefined && object.interest_fee !== null) {
      message.interest_fee = String(object.interest_fee);
    } else {
      message.interest_fee = "";
    }
    return message;
  },

  toJSON(message: CollateralRiskParams): unknown {
    const obj: any = {};
    message.collateral_denom !== undefined &&
      (obj.collateral_denom = message.collateral_denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.max_collateral !== undefined &&
      (obj.max_collateral = message.max_collateral);
    message.max_black_mint !== undefined &&
      (obj.max_black_mint = message.max_black_mint);
    message.liquidation_threshold !== undefined &&
      (obj.liquidation_threshold = message.liquidation_threshold);
    message.loan_to_value !== undefined &&
      (obj.loan_to_value = message.loan_to_value);
    message.basic_loan_to_value !== undefined &&
      (obj.basic_loan_to_value = message.basic_loan_to_value);
    message.catalytic_fury_ratio !== undefined &&
      (obj.catalytic_fury_ratio = message.catalytic_fury_ratio);
    message.liquidation_fee !== undefined &&
      (obj.liquidation_fee = message.liquidation_fee);
    message.mint_fee !== undefined && (obj.mint_fee = message.mint_fee);
    message.interest_fee !== undefined &&
      (obj.interest_fee = message.interest_fee);
    return obj;
  },

  fromPartial(object: DeepPartial<CollateralRiskParams>): CollateralRiskParams {
    const message = { ...baseCollateralRiskParams } as CollateralRiskParams;
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = object.collateral_denom;
    } else {
      message.collateral_denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.max_collateral !== undefined && object.max_collateral !== null) {
      message.max_collateral = object.max_collateral;
    } else {
      message.max_collateral = "";
    }
    if (object.max_black_mint !== undefined && object.max_black_mint !== null) {
      message.max_black_mint = object.max_black_mint;
    } else {
      message.max_black_mint = "";
    }
    if (
      object.liquidation_threshold !== undefined &&
      object.liquidation_threshold !== null
    ) {
      message.liquidation_threshold = object.liquidation_threshold;
    } else {
      message.liquidation_threshold = "";
    }
    if (object.loan_to_value !== undefined && object.loan_to_value !== null) {
      message.loan_to_value = object.loan_to_value;
    } else {
      message.loan_to_value = "";
    }
    if (
      object.basic_loan_to_value !== undefined &&
      object.basic_loan_to_value !== null
    ) {
      message.basic_loan_to_value = object.basic_loan_to_value;
    } else {
      message.basic_loan_to_value = "";
    }
    if (
      object.catalytic_fury_ratio !== undefined &&
      object.catalytic_fury_ratio !== null
    ) {
      message.catalytic_fury_ratio = object.catalytic_fury_ratio;
    } else {
      message.catalytic_fury_ratio = "";
    }
    if (
      object.liquidation_fee !== undefined &&
      object.liquidation_fee !== null
    ) {
      message.liquidation_fee = object.liquidation_fee;
    } else {
      message.liquidation_fee = "";
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = object.mint_fee;
    } else {
      message.mint_fee = "";
    }
    if (object.interest_fee !== undefined && object.interest_fee !== null) {
      message.interest_fee = object.interest_fee;
    } else {
      message.interest_fee = "";
    }
    return message;
  },
};

const baseRegisterBackingProposal: object = { title: "", description: "" };

export const RegisterBackingProposal = {
  encode(
    message: RegisterBackingProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.risk_params !== undefined) {
      BackingRiskParams.encode(
        message.risk_params,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterBackingProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterBackingProposal,
    } as RegisterBackingProposal;
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
          message.risk_params = BackingRiskParams.decode(
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

  fromJSON(object: any): RegisterBackingProposal {
    const message = {
      ...baseRegisterBackingProposal,
    } as RegisterBackingProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = BackingRiskParams.fromJSON(object.risk_params);
    } else {
      message.risk_params = undefined;
    }
    return message;
  },

  toJSON(message: RegisterBackingProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.risk_params !== undefined &&
      (obj.risk_params = message.risk_params
        ? BackingRiskParams.toJSON(message.risk_params)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterBackingProposal>
  ): RegisterBackingProposal {
    const message = {
      ...baseRegisterBackingProposal,
    } as RegisterBackingProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = BackingRiskParams.fromPartial(object.risk_params);
    } else {
      message.risk_params = undefined;
    }
    return message;
  },
};

const baseRegisterCollateralProposal: object = { title: "", description: "" };

export const RegisterCollateralProposal = {
  encode(
    message: RegisterCollateralProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.risk_params !== undefined) {
      CollateralRiskParams.encode(
        message.risk_params,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RegisterCollateralProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterCollateralProposal,
    } as RegisterCollateralProposal;
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
          message.risk_params = CollateralRiskParams.decode(
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

  fromJSON(object: any): RegisterCollateralProposal {
    const message = {
      ...baseRegisterCollateralProposal,
    } as RegisterCollateralProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = CollateralRiskParams.fromJSON(object.risk_params);
    } else {
      message.risk_params = undefined;
    }
    return message;
  },

  toJSON(message: RegisterCollateralProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.risk_params !== undefined &&
      (obj.risk_params = message.risk_params
        ? CollateralRiskParams.toJSON(message.risk_params)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterCollateralProposal>
  ): RegisterCollateralProposal {
    const message = {
      ...baseRegisterCollateralProposal,
    } as RegisterCollateralProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = CollateralRiskParams.fromPartial(
        object.risk_params
      );
    } else {
      message.risk_params = undefined;
    }
    return message;
  },
};

const baseSetBackingRiskParamsProposal: object = { title: "", description: "" };

export const SetBackingRiskParamsProposal = {
  encode(
    message: SetBackingRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.risk_params !== undefined) {
      BackingRiskParams.encode(
        message.risk_params,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SetBackingRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetBackingRiskParamsProposal,
    } as SetBackingRiskParamsProposal;
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
          message.risk_params = BackingRiskParams.decode(
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

  fromJSON(object: any): SetBackingRiskParamsProposal {
    const message = {
      ...baseSetBackingRiskParamsProposal,
    } as SetBackingRiskParamsProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = BackingRiskParams.fromJSON(object.risk_params);
    } else {
      message.risk_params = undefined;
    }
    return message;
  },

  toJSON(message: SetBackingRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.risk_params !== undefined &&
      (obj.risk_params = message.risk_params
        ? BackingRiskParams.toJSON(message.risk_params)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetBackingRiskParamsProposal>
  ): SetBackingRiskParamsProposal {
    const message = {
      ...baseSetBackingRiskParamsProposal,
    } as SetBackingRiskParamsProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = BackingRiskParams.fromPartial(object.risk_params);
    } else {
      message.risk_params = undefined;
    }
    return message;
  },
};

const baseSetCollateralRiskParamsProposal: object = {
  title: "",
  description: "",
};

export const SetCollateralRiskParamsProposal = {
  encode(
    message: SetCollateralRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.risk_params !== undefined) {
      CollateralRiskParams.encode(
        message.risk_params,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SetCollateralRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetCollateralRiskParamsProposal,
    } as SetCollateralRiskParamsProposal;
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
          message.risk_params = CollateralRiskParams.decode(
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

  fromJSON(object: any): SetCollateralRiskParamsProposal {
    const message = {
      ...baseSetCollateralRiskParamsProposal,
    } as SetCollateralRiskParamsProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = CollateralRiskParams.fromJSON(object.risk_params);
    } else {
      message.risk_params = undefined;
    }
    return message;
  },

  toJSON(message: SetCollateralRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.risk_params !== undefined &&
      (obj.risk_params = message.risk_params
        ? CollateralRiskParams.toJSON(message.risk_params)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetCollateralRiskParamsProposal>
  ): SetCollateralRiskParamsProposal {
    const message = {
      ...baseSetCollateralRiskParamsProposal,
    } as SetCollateralRiskParamsProposal;
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      message.risk_params = CollateralRiskParams.fromPartial(
        object.risk_params
      );
    } else {
      message.risk_params = undefined;
    }
    return message;
  },
};

const baseBatchBackingRiskParams: object = {};

export const BatchBackingRiskParams = {
  encode(
    message: BatchBackingRiskParams,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.risk_params) {
      BackingRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BatchBackingRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchBackingRiskParams } as BatchBackingRiskParams;
    message.risk_params = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.risk_params.push(
            BackingRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchBackingRiskParams {
    const message = { ...baseBatchBackingRiskParams } as BatchBackingRiskParams;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(BackingRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchBackingRiskParams): unknown {
    const obj: any = {};
    if (message.risk_params) {
      obj.risk_params = message.risk_params.map((e) =>
        e ? BackingRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.risk_params = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchBackingRiskParams>
  ): BatchBackingRiskParams {
    const message = { ...baseBatchBackingRiskParams } as BatchBackingRiskParams;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(BackingRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBatchSetBackingRiskParamsProposal: object = {
  title: "",
  description: "",
};

export const BatchSetBackingRiskParamsProposal = {
  encode(
    message: BatchSetBackingRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.risk_params) {
      BackingRiskParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BatchSetBackingRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBatchSetBackingRiskParamsProposal,
    } as BatchSetBackingRiskParamsProposal;
    message.risk_params = [];
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
          message.risk_params.push(
            BackingRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSetBackingRiskParamsProposal {
    const message = {
      ...baseBatchSetBackingRiskParamsProposal,
    } as BatchSetBackingRiskParamsProposal;
    message.risk_params = [];
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(BackingRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchSetBackingRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.risk_params) {
      obj.risk_params = message.risk_params.map((e) =>
        e ? BackingRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.risk_params = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchSetBackingRiskParamsProposal>
  ): BatchSetBackingRiskParamsProposal {
    const message = {
      ...baseBatchSetBackingRiskParamsProposal,
    } as BatchSetBackingRiskParamsProposal;
    message.risk_params = [];
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(BackingRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBatchCollateralRiskParams: object = {};

export const BatchCollateralRiskParams = {
  encode(
    message: BatchCollateralRiskParams,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.risk_params) {
      CollateralRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BatchCollateralRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBatchCollateralRiskParams,
    } as BatchCollateralRiskParams;
    message.risk_params = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.risk_params.push(
            CollateralRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchCollateralRiskParams {
    const message = {
      ...baseBatchCollateralRiskParams,
    } as BatchCollateralRiskParams;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(CollateralRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchCollateralRiskParams): unknown {
    const obj: any = {};
    if (message.risk_params) {
      obj.risk_params = message.risk_params.map((e) =>
        e ? CollateralRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.risk_params = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchCollateralRiskParams>
  ): BatchCollateralRiskParams {
    const message = {
      ...baseBatchCollateralRiskParams,
    } as BatchCollateralRiskParams;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(CollateralRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBatchSetCollateralRiskParamsProposal: object = {
  title: "",
  description: "",
};

export const BatchSetCollateralRiskParamsProposal = {
  encode(
    message: BatchSetCollateralRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.risk_params) {
      CollateralRiskParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BatchSetCollateralRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBatchSetCollateralRiskParamsProposal,
    } as BatchSetCollateralRiskParamsProposal;
    message.risk_params = [];
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
          message.risk_params.push(
            CollateralRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSetCollateralRiskParamsProposal {
    const message = {
      ...baseBatchSetCollateralRiskParamsProposal,
    } as BatchSetCollateralRiskParamsProposal;
    message.risk_params = [];
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(CollateralRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchSetCollateralRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.risk_params) {
      obj.risk_params = message.risk_params.map((e) =>
        e ? CollateralRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.risk_params = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchSetCollateralRiskParamsProposal>
  ): BatchSetCollateralRiskParamsProposal {
    const message = {
      ...baseBatchSetCollateralRiskParamsProposal,
    } as BatchSetCollateralRiskParamsProposal;
    message.risk_params = [];
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
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(CollateralRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTotalBacking: object = { backing_value: "" };

export const TotalBacking = {
  encode(message: TotalBacking, writer: Writer = Writer.create()): Writer {
    if (message.backing_value !== "") {
      writer.uint32(10).string(message.backing_value);
    }
    if (message.black_minted !== undefined) {
      Coin.encode(message.black_minted, writer.uint32(18).fork()).ldelim();
    }
    if (message.fury_burned !== undefined) {
      Coin.encode(message.fury_burned, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TotalBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalBacking } as TotalBacking;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_value = reader.string();
          break;
        case 2:
          message.black_minted = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fury_burned = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalBacking {
    const message = { ...baseTotalBacking } as TotalBacking;
    if (object.backing_value !== undefined && object.backing_value !== null) {
      message.backing_value = String(object.backing_value);
    } else {
      message.backing_value = "";
    }
    if (object.black_minted !== undefined && object.black_minted !== null) {
      message.black_minted = Coin.fromJSON(object.black_minted);
    } else {
      message.black_minted = undefined;
    }
    if (object.fury_burned !== undefined && object.fury_burned !== null) {
      message.fury_burned = Coin.fromJSON(object.fury_burned);
    } else {
      message.fury_burned = undefined;
    }
    return message;
  },

  toJSON(message: TotalBacking): unknown {
    const obj: any = {};
    message.backing_value !== undefined &&
      (obj.backing_value = message.backing_value);
    message.black_minted !== undefined &&
      (obj.black_minted = message.black_minted
        ? Coin.toJSON(message.black_minted)
        : undefined);
    message.fury_burned !== undefined &&
      (obj.fury_burned = message.fury_burned
        ? Coin.toJSON(message.fury_burned)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalBacking>): TotalBacking {
    const message = { ...baseTotalBacking } as TotalBacking;
    if (object.backing_value !== undefined && object.backing_value !== null) {
      message.backing_value = object.backing_value;
    } else {
      message.backing_value = "";
    }
    if (object.black_minted !== undefined && object.black_minted !== null) {
      message.black_minted = Coin.fromPartial(object.black_minted);
    } else {
      message.black_minted = undefined;
    }
    if (object.fury_burned !== undefined && object.fury_burned !== null) {
      message.fury_burned = Coin.fromPartial(object.fury_burned);
    } else {
      message.fury_burned = undefined;
    }
    return message;
  },
};

const basePoolBacking: object = {};

export const PoolBacking = {
  encode(message: PoolBacking, writer: Writer = Writer.create()): Writer {
    if (message.black_minted !== undefined) {
      Coin.encode(message.black_minted, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing !== undefined) {
      Coin.encode(message.backing, writer.uint32(18).fork()).ldelim();
    }
    if (message.fury_burned !== undefined) {
      Coin.encode(message.fury_burned, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolBacking } as PoolBacking;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.black_minted = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fury_burned = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolBacking {
    const message = { ...basePoolBacking } as PoolBacking;
    if (object.black_minted !== undefined && object.black_minted !== null) {
      message.black_minted = Coin.fromJSON(object.black_minted);
    } else {
      message.black_minted = undefined;
    }
    if (object.backing !== undefined && object.backing !== null) {
      message.backing = Coin.fromJSON(object.backing);
    } else {
      message.backing = undefined;
    }
    if (object.fury_burned !== undefined && object.fury_burned !== null) {
      message.fury_burned = Coin.fromJSON(object.fury_burned);
    } else {
      message.fury_burned = undefined;
    }
    return message;
  },

  toJSON(message: PoolBacking): unknown {
    const obj: any = {};
    message.black_minted !== undefined &&
      (obj.black_minted = message.black_minted
        ? Coin.toJSON(message.black_minted)
        : undefined);
    message.backing !== undefined &&
      (obj.backing = message.backing
        ? Coin.toJSON(message.backing)
        : undefined);
    message.fury_burned !== undefined &&
      (obj.fury_burned = message.fury_burned
        ? Coin.toJSON(message.fury_burned)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolBacking>): PoolBacking {
    const message = { ...basePoolBacking } as PoolBacking;
    if (object.black_minted !== undefined && object.black_minted !== null) {
      message.black_minted = Coin.fromPartial(object.black_minted);
    } else {
      message.black_minted = undefined;
    }
    if (object.backing !== undefined && object.backing !== null) {
      message.backing = Coin.fromPartial(object.backing);
    } else {
      message.backing = undefined;
    }
    if (object.fury_burned !== undefined && object.fury_burned !== null) {
      message.fury_burned = Coin.fromPartial(object.fury_burned);
    } else {
      message.fury_burned = undefined;
    }
    return message;
  },
};

const baseAccountBacking: object = {};

export const AccountBacking = {
  encode(_: AccountBacking, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountBacking } as AccountBacking;
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

  fromJSON(_: any): AccountBacking {
    const message = { ...baseAccountBacking } as AccountBacking;
    return message;
  },

  toJSON(_: AccountBacking): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AccountBacking>): AccountBacking {
    const message = { ...baseAccountBacking } as AccountBacking;
    return message;
  },
};

const baseTotalCollateral: object = {};

export const TotalCollateral = {
  encode(message: TotalCollateral, writer: Writer = Writer.create()): Writer {
    if (message.black_debt !== undefined) {
      Coin.encode(message.black_debt, writer.uint32(10).fork()).ldelim();
    }
    if (message.fury_collateralized !== undefined) {
      Coin.encode(
        message.fury_collateralized,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TotalCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalCollateral } as TotalCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.black_debt = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fury_collateralized = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalCollateral {
    const message = { ...baseTotalCollateral } as TotalCollateral;
    if (object.black_debt !== undefined && object.black_debt !== null) {
      message.black_debt = Coin.fromJSON(object.black_debt);
    } else {
      message.black_debt = undefined;
    }
    if (
      object.fury_collateralized !== undefined &&
      object.fury_collateralized !== null
    ) {
      message.fury_collateralized = Coin.fromJSON(object.fury_collateralized);
    } else {
      message.fury_collateralized = undefined;
    }
    return message;
  },

  toJSON(message: TotalCollateral): unknown {
    const obj: any = {};
    message.black_debt !== undefined &&
      (obj.black_debt = message.black_debt
        ? Coin.toJSON(message.black_debt)
        : undefined);
    message.fury_collateralized !== undefined &&
      (obj.fury_collateralized = message.fury_collateralized
        ? Coin.toJSON(message.fury_collateralized)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalCollateral>): TotalCollateral {
    const message = { ...baseTotalCollateral } as TotalCollateral;
    if (object.black_debt !== undefined && object.black_debt !== null) {
      message.black_debt = Coin.fromPartial(object.black_debt);
    } else {
      message.black_debt = undefined;
    }
    if (
      object.fury_collateralized !== undefined &&
      object.fury_collateralized !== null
    ) {
      message.fury_collateralized = Coin.fromPartial(
        object.fury_collateralized
      );
    } else {
      message.fury_collateralized = undefined;
    }
    return message;
  },
};

const basePoolCollateral: object = {};

export const PoolCollateral = {
  encode(message: PoolCollateral, writer: Writer = Writer.create()): Writer {
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(10).fork()).ldelim();
    }
    if (message.black_debt !== undefined) {
      Coin.encode(message.black_debt, writer.uint32(18).fork()).ldelim();
    }
    if (message.fury_collateralized !== undefined) {
      Coin.encode(
        message.fury_collateralized,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolCollateral } as PoolCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.black_debt = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fury_collateralized = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolCollateral {
    const message = { ...basePoolCollateral } as PoolCollateral;
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.black_debt !== undefined && object.black_debt !== null) {
      message.black_debt = Coin.fromJSON(object.black_debt);
    } else {
      message.black_debt = undefined;
    }
    if (
      object.fury_collateralized !== undefined &&
      object.fury_collateralized !== null
    ) {
      message.fury_collateralized = Coin.fromJSON(object.fury_collateralized);
    } else {
      message.fury_collateralized = undefined;
    }
    return message;
  },

  toJSON(message: PoolCollateral): unknown {
    const obj: any = {};
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.black_debt !== undefined &&
      (obj.black_debt = message.black_debt
        ? Coin.toJSON(message.black_debt)
        : undefined);
    message.fury_collateralized !== undefined &&
      (obj.fury_collateralized = message.fury_collateralized
        ? Coin.toJSON(message.fury_collateralized)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolCollateral>): PoolCollateral {
    const message = { ...basePoolCollateral } as PoolCollateral;
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.black_debt !== undefined && object.black_debt !== null) {
      message.black_debt = Coin.fromPartial(object.black_debt);
    } else {
      message.black_debt = undefined;
    }
    if (
      object.fury_collateralized !== undefined &&
      object.fury_collateralized !== null
    ) {
      message.fury_collateralized = Coin.fromPartial(
        object.fury_collateralized
      );
    } else {
      message.fury_collateralized = undefined;
    }
    return message;
  },
};

const baseAccountCollateral: object = { account: "", last_settlement_block: 0 };

export const AccountCollateral = {
  encode(message: AccountCollateral, writer: Writer = Writer.create()): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.black_debt !== undefined) {
      Coin.encode(message.black_debt, writer.uint32(26).fork()).ldelim();
    }
    if (message.fury_collateralized !== undefined) {
      Coin.encode(
        message.fury_collateralized,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.last_interest !== undefined) {
      Coin.encode(message.last_interest, writer.uint32(42).fork()).ldelim();
    }
    if (message.last_settlement_block !== 0) {
      writer.uint32(48).int64(message.last_settlement_block);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountCollateral } as AccountCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.black_debt = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.fury_collateralized = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.last_interest = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.last_settlement_block = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountCollateral {
    const message = { ...baseAccountCollateral } as AccountCollateral;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.black_debt !== undefined && object.black_debt !== null) {
      message.black_debt = Coin.fromJSON(object.black_debt);
    } else {
      message.black_debt = undefined;
    }
    if (
      object.fury_collateralized !== undefined &&
      object.fury_collateralized !== null
    ) {
      message.fury_collateralized = Coin.fromJSON(object.fury_collateralized);
    } else {
      message.fury_collateralized = undefined;
    }
    if (object.last_interest !== undefined && object.last_interest !== null) {
      message.last_interest = Coin.fromJSON(object.last_interest);
    } else {
      message.last_interest = undefined;
    }
    if (
      object.last_settlement_block !== undefined &&
      object.last_settlement_block !== null
    ) {
      message.last_settlement_block = Number(object.last_settlement_block);
    } else {
      message.last_settlement_block = 0;
    }
    return message;
  },

  toJSON(message: AccountCollateral): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.black_debt !== undefined &&
      (obj.black_debt = message.black_debt
        ? Coin.toJSON(message.black_debt)
        : undefined);
    message.fury_collateralized !== undefined &&
      (obj.fury_collateralized = message.fury_collateralized
        ? Coin.toJSON(message.fury_collateralized)
        : undefined);
    message.last_interest !== undefined &&
      (obj.last_interest = message.last_interest
        ? Coin.toJSON(message.last_interest)
        : undefined);
    message.last_settlement_block !== undefined &&
      (obj.last_settlement_block = message.last_settlement_block);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountCollateral>): AccountCollateral {
    const message = { ...baseAccountCollateral } as AccountCollateral;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.black_debt !== undefined && object.black_debt !== null) {
      message.black_debt = Coin.fromPartial(object.black_debt);
    } else {
      message.black_debt = undefined;
    }
    if (
      object.fury_collateralized !== undefined &&
      object.fury_collateralized !== null
    ) {
      message.fury_collateralized = Coin.fromPartial(
        object.fury_collateralized
      );
    } else {
      message.fury_collateralized = undefined;
    }
    if (object.last_interest !== undefined && object.last_interest !== null) {
      message.last_interest = Coin.fromPartial(object.last_interest);
    } else {
      message.last_interest = undefined;
    }
    if (
      object.last_settlement_block !== undefined &&
      object.last_settlement_block !== null
    ) {
      message.last_settlement_block = object.last_settlement_block;
    } else {
      message.last_settlement_block = 0;
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
