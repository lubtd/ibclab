import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "lubtd.ibclab.spn";
export interface SpnPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    fooPacket: FooPacketData | undefined;
}
export interface NoData {
}
/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * FooPacketData defines a struct for the packet payload
 */
export interface FooPacketData {
}
/** FooPacketAck defines a struct for the packet acknowledgment */
export interface FooPacketAck {
}
export declare const SpnPacketData: {
    encode(message: SpnPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SpnPacketData;
    fromJSON(object: any): SpnPacketData;
    toJSON(message: SpnPacketData): unknown;
    fromPartial(object: DeepPartial<SpnPacketData>): SpnPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const FooPacketData: {
    encode(_: FooPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): FooPacketData;
    fromJSON(_: any): FooPacketData;
    toJSON(_: FooPacketData): unknown;
    fromPartial(_: DeepPartial<FooPacketData>): FooPacketData;
};
export declare const FooPacketAck: {
    encode(_: FooPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): FooPacketAck;
    fromJSON(_: any): FooPacketAck;
    toJSON(_: FooPacketAck): unknown;
    fromPartial(_: DeepPartial<FooPacketAck>): FooPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
