/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V1AccountCollateral {
  account?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  collateral?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  black_debt?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_collateralized?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  last_interest?: V1Beta1Coin;

  /** @format int64 */
  last_settlement_block?: string;
}

/**
 * BackingRiskParams represents an object of backing coin risk parameters.
 */
export interface V1BackingRiskParams {
  backing_denom?: string;
  enabled?: boolean;
  max_backing?: string;
  max_black_mint?: string;
  mint_fee?: string;
  burn_fee?: string;
  buyback_fee?: string;
  reback_fee?: string;
}

/**
 * CollateralRiskParams represents an object of collateral risk parameters.
 */
export interface V1CollateralRiskParams {
  collateral_denom?: string;
  enabled?: boolean;
  max_collateral?: string;
  max_black_mint?: string;
  liquidation_threshold?: string;
  loan_to_value?: string;
  basic_loan_to_value?: string;
  catalytic_fury_ratio?: string;
  liquidation_fee?: string;
  mint_fee?: string;
  interest_fee?: string;
}

export interface V1EstimateBurnBySwapInResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  burn_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  burn_fee?: V1Beta1Coin;
}

export interface V1EstimateBurnBySwapOutResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  burn_fee?: V1Beta1Coin;
}

export interface V1EstimateBuyBackingInResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  buyback_fee?: V1Beta1Coin;
}

export interface V1EstimateBuyBackingOutResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  buyback_fee?: V1Beta1Coin;
}

export interface V1EstimateMintBySwapInResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  mint_fee?: V1Beta1Coin;
}

export interface V1EstimateMintBySwapOutResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  mint_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  mint_fee?: V1Beta1Coin;
}

export interface V1EstimateSellBackingInResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  sellback_fee?: V1Beta1Coin;
}

export interface V1EstimateSellBackingOutResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  sellback_fee?: V1Beta1Coin;
}

/**
 * MsgBurnByCollateralResponse defines the Msg/BurnByCollateral response type.
 */
export interface V1MsgBurnByCollateralResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  repay_in?: V1Beta1Coin;
}

/**
 * MsgBurnBySwapResponse defines the Msg/BurnBySwap response type.
 */
export interface V1MsgBurnBySwapResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  burn_fee?: V1Beta1Coin;
}

/**
 * MsgBuyBackingResponse defines the Msg/BuyBacking response type.
 */
export interface V1MsgBuyBackingResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  buyback_fee?: V1Beta1Coin;
}

/**
 * MsgDepositCollateralResponse defines the Msg/DepositCollateral response type.
 */
export type V1MsgDepositCollateralResponse = object;

/**
* MsgLiquidateCollateralResponse defines the Msg/LiquidateCollateral response
type.
*/
export interface V1MsgLiquidateCollateralResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  repay_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  collateral_out?: V1Beta1Coin;
}

/**
 * MsgMintByCollateralResponse defines the Msg/MintByCollateral response type.
 */
export interface V1MsgMintByCollateralResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  mint_fee?: V1Beta1Coin;
}

/**
 * MsgMintBySwapResponse defines the Msg/MintBySwap response type.
 */
export interface V1MsgMintBySwapResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_in?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  mint_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  mint_fee?: V1Beta1Coin;
}

/**
 * MsgRedeemCollateralResponse defines the Msg/RedeemCollateral response type.
 */
export type V1MsgRedeemCollateralResponse = object;

/**
 * MsgSellBackingResponse defines the Msg/SellBacking response type.
 */
export interface V1MsgSellBackingResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_out?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  reback_fee?: V1Beta1Coin;
}

/**
 * Params defines the parameters for the maker module.
 */
export interface V1Params {
  backing_ratio_step?: string;
  backing_ratio_price_band?: string;

  /** @format int64 */
  backing_ratio_cooldown_period?: string;
  mint_price_bias?: string;
  burn_price_bias?: string;
  reback_bonus?: string;
  liquidation_commission_fee?: string;
}

export interface V1PoolBacking {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  black_minted?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  backing?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_burned?: V1Beta1Coin;
}

export interface V1PoolCollateral {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  collateral?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  black_debt?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_collateralized?: V1Beta1Coin;
}

export interface V1QueryAllBackingPoolsResponse {
  backing_pools?: V1PoolBacking[];
}

export interface V1QueryAllBackingRiskParamsResponse {
  risk_params?: V1BackingRiskParams[];
}

export interface V1QueryAllCollateralPoolsResponse {
  collateral_pools?: V1PoolCollateral[];
}

export interface V1QueryAllCollateralRiskParamsResponse {
  risk_params?: V1CollateralRiskParams[];
}

export interface V1QueryBackingPoolResponse {
  backing_pool?: V1PoolBacking;
}

export interface V1QueryBackingRatioResponse {
  backing_ratio?: string;

  /** @format int64 */
  last_update_block?: string;
}

export interface V1QueryCollateralOfAccountResponse {
  account_collateral?: V1AccountCollateral;
}

export interface V1QueryCollateralPoolResponse {
  collateral_pool?: V1PoolCollateral;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface V1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: V1Params;
}

export interface V1QueryTotalBackingResponse {
  total_backing?: V1TotalBacking;
}

export interface V1QueryTotalCollateralResponse {
  total_collateral?: V1TotalCollateral;
}

export interface V1TotalBacking {
  backing_value?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  black_minted?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_burned?: V1Beta1Coin;
}

export interface V1TotalCollateral {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  black_debt?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  fury_collateralized?: V1Beta1Coin;
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title blackfury/maker/v1/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAllBackingPools
   * @summary AllBackingPools queries all the backing pools.
   * @request GET:/blackfury/maker/v1/all_backing_pools
   */
  queryAllBackingPools = (params: RequestParams = {}) =>
    this.request<V1QueryAllBackingPoolsResponse, RpcStatus>({
      path: `/blackfury/maker/v1/all_backing_pools`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllBackingRiskParams
   * @summary AllBackingRiskParams queries risk params of all the backing pools.
   * @request GET:/blackfury/maker/v1/all_backing_risk_params
   */
  queryAllBackingRiskParams = (params: RequestParams = {}) =>
    this.request<V1QueryAllBackingRiskParamsResponse, RpcStatus>({
      path: `/blackfury/maker/v1/all_backing_risk_params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllCollateralPools
   * @summary AllCollateralPools queries all the collateral pools.
   * @request GET:/blackfury/maker/v1/all_collateral_pools
   */
  queryAllCollateralPools = (params: RequestParams = {}) =>
    this.request<V1QueryAllCollateralPoolsResponse, RpcStatus>({
      path: `/blackfury/maker/v1/all_collateral_pools`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllCollateralRiskParams
   * @summary AllCollateralRiskParams queries risk params of all the collateral pools.
   * @request GET:/blackfury/maker/v1/all_collateral_risk_params
   */
  queryAllCollateralRiskParams = (params: RequestParams = {}) =>
    this.request<V1QueryAllCollateralRiskParamsResponse, RpcStatus>({
      path: `/blackfury/maker/v1/all_collateral_risk_params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBackingPool
   * @summary BackingPool queries a backing pool.
   * @request GET:/blackfury/maker/v1/backing_pool
   */
  queryBackingPool = (query?: { backing_denom?: string }, params: RequestParams = {}) =>
    this.request<V1QueryBackingPoolResponse, RpcStatus>({
      path: `/blackfury/maker/v1/backing_pool`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBackingRatio
   * @summary BackingRatio queries the backing ratio.
   * @request GET:/blackfury/maker/v1/backing_ratio
   */
  queryBackingRatio = (params: RequestParams = {}) =>
    this.request<V1QueryBackingRatioResponse, RpcStatus>({
      path: `/blackfury/maker/v1/backing_ratio`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCollateralOfAccount
   * @summary CollateralOfAccount queries the collateral of an account.
   * @request GET:/blackfury/maker/v1/collateral_account
   */
  queryCollateralOfAccount = (query?: { account?: string; collateral_denom?: string }, params: RequestParams = {}) =>
    this.request<V1QueryCollateralOfAccountResponse, RpcStatus>({
      path: `/blackfury/maker/v1/collateral_account`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCollateralPool
   * @summary CollateralPool queries a collateral pool.
   * @request GET:/blackfury/maker/v1/collateral_pool
   */
  queryCollateralPool = (query?: { collateral_denom?: string }, params: RequestParams = {}) =>
    this.request<V1QueryCollateralPoolResponse, RpcStatus>({
      path: `/blackfury/maker/v1/collateral_pool`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateBurnBySwapIn
   * @summary EstimateBurnBySwapIn estimates input of burning by swap.
   * @request GET:/blackfury/maker/v1/estimate_burn_by_swap_in
   */
  queryEstimateBurnBySwapIn = (
    query?: {
      "backing_out_max.denom"?: string;
      "backing_out_max.amount"?: string;
      "fury_out_max.denom"?: string;
      "fury_out_max.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateBurnBySwapInResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_burn_by_swap_in`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateBurnBySwapOut
   * @summary EstimateBurnBySwapOut estimates output of burning by swap.
   * @request GET:/blackfury/maker/v1/estimate_burn_by_swap_out
   */
  queryEstimateBurnBySwapOut = (
    query?: { "burn_in.denom"?: string; "burn_in.amount"?: string; backing_denom?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateBurnBySwapOutResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_burn_by_swap_out`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateBuyBackingIn
   * @summary EstimateBuyBackingIn estimates inpput of buying backing assets.
   * @request GET:/blackfury/maker/v1/estimate_buy_backing_in
   */
  queryEstimateBuyBackingIn = (
    query?: { "backing_out.denom"?: string; "backing_out.amount"?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateBuyBackingInResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_buy_backing_in`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateBuyBackingOut
   * @summary EstimateBuyBackingOut estimates output of buying backing assets.
   * @request GET:/blackfury/maker/v1/estimate_buy_backing_out
   */
  queryEstimateBuyBackingOut = (
    query?: { "fury_in.denom"?: string; "fury_in.amount"?: string; backing_denom?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateBuyBackingOutResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_buy_backing_out`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateMintBySwapIn
   * @summary EstimateMintBySwapIn estimates input of minting by swap.
   * @request GET:/blackfury/maker/v1/estimate_mint_by_swap_in
   */
  queryEstimateMintBySwapIn = (
    query?: { "mint_out.denom"?: string; "mint_out.amount"?: string; backing_denom?: string; full_backing?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateMintBySwapInResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_mint_by_swap_in`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateMintBySwapOut
   * @summary EstimateMintBySwapOut estimates output of minting by swap.
   * @request GET:/blackfury/maker/v1/estimate_mint_by_swap_out
   */
  queryEstimateMintBySwapOut = (
    query?: {
      "backing_in_max.denom"?: string;
      "backing_in_max.amount"?: string;
      "fury_in_max.denom"?: string;
      "fury_in_max.amount"?: string;
      full_backing?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateMintBySwapOutResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_mint_by_swap_out`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateSellBackingIn
   * @summary EstimateSellBackingIn estimates input of selling backing assets.
   * @request GET:/blackfury/maker/v1/estimate_sell_backing_in
   */
  queryEstimateSellBackingIn = (
    query?: { "fury_out.denom"?: string; "fury_out.amount"?: string; backing_denom?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateSellBackingInResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_sell_backing_in`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateSellBackingOut
   * @summary EstimateSellBackingOut estimates output of selling backing assets.
   * @request GET:/blackfury/maker/v1/estimate_sell_backing_out
   */
  queryEstimateSellBackingOut = (
    query?: { "backing_in.denom"?: string; "backing_in.amount"?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateSellBackingOutResponse, RpcStatus>({
      path: `/blackfury/maker/v1/estimate_sell_backing_out`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/blackfury/maker/v1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1QueryParamsResponse, RpcStatus>({
      path: `/blackfury/maker/v1/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTotalBacking
   * @summary TotalBacking queries the total backing.
   * @request GET:/blackfury/maker/v1/total_backing
   */
  queryTotalBacking = (params: RequestParams = {}) =>
    this.request<V1QueryTotalBackingResponse, RpcStatus>({
      path: `/blackfury/maker/v1/total_backing`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTotalCollateral
   * @summary TotalCollateral queries the total collateral.
   * @request GET:/blackfury/maker/v1/total_collateral
   */
  queryTotalCollateral = (params: RequestParams = {}) =>
    this.request<V1QueryTotalCollateralResponse, RpcStatus>({
      path: `/blackfury/maker/v1/total_collateral`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgBurnByCollateral
 * @summary BurnByCollateral burns Black stablecoins by unlocking collateral assets and
earning Fury coins.
 * @request GET:/blackfury/maker/v1/tx/burn_by_collateral
 */
  msgBurnByCollateral = (
    query?: {
      sender?: string;
      collateral_denom?: string;
      "repay_in_max.denom"?: string;
      "repay_in_max.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgBurnByCollateralResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/burn_by_collateral`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgBurnBySwap
 * @summary BurnBySwap burns Black stablecoins by swapping out strong-backing assets and
Fury coins.
 * @request GET:/blackfury/maker/v1/tx/burn_by_swap
 */
  msgBurnBySwap = (
    query?: {
      sender?: string;
      to?: string;
      "burn_in.denom"?: string;
      "burn_in.amount"?: string;
      "backing_out_min.denom"?: string;
      "backing_out_min.amount"?: string;
      "fury_out_min.denom"?: string;
      "fury_out_min.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgBurnBySwapResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/burn_by_swap`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgBuyBacking
   * @summary BuyBacking buys strong-backing assets by spending Fury coins.
   * @request GET:/blackfury/maker/v1/tx/buy_backing
   */
  msgBuyBacking = (
    query?: {
      sender?: string;
      to?: string;
      "fury_in.denom"?: string;
      "fury_in.amount"?: string;
      "backing_out_min.denom"?: string;
      "backing_out_min.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgBuyBackingResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/buy_backing`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgDepositCollateral
   * @summary DepositCollateral deposits collateral assets.
   * @request GET:/blackfury/maker/v1/tx/deposit_collateral
   */
  msgDepositCollateral = (
    query?: {
      sender?: string;
      to?: string;
      "collateral_in.denom"?: string;
      "collateral_in.amount"?: string;
      "fury_in.denom"?: string;
      "fury_in.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgDepositCollateralResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/deposit_collateral`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgLiquidateCollateral
 * @summary LiquidateCollateral liquidates collateral assets which is
undercollateralized.
 * @request GET:/blackfury/maker/v1/tx/liquidate_collateral
 */
  msgLiquidateCollateral = (
    query?: {
      sender?: string;
      to?: string;
      debtor?: string;
      "collateral.denom"?: string;
      "collateral.amount"?: string;
      "repay_in_max.denom"?: string;
      "repay_in_max.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgLiquidateCollateralResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/liquidate_collateral`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgMintByCollateral
 * @summary MintByCollateral mints Black stablecoins by locking collateral assets and
spending Fury coins.
 * @request GET:/blackfury/maker/v1/tx/mint_by_collateral
 */
  msgMintByCollateral = (
    query?: {
      sender?: string;
      to?: string;
      collateral_denom?: string;
      "mint_out.denom"?: string;
      "mint_out.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgMintByCollateralResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/mint_by_collateral`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgMintBySwap
 * @summary MintBySwap mints Black stablecoins by swapping in strong-backing assets and
Fury coins.
 * @request GET:/blackfury/maker/v1/tx/mint_by_swap
 */
  msgMintBySwap = (
    query?: {
      sender?: string;
      to?: string;
      "backing_in_max.denom"?: string;
      "backing_in_max.amount"?: string;
      "fury_in_max.denom"?: string;
      "fury_in_max.amount"?: string;
      "mint_out_min.denom"?: string;
      "mint_out_min.amount"?: string;
      full_backing?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgMintBySwapResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/mint_by_swap`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgRedeemCollateral
   * @summary RedeemCollateral redeems collateral assets and collateralized Fury coins.
   * @request GET:/blackfury/maker/v1/tx/redeem_collateral
   */
  msgRedeemCollateral = (
    query?: {
      sender?: string;
      to?: string;
      "collateral_out.denom"?: string;
      "collateral_out.amount"?: string;
      "fury_out.denom"?: string;
      "fury_out.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgRedeemCollateralResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/redeem_collateral`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgSellBacking
 * @summary SellBacking sells strong-backing assets by earning Fury
coins.
 * @request GET:/blackfury/maker/v1/tx/sell_backing
 */
  msgSellBacking = (
    query?: {
      sender?: string;
      to?: string;
      "backing_in.denom"?: string;
      "backing_in.amount"?: string;
      "fury_out_min.denom"?: string;
      "fury_out_min.amount"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgSellBackingResponse, RpcStatus>({
      path: `/blackfury/maker/v1/tx/sell_backing`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
