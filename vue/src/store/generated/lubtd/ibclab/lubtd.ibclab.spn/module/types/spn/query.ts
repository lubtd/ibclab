/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { TestnetState } from '../spn/testnetState'
import {
  PageRequest,
  PageResponse
} from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'lubtd.ibclab.spn'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetTestnetStateRequest {
  index: string
}

export interface QueryGetTestnetStateResponse {
  TestnetState: TestnetState | undefined
}

export interface QueryAllTestnetStateRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllTestnetStateResponse {
  TestnetState: TestnetState[]
  pagination: PageResponse | undefined
}

const baseQueryGetTestnetStateRequest: object = { index: '' }

export const QueryGetTestnetStateRequest = {
  encode(
    message: QueryGetTestnetStateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTestnetStateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetTestnetStateRequest
    } as QueryGetTestnetStateRequest
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

  fromJSON(object: any): QueryGetTestnetStateRequest {
    const message = {
      ...baseQueryGetTestnetStateRequest
    } as QueryGetTestnetStateRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetTestnetStateRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetTestnetStateRequest>
  ): QueryGetTestnetStateRequest {
    const message = {
      ...baseQueryGetTestnetStateRequest
    } as QueryGetTestnetStateRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetTestnetStateResponse: object = {}

export const QueryGetTestnetStateResponse = {
  encode(
    message: QueryGetTestnetStateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TestnetState !== undefined) {
      TestnetState.encode(
        message.TestnetState,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTestnetStateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetTestnetStateResponse
    } as QueryGetTestnetStateResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.TestnetState = TestnetState.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTestnetStateResponse {
    const message = {
      ...baseQueryGetTestnetStateResponse
    } as QueryGetTestnetStateResponse
    if (object.TestnetState !== undefined && object.TestnetState !== null) {
      message.TestnetState = TestnetState.fromJSON(object.TestnetState)
    } else {
      message.TestnetState = undefined
    }
    return message
  },

  toJSON(message: QueryGetTestnetStateResponse): unknown {
    const obj: any = {}
    message.TestnetState !== undefined &&
      (obj.TestnetState = message.TestnetState
        ? TestnetState.toJSON(message.TestnetState)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetTestnetStateResponse>
  ): QueryGetTestnetStateResponse {
    const message = {
      ...baseQueryGetTestnetStateResponse
    } as QueryGetTestnetStateResponse
    if (object.TestnetState !== undefined && object.TestnetState !== null) {
      message.TestnetState = TestnetState.fromPartial(object.TestnetState)
    } else {
      message.TestnetState = undefined
    }
    return message
  }
}

const baseQueryAllTestnetStateRequest: object = {}

export const QueryAllTestnetStateRequest = {
  encode(
    message: QueryAllTestnetStateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTestnetStateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllTestnetStateRequest
    } as QueryAllTestnetStateRequest
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

  fromJSON(object: any): QueryAllTestnetStateRequest {
    const message = {
      ...baseQueryAllTestnetStateRequest
    } as QueryAllTestnetStateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTestnetStateRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllTestnetStateRequest>
  ): QueryAllTestnetStateRequest {
    const message = {
      ...baseQueryAllTestnetStateRequest
    } as QueryAllTestnetStateRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllTestnetStateResponse: object = {}

export const QueryAllTestnetStateResponse = {
  encode(
    message: QueryAllTestnetStateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.TestnetState) {
      TestnetState.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTestnetStateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllTestnetStateResponse
    } as QueryAllTestnetStateResponse
    message.TestnetState = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.TestnetState.push(
            TestnetState.decode(reader, reader.uint32())
          )
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

  fromJSON(object: any): QueryAllTestnetStateResponse {
    const message = {
      ...baseQueryAllTestnetStateResponse
    } as QueryAllTestnetStateResponse
    message.TestnetState = []
    if (object.TestnetState !== undefined && object.TestnetState !== null) {
      for (const e of object.TestnetState) {
        message.TestnetState.push(TestnetState.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTestnetStateResponse): unknown {
    const obj: any = {}
    if (message.TestnetState) {
      obj.TestnetState = message.TestnetState.map((e) =>
        e ? TestnetState.toJSON(e) : undefined
      )
    } else {
      obj.TestnetState = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllTestnetStateResponse>
  ): QueryAllTestnetStateResponse {
    const message = {
      ...baseQueryAllTestnetStateResponse
    } as QueryAllTestnetStateResponse
    message.TestnetState = []
    if (object.TestnetState !== undefined && object.TestnetState !== null) {
      for (const e of object.TestnetState) {
        message.TestnetState.push(TestnetState.fromPartial(e))
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
  TestnetState(
    request: QueryGetTestnetStateRequest
  ): Promise<QueryGetTestnetStateResponse>
  TestnetStateAll(
    request: QueryAllTestnetStateRequest
  ): Promise<QueryAllTestnetStateResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  TestnetState(
    request: QueryGetTestnetStateRequest
  ): Promise<QueryGetTestnetStateResponse> {
    const data = QueryGetTestnetStateRequest.encode(request).finish()
    const promise = this.rpc.request(
      'lubtd.ibclab.spn.Query',
      'TestnetState',
      data
    )
    return promise.then((data) =>
      QueryGetTestnetStateResponse.decode(new Reader(data))
    )
  }

  TestnetStateAll(
    request: QueryAllTestnetStateRequest
  ): Promise<QueryAllTestnetStateResponse> {
    const data = QueryAllTestnetStateRequest.encode(request).finish()
    const promise = this.rpc.request(
      'lubtd.ibclab.spn.Query',
      'TestnetStateAll',
      data
    )
    return promise.then((data) =>
      QueryAllTestnetStateResponse.decode(new Reader(data))
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
