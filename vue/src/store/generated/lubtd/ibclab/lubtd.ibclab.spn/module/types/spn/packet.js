/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'lubtd.ibclab.spn';
const baseSpnPacketData = {};
export const SpnPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.fooPacket !== undefined) {
            FooPacketData.encode(message.fooPacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSpnPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fooPacket = FooPacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSpnPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.fooPacket !== undefined && object.fooPacket !== null) {
            message.fooPacket = FooPacketData.fromJSON(object.fooPacket);
        }
        else {
            message.fooPacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined &&
            (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.fooPacket !== undefined &&
            (obj.fooPacket = message.fooPacket
                ? FooPacketData.toJSON(message.fooPacket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSpnPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.fooPacket !== undefined && object.fooPacket !== null) {
            message.fooPacket = FooPacketData.fromPartial(object.fooPacket);
        }
        else {
            message.fooPacket = undefined;
        }
        return message;
    }
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
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
    fromJSON(_) {
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    }
};
const baseFooPacketData = {};
export const FooPacketData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFooPacketData };
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
    fromJSON(_) {
        const message = { ...baseFooPacketData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseFooPacketData };
        return message;
    }
};
const baseFooPacketAck = {};
export const FooPacketAck = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFooPacketAck };
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
    fromJSON(_) {
        const message = { ...baseFooPacketAck };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseFooPacketAck };
        return message;
    }
};
