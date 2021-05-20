/* eslint-disable */
import { TestnetState } from '../spn/testnetState';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'lubtd.ibclab.spn';
const baseGenesisState = { portId: '' };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.testnetStateList) {
            TestnetState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== '') {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.testnetStateList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.testnetStateList.push(TestnetState.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.testnetStateList = [];
        if (object.testnetStateList !== undefined &&
            object.testnetStateList !== null) {
            for (const e of object.testnetStateList) {
                message.testnetStateList.push(TestnetState.fromJSON(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.testnetStateList) {
            obj.testnetStateList = message.testnetStateList.map((e) => e ? TestnetState.toJSON(e) : undefined);
        }
        else {
            obj.testnetStateList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.testnetStateList = [];
        if (object.testnetStateList !== undefined &&
            object.testnetStateList !== null) {
            for (const e of object.testnetStateList) {
                message.testnetStateList.push(TestnetState.fromPartial(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = '';
        }
        return message;
    }
};
