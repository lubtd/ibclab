/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'lubtd.ibclab.spn'

export interface TestnetState {
  creator: string
  index: string
}

const baseTestnetState: object = { creator: '', index: '' }

export const TestnetState = {
  encode(message: TestnetState, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): TestnetState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseTestnetState } as TestnetState
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): TestnetState {
    const message = { ...baseTestnetState } as TestnetState
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
    return message
  },

  toJSON(message: TestnetState): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<TestnetState>): TestnetState {
    const message = { ...baseTestnetState } as TestnetState
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
