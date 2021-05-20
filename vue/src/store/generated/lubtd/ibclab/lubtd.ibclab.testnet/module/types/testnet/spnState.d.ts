import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "lubtd.ibclab.testnet";
export interface SpnState {
    creator: string;
    index: string;
}
export declare const SpnState: {
    encode(message: SpnState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SpnState;
    fromJSON(object: any): SpnState;
    toJSON(message: SpnState): unknown;
    fromPartial(object: DeepPartial<SpnState>): SpnState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
