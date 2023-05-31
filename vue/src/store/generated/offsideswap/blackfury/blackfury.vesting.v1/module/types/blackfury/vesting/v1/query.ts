/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Airdrop } from "../../../blackfury/vesting/v1/vesting";
import { Params } from "../../../blackfury/vesting/v1/genesis";

export const protobufPackage = "blackfury.vesting.v1";

export interface QueryAirdropsRequest {
  /** pagination defines an optional pagination for the request. */
  completed: boolean;
  pagination: PageRequest | undefined;
}

export interface QueryAirdropsResponse {
  /** airdrops contains all the queried airdrops. */
  airdrops: Airdrop[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

export interface QueryAirdropRequest {
  target_addr: string;
  completed: boolean;
}

export interface QueryAirdropResponse {
  airdrop: Airdrop | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

const baseQueryAirdropsRequest: object = { completed: false };

export const QueryAirdropsRequest = {
  encode(
    message: QueryAirdropsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.completed === true) {
      writer.uint32(8).bool(message.completed);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAirdropsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAirdropsRequest } as QueryAirdropsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completed = reader.bool();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropsRequest {
    const message = { ...baseQueryAirdropsRequest } as QueryAirdropsRequest;
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = Boolean(object.completed);
    } else {
      message.completed = false;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAirdropsRequest): unknown {
    const obj: any = {};
    message.completed !== undefined && (obj.completed = message.completed);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAirdropsRequest>): QueryAirdropsRequest {
    const message = { ...baseQueryAirdropsRequest } as QueryAirdropsRequest;
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = object.completed;
    } else {
      message.completed = false;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAirdropsResponse: object = {};

export const QueryAirdropsResponse = {
  encode(
    message: QueryAirdropsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAirdropsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAirdropsResponse } as QueryAirdropsResponse;
    message.airdrops = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropsResponse {
    const message = { ...baseQueryAirdropsResponse } as QueryAirdropsResponse;
    message.airdrops = [];
    if (object.airdrops !== undefined && object.airdrops !== null) {
      for (const e of object.airdrops) {
        message.airdrops.push(Airdrop.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAirdropsResponse): unknown {
    const obj: any = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) =>
        e ? Airdrop.toJSON(e) : undefined
      );
    } else {
      obj.airdrops = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAirdropsResponse>
  ): QueryAirdropsResponse {
    const message = { ...baseQueryAirdropsResponse } as QueryAirdropsResponse;
    message.airdrops = [];
    if (object.airdrops !== undefined && object.airdrops !== null) {
      for (const e of object.airdrops) {
        message.airdrops.push(Airdrop.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAirdropRequest: object = { target_addr: "", completed: false };

export const QueryAirdropRequest = {
  encode(
    message: QueryAirdropRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.target_addr !== "") {
      writer.uint32(10).string(message.target_addr);
    }
    if (message.completed === true) {
      writer.uint32(16).bool(message.completed);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAirdropRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAirdropRequest } as QueryAirdropRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target_addr = reader.string();
          break;
        case 2:
          message.completed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropRequest {
    const message = { ...baseQueryAirdropRequest } as QueryAirdropRequest;
    if (object.target_addr !== undefined && object.target_addr !== null) {
      message.target_addr = String(object.target_addr);
    } else {
      message.target_addr = "";
    }
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = Boolean(object.completed);
    } else {
      message.completed = false;
    }
    return message;
  },

  toJSON(message: QueryAirdropRequest): unknown {
    const obj: any = {};
    message.target_addr !== undefined &&
      (obj.target_addr = message.target_addr);
    message.completed !== undefined && (obj.completed = message.completed);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAirdropRequest>): QueryAirdropRequest {
    const message = { ...baseQueryAirdropRequest } as QueryAirdropRequest;
    if (object.target_addr !== undefined && object.target_addr !== null) {
      message.target_addr = object.target_addr;
    } else {
      message.target_addr = "";
    }
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = object.completed;
    } else {
      message.completed = false;
    }
    return message;
  },
};

const baseQueryAirdropResponse: object = {};

export const QueryAirdropResponse = {
  encode(
    message: QueryAirdropResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.airdrop !== undefined) {
      Airdrop.encode(message.airdrop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAirdropResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAirdropResponse } as QueryAirdropResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrop = Airdrop.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropResponse {
    const message = { ...baseQueryAirdropResponse } as QueryAirdropResponse;
    if (object.airdrop !== undefined && object.airdrop !== null) {
      message.airdrop = Airdrop.fromJSON(object.airdrop);
    } else {
      message.airdrop = undefined;
    }
    return message;
  },

  toJSON(message: QueryAirdropResponse): unknown {
    const obj: any = {};
    message.airdrop !== undefined &&
      (obj.airdrop = message.airdrop
        ? Airdrop.toJSON(message.airdrop)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAirdropResponse>): QueryAirdropResponse {
    const message = { ...baseQueryAirdropResponse } as QueryAirdropResponse;
    if (object.airdrop !== undefined && object.airdrop !== null) {
      message.airdrop = Airdrop.fromPartial(object.airdrop);
    } else {
      message.airdrop = undefined;
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

/** Query defines the vesting gRPC querier service. */
export interface Query {
  /** Airdrops queries airdrop targets. */
  Airdrops(request: QueryAirdropsRequest): Promise<QueryAirdropsResponse>;
  /** Airdrops queries airdrop target for given address. */
  Airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Airdrops(request: QueryAirdropsRequest): Promise<QueryAirdropsResponse> {
    const data = QueryAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.vesting.v1.Query",
      "Airdrops",
      data
    );
    return promise.then((data) =>
      QueryAirdropsResponse.decode(new Reader(data))
    );
  }

  Airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse> {
    const data = QueryAirdropRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.vesting.v1.Query",
      "Airdrop",
      data
    );
    return promise.then((data) =>
      QueryAirdropResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.vesting.v1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
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
