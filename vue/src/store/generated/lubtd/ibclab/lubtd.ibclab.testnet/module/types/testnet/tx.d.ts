import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "lubtd.ibclab.testnet";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendFoo {
    sender: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
}
export interface MsgSendFooResponse {
}
export declare const MsgSendFoo: {
    encode(message: MsgSendFoo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendFoo;
    fromJSON(object: any): MsgSendFoo;
    toJSON(message: MsgSendFoo): unknown;
    fromPartial(object: DeepPartial<MsgSendFoo>): MsgSendFoo;
};
export declare const MsgSendFooResponse: {
    encode(_: MsgSendFooResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendFooResponse;
    fromJSON(_: any): MsgSendFooResponse;
    toJSON(_: MsgSendFooResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendFooResponse>): MsgSendFooResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendFoo(request: MsgSendFoo): Promise<MsgSendFooResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendFoo(request: MsgSendFoo): Promise<MsgSendFooResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
