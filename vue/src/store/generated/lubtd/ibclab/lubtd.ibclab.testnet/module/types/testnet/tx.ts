/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'lubtd.ibclab.testnet'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendFoo {
  sender: string
  port: string
  channelID: string
  timeoutTimestamp: number
}

export interface MsgSendFooResponse {}

const baseMsgSendFoo: object = {
  sender: '',
  port: '',
  channelID: '',
  timeoutTimestamp: 0
}

export const MsgSendFoo = {
  encode(message: MsgSendFoo, writer: Writer = Writer.create()): Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (message.port !== '') {
      writer.uint32(18).string(message.port)
    }
    if (message.channelID !== '') {
      writer.uint32(26).string(message.channelID)
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendFoo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendFoo } as MsgSendFoo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.port = reader.string()
          break
        case 3:
          message.channelID = reader.string()
          break
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendFoo {
    const message = { ...baseMsgSendFoo } as MsgSendFoo
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port)
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID)
    } else {
      message.channelID = ''
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp)
    } else {
      message.timeoutTimestamp = 0
    }
    return message
  },

  toJSON(message: MsgSendFoo): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.port !== undefined && (obj.port = message.port)
    message.channelID !== undefined && (obj.channelID = message.channelID)
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendFoo>): MsgSendFoo {
    const message = { ...baseMsgSendFoo } as MsgSendFoo
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID
    } else {
      message.channelID = ''
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp
    } else {
      message.timeoutTimestamp = 0
    }
    return message
  }
}

const baseMsgSendFooResponse: object = {}

export const MsgSendFooResponse = {
  encode(_: MsgSendFooResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendFooResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendFooResponse } as MsgSendFooResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgSendFooResponse {
    const message = { ...baseMsgSendFooResponse } as MsgSendFooResponse
    return message
  },

  toJSON(_: MsgSendFooResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSendFooResponse>): MsgSendFooResponse {
    const message = { ...baseMsgSendFooResponse } as MsgSendFooResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendFoo(request: MsgSendFoo): Promise<MsgSendFooResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SendFoo(request: MsgSendFoo): Promise<MsgSendFooResponse> {
    const data = MsgSendFoo.encode(request).finish()
    const promise = this.rpc.request(
      'lubtd.ibclab.testnet.Msg',
      'SendFoo',
      data
    )
    return promise.then((data) => MsgSendFooResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
