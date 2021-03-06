import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "lubtd.ibclab.spn";
export interface TestnetState {
    creator: string;
    index: string;
}
export declare const TestnetState: {
    encode(message: TestnetState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TestnetState;
    fromJSON(object: any): TestnetState;
    toJSON(message: TestnetState): unknown;
    fromPartial(object: DeepPartial<TestnetState>): TestnetState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
