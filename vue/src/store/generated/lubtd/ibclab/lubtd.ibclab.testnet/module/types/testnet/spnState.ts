/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'lubtd.ibclab.testnet'

export interface SpnState {
  creator: string
  index: string
  clientID: string
}

const baseSpnState: object = { creator: '', index: '', clientID: '' }

export const SpnState = {
  encode(message: SpnState, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.clientID !== '') {
      writer.uint32(26).string(message.clientID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): SpnState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSpnState } as SpnState
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.clientID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SpnState {
    const message = { ...baseSpnState } as SpnState
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = String(object.clientID)
    } else {
      message.clientID = ''
    }
    return message
  },

  toJSON(message: SpnState): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.clientID !== undefined && (obj.clientID = message.clientID)
    return obj
  },

  fromPartial(object: DeepPartial<SpnState>): SpnState {
    const message = { ...baseSpnState } as SpnState
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = object.clientID
    } else {
      message.clientID = ''
    }
    return message
  }
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
