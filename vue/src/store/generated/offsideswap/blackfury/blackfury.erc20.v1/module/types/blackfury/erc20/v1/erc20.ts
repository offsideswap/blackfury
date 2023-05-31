/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blackfury.erc20.v1";

/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}

export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    default:
      return "UNKNOWN";
  }
}

/**
 * TokenPair defines an instance that records pairing consisting of a Cosmos
 * native Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** address of ERC20 contract token */
  erc20_address: string;
  /** cosmos base denomination to be mapped to */
  denom: string;
  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contract_owner: Owner;
}

const baseTokenPair: object = {
  erc20_address: "",
  denom: "",
  contract_owner: 0,
};

export const TokenPair = {
  encode(message: TokenPair, writer: Writer = Writer.create()): Writer {
    if (message.erc20_address !== "") {
      writer.uint32(10).string(message.erc20_address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.contract_owner !== 0) {
      writer.uint32(24).int32(message.contract_owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenPair } as TokenPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20_address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.contract_owner = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    if (object.erc20_address !== undefined && object.erc20_address !== null) {
      message.erc20_address = String(object.erc20_address);
    } else {
      message.erc20_address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contract_owner = ownerFromJSON(object.contract_owner);
    } else {
      message.contract_owner = 0;
    }
    return message;
  },

  toJSON(message: TokenPair): unknown {
    const obj: any = {};
    message.erc20_address !== undefined &&
      (obj.erc20_address = message.erc20_address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.contract_owner !== undefined &&
      (obj.contract_owner = ownerToJSON(message.contract_owner));
    return obj;
  },

  fromPartial(object: DeepPartial<TokenPair>): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    if (object.erc20_address !== undefined && object.erc20_address !== null) {
      message.erc20_address = object.erc20_address;
    } else {
      message.erc20_address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contract_owner = object.contract_owner;
    } else {
      message.contract_owner = 0;
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
