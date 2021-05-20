/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { SpnState } from '../testnet/spnState';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'lubtd.ibclab.testnet';
const baseQueryGetSpnStateRequest = { index: '' };
export const QueryGetSpnStateRequest = {
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
            ...baseQueryGetSpnStateRequest
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
            ...baseQueryGetSpnStateRequest
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
            ...baseQueryGetSpnStateRequest
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
const baseQueryGetSpnStateResponse = {};
export const QueryGetSpnStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SpnState !== undefined) {
            SpnState.encode(message.SpnState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSpnStateResponse
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SpnState = SpnState.decode(reader, reader.uint32());
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
            ...baseQueryGetSpnStateResponse
        };
        if (object.SpnState !== undefined && object.SpnState !== null) {
            message.SpnState = SpnState.fromJSON(object.SpnState);
        }
        else {
            message.SpnState = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SpnState !== undefined &&
            (obj.SpnState = message.SpnState
                ? SpnState.toJSON(message.SpnState)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSpnStateResponse
        };
        if (object.SpnState !== undefined && object.SpnState !== null) {
            message.SpnState = SpnState.fromPartial(object.SpnState);
        }
        else {
            message.SpnState = undefined;
        }
        return message;
    }
};
const baseQueryAllSpnStateRequest = {};
export const QueryAllSpnStateRequest = {
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
            ...baseQueryAllSpnStateRequest
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
            ...baseQueryAllSpnStateRequest
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
            ...baseQueryAllSpnStateRequest
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
const baseQueryAllSpnStateResponse = {};
export const QueryAllSpnStateResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SpnState) {
            SpnState.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllSpnStateResponse
        };
        message.SpnState = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SpnState.push(SpnState.decode(reader, reader.uint32()));
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
            ...baseQueryAllSpnStateResponse
        };
        message.SpnState = [];
        if (object.SpnState !== undefined && object.SpnState !== null) {
            for (const e of object.SpnState) {
                message.SpnState.push(SpnState.fromJSON(e));
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
        if (message.SpnState) {
            obj.SpnState = message.SpnState.map((e) => e ? SpnState.toJSON(e) : undefined);
        }
        else {
            obj.SpnState = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSpnStateResponse
        };
        message.SpnState = [];
        if (object.SpnState !== undefined && object.SpnState !== null) {
            for (const e of object.SpnState) {
                message.SpnState.push(SpnState.fromPartial(e));
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
    SpnState(request) {
        const data = QueryGetSpnStateRequest.encode(request).finish();
        const promise = this.rpc.request('lubtd.ibclab.testnet.Query', 'SpnState', data);
        return promise.then((data) => QueryGetSpnStateResponse.decode(new Reader(data)));
    }
    SpnStateAll(request) {
        const data = QueryAllSpnStateRequest.encode(request).finish();
        const promise = this.rpc.request('lubtd.ibclab.testnet.Query', 'SpnStateAll', data);
        return promise.then((data) => QueryAllSpnStateResponse.decode(new Reader(data)));
    }
}
