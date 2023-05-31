/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  BackingRiskParams,
  CollateralRiskParams,
  PoolBacking,
  PoolCollateral,
  AccountCollateral,
  TotalBacking,
  TotalCollateral,
} from "../../../blackfury/maker/v1/maker";
import { Params } from "../../../blackfury/maker/v1/genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "blackfury.maker.v1";

export interface QueryAllBackingRiskParamsRequest {}

export interface QueryAllBackingRiskParamsResponse {
  risk_params: BackingRiskParams[];
}

export interface QueryAllCollateralRiskParamsRequest {}

export interface QueryAllCollateralRiskParamsResponse {
  risk_params: CollateralRiskParams[];
}

export interface QueryAllBackingPoolsRequest {}

export interface QueryAllBackingPoolsResponse {
  backing_pools: PoolBacking[];
}

export interface QueryAllCollateralPoolsRequest {}

export interface QueryAllCollateralPoolsResponse {
  collateral_pools: PoolCollateral[];
}

export interface QueryBackingPoolRequest {
  backing_denom: string;
}

export interface QueryBackingPoolResponse {
  backing_pool: PoolBacking | undefined;
}

export interface QueryCollateralPoolRequest {
  collateral_denom: string;
}

export interface QueryCollateralPoolResponse {
  collateral_pool: PoolCollateral | undefined;
}

export interface QueryCollateralOfAccountRequest {
  account: string;
  collateral_denom: string;
}

export interface QueryCollateralOfAccountResponse {
  account_collateral: AccountCollateral | undefined;
}

export interface QueryTotalBackingRequest {}

export interface QueryTotalBackingResponse {
  total_backing: TotalBacking | undefined;
}

export interface QueryTotalCollateralRequest {}

export interface QueryTotalCollateralResponse {
  total_collateral: TotalCollateral | undefined;
}

export interface QueryBackingRatioRequest {}

export interface QueryBackingRatioResponse {
  backing_ratio: string;
  last_update_block: number;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface EstimateMintBySwapInRequest {
  mint_out: Coin | undefined;
  backing_denom: string;
  full_backing: boolean;
}

export interface EstimateMintBySwapInResponse {
  backing_in: Coin | undefined;
  fury_in: Coin | undefined;
  mint_fee: Coin | undefined;
}

export interface EstimateMintBySwapOutRequest {
  backing_in_max: Coin | undefined;
  fury_in_max: Coin | undefined;
  full_backing: boolean;
}

export interface EstimateMintBySwapOutResponse {
  backing_in: Coin | undefined;
  fury_in: Coin | undefined;
  mint_out: Coin | undefined;
  mint_fee: Coin | undefined;
}

export interface EstimateBurnBySwapInRequest {
  backing_out_max: Coin | undefined;
  fury_out_max: Coin | undefined;
}

export interface EstimateBurnBySwapInResponse {
  burn_in: Coin | undefined;
  backing_out: Coin | undefined;
  fury_out: Coin | undefined;
  burn_fee: Coin | undefined;
}

export interface EstimateBurnBySwapOutRequest {
  burn_in: Coin | undefined;
  backing_denom: string;
}

export interface EstimateBurnBySwapOutResponse {
  backing_out: Coin | undefined;
  fury_out: Coin | undefined;
  burn_fee: Coin | undefined;
}

export interface EstimateBuyBackingInRequest {
  backing_out: Coin | undefined;
}

export interface EstimateBuyBackingInResponse {
  fury_in: Coin | undefined;
  buyback_fee: Coin | undefined;
}

export interface EstimateBuyBackingOutRequest {
  fury_in: Coin | undefined;
  backing_denom: string;
}

export interface EstimateBuyBackingOutResponse {
  backing_out: Coin | undefined;
  buyback_fee: Coin | undefined;
}

export interface EstimateSellBackingInRequest {
  fury_out: Coin | undefined;
  backing_denom: string;
}

export interface EstimateSellBackingInResponse {
  backing_in: Coin | undefined;
  sellback_fee: Coin | undefined;
}

export interface EstimateSellBackingOutRequest {
  backing_in: Coin | undefined;
}

export interface EstimateSellBackingOutResponse {
  fury_out: Coin | undefined;
  sellback_fee: Coin | undefined;
}

const baseQueryAllBackingRiskParamsRequest: object = {};

export const QueryAllBackingRiskParamsRequest = {
  encode(
    _: QueryAllBackingRiskParamsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingRiskParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingRiskParamsRequest,
    } as QueryAllBackingRiskParamsRequest;
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

  fromJSON(_: any): QueryAllBackingRiskParamsRequest {
    const message = {
      ...baseQueryAllBackingRiskParamsRequest,
    } as QueryAllBackingRiskParamsRequest;
    return message;
  },

  toJSON(_: QueryAllBackingRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllBackingRiskParamsRequest>
  ): QueryAllBackingRiskParamsRequest {
    const message = {
      ...baseQueryAllBackingRiskParamsRequest,
    } as QueryAllBackingRiskParamsRequest;
    return message;
  },
};

const baseQueryAllBackingRiskParamsResponse: object = {};

export const QueryAllBackingRiskParamsResponse = {
  encode(
    message: QueryAllBackingRiskParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.risk_params) {
      BackingRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingRiskParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingRiskParamsResponse,
    } as QueryAllBackingRiskParamsResponse;
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

  fromJSON(object: any): QueryAllBackingRiskParamsResponse {
    const message = {
      ...baseQueryAllBackingRiskParamsResponse,
    } as QueryAllBackingRiskParamsResponse;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(BackingRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllBackingRiskParamsResponse): unknown {
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
    object: DeepPartial<QueryAllBackingRiskParamsResponse>
  ): QueryAllBackingRiskParamsResponse {
    const message = {
      ...baseQueryAllBackingRiskParamsResponse,
    } as QueryAllBackingRiskParamsResponse;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(BackingRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllCollateralRiskParamsRequest: object = {};

export const QueryAllCollateralRiskParamsRequest = {
  encode(
    _: QueryAllCollateralRiskParamsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollateralRiskParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralRiskParamsRequest,
    } as QueryAllCollateralRiskParamsRequest;
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

  fromJSON(_: any): QueryAllCollateralRiskParamsRequest {
    const message = {
      ...baseQueryAllCollateralRiskParamsRequest,
    } as QueryAllCollateralRiskParamsRequest;
    return message;
  },

  toJSON(_: QueryAllCollateralRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllCollateralRiskParamsRequest>
  ): QueryAllCollateralRiskParamsRequest {
    const message = {
      ...baseQueryAllCollateralRiskParamsRequest,
    } as QueryAllCollateralRiskParamsRequest;
    return message;
  },
};

const baseQueryAllCollateralRiskParamsResponse: object = {};

export const QueryAllCollateralRiskParamsResponse = {
  encode(
    message: QueryAllCollateralRiskParamsResponse,
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
  ): QueryAllCollateralRiskParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralRiskParamsResponse,
    } as QueryAllCollateralRiskParamsResponse;
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

  fromJSON(object: any): QueryAllCollateralRiskParamsResponse {
    const message = {
      ...baseQueryAllCollateralRiskParamsResponse,
    } as QueryAllCollateralRiskParamsResponse;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(CollateralRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllCollateralRiskParamsResponse): unknown {
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
    object: DeepPartial<QueryAllCollateralRiskParamsResponse>
  ): QueryAllCollateralRiskParamsResponse {
    const message = {
      ...baseQueryAllCollateralRiskParamsResponse,
    } as QueryAllCollateralRiskParamsResponse;
    message.risk_params = [];
    if (object.risk_params !== undefined && object.risk_params !== null) {
      for (const e of object.risk_params) {
        message.risk_params.push(CollateralRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllBackingPoolsRequest: object = {};

export const QueryAllBackingPoolsRequest = {
  encode(
    _: QueryAllBackingPoolsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingPoolsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingPoolsRequest,
    } as QueryAllBackingPoolsRequest;
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

  fromJSON(_: any): QueryAllBackingPoolsRequest {
    const message = {
      ...baseQueryAllBackingPoolsRequest,
    } as QueryAllBackingPoolsRequest;
    return message;
  },

  toJSON(_: QueryAllBackingPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllBackingPoolsRequest>
  ): QueryAllBackingPoolsRequest {
    const message = {
      ...baseQueryAllBackingPoolsRequest,
    } as QueryAllBackingPoolsRequest;
    return message;
  },
};

const baseQueryAllBackingPoolsResponse: object = {};

export const QueryAllBackingPoolsResponse = {
  encode(
    message: QueryAllBackingPoolsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.backing_pools) {
      PoolBacking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingPoolsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingPoolsResponse,
    } as QueryAllBackingPoolsResponse;
    message.backing_pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_pools.push(
            PoolBacking.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBackingPoolsResponse {
    const message = {
      ...baseQueryAllBackingPoolsResponse,
    } as QueryAllBackingPoolsResponse;
    message.backing_pools = [];
    if (object.backing_pools !== undefined && object.backing_pools !== null) {
      for (const e of object.backing_pools) {
        message.backing_pools.push(PoolBacking.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllBackingPoolsResponse): unknown {
    const obj: any = {};
    if (message.backing_pools) {
      obj.backing_pools = message.backing_pools.map((e) =>
        e ? PoolBacking.toJSON(e) : undefined
      );
    } else {
      obj.backing_pools = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBackingPoolsResponse>
  ): QueryAllBackingPoolsResponse {
    const message = {
      ...baseQueryAllBackingPoolsResponse,
    } as QueryAllBackingPoolsResponse;
    message.backing_pools = [];
    if (object.backing_pools !== undefined && object.backing_pools !== null) {
      for (const e of object.backing_pools) {
        message.backing_pools.push(PoolBacking.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllCollateralPoolsRequest: object = {};

export const QueryAllCollateralPoolsRequest = {
  encode(
    _: QueryAllCollateralPoolsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollateralPoolsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralPoolsRequest,
    } as QueryAllCollateralPoolsRequest;
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

  fromJSON(_: any): QueryAllCollateralPoolsRequest {
    const message = {
      ...baseQueryAllCollateralPoolsRequest,
    } as QueryAllCollateralPoolsRequest;
    return message;
  },

  toJSON(_: QueryAllCollateralPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllCollateralPoolsRequest>
  ): QueryAllCollateralPoolsRequest {
    const message = {
      ...baseQueryAllCollateralPoolsRequest,
    } as QueryAllCollateralPoolsRequest;
    return message;
  },
};

const baseQueryAllCollateralPoolsResponse: object = {};

export const QueryAllCollateralPoolsResponse = {
  encode(
    message: QueryAllCollateralPoolsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.collateral_pools) {
      PoolCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollateralPoolsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralPoolsResponse,
    } as QueryAllCollateralPoolsResponse;
    message.collateral_pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral_pools.push(
            PoolCollateral.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCollateralPoolsResponse {
    const message = {
      ...baseQueryAllCollateralPoolsResponse,
    } as QueryAllCollateralPoolsResponse;
    message.collateral_pools = [];
    if (
      object.collateral_pools !== undefined &&
      object.collateral_pools !== null
    ) {
      for (const e of object.collateral_pools) {
        message.collateral_pools.push(PoolCollateral.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllCollateralPoolsResponse): unknown {
    const obj: any = {};
    if (message.collateral_pools) {
      obj.collateral_pools = message.collateral_pools.map((e) =>
        e ? PoolCollateral.toJSON(e) : undefined
      );
    } else {
      obj.collateral_pools = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCollateralPoolsResponse>
  ): QueryAllCollateralPoolsResponse {
    const message = {
      ...baseQueryAllCollateralPoolsResponse,
    } as QueryAllCollateralPoolsResponse;
    message.collateral_pools = [];
    if (
      object.collateral_pools !== undefined &&
      object.collateral_pools !== null
    ) {
      for (const e of object.collateral_pools) {
        message.collateral_pools.push(PoolCollateral.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryBackingPoolRequest: object = { backing_denom: "" };

export const QueryBackingPoolRequest = {
  encode(
    message: QueryBackingPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_denom !== "") {
      writer.uint32(10).string(message.backing_denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBackingPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingPoolRequest,
    } as QueryBackingPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolRequest {
    const message = {
      ...baseQueryBackingPoolRequest,
    } as QueryBackingPoolRequest;
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = String(object.backing_denom);
    } else {
      message.backing_denom = "";
    }
    return message;
  },

  toJSON(message: QueryBackingPoolRequest): unknown {
    const obj: any = {};
    message.backing_denom !== undefined &&
      (obj.backing_denom = message.backing_denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBackingPoolRequest>
  ): QueryBackingPoolRequest {
    const message = {
      ...baseQueryBackingPoolRequest,
    } as QueryBackingPoolRequest;
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = object.backing_denom;
    } else {
      message.backing_denom = "";
    }
    return message;
  },
};

const baseQueryBackingPoolResponse: object = {};

export const QueryBackingPoolResponse = {
  encode(
    message: QueryBackingPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_pool !== undefined) {
      PoolBacking.encode(
        message.backing_pool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBackingPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingPoolResponse,
    } as QueryBackingPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_pool = PoolBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolResponse {
    const message = {
      ...baseQueryBackingPoolResponse,
    } as QueryBackingPoolResponse;
    if (object.backing_pool !== undefined && object.backing_pool !== null) {
      message.backing_pool = PoolBacking.fromJSON(object.backing_pool);
    } else {
      message.backing_pool = undefined;
    }
    return message;
  },

  toJSON(message: QueryBackingPoolResponse): unknown {
    const obj: any = {};
    message.backing_pool !== undefined &&
      (obj.backing_pool = message.backing_pool
        ? PoolBacking.toJSON(message.backing_pool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBackingPoolResponse>
  ): QueryBackingPoolResponse {
    const message = {
      ...baseQueryBackingPoolResponse,
    } as QueryBackingPoolResponse;
    if (object.backing_pool !== undefined && object.backing_pool !== null) {
      message.backing_pool = PoolBacking.fromPartial(object.backing_pool);
    } else {
      message.backing_pool = undefined;
    }
    return message;
  },
};

const baseQueryCollateralPoolRequest: object = { collateral_denom: "" };

export const QueryCollateralPoolRequest = {
  encode(
    message: QueryCollateralPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collateral_denom !== "") {
      writer.uint32(10).string(message.collateral_denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralPoolRequest,
    } as QueryCollateralPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralPoolRequest {
    const message = {
      ...baseQueryCollateralPoolRequest,
    } as QueryCollateralPoolRequest;
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = String(object.collateral_denom);
    } else {
      message.collateral_denom = "";
    }
    return message;
  },

  toJSON(message: QueryCollateralPoolRequest): unknown {
    const obj: any = {};
    message.collateral_denom !== undefined &&
      (obj.collateral_denom = message.collateral_denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralPoolRequest>
  ): QueryCollateralPoolRequest {
    const message = {
      ...baseQueryCollateralPoolRequest,
    } as QueryCollateralPoolRequest;
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = object.collateral_denom;
    } else {
      message.collateral_denom = "";
    }
    return message;
  },
};

const baseQueryCollateralPoolResponse: object = {};

export const QueryCollateralPoolResponse = {
  encode(
    message: QueryCollateralPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collateral_pool !== undefined) {
      PoolCollateral.encode(
        message.collateral_pool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralPoolResponse,
    } as QueryCollateralPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral_pool = PoolCollateral.decode(
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

  fromJSON(object: any): QueryCollateralPoolResponse {
    const message = {
      ...baseQueryCollateralPoolResponse,
    } as QueryCollateralPoolResponse;
    if (
      object.collateral_pool !== undefined &&
      object.collateral_pool !== null
    ) {
      message.collateral_pool = PoolCollateral.fromJSON(object.collateral_pool);
    } else {
      message.collateral_pool = undefined;
    }
    return message;
  },

  toJSON(message: QueryCollateralPoolResponse): unknown {
    const obj: any = {};
    message.collateral_pool !== undefined &&
      (obj.collateral_pool = message.collateral_pool
        ? PoolCollateral.toJSON(message.collateral_pool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralPoolResponse>
  ): QueryCollateralPoolResponse {
    const message = {
      ...baseQueryCollateralPoolResponse,
    } as QueryCollateralPoolResponse;
    if (
      object.collateral_pool !== undefined &&
      object.collateral_pool !== null
    ) {
      message.collateral_pool = PoolCollateral.fromPartial(
        object.collateral_pool
      );
    } else {
      message.collateral_pool = undefined;
    }
    return message;
  },
};

const baseQueryCollateralOfAccountRequest: object = {
  account: "",
  collateral_denom: "",
};

export const QueryCollateralOfAccountRequest = {
  encode(
    message: QueryCollateralOfAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.collateral_denom !== "") {
      writer.uint32(18).string(message.collateral_denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralOfAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralOfAccountRequest,
    } as QueryCollateralOfAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.collateral_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralOfAccountRequest {
    const message = {
      ...baseQueryCollateralOfAccountRequest,
    } as QueryCollateralOfAccountRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = String(object.collateral_denom);
    } else {
      message.collateral_denom = "";
    }
    return message;
  },

  toJSON(message: QueryCollateralOfAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.collateral_denom !== undefined &&
      (obj.collateral_denom = message.collateral_denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralOfAccountRequest>
  ): QueryCollateralOfAccountRequest {
    const message = {
      ...baseQueryCollateralOfAccountRequest,
    } as QueryCollateralOfAccountRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (
      object.collateral_denom !== undefined &&
      object.collateral_denom !== null
    ) {
      message.collateral_denom = object.collateral_denom;
    } else {
      message.collateral_denom = "";
    }
    return message;
  },
};

const baseQueryCollateralOfAccountResponse: object = {};

export const QueryCollateralOfAccountResponse = {
  encode(
    message: QueryCollateralOfAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account_collateral !== undefined) {
      AccountCollateral.encode(
        message.account_collateral,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralOfAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralOfAccountResponse,
    } as QueryCollateralOfAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account_collateral = AccountCollateral.decode(
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

  fromJSON(object: any): QueryCollateralOfAccountResponse {
    const message = {
      ...baseQueryCollateralOfAccountResponse,
    } as QueryCollateralOfAccountResponse;
    if (
      object.account_collateral !== undefined &&
      object.account_collateral !== null
    ) {
      message.account_collateral = AccountCollateral.fromJSON(
        object.account_collateral
      );
    } else {
      message.account_collateral = undefined;
    }
    return message;
  },

  toJSON(message: QueryCollateralOfAccountResponse): unknown {
    const obj: any = {};
    message.account_collateral !== undefined &&
      (obj.account_collateral = message.account_collateral
        ? AccountCollateral.toJSON(message.account_collateral)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralOfAccountResponse>
  ): QueryCollateralOfAccountResponse {
    const message = {
      ...baseQueryCollateralOfAccountResponse,
    } as QueryCollateralOfAccountResponse;
    if (
      object.account_collateral !== undefined &&
      object.account_collateral !== null
    ) {
      message.account_collateral = AccountCollateral.fromPartial(
        object.account_collateral
      );
    } else {
      message.account_collateral = undefined;
    }
    return message;
  },
};

const baseQueryTotalBackingRequest: object = {};

export const QueryTotalBackingRequest = {
  encode(
    _: QueryTotalBackingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalBackingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalBackingRequest,
    } as QueryTotalBackingRequest;
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

  fromJSON(_: any): QueryTotalBackingRequest {
    const message = {
      ...baseQueryTotalBackingRequest,
    } as QueryTotalBackingRequest;
    return message;
  },

  toJSON(_: QueryTotalBackingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryTotalBackingRequest>
  ): QueryTotalBackingRequest {
    const message = {
      ...baseQueryTotalBackingRequest,
    } as QueryTotalBackingRequest;
    return message;
  },
};

const baseQueryTotalBackingResponse: object = {};

export const QueryTotalBackingResponse = {
  encode(
    message: QueryTotalBackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.total_backing !== undefined) {
      TotalBacking.encode(
        message.total_backing,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalBackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalBackingResponse,
    } as QueryTotalBackingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_backing = TotalBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBackingResponse {
    const message = {
      ...baseQueryTotalBackingResponse,
    } as QueryTotalBackingResponse;
    if (object.total_backing !== undefined && object.total_backing !== null) {
      message.total_backing = TotalBacking.fromJSON(object.total_backing);
    } else {
      message.total_backing = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalBackingResponse): unknown {
    const obj: any = {};
    message.total_backing !== undefined &&
      (obj.total_backing = message.total_backing
        ? TotalBacking.toJSON(message.total_backing)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalBackingResponse>
  ): QueryTotalBackingResponse {
    const message = {
      ...baseQueryTotalBackingResponse,
    } as QueryTotalBackingResponse;
    if (object.total_backing !== undefined && object.total_backing !== null) {
      message.total_backing = TotalBacking.fromPartial(object.total_backing);
    } else {
      message.total_backing = undefined;
    }
    return message;
  },
};

const baseQueryTotalCollateralRequest: object = {};

export const QueryTotalCollateralRequest = {
  encode(
    _: QueryTotalCollateralRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalCollateralRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalCollateralRequest,
    } as QueryTotalCollateralRequest;
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

  fromJSON(_: any): QueryTotalCollateralRequest {
    const message = {
      ...baseQueryTotalCollateralRequest,
    } as QueryTotalCollateralRequest;
    return message;
  },

  toJSON(_: QueryTotalCollateralRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryTotalCollateralRequest>
  ): QueryTotalCollateralRequest {
    const message = {
      ...baseQueryTotalCollateralRequest,
    } as QueryTotalCollateralRequest;
    return message;
  },
};

const baseQueryTotalCollateralResponse: object = {};

export const QueryTotalCollateralResponse = {
  encode(
    message: QueryTotalCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.total_collateral !== undefined) {
      TotalCollateral.encode(
        message.total_collateral,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalCollateralResponse,
    } as QueryTotalCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_collateral = TotalCollateral.decode(
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

  fromJSON(object: any): QueryTotalCollateralResponse {
    const message = {
      ...baseQueryTotalCollateralResponse,
    } as QueryTotalCollateralResponse;
    if (
      object.total_collateral !== undefined &&
      object.total_collateral !== null
    ) {
      message.total_collateral = TotalCollateral.fromJSON(
        object.total_collateral
      );
    } else {
      message.total_collateral = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalCollateralResponse): unknown {
    const obj: any = {};
    message.total_collateral !== undefined &&
      (obj.total_collateral = message.total_collateral
        ? TotalCollateral.toJSON(message.total_collateral)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalCollateralResponse>
  ): QueryTotalCollateralResponse {
    const message = {
      ...baseQueryTotalCollateralResponse,
    } as QueryTotalCollateralResponse;
    if (
      object.total_collateral !== undefined &&
      object.total_collateral !== null
    ) {
      message.total_collateral = TotalCollateral.fromPartial(
        object.total_collateral
      );
    } else {
      message.total_collateral = undefined;
    }
    return message;
  },
};

const baseQueryBackingRatioRequest: object = {};

export const QueryBackingRatioRequest = {
  encode(
    _: QueryBackingRatioRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBackingRatioRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingRatioRequest,
    } as QueryBackingRatioRequest;
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

  fromJSON(_: any): QueryBackingRatioRequest {
    const message = {
      ...baseQueryBackingRatioRequest,
    } as QueryBackingRatioRequest;
    return message;
  },

  toJSON(_: QueryBackingRatioRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryBackingRatioRequest>
  ): QueryBackingRatioRequest {
    const message = {
      ...baseQueryBackingRatioRequest,
    } as QueryBackingRatioRequest;
    return message;
  },
};

const baseQueryBackingRatioResponse: object = {
  backing_ratio: "",
  last_update_block: 0,
};

export const QueryBackingRatioResponse = {
  encode(
    message: QueryBackingRatioResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_ratio !== "") {
      writer.uint32(10).string(message.backing_ratio);
    }
    if (message.last_update_block !== 0) {
      writer.uint32(16).int64(message.last_update_block);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBackingRatioResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingRatioResponse,
    } as QueryBackingRatioResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_ratio = reader.string();
          break;
        case 2:
          message.last_update_block = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingRatioResponse {
    const message = {
      ...baseQueryBackingRatioResponse,
    } as QueryBackingRatioResponse;
    if (object.backing_ratio !== undefined && object.backing_ratio !== null) {
      message.backing_ratio = String(object.backing_ratio);
    } else {
      message.backing_ratio = "";
    }
    if (
      object.last_update_block !== undefined &&
      object.last_update_block !== null
    ) {
      message.last_update_block = Number(object.last_update_block);
    } else {
      message.last_update_block = 0;
    }
    return message;
  },

  toJSON(message: QueryBackingRatioResponse): unknown {
    const obj: any = {};
    message.backing_ratio !== undefined &&
      (obj.backing_ratio = message.backing_ratio);
    message.last_update_block !== undefined &&
      (obj.last_update_block = message.last_update_block);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBackingRatioResponse>
  ): QueryBackingRatioResponse {
    const message = {
      ...baseQueryBackingRatioResponse,
    } as QueryBackingRatioResponse;
    if (object.backing_ratio !== undefined && object.backing_ratio !== null) {
      message.backing_ratio = object.backing_ratio;
    } else {
      message.backing_ratio = "";
    }
    if (
      object.last_update_block !== undefined &&
      object.last_update_block !== null
    ) {
      message.last_update_block = object.last_update_block;
    } else {
      message.last_update_block = 0;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseEstimateMintBySwapInRequest: object = {
  backing_denom: "",
  full_backing: false,
};

export const EstimateMintBySwapInRequest = {
  encode(
    message: EstimateMintBySwapInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mint_out !== undefined) {
      Coin.encode(message.mint_out, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing_denom !== "") {
      writer.uint32(18).string(message.backing_denom);
    }
    if (message.full_backing === true) {
      writer.uint32(24).bool(message.full_backing);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapInRequest,
    } as EstimateMintBySwapInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mint_out = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing_denom = reader.string();
          break;
        case 3:
          message.full_backing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapInRequest {
    const message = {
      ...baseEstimateMintBySwapInRequest,
    } as EstimateMintBySwapInRequest;
    if (object.mint_out !== undefined && object.mint_out !== null) {
      message.mint_out = Coin.fromJSON(object.mint_out);
    } else {
      message.mint_out = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = String(object.backing_denom);
    } else {
      message.backing_denom = "";
    }
    if (object.full_backing !== undefined && object.full_backing !== null) {
      message.full_backing = Boolean(object.full_backing);
    } else {
      message.full_backing = false;
    }
    return message;
  },

  toJSON(message: EstimateMintBySwapInRequest): unknown {
    const obj: any = {};
    message.mint_out !== undefined &&
      (obj.mint_out = message.mint_out
        ? Coin.toJSON(message.mint_out)
        : undefined);
    message.backing_denom !== undefined &&
      (obj.backing_denom = message.backing_denom);
    message.full_backing !== undefined &&
      (obj.full_backing = message.full_backing);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateMintBySwapInRequest>
  ): EstimateMintBySwapInRequest {
    const message = {
      ...baseEstimateMintBySwapInRequest,
    } as EstimateMintBySwapInRequest;
    if (object.mint_out !== undefined && object.mint_out !== null) {
      message.mint_out = Coin.fromPartial(object.mint_out);
    } else {
      message.mint_out = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = object.backing_denom;
    } else {
      message.backing_denom = "";
    }
    if (object.full_backing !== undefined && object.full_backing !== null) {
      message.full_backing = object.full_backing;
    } else {
      message.full_backing = false;
    }
    return message;
  },
};

const baseEstimateMintBySwapInResponse: object = {};

export const EstimateMintBySwapInResponse = {
  encode(
    message: EstimateMintBySwapInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_in !== undefined) {
      Coin.encode(message.backing_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.fury_in !== undefined) {
      Coin.encode(message.fury_in, writer.uint32(18).fork()).ldelim();
    }
    if (message.mint_fee !== undefined) {
      Coin.encode(message.mint_fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapInResponse,
    } as EstimateMintBySwapInResponse;
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
          message.mint_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapInResponse {
    const message = {
      ...baseEstimateMintBySwapInResponse,
    } as EstimateMintBySwapInResponse;
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
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = Coin.fromJSON(object.mint_fee);
    } else {
      message.mint_fee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateMintBySwapInResponse): unknown {
    const obj: any = {};
    message.backing_in !== undefined &&
      (obj.backing_in = message.backing_in
        ? Coin.toJSON(message.backing_in)
        : undefined);
    message.fury_in !== undefined &&
      (obj.fury_in = message.fury_in
        ? Coin.toJSON(message.fury_in)
        : undefined);
    message.mint_fee !== undefined &&
      (obj.mint_fee = message.mint_fee
        ? Coin.toJSON(message.mint_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateMintBySwapInResponse>
  ): EstimateMintBySwapInResponse {
    const message = {
      ...baseEstimateMintBySwapInResponse,
    } as EstimateMintBySwapInResponse;
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
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mint_fee = Coin.fromPartial(object.mint_fee);
    } else {
      message.mint_fee = undefined;
    }
    return message;
  },
};

const baseEstimateMintBySwapOutRequest: object = { full_backing: false };

export const EstimateMintBySwapOutRequest = {
  encode(
    message: EstimateMintBySwapOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_in_max !== undefined) {
      Coin.encode(message.backing_in_max, writer.uint32(10).fork()).ldelim();
    }
    if (message.fury_in_max !== undefined) {
      Coin.encode(message.fury_in_max, writer.uint32(18).fork()).ldelim();
    }
    if (message.full_backing === true) {
      writer.uint32(24).bool(message.full_backing);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapOutRequest,
    } as EstimateMintBySwapOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_in_max = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fury_in_max = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.full_backing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapOutRequest {
    const message = {
      ...baseEstimateMintBySwapOutRequest,
    } as EstimateMintBySwapOutRequest;
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
    if (object.full_backing !== undefined && object.full_backing !== null) {
      message.full_backing = Boolean(object.full_backing);
    } else {
      message.full_backing = false;
    }
    return message;
  },

  toJSON(message: EstimateMintBySwapOutRequest): unknown {
    const obj: any = {};
    message.backing_in_max !== undefined &&
      (obj.backing_in_max = message.backing_in_max
        ? Coin.toJSON(message.backing_in_max)
        : undefined);
    message.fury_in_max !== undefined &&
      (obj.fury_in_max = message.fury_in_max
        ? Coin.toJSON(message.fury_in_max)
        : undefined);
    message.full_backing !== undefined &&
      (obj.full_backing = message.full_backing);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateMintBySwapOutRequest>
  ): EstimateMintBySwapOutRequest {
    const message = {
      ...baseEstimateMintBySwapOutRequest,
    } as EstimateMintBySwapOutRequest;
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
    if (object.full_backing !== undefined && object.full_backing !== null) {
      message.full_backing = object.full_backing;
    } else {
      message.full_backing = false;
    }
    return message;
  },
};

const baseEstimateMintBySwapOutResponse: object = {};

export const EstimateMintBySwapOutResponse = {
  encode(
    message: EstimateMintBySwapOutResponse,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapOutResponse,
    } as EstimateMintBySwapOutResponse;
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

  fromJSON(object: any): EstimateMintBySwapOutResponse {
    const message = {
      ...baseEstimateMintBySwapOutResponse,
    } as EstimateMintBySwapOutResponse;
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

  toJSON(message: EstimateMintBySwapOutResponse): unknown {
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
    object: DeepPartial<EstimateMintBySwapOutResponse>
  ): EstimateMintBySwapOutResponse {
    const message = {
      ...baseEstimateMintBySwapOutResponse,
    } as EstimateMintBySwapOutResponse;
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

const baseEstimateBurnBySwapInRequest: object = {};

export const EstimateBurnBySwapInRequest = {
  encode(
    message: EstimateBurnBySwapInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_out_max !== undefined) {
      Coin.encode(message.backing_out_max, writer.uint32(10).fork()).ldelim();
    }
    if (message.fury_out_max !== undefined) {
      Coin.encode(message.fury_out_max, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapInRequest,
    } as EstimateBurnBySwapInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_out_max = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fury_out_max = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapInRequest {
    const message = {
      ...baseEstimateBurnBySwapInRequest,
    } as EstimateBurnBySwapInRequest;
    if (
      object.backing_out_max !== undefined &&
      object.backing_out_max !== null
    ) {
      message.backing_out_max = Coin.fromJSON(object.backing_out_max);
    } else {
      message.backing_out_max = undefined;
    }
    if (object.fury_out_max !== undefined && object.fury_out_max !== null) {
      message.fury_out_max = Coin.fromJSON(object.fury_out_max);
    } else {
      message.fury_out_max = undefined;
    }
    return message;
  },

  toJSON(message: EstimateBurnBySwapInRequest): unknown {
    const obj: any = {};
    message.backing_out_max !== undefined &&
      (obj.backing_out_max = message.backing_out_max
        ? Coin.toJSON(message.backing_out_max)
        : undefined);
    message.fury_out_max !== undefined &&
      (obj.fury_out_max = message.fury_out_max
        ? Coin.toJSON(message.fury_out_max)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBurnBySwapInRequest>
  ): EstimateBurnBySwapInRequest {
    const message = {
      ...baseEstimateBurnBySwapInRequest,
    } as EstimateBurnBySwapInRequest;
    if (
      object.backing_out_max !== undefined &&
      object.backing_out_max !== null
    ) {
      message.backing_out_max = Coin.fromPartial(object.backing_out_max);
    } else {
      message.backing_out_max = undefined;
    }
    if (object.fury_out_max !== undefined && object.fury_out_max !== null) {
      message.fury_out_max = Coin.fromPartial(object.fury_out_max);
    } else {
      message.fury_out_max = undefined;
    }
    return message;
  },
};

const baseEstimateBurnBySwapInResponse: object = {};

export const EstimateBurnBySwapInResponse = {
  encode(
    message: EstimateBurnBySwapInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.burn_in !== undefined) {
      Coin.encode(message.burn_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing_out !== undefined) {
      Coin.encode(message.backing_out, writer.uint32(18).fork()).ldelim();
    }
    if (message.fury_out !== undefined) {
      Coin.encode(message.fury_out, writer.uint32(26).fork()).ldelim();
    }
    if (message.burn_fee !== undefined) {
      Coin.encode(message.burn_fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapInResponse,
    } as EstimateBurnBySwapInResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burn_in = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing_out = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fury_out = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.burn_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapInResponse {
    const message = {
      ...baseEstimateBurnBySwapInResponse,
    } as EstimateBurnBySwapInResponse;
    if (object.burn_in !== undefined && object.burn_in !== null) {
      message.burn_in = Coin.fromJSON(object.burn_in);
    } else {
      message.burn_in = undefined;
    }
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

  toJSON(message: EstimateBurnBySwapInResponse): unknown {
    const obj: any = {};
    message.burn_in !== undefined &&
      (obj.burn_in = message.burn_in
        ? Coin.toJSON(message.burn_in)
        : undefined);
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
    object: DeepPartial<EstimateBurnBySwapInResponse>
  ): EstimateBurnBySwapInResponse {
    const message = {
      ...baseEstimateBurnBySwapInResponse,
    } as EstimateBurnBySwapInResponse;
    if (object.burn_in !== undefined && object.burn_in !== null) {
      message.burn_in = Coin.fromPartial(object.burn_in);
    } else {
      message.burn_in = undefined;
    }
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

const baseEstimateBurnBySwapOutRequest: object = { backing_denom: "" };

export const EstimateBurnBySwapOutRequest = {
  encode(
    message: EstimateBurnBySwapOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.burn_in !== undefined) {
      Coin.encode(message.burn_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing_denom !== "") {
      writer.uint32(18).string(message.backing_denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapOutRequest,
    } as EstimateBurnBySwapOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burn_in = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapOutRequest {
    const message = {
      ...baseEstimateBurnBySwapOutRequest,
    } as EstimateBurnBySwapOutRequest;
    if (object.burn_in !== undefined && object.burn_in !== null) {
      message.burn_in = Coin.fromJSON(object.burn_in);
    } else {
      message.burn_in = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = String(object.backing_denom);
    } else {
      message.backing_denom = "";
    }
    return message;
  },

  toJSON(message: EstimateBurnBySwapOutRequest): unknown {
    const obj: any = {};
    message.burn_in !== undefined &&
      (obj.burn_in = message.burn_in
        ? Coin.toJSON(message.burn_in)
        : undefined);
    message.backing_denom !== undefined &&
      (obj.backing_denom = message.backing_denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBurnBySwapOutRequest>
  ): EstimateBurnBySwapOutRequest {
    const message = {
      ...baseEstimateBurnBySwapOutRequest,
    } as EstimateBurnBySwapOutRequest;
    if (object.burn_in !== undefined && object.burn_in !== null) {
      message.burn_in = Coin.fromPartial(object.burn_in);
    } else {
      message.burn_in = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = object.backing_denom;
    } else {
      message.backing_denom = "";
    }
    return message;
  },
};

const baseEstimateBurnBySwapOutResponse: object = {};

export const EstimateBurnBySwapOutResponse = {
  encode(
    message: EstimateBurnBySwapOutResponse,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapOutResponse,
    } as EstimateBurnBySwapOutResponse;
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

  fromJSON(object: any): EstimateBurnBySwapOutResponse {
    const message = {
      ...baseEstimateBurnBySwapOutResponse,
    } as EstimateBurnBySwapOutResponse;
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

  toJSON(message: EstimateBurnBySwapOutResponse): unknown {
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
    object: DeepPartial<EstimateBurnBySwapOutResponse>
  ): EstimateBurnBySwapOutResponse {
    const message = {
      ...baseEstimateBurnBySwapOutResponse,
    } as EstimateBurnBySwapOutResponse;
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

const baseEstimateBuyBackingInRequest: object = {};

export const EstimateBuyBackingInRequest = {
  encode(
    message: EstimateBuyBackingInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_out !== undefined) {
      Coin.encode(message.backing_out, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingInRequest,
    } as EstimateBuyBackingInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_out = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingInRequest {
    const message = {
      ...baseEstimateBuyBackingInRequest,
    } as EstimateBuyBackingInRequest;
    if (object.backing_out !== undefined && object.backing_out !== null) {
      message.backing_out = Coin.fromJSON(object.backing_out);
    } else {
      message.backing_out = undefined;
    }
    return message;
  },

  toJSON(message: EstimateBuyBackingInRequest): unknown {
    const obj: any = {};
    message.backing_out !== undefined &&
      (obj.backing_out = message.backing_out
        ? Coin.toJSON(message.backing_out)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBuyBackingInRequest>
  ): EstimateBuyBackingInRequest {
    const message = {
      ...baseEstimateBuyBackingInRequest,
    } as EstimateBuyBackingInRequest;
    if (object.backing_out !== undefined && object.backing_out !== null) {
      message.backing_out = Coin.fromPartial(object.backing_out);
    } else {
      message.backing_out = undefined;
    }
    return message;
  },
};

const baseEstimateBuyBackingInResponse: object = {};

export const EstimateBuyBackingInResponse = {
  encode(
    message: EstimateBuyBackingInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fury_in !== undefined) {
      Coin.encode(message.fury_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.buyback_fee !== undefined) {
      Coin.encode(message.buyback_fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingInResponse,
    } as EstimateBuyBackingInResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fury_in = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): EstimateBuyBackingInResponse {
    const message = {
      ...baseEstimateBuyBackingInResponse,
    } as EstimateBuyBackingInResponse;
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromJSON(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (object.buyback_fee !== undefined && object.buyback_fee !== null) {
      message.buyback_fee = Coin.fromJSON(object.buyback_fee);
    } else {
      message.buyback_fee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateBuyBackingInResponse): unknown {
    const obj: any = {};
    message.fury_in !== undefined &&
      (obj.fury_in = message.fury_in
        ? Coin.toJSON(message.fury_in)
        : undefined);
    message.buyback_fee !== undefined &&
      (obj.buyback_fee = message.buyback_fee
        ? Coin.toJSON(message.buyback_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBuyBackingInResponse>
  ): EstimateBuyBackingInResponse {
    const message = {
      ...baseEstimateBuyBackingInResponse,
    } as EstimateBuyBackingInResponse;
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromPartial(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (object.buyback_fee !== undefined && object.buyback_fee !== null) {
      message.buyback_fee = Coin.fromPartial(object.buyback_fee);
    } else {
      message.buyback_fee = undefined;
    }
    return message;
  },
};

const baseEstimateBuyBackingOutRequest: object = { backing_denom: "" };

export const EstimateBuyBackingOutRequest = {
  encode(
    message: EstimateBuyBackingOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fury_in !== undefined) {
      Coin.encode(message.fury_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing_denom !== "") {
      writer.uint32(18).string(message.backing_denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingOutRequest,
    } as EstimateBuyBackingOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fury_in = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingOutRequest {
    const message = {
      ...baseEstimateBuyBackingOutRequest,
    } as EstimateBuyBackingOutRequest;
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromJSON(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = String(object.backing_denom);
    } else {
      message.backing_denom = "";
    }
    return message;
  },

  toJSON(message: EstimateBuyBackingOutRequest): unknown {
    const obj: any = {};
    message.fury_in !== undefined &&
      (obj.fury_in = message.fury_in
        ? Coin.toJSON(message.fury_in)
        : undefined);
    message.backing_denom !== undefined &&
      (obj.backing_denom = message.backing_denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBuyBackingOutRequest>
  ): EstimateBuyBackingOutRequest {
    const message = {
      ...baseEstimateBuyBackingOutRequest,
    } as EstimateBuyBackingOutRequest;
    if (object.fury_in !== undefined && object.fury_in !== null) {
      message.fury_in = Coin.fromPartial(object.fury_in);
    } else {
      message.fury_in = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = object.backing_denom;
    } else {
      message.backing_denom = "";
    }
    return message;
  },
};

const baseEstimateBuyBackingOutResponse: object = {};

export const EstimateBuyBackingOutResponse = {
  encode(
    message: EstimateBuyBackingOutResponse,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingOutResponse,
    } as EstimateBuyBackingOutResponse;
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

  fromJSON(object: any): EstimateBuyBackingOutResponse {
    const message = {
      ...baseEstimateBuyBackingOutResponse,
    } as EstimateBuyBackingOutResponse;
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

  toJSON(message: EstimateBuyBackingOutResponse): unknown {
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
    object: DeepPartial<EstimateBuyBackingOutResponse>
  ): EstimateBuyBackingOutResponse {
    const message = {
      ...baseEstimateBuyBackingOutResponse,
    } as EstimateBuyBackingOutResponse;
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

const baseEstimateSellBackingInRequest: object = { backing_denom: "" };

export const EstimateSellBackingInRequest = {
  encode(
    message: EstimateSellBackingInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fury_out !== undefined) {
      Coin.encode(message.fury_out, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing_denom !== "") {
      writer.uint32(18).string(message.backing_denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingInRequest,
    } as EstimateSellBackingInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fury_out = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingInRequest {
    const message = {
      ...baseEstimateSellBackingInRequest,
    } as EstimateSellBackingInRequest;
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromJSON(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = String(object.backing_denom);
    } else {
      message.backing_denom = "";
    }
    return message;
  },

  toJSON(message: EstimateSellBackingInRequest): unknown {
    const obj: any = {};
    message.fury_out !== undefined &&
      (obj.fury_out = message.fury_out
        ? Coin.toJSON(message.fury_out)
        : undefined);
    message.backing_denom !== undefined &&
      (obj.backing_denom = message.backing_denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingInRequest>
  ): EstimateSellBackingInRequest {
    const message = {
      ...baseEstimateSellBackingInRequest,
    } as EstimateSellBackingInRequest;
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromPartial(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.backing_denom !== undefined && object.backing_denom !== null) {
      message.backing_denom = object.backing_denom;
    } else {
      message.backing_denom = "";
    }
    return message;
  },
};

const baseEstimateSellBackingInResponse: object = {};

export const EstimateSellBackingInResponse = {
  encode(
    message: EstimateSellBackingInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_in !== undefined) {
      Coin.encode(message.backing_in, writer.uint32(10).fork()).ldelim();
    }
    if (message.sellback_fee !== undefined) {
      Coin.encode(message.sellback_fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingInResponse,
    } as EstimateSellBackingInResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_in = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sellback_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingInResponse {
    const message = {
      ...baseEstimateSellBackingInResponse,
    } as EstimateSellBackingInResponse;
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromJSON(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    if (object.sellback_fee !== undefined && object.sellback_fee !== null) {
      message.sellback_fee = Coin.fromJSON(object.sellback_fee);
    } else {
      message.sellback_fee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateSellBackingInResponse): unknown {
    const obj: any = {};
    message.backing_in !== undefined &&
      (obj.backing_in = message.backing_in
        ? Coin.toJSON(message.backing_in)
        : undefined);
    message.sellback_fee !== undefined &&
      (obj.sellback_fee = message.sellback_fee
        ? Coin.toJSON(message.sellback_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingInResponse>
  ): EstimateSellBackingInResponse {
    const message = {
      ...baseEstimateSellBackingInResponse,
    } as EstimateSellBackingInResponse;
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromPartial(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    if (object.sellback_fee !== undefined && object.sellback_fee !== null) {
      message.sellback_fee = Coin.fromPartial(object.sellback_fee);
    } else {
      message.sellback_fee = undefined;
    }
    return message;
  },
};

const baseEstimateSellBackingOutRequest: object = {};

export const EstimateSellBackingOutRequest = {
  encode(
    message: EstimateSellBackingOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backing_in !== undefined) {
      Coin.encode(message.backing_in, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingOutRequest,
    } as EstimateSellBackingOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backing_in = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingOutRequest {
    const message = {
      ...baseEstimateSellBackingOutRequest,
    } as EstimateSellBackingOutRequest;
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromJSON(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    return message;
  },

  toJSON(message: EstimateSellBackingOutRequest): unknown {
    const obj: any = {};
    message.backing_in !== undefined &&
      (obj.backing_in = message.backing_in
        ? Coin.toJSON(message.backing_in)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingOutRequest>
  ): EstimateSellBackingOutRequest {
    const message = {
      ...baseEstimateSellBackingOutRequest,
    } as EstimateSellBackingOutRequest;
    if (object.backing_in !== undefined && object.backing_in !== null) {
      message.backing_in = Coin.fromPartial(object.backing_in);
    } else {
      message.backing_in = undefined;
    }
    return message;
  },
};

const baseEstimateSellBackingOutResponse: object = {};

export const EstimateSellBackingOutResponse = {
  encode(
    message: EstimateSellBackingOutResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fury_out !== undefined) {
      Coin.encode(message.fury_out, writer.uint32(10).fork()).ldelim();
    }
    if (message.sellback_fee !== undefined) {
      Coin.encode(message.sellback_fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingOutResponse,
    } as EstimateSellBackingOutResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fury_out = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sellback_fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingOutResponse {
    const message = {
      ...baseEstimateSellBackingOutResponse,
    } as EstimateSellBackingOutResponse;
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromJSON(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.sellback_fee !== undefined && object.sellback_fee !== null) {
      message.sellback_fee = Coin.fromJSON(object.sellback_fee);
    } else {
      message.sellback_fee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateSellBackingOutResponse): unknown {
    const obj: any = {};
    message.fury_out !== undefined &&
      (obj.fury_out = message.fury_out
        ? Coin.toJSON(message.fury_out)
        : undefined);
    message.sellback_fee !== undefined &&
      (obj.sellback_fee = message.sellback_fee
        ? Coin.toJSON(message.sellback_fee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingOutResponse>
  ): EstimateSellBackingOutResponse {
    const message = {
      ...baseEstimateSellBackingOutResponse,
    } as EstimateSellBackingOutResponse;
    if (object.fury_out !== undefined && object.fury_out !== null) {
      message.fury_out = Coin.fromPartial(object.fury_out);
    } else {
      message.fury_out = undefined;
    }
    if (object.sellback_fee !== undefined && object.sellback_fee !== null) {
      message.sellback_fee = Coin.fromPartial(object.sellback_fee);
    } else {
      message.sellback_fee = undefined;
    }
    return message;
  },
};

/** Query defines the maker gRPC querier service. */
export interface Query {
  /** AllBackingRiskParams queries risk params of all the backing pools. */
  AllBackingRiskParams(
    request: QueryAllBackingRiskParamsRequest
  ): Promise<QueryAllBackingRiskParamsResponse>;
  /** AllCollateralRiskParams queries risk params of all the collateral pools. */
  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest
  ): Promise<QueryAllCollateralRiskParamsResponse>;
  /** AllBackingPools queries all the backing pools. */
  AllBackingPools(
    request: QueryAllBackingPoolsRequest
  ): Promise<QueryAllBackingPoolsResponse>;
  /** AllCollateralPools queries all the collateral pools. */
  AllCollateralPools(
    request: QueryAllCollateralPoolsRequest
  ): Promise<QueryAllCollateralPoolsResponse>;
  /** BackingPool queries a backing pool. */
  BackingPool(
    request: QueryBackingPoolRequest
  ): Promise<QueryBackingPoolResponse>;
  /** CollateralPool queries a collateral pool. */
  CollateralPool(
    request: QueryCollateralPoolRequest
  ): Promise<QueryCollateralPoolResponse>;
  /** CollateralOfAccount queries the collateral of an account. */
  CollateralOfAccount(
    request: QueryCollateralOfAccountRequest
  ): Promise<QueryCollateralOfAccountResponse>;
  /** TotalBacking queries the total backing. */
  TotalBacking(
    request: QueryTotalBackingRequest
  ): Promise<QueryTotalBackingResponse>;
  /** TotalCollateral queries the total collateral. */
  TotalCollateral(
    request: QueryTotalCollateralRequest
  ): Promise<QueryTotalCollateralResponse>;
  /** BackingRatio queries the backing ratio. */
  BackingRatio(
    request: QueryBackingRatioRequest
  ): Promise<QueryBackingRatioResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EstimateMintBySwapIn estimates input of minting by swap. */
  EstimateMintBySwapIn(
    request: EstimateMintBySwapInRequest
  ): Promise<EstimateMintBySwapInResponse>;
  /** EstimateMintBySwapOut estimates output of minting by swap. */
  EstimateMintBySwapOut(
    request: EstimateMintBySwapOutRequest
  ): Promise<EstimateMintBySwapOutResponse>;
  /** EstimateBurnBySwapIn estimates input of burning by swap. */
  EstimateBurnBySwapIn(
    request: EstimateBurnBySwapInRequest
  ): Promise<EstimateBurnBySwapInResponse>;
  /** EstimateBurnBySwapOut estimates output of burning by swap. */
  EstimateBurnBySwapOut(
    request: EstimateBurnBySwapOutRequest
  ): Promise<EstimateBurnBySwapOutResponse>;
  /** EstimateBuyBackingIn estimates inpput of buying backing assets. */
  EstimateBuyBackingIn(
    request: EstimateBuyBackingInRequest
  ): Promise<EstimateBuyBackingInResponse>;
  /** EstimateBuyBackingOut estimates output of buying backing assets. */
  EstimateBuyBackingOut(
    request: EstimateBuyBackingOutRequest
  ): Promise<EstimateBuyBackingOutResponse>;
  /** EstimateSellBackingIn estimates input of selling backing assets. */
  EstimateSellBackingIn(
    request: EstimateSellBackingInRequest
  ): Promise<EstimateSellBackingInResponse>;
  /** EstimateSellBackingOut estimates output of selling backing assets. */
  EstimateSellBackingOut(
    request: EstimateSellBackingOutRequest
  ): Promise<EstimateSellBackingOutResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AllBackingRiskParams(
    request: QueryAllBackingRiskParamsRequest
  ): Promise<QueryAllBackingRiskParamsResponse> {
    const data = QueryAllBackingRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "AllBackingRiskParams",
      data
    );
    return promise.then((data) =>
      QueryAllBackingRiskParamsResponse.decode(new Reader(data))
    );
  }

  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest
  ): Promise<QueryAllCollateralRiskParamsResponse> {
    const data = QueryAllCollateralRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "AllCollateralRiskParams",
      data
    );
    return promise.then((data) =>
      QueryAllCollateralRiskParamsResponse.decode(new Reader(data))
    );
  }

  AllBackingPools(
    request: QueryAllBackingPoolsRequest
  ): Promise<QueryAllBackingPoolsResponse> {
    const data = QueryAllBackingPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "AllBackingPools",
      data
    );
    return promise.then((data) =>
      QueryAllBackingPoolsResponse.decode(new Reader(data))
    );
  }

  AllCollateralPools(
    request: QueryAllCollateralPoolsRequest
  ): Promise<QueryAllCollateralPoolsResponse> {
    const data = QueryAllCollateralPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "AllCollateralPools",
      data
    );
    return promise.then((data) =>
      QueryAllCollateralPoolsResponse.decode(new Reader(data))
    );
  }

  BackingPool(
    request: QueryBackingPoolRequest
  ): Promise<QueryBackingPoolResponse> {
    const data = QueryBackingPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "BackingPool",
      data
    );
    return promise.then((data) =>
      QueryBackingPoolResponse.decode(new Reader(data))
    );
  }

  CollateralPool(
    request: QueryCollateralPoolRequest
  ): Promise<QueryCollateralPoolResponse> {
    const data = QueryCollateralPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "CollateralPool",
      data
    );
    return promise.then((data) =>
      QueryCollateralPoolResponse.decode(new Reader(data))
    );
  }

  CollateralOfAccount(
    request: QueryCollateralOfAccountRequest
  ): Promise<QueryCollateralOfAccountResponse> {
    const data = QueryCollateralOfAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "CollateralOfAccount",
      data
    );
    return promise.then((data) =>
      QueryCollateralOfAccountResponse.decode(new Reader(data))
    );
  }

  TotalBacking(
    request: QueryTotalBackingRequest
  ): Promise<QueryTotalBackingResponse> {
    const data = QueryTotalBackingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "TotalBacking",
      data
    );
    return promise.then((data) =>
      QueryTotalBackingResponse.decode(new Reader(data))
    );
  }

  TotalCollateral(
    request: QueryTotalCollateralRequest
  ): Promise<QueryTotalCollateralResponse> {
    const data = QueryTotalCollateralRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "TotalCollateral",
      data
    );
    return promise.then((data) =>
      QueryTotalCollateralResponse.decode(new Reader(data))
    );
  }

  BackingRatio(
    request: QueryBackingRatioRequest
  ): Promise<QueryBackingRatioResponse> {
    const data = QueryBackingRatioRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "BackingRatio",
      data
    );
    return promise.then((data) =>
      QueryBackingRatioResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  EstimateMintBySwapIn(
    request: EstimateMintBySwapInRequest
  ): Promise<EstimateMintBySwapInResponse> {
    const data = EstimateMintBySwapInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateMintBySwapIn",
      data
    );
    return promise.then((data) =>
      EstimateMintBySwapInResponse.decode(new Reader(data))
    );
  }

  EstimateMintBySwapOut(
    request: EstimateMintBySwapOutRequest
  ): Promise<EstimateMintBySwapOutResponse> {
    const data = EstimateMintBySwapOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateMintBySwapOut",
      data
    );
    return promise.then((data) =>
      EstimateMintBySwapOutResponse.decode(new Reader(data))
    );
  }

  EstimateBurnBySwapIn(
    request: EstimateBurnBySwapInRequest
  ): Promise<EstimateBurnBySwapInResponse> {
    const data = EstimateBurnBySwapInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateBurnBySwapIn",
      data
    );
    return promise.then((data) =>
      EstimateBurnBySwapInResponse.decode(new Reader(data))
    );
  }

  EstimateBurnBySwapOut(
    request: EstimateBurnBySwapOutRequest
  ): Promise<EstimateBurnBySwapOutResponse> {
    const data = EstimateBurnBySwapOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateBurnBySwapOut",
      data
    );
    return promise.then((data) =>
      EstimateBurnBySwapOutResponse.decode(new Reader(data))
    );
  }

  EstimateBuyBackingIn(
    request: EstimateBuyBackingInRequest
  ): Promise<EstimateBuyBackingInResponse> {
    const data = EstimateBuyBackingInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateBuyBackingIn",
      data
    );
    return promise.then((data) =>
      EstimateBuyBackingInResponse.decode(new Reader(data))
    );
  }

  EstimateBuyBackingOut(
    request: EstimateBuyBackingOutRequest
  ): Promise<EstimateBuyBackingOutResponse> {
    const data = EstimateBuyBackingOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateBuyBackingOut",
      data
    );
    return promise.then((data) =>
      EstimateBuyBackingOutResponse.decode(new Reader(data))
    );
  }

  EstimateSellBackingIn(
    request: EstimateSellBackingInRequest
  ): Promise<EstimateSellBackingInResponse> {
    const data = EstimateSellBackingInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateSellBackingIn",
      data
    );
    return promise.then((data) =>
      EstimateSellBackingInResponse.decode(new Reader(data))
    );
  }

  EstimateSellBackingOut(
    request: EstimateSellBackingOutRequest
  ): Promise<EstimateSellBackingOutResponse> {
    const data = EstimateSellBackingOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.maker.v1.Query",
      "EstimateSellBackingOut",
      data
    );
    return promise.then((data) =>
      EstimateSellBackingOutResponse.decode(new Reader(data))
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
