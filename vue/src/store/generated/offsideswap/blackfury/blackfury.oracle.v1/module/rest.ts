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

export interface V1AggregateExchangeRatePrevote {
  hash?: string;
  voter?: string;

  /** @format uint64 */
  submit_block?: string;
}

/**
* AggregateExchangeRateVote represents the voting on
the exchange rates of various assets denominated in uUSD.
*/
export interface V1AggregateExchangeRateVote {
  exchange_rate_tuples?: V1ExchangeRateTuple[];
  voter?: string;
}

/**
 * ExchangeRateTuple stores interpreted exchange rates data.
 */
export interface V1ExchangeRateTuple {
  denom?: string;
  exchange_rate?: string;
}

/**
* MsgAggregateExchangeRatePrevoteResponse defines the
MsgAggregateExchangeRatePrevote response type.
*/
export type V1MsgAggregateExchangeRatePrevoteResponse = object;

/**
* MsgAggregateExchangeRateVoteResponse defines the MsgAggregateExchangeRateVote
response type.
*/
export type V1MsgAggregateExchangeRateVoteResponse = object;

/**
* MsgDelegateFeedConsentResponse defines the MsgDelegateFeedConsent response
type.
*/
export type V1MsgDelegateFeedConsentResponse = object;

/**
 * Params defines the parameters for the oracle module.
 */
export interface V1Params {
  /** @format uint64 */
  vote_period?: string;
  vote_threshold?: string;
  reward_band?: string;

  /** @format uint64 */
  reward_distribution_window?: string;
  slash_fraction?: string;

  /** @format uint64 */
  slash_window?: string;
  min_valid_per_window?: string;
}

/**
* QueryActivesResponse is response type for the
Query/Actives RPC method.
*/
export interface V1QueryActivesResponse {
  /**
   * actives defines a list of the denomination which oracle prices aggreed
   * upon.
   */
  actives?: string[];
}

/**
* QueryAggregatePrevoteResponse is response type for the
Query/AggregatePrevote RPC method.
*/
export interface V1QueryAggregatePrevoteResponse {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period.
   */
  aggregate_prevote?: V1AggregateExchangeRatePrevote;
}

/**
* QueryAggregatePrevotesResponse is response type for the
Query/AggregatePrevotes RPC method.
*/
export interface V1QueryAggregatePrevotesResponse {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period.
   */
  aggregate_prevotes?: V1AggregateExchangeRatePrevote[];
}

/**
* QueryAggregateVoteResponse is response type for the
Query/AggregateVote RPC method.
*/
export interface V1QueryAggregateVoteResponse {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period.
   */
  aggregate_vote?: V1AggregateExchangeRateVote;
}

/**
* QueryAggregateVotesResponse is response type for the
Query/AggregateVotes RPC method.
*/
export interface V1QueryAggregateVotesResponse {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period.
   */
  aggregate_votes?: V1AggregateExchangeRateVote[];
}

/**
* QueryExchangeRateResponse is response type for the
Query/ExchangeRate RPC method.
*/
export interface V1QueryExchangeRateResponse {
  /**
   * exchange_rate defines the exchange rate of the denom asset denominated in
   * uUSD.
   */
  exchange_rate?: string;
}

/**
* QueryExchangeRatesResponse is response type for the
Query/ExchangeRates RPC method.
*/
export interface V1QueryExchangeRatesResponse {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchange_rates?: V1Beta1DecCoin[];
}

/**
* QueryFeederDelegationResponse is response type for the
Query/FeederDelegation RPC method.
*/
export interface V1QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator. */
  feeder_addr?: string;
}

/**
* QueryMissCounterResponse is response type for the
Query/MissCounter RPC method.
*/
export interface V1QueryMissCounterResponse {
  /**
   * miss_counter defines the oracle miss counter of a validator.
   * @format uint64
   */
  miss_counter?: string;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface V1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: V1Params;
}

/**
* QueryTargetsResponse is response type for the
Query/Targets RPC method.
*/
export interface V1QueryTargetsResponse {
  /**
   * targets defines a list of the denomination which will be fed
   * with price quotation (including voting targets).
   */
  targets?: string[];
}

/**
* QueryVoteTargetsResponse is response type for the
Query/VoteTargets RPC method.
*/
export interface V1QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  vote_targets?: string[];
}

/**
* DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1DecCoin {
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
 * @title blackfury/oracle/v1/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryActives
   * @summary Actives returns all active denoms.
   * @request GET:/blackfury/oracle/v1/denoms/actives
   */
  queryActives = (params: RequestParams = {}) =>
    this.request<V1QueryActivesResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/denoms/actives`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRates
   * @summary ExchangeRates returns exchange rates of all denoms.
   * @request GET:/blackfury/oracle/v1/denoms/exchange_rates
   */
  queryExchangeRates = (params: RequestParams = {}) =>
    this.request<V1QueryExchangeRatesResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/denoms/exchange_rates`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTargets
   * @summary Targets returns all target denoms (including vote targets).
   * @request GET:/blackfury/oracle/v1/denoms/targets
   */
  queryTargets = (params: RequestParams = {}) =>
    this.request<V1QueryTargetsResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/denoms/targets`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVoteTargets
   * @summary VoteTargets returns all vote target denoms.
   * @request GET:/blackfury/oracle/v1/denoms/vote_targets
   */
  queryVoteTargets = (params: RequestParams = {}) =>
    this.request<V1QueryVoteTargetsResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/denoms/vote_targets`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExchangeRate
   * @summary ExchangeRate returns exchange rate of a denom.
   * @request GET:/blackfury/oracle/v1/denoms/{denom}/exchange_rate
   */
  queryExchangeRate = (denom: string, params: RequestParams = {}) =>
    this.request<V1QueryExchangeRateResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/denoms/${denom}/exchange_rate`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgAggregateExchangeRatePrevote
   * @summary AggregateExchangeRatePrevote submits aggregate exchange rate prevote.
   * @request GET:/blackfury/oracle/v1/tx/aggregate_exchange_rate_prevote
   */
  msgAggregateExchangeRatePrevote = (
    query?: { hash?: string; feeder?: string; validator?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgAggregateExchangeRatePrevoteResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/tx/aggregate_exchange_rate_prevote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgAggregateExchangeRateVote
   * @summary AggregateExchangeRateVote submits aggregate exchange rate vote.
   * @request GET:/blackfury/oracle/v1/tx/aggregate_exchange_rate_vote
   */
  msgAggregateExchangeRateVote = (
    query?: { salt?: string; exchange_rates?: string; feeder?: string; validator?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgAggregateExchangeRateVoteResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/tx/aggregate_exchange_rate_vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgDelegateFeedConsent
   * @summary DelegateFeedConsent sets the feeder delegation.
   * @request GET:/blackfury/oracle/v1/tx/delegate_feed_consent
   */
  msgDelegateFeedConsent = (query?: { operator?: string; delegate?: string }, params: RequestParams = {}) =>
    this.request<V1MsgDelegateFeedConsentResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/tx/delegate_feed_consent`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregateVote
   * @summary AggregateVote returns an aggregate vote of a validator.
   * @request GET:/blackfury/oracle/v1/valdiators/{validator_addr}/aggregate_vote
   */
  queryAggregateVote = (validator_addr: string, params: RequestParams = {}) =>
    this.request<V1QueryAggregateVoteResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/valdiators/${validator_addr}/aggregate_vote`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregatePrevotes
   * @summary AggregatePrevotes returns aggregate prevotes of all validators.
   * @request GET:/blackfury/oracle/v1/validators/aggregate_prevotes
   */
  queryAggregatePrevotes = (params: RequestParams = {}) =>
    this.request<V1QueryAggregatePrevotesResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/validators/aggregate_prevotes`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregateVotes
   * @summary AggregateVotes returns aggregate votes of all validators.
   * @request GET:/blackfury/oracle/v1/validators/aggregate_votes
   */
  queryAggregateVotes = (params: RequestParams = {}) =>
    this.request<V1QueryAggregateVotesResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/validators/aggregate_votes`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregatePrevote
   * @summary AggregatePrevote returns an aggregate prevote of a validator.
   * @request GET:/blackfury/oracle/v1/validators/{validator_addr}/aggregate_prevote
   */
  queryAggregatePrevote = (validator_addr: string, params: RequestParams = {}) =>
    this.request<V1QueryAggregatePrevoteResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/validators/${validator_addr}/aggregate_prevote`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFeederDelegation
   * @summary FeederDelegation returns feeder delegation of a validator.
   * @request GET:/blackfury/oracle/v1/validators/{validator_addr}/feeder
   */
  queryFeederDelegation = (validator_addr: string, params: RequestParams = {}) =>
    this.request<V1QueryFeederDelegationResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/validators/${validator_addr}/feeder`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMissCounter
   * @summary MissCounter returns oracle miss counter of a validator.
   * @request GET:/blackfury/oracle/v1/validators/{validator_addr}/miss
   */
  queryMissCounter = (validator_addr: string, params: RequestParams = {}) =>
    this.request<V1QueryMissCounterResponse, RpcStatus>({
      path: `/blackfury/oracle/v1/validators/${validator_addr}/miss`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/blackfuryzone/blackfury/oracle/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1QueryParamsResponse, RpcStatus>({
      path: `/blackfuryzone/blackfury/oracle/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
