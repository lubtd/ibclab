import { Reader, Writer } from 'protobufjs/minimal';
import { TestnetState } from '../spn/testnetState';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "lubtd.ibclab.spn";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetTestnetStateRequest {
    index: string;
}
export interface QueryGetTestnetStateResponse {
    TestnetState: TestnetState | undefined;
}
export interface QueryAllTestnetStateRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTestnetStateResponse {
    TestnetState: TestnetState[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetTestnetStateRequest: {
    encode(message: QueryGetTestnetStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTestnetStateRequest;
    fromJSON(object: any): QueryGetTestnetStateRequest;
    toJSON(message: QueryGetTestnetStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTestnetStateRequest>): QueryGetTestnetStateRequest;
};
export declare const QueryGetTestnetStateResponse: {
    encode(message: QueryGetTestnetStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTestnetStateResponse;
    fromJSON(object: any): QueryGetTestnetStateResponse;
    toJSON(message: QueryGetTestnetStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTestnetStateResponse>): QueryGetTestnetStateResponse;
};
export declare const QueryAllTestnetStateRequest: {
    encode(message: QueryAllTestnetStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTestnetStateRequest;
    fromJSON(object: any): QueryAllTestnetStateRequest;
    toJSON(message: QueryAllTestnetStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTestnetStateRequest>): QueryAllTestnetStateRequest;
};
export declare const QueryAllTestnetStateResponse: {
    encode(message: QueryAllTestnetStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTestnetStateResponse;
    fromJSON(object: any): QueryAllTestnetStateResponse;
    toJSON(message: QueryAllTestnetStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTestnetStateResponse>): QueryAllTestnetStateResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    TestnetState(request: QueryGetTestnetStateRequest): Promise<QueryGetTestnetStateResponse>;
    TestnetStateAll(request: QueryAllTestnetStateRequest): Promise<QueryAllTestnetStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    TestnetState(request: QueryGetTestnetStateRequest): Promise<QueryGetTestnetStateResponse>;
    TestnetStateAll(request: QueryAllTestnetStateRequest): Promise<QueryAllTestnetStateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
