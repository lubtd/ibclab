/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { SpnState } from '../testnet/spnState'
import {
  PageRequest,
  PageResponse
} from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'lubtd.ibclab.testnet'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSpnStateRequest {
  index: string
}

export interface QueryGetSpnStateResponse {
  SpnState: SpnState | undefined
}

export interface QueryAllSpnStateRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSpnStateResponse {
  SpnState: SpnState[]
  pagination: PageResponse | undefined
}

const baseQueryGetSpnStateRequest: object = { index: '' }

export const QueryGetSpnStateRequest = {
  encode(
    message: QueryGetSpnStateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSpnStateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetSpnStateRequest
    } as QueryGetSpnStateRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSpnStateRequest {
    const message = {
      ...baseQueryGetSpnStateRequest
    } as QueryGetSpnStateRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSpnStateRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetSpnStateRequest>
  ): QueryGetSpnStateRequest {
    const message = {
      ...baseQueryGetSpnStateRequest
    } as QueryGetSpnStateRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSpnStateResponse: object = {}

export const QueryGetSpnStateResponse = {
  encode(
    message: QueryGetSpnStateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SpnState !== undefined) {
      SpnState.encode(message.SpnState, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSpnStateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetSpnStateResponse
    } as QueryGetSpnStateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SpnState = SpnState.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSpnStateResponse {
    const message = {
      ...baseQueryGetSpnStateResponse
    } as QueryGetSpnStateResponse
    if (object.SpnState !== undefined && object.SpnState !== null) {
      message.SpnState = SpnState.fromJSON(object.SpnState)
    } else {
      message.SpnState = undefined
    }
    return message
  },

  toJSON(message: QueryGetSpnStateResponse): unknown {
    const obj: any = {}
    message.SpnState !== undefined &&
      (obj.SpnState = message.SpnState
        ? SpnState.toJSON(message.SpnState)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetSpnStateResponse>
  ): QueryGetSpnStateResponse {
    const message = {
      ...baseQueryGetSpnStateResponse
    } as QueryGetSpnStateResponse
    if (object.SpnState !== undefined && object.SpnState !== null) {
      message.SpnState = SpnState.fromPartial(object.SpnState)
    } else {
      message.SpnState = undefined
    }
    return message
  }
}

const baseQueryAllSpnStateRequest: object = {}

export const QueryAllSpnStateRequest = {
  encode(
    message: QueryAllSpnStateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSpnStateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllSpnStateRequest
    } as QueryAllSpnStateRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSpnStateRequest {
    const message = {
      ...baseQueryAllSpnStateRequest
    } as QueryAllSpnStateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSpnStateRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllSpnStateRequest>
  ): QueryAllSpnStateRequest {
    const message = {
      ...baseQueryAllSpnStateRequest
    } as QueryAllSpnStateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSpnStateResponse: object = {}

export const QueryAllSpnStateResponse = {
  encode(
    message: QueryAllSpnStateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.SpnState) {
      SpnState.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSpnStateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllSpnStateResponse
    } as QueryAllSpnStateResponse
    message.SpnState = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SpnState.push(SpnState.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSpnStateResponse {
    const message = {
      ...baseQueryAllSpnStateResponse
    } as QueryAllSpnStateResponse
    message.SpnState = []
    if (object.SpnState !== undefined && object.SpnState !== null) {
      for (const e of object.SpnState) {
        message.SpnState.push(SpnState.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSpnStateResponse): unknown {
    const obj: any = {}
    if (message.SpnState) {
      obj.SpnState = message.SpnState.map((e) =>
        e ? SpnState.toJSON(e) : undefined
      )
    } else {
      obj.SpnState = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllSpnStateResponse>
  ): QueryAllSpnStateResponse {
    const message = {
      ...baseQueryAllSpnStateResponse
    } as QueryAllSpnStateResponse
    message.SpnState = []
    if (object.SpnState !== undefined && object.SpnState !== null) {
      for (const e of object.SpnState) {
        message.SpnState.push(SpnState.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  SpnState(request: QueryGetSpnStateRequest): Promise<QueryGetSpnStateResponse>
  SpnStateAll(
    request: QueryAllSpnStateRequest
  ): Promise<QueryAllSpnStateResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SpnState(
    request: QueryGetSpnStateRequest
  ): Promise<QueryGetSpnStateResponse> {
    const data = QueryGetSpnStateRequest.encode(request).finish()
    const promise = this.rpc.request(
      'lubtd.ibclab.testnet.Query',
      'SpnState',
      data
    )
    return promise.then((data) =>
      QueryGetSpnStateResponse.decode(new Reader(data))
    )
  }

  SpnStateAll(
    request: QueryAllSpnStateRequest
  ): Promise<QueryAllSpnStateResponse> {
    const data = QueryAllSpnStateRequest.encode(request).finish()
    const promise = this.rpc.request(
      'lubtd.ibclab.testnet.Query',
      'SpnStateAll',
      data
    )
    return promise.then((data) =>
      QueryAllSpnStateResponse.decode(new Reader(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
