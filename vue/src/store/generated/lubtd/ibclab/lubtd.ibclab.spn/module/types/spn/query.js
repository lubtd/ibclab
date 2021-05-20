/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { TestnetState } from '../spn/testnetState';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'lubtd.ibclab.spn';
const baseQueryGetTestnetStateRequest = { index: '' };
export const QueryGetTestnetStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetTestnetStateRequest
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetTestnetStateRequest
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetTestnetStateRequest
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetTestnetStateResponse = {};
export const QueryGetTestnetStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.TestnetState !== undefined) {
            TestnetState.encode(message.TestnetState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetTestnetStateResponse
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TestnetState = TestnetState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetTestnetStateResponse
        };
        if (object.TestnetState !== undefined && object.TestnetState !== null) {
            message.TestnetState = TestnetState.fromJSON(object.TestnetState);
        }
        else {
            message.TestnetState = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.TestnetState !== undefined &&
            (obj.TestnetState = message.TestnetState
                ? TestnetState.toJSON(message.TestnetState)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetTestnetStateResponse
        };
        if (object.TestnetState !== undefined && object.TestnetState !== null) {
            message.TestnetState = TestnetState.fromPartial(object.TestnetState);
        }
        else {
            message.TestnetState = undefined;
        }
        return message;
    }
};
const baseQueryAllTestnetStateRequest = {};
export const QueryAllTestnetStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllTestnetStateRequest
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllTestnetStateRequest
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllTestnetStateRequest
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllTestnetStateResponse = {};
export const QueryAllTestnetStateResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.TestnetState) {
            TestnetState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllTestnetStateResponse
        };
        message.TestnetState = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TestnetState.push(TestnetState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllTestnetStateResponse
        };
        message.TestnetState = [];
        if (object.TestnetState !== undefined && object.TestnetState !== null) {
            for (const e of object.TestnetState) {
                message.TestnetState.push(TestnetState.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.TestnetState) {
            obj.TestnetState = message.TestnetState.map((e) => e ? TestnetState.toJSON(e) : undefined);
        }
        else {
            obj.TestnetState = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllTestnetStateResponse
        };
        message.TestnetState = [];
        if (object.TestnetState !== undefined && object.TestnetState !== null) {
            for (const e of object.TestnetState) {
                message.TestnetState.push(TestnetState.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    TestnetState(request) {
        const data = QueryGetTestnetStateRequest.encode(request).finish();
        const promise = this.rpc.request('lubtd.ibclab.spn.Query', 'TestnetState', data);
        return promise.then((data) => QueryGetTestnetStateResponse.decode(new Reader(data)));
    }
    TestnetStateAll(request) {
        const data = QueryAllTestnetStateRequest.encode(request).finish();
        const promise = this.rpc.request('lubtd.ibclab.spn.Query', 'TestnetStateAll', data);
        return promise.then((data) => QueryAllTestnetStateResponse.decode(new Reader(data)));
    }
}
