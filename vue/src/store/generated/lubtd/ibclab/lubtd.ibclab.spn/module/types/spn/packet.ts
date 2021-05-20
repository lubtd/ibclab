/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'lubtd.ibclab.spn'

export interface SpnPacketData {
  noData: NoData | undefined
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  fooPacket: FooPacketData | undefined
}

export interface NoData {}

/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * FooPacketData defines a struct for the packet payload
 */
export interface FooPacketData {}

/** FooPacketAck defines a struct for the packet acknowledgment */
export interface FooPacketAck {}

const baseSpnPacketData: object = {}

export const SpnPacketData = {
  encode(message: SpnPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim()
    }
    if (message.fooPacket !== undefined) {
      FooPacketData.encode(message.fooPacket, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): SpnPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSpnPacketData } as SpnPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32())
          break
        case 2:
          message.fooPacket = FooPacketData.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SpnPacketData {
    const message = { ...baseSpnPacketData } as SpnPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.fooPacket !== undefined && object.fooPacket !== null) {
      message.fooPacket = FooPacketData.fromJSON(object.fooPacket)
    } else {
      message.fooPacket = undefined
    }
    return message
  },

  toJSON(message: SpnPacketData): unknown {
    const obj: any = {}
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined)
    message.fooPacket !== undefined &&
      (obj.fooPacket = message.fooPacket
        ? FooPacketData.toJSON(message.fooPacket)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<SpnPacketData>): SpnPacketData {
    const message = { ...baseSpnPacketData } as SpnPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.fooPacket !== undefined && object.fooPacket !== null) {
      message.fooPacket = FooPacketData.fromPartial(object.fooPacket)
    } else {
      message.fooPacket = undefined
    }
    return message
  }
}

const baseNoData: object = {}

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNoData } as NoData
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData
    return message
  },

  toJSON(_: NoData): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData
    return message
  }
}

const baseFooPacketData: object = {}

export const FooPacketData = {
  encode(_: FooPacketData, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): FooPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseFooPacketData } as FooPacketData
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

  fromJSON(_: any): FooPacketData {
    const message = { ...baseFooPacketData } as FooPacketData
    return message
  },

  toJSON(_: FooPacketData): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<FooPacketData>): FooPacketData {
    const message = { ...baseFooPacketData } as FooPacketData
    return message
  }
}

const baseFooPacketAck: object = {}

export const FooPacketAck = {
  encode(_: FooPacketAck, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): FooPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseFooPacketAck } as FooPacketAck
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

  fromJSON(_: any): FooPacketAck {
    const message = { ...baseFooPacketAck } as FooPacketAck
    return message
  },

  toJSON(_: FooPacketAck): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<FooPacketAck>): FooPacketAck {
    const message = { ...baseFooPacketAck } as FooPacketAck
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
