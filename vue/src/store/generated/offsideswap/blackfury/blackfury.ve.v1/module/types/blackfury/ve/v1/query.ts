/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { NFT } from "../../../cosmos/nft/v1beta1/nft";
import { Params } from "../../../blackfury/ve/v1/genesis";

export const protobufPackage = "blackfury.ve.v1";

export interface QueryTotalVotingPowerRequest {
  at_time: number;
  at_block: number;
}

export interface QueryTotalVotingPowerResponse {
  power: string;
}

export interface QueryVotingPowerRequest {
  ve_id: string;
  at_time: number;
  at_block: number;
}

export interface QueryVotingPowerResponse {
  power: string;
}

/** QueryVeNftsRequest is the request type for the Query/VeNfts RPC method */
export interface QueryVeNftsRequest {
  owner: string;
  pagination: PageRequest | undefined;
}

/** QueryVeNftsResponse is the response type for the Query/VeNfts RPC methods */
export interface QueryVeNftsResponse {
  nfts: NFT[];
  pagination: PageResponse | undefined;
}

/** QueryVeNftRequest is the request type for the Query/VeNft RPC method */
export interface QueryVeNftRequest {
  id: string;
}

/** QueryVeNftResponse is the response type for the Query/VeNft RPC method */
export interface QueryVeNftResponse {
  nft: NFT | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

const baseQueryTotalVotingPowerRequest: object = { at_time: 0, at_block: 0 };

export const QueryTotalVotingPowerRequest = {
  encode(
    message: QueryTotalVotingPowerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.at_time !== 0) {
      writer.uint32(8).uint64(message.at_time);
    }
    if (message.at_block !== 0) {
      writer.uint32(16).int64(message.at_block);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalVotingPowerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalVotingPowerRequest,
    } as QueryTotalVotingPowerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.at_time = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.at_block = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalVotingPowerRequest {
    const message = {
      ...baseQueryTotalVotingPowerRequest,
    } as QueryTotalVotingPowerRequest;
    if (object.at_time !== undefined && object.at_time !== null) {
      message.at_time = Number(object.at_time);
    } else {
      message.at_time = 0;
    }
    if (object.at_block !== undefined && object.at_block !== null) {
      message.at_block = Number(object.at_block);
    } else {
      message.at_block = 0;
    }
    return message;
  },

  toJSON(message: QueryTotalVotingPowerRequest): unknown {
    const obj: any = {};
    message.at_time !== undefined && (obj.at_time = message.at_time);
    message.at_block !== undefined && (obj.at_block = message.at_block);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalVotingPowerRequest>
  ): QueryTotalVotingPowerRequest {
    const message = {
      ...baseQueryTotalVotingPowerRequest,
    } as QueryTotalVotingPowerRequest;
    if (object.at_time !== undefined && object.at_time !== null) {
      message.at_time = object.at_time;
    } else {
      message.at_time = 0;
    }
    if (object.at_block !== undefined && object.at_block !== null) {
      message.at_block = object.at_block;
    } else {
      message.at_block = 0;
    }
    return message;
  },
};

const baseQueryTotalVotingPowerResponse: object = { power: "" };

export const QueryTotalVotingPowerResponse = {
  encode(
    message: QueryTotalVotingPowerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalVotingPowerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalVotingPowerResponse,
    } as QueryTotalVotingPowerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalVotingPowerResponse {
    const message = {
      ...baseQueryTotalVotingPowerResponse,
    } as QueryTotalVotingPowerResponse;
    if (object.power !== undefined && object.power !== null) {
      message.power = String(object.power);
    } else {
      message.power = "";
    }
    return message;
  },

  toJSON(message: QueryTotalVotingPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalVotingPowerResponse>
  ): QueryTotalVotingPowerResponse {
    const message = {
      ...baseQueryTotalVotingPowerResponse,
    } as QueryTotalVotingPowerResponse;
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = "";
    }
    return message;
  },
};

const baseQueryVotingPowerRequest: object = {
  ve_id: "",
  at_time: 0,
  at_block: 0,
};

export const QueryVotingPowerRequest = {
  encode(
    message: QueryVotingPowerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ve_id !== "") {
      writer.uint32(10).string(message.ve_id);
    }
    if (message.at_time !== 0) {
      writer.uint32(16).uint64(message.at_time);
    }
    if (message.at_block !== 0) {
      writer.uint32(24).int64(message.at_block);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVotingPowerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotingPowerRequest,
    } as QueryVotingPowerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ve_id = reader.string();
          break;
        case 2:
          message.at_time = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.at_block = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotingPowerRequest {
    const message = {
      ...baseQueryVotingPowerRequest,
    } as QueryVotingPowerRequest;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = String(object.ve_id);
    } else {
      message.ve_id = "";
    }
    if (object.at_time !== undefined && object.at_time !== null) {
      message.at_time = Number(object.at_time);
    } else {
      message.at_time = 0;
    }
    if (object.at_block !== undefined && object.at_block !== null) {
      message.at_block = Number(object.at_block);
    } else {
      message.at_block = 0;
    }
    return message;
  },

  toJSON(message: QueryVotingPowerRequest): unknown {
    const obj: any = {};
    message.ve_id !== undefined && (obj.ve_id = message.ve_id);
    message.at_time !== undefined && (obj.at_time = message.at_time);
    message.at_block !== undefined && (obj.at_block = message.at_block);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotingPowerRequest>
  ): QueryVotingPowerRequest {
    const message = {
      ...baseQueryVotingPowerRequest,
    } as QueryVotingPowerRequest;
    if (object.ve_id !== undefined && object.ve_id !== null) {
      message.ve_id = object.ve_id;
    } else {
      message.ve_id = "";
    }
    if (object.at_time !== undefined && object.at_time !== null) {
      message.at_time = object.at_time;
    } else {
      message.at_time = 0;
    }
    if (object.at_block !== undefined && object.at_block !== null) {
      message.at_block = object.at_block;
    } else {
      message.at_block = 0;
    }
    return message;
  },
};

const baseQueryVotingPowerResponse: object = { power: "" };

export const QueryVotingPowerResponse = {
  encode(
    message: QueryVotingPowerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVotingPowerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotingPowerResponse,
    } as QueryVotingPowerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotingPowerResponse {
    const message = {
      ...baseQueryVotingPowerResponse,
    } as QueryVotingPowerResponse;
    if (object.power !== undefined && object.power !== null) {
      message.power = String(object.power);
    } else {
      message.power = "";
    }
    return message;
  },

  toJSON(message: QueryVotingPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotingPowerResponse>
  ): QueryVotingPowerResponse {
    const message = {
      ...baseQueryVotingPowerResponse,
    } as QueryVotingPowerResponse;
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = "";
    }
    return message;
  },
};

const baseQueryVeNftsRequest: object = { owner: "" };

export const QueryVeNftsRequest = {
  encode(
    message: QueryVeNftsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVeNftsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVeNftsRequest } as QueryVeNftsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryVeNftsRequest {
    const message = { ...baseQueryVeNftsRequest } as QueryVeNftsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVeNftsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVeNftsRequest>): QueryVeNftsRequest {
    const message = { ...baseQueryVeNftsRequest } as QueryVeNftsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVeNftsResponse: object = {};

export const QueryVeNftsResponse = {
  encode(
    message: QueryVeNftsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVeNftsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVeNftsResponse } as QueryVeNftsResponse;
    message.nfts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryVeNftsResponse {
    const message = { ...baseQueryVeNftsResponse } as QueryVeNftsResponse;
    message.nfts = [];
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(NFT.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVeNftsResponse): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVeNftsResponse>): QueryVeNftsResponse {
    const message = { ...baseQueryVeNftsResponse } as QueryVeNftsResponse;
    message.nfts = [];
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(NFT.fromPartial(e));
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

const baseQueryVeNftRequest: object = { id: "" };

export const QueryVeNftRequest = {
  encode(message: QueryVeNftRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVeNftRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVeNftRequest } as QueryVeNftRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVeNftRequest {
    const message = { ...baseQueryVeNftRequest } as QueryVeNftRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryVeNftRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVeNftRequest>): QueryVeNftRequest {
    const message = { ...baseQueryVeNftRequest } as QueryVeNftRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseQueryVeNftResponse: object = {};

export const QueryVeNftResponse = {
  encode(
    message: QueryVeNftResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVeNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVeNftResponse } as QueryVeNftResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVeNftResponse {
    const message = { ...baseQueryVeNftResponse } as QueryVeNftResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromJSON(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },

  toJSON(message: QueryVeNftResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVeNftResponse>): QueryVeNftResponse {
    const message = { ...baseQueryVeNftResponse } as QueryVeNftResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    } else {
      message.nft = undefined;
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

/** Query defines the ve gRPC querier service. */
export interface Query {
  /** TotalVotingPower queries the total voting power. */
  TotalVotingPower(
    request: QueryTotalVotingPowerRequest
  ): Promise<QueryTotalVotingPowerResponse>;
  /** VotingPower queries the voting power of a veNFT. */
  VotingPower(
    request: QueryVotingPowerRequest
  ): Promise<QueryVotingPowerResponse>;
  /** VeNfts queries all veNFTs of a given owner. */
  VeNfts(request: QueryVeNftsRequest): Promise<QueryVeNftsResponse>;
  /** VeNft queries an veNFT based on its id. */
  VeNft(request: QueryVeNftRequest): Promise<QueryVeNftResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  TotalVotingPower(
    request: QueryTotalVotingPowerRequest
  ): Promise<QueryTotalVotingPowerResponse> {
    const data = QueryTotalVotingPowerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.ve.v1.Query",
      "TotalVotingPower",
      data
    );
    return promise.then((data) =>
      QueryTotalVotingPowerResponse.decode(new Reader(data))
    );
  }

  VotingPower(
    request: QueryVotingPowerRequest
  ): Promise<QueryVotingPowerResponse> {
    const data = QueryVotingPowerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blackfury.ve.v1.Query",
      "VotingPower",
      data
    );
    return promise.then((data) =>
      QueryVotingPowerResponse.decode(new Reader(data))
    );
  }

  VeNfts(request: QueryVeNftsRequest): Promise<QueryVeNftsResponse> {
    const data = QueryVeNftsRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.ve.v1.Query", "VeNfts", data);
    return promise.then((data) => QueryVeNftsResponse.decode(new Reader(data)));
  }

  VeNft(request: QueryVeNftRequest): Promise<QueryVeNftResponse> {
    const data = QueryVeNftRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.ve.v1.Query", "VeNft", data);
    return promise.then((data) => QueryVeNftResponse.decode(new Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blackfury.ve.v1.Query", "Params", data);
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
