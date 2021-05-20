import { Reader, Writer } from 'protobufjs/minimal';
import { SpnState } from '../testnet/spnState';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "lubtd.ibclab.testnet";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetSpnStateRequest {
    index: string;
}
export interface QueryGetSpnStateResponse {
    SpnState: SpnState | undefined;
}
export interface QueryAllSpnStateRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSpnStateResponse {
    SpnState: SpnState[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetSpnStateRequest: {
    encode(message: QueryGetSpnStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSpnStateRequest;
    fromJSON(object: any): QueryGetSpnStateRequest;
    toJSON(message: QueryGetSpnStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSpnStateRequest>): QueryGetSpnStateRequest;
};
export declare const QueryGetSpnStateResponse: {
    encode(message: QueryGetSpnStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSpnStateResponse;
    fromJSON(object: any): QueryGetSpnStateResponse;
    toJSON(message: QueryGetSpnStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSpnStateResponse>): QueryGetSpnStateResponse;
};
export declare const QueryAllSpnStateRequest: {
    encode(message: QueryAllSpnStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSpnStateRequest;
    fromJSON(object: any): QueryAllSpnStateRequest;
    toJSON(message: QueryAllSpnStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSpnStateRequest>): QueryAllSpnStateRequest;
};
export declare const QueryAllSpnStateResponse: {
    encode(message: QueryAllSpnStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSpnStateResponse;
    fromJSON(object: any): QueryAllSpnStateResponse;
    toJSON(message: QueryAllSpnStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSpnStateResponse>): QueryAllSpnStateResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    SpnState(request: QueryGetSpnStateRequest): Promise<QueryGetSpnStateResponse>;
    SpnStateAll(request: QueryAllSpnStateRequest): Promise<QueryAllSpnStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SpnState(request: QueryGetSpnStateRequest): Promise<QueryGetSpnStateResponse>;
    SpnStateAll(request: QueryAllSpnStateRequest): Promise<QueryAllSpnStateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
