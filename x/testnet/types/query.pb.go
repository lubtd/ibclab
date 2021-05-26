// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: testnet/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// this line is used by starport scaffolding # 3
type QueryGetSpnStateRequest struct {
	Index string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
}

func (m *QueryGetSpnStateRequest) Reset()         { *m = QueryGetSpnStateRequest{} }
func (m *QueryGetSpnStateRequest) String() string { return proto.CompactTextString(m) }
func (*QueryGetSpnStateRequest) ProtoMessage()    {}
func (*QueryGetSpnStateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_05d3c463dc4cee07, []int{0}
}
func (m *QueryGetSpnStateRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetSpnStateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetSpnStateRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetSpnStateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetSpnStateRequest.Merge(m, src)
}
func (m *QueryGetSpnStateRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetSpnStateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetSpnStateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetSpnStateRequest proto.InternalMessageInfo

func (m *QueryGetSpnStateRequest) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

type QueryGetSpnStateResponse struct {
	SpnState *SpnState `protobuf:"bytes,1,opt,name=SpnState,proto3" json:"SpnState,omitempty"`
}

func (m *QueryGetSpnStateResponse) Reset()         { *m = QueryGetSpnStateResponse{} }
func (m *QueryGetSpnStateResponse) String() string { return proto.CompactTextString(m) }
func (*QueryGetSpnStateResponse) ProtoMessage()    {}
func (*QueryGetSpnStateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_05d3c463dc4cee07, []int{1}
}
func (m *QueryGetSpnStateResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetSpnStateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetSpnStateResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetSpnStateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetSpnStateResponse.Merge(m, src)
}
func (m *QueryGetSpnStateResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetSpnStateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetSpnStateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetSpnStateResponse proto.InternalMessageInfo

func (m *QueryGetSpnStateResponse) GetSpnState() *SpnState {
	if m != nil {
		return m.SpnState
	}
	return nil
}

type QueryAllSpnStateRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllSpnStateRequest) Reset()         { *m = QueryAllSpnStateRequest{} }
func (m *QueryAllSpnStateRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAllSpnStateRequest) ProtoMessage()    {}
func (*QueryAllSpnStateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_05d3c463dc4cee07, []int{2}
}
func (m *QueryAllSpnStateRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllSpnStateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllSpnStateRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllSpnStateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllSpnStateRequest.Merge(m, src)
}
func (m *QueryAllSpnStateRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllSpnStateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllSpnStateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllSpnStateRequest proto.InternalMessageInfo

func (m *QueryAllSpnStateRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAllSpnStateResponse struct {
	SpnState   []*SpnState         `protobuf:"bytes,1,rep,name=SpnState,proto3" json:"SpnState,omitempty"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllSpnStateResponse) Reset()         { *m = QueryAllSpnStateResponse{} }
func (m *QueryAllSpnStateResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAllSpnStateResponse) ProtoMessage()    {}
func (*QueryAllSpnStateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_05d3c463dc4cee07, []int{3}
}
func (m *QueryAllSpnStateResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllSpnStateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllSpnStateResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllSpnStateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllSpnStateResponse.Merge(m, src)
}
func (m *QueryAllSpnStateResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllSpnStateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllSpnStateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllSpnStateResponse proto.InternalMessageInfo

func (m *QueryAllSpnStateResponse) GetSpnState() []*SpnState {
	if m != nil {
		return m.SpnState
	}
	return nil
}

func (m *QueryAllSpnStateResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryGetSpnStateRequest)(nil), "lubtd.ibclab.testnet.QueryGetSpnStateRequest")
	proto.RegisterType((*QueryGetSpnStateResponse)(nil), "lubtd.ibclab.testnet.QueryGetSpnStateResponse")
	proto.RegisterType((*QueryAllSpnStateRequest)(nil), "lubtd.ibclab.testnet.QueryAllSpnStateRequest")
	proto.RegisterType((*QueryAllSpnStateResponse)(nil), "lubtd.ibclab.testnet.QueryAllSpnStateResponse")
}

func init() { proto.RegisterFile("testnet/query.proto", fileDescriptor_05d3c463dc4cee07) }

var fileDescriptor_05d3c463dc4cee07 = []byte{
	// 403 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0x4f, 0x4f, 0x22, 0x31,
	0x18, 0xc6, 0x29, 0x1b, 0x36, 0xbb, 0xe5, 0xd6, 0x25, 0xbb, 0x84, 0x6c, 0x1a, 0x32, 0x07, 0x20,
	0x9b, 0x6c, 0x1b, 0xf0, 0xe6, 0x0d, 0x0f, 0x72, 0x55, 0x48, 0x3c, 0x78, 0xeb, 0x40, 0x33, 0x4e,
	0x32, 0xb4, 0x03, 0xed, 0x18, 0x88, 0xf1, 0xe2, 0x27, 0x30, 0xd1, 0x8b, 0x27, 0xbf, 0x87, 0x9f,
	0xc0, 0x23, 0x89, 0x17, 0x8f, 0x06, 0xfc, 0x20, 0x86, 0x76, 0x86, 0xbf, 0x23, 0xea, 0x71, 0x3a,
	0xcf, 0xf3, 0xbc, 0xbf, 0x67, 0xde, 0x0e, 0xfc, 0xa5, 0xb9, 0xd2, 0x82, 0x6b, 0x3a, 0x88, 0xf8,
	0x70, 0x4c, 0xc2, 0xa1, 0xd4, 0x12, 0x15, 0x82, 0xc8, 0xd5, 0x3d, 0xe2, 0xbb, 0xdd, 0x80, 0xb9,
	0x24, 0x56, 0x94, 0xfe, 0x7a, 0x52, 0x7a, 0x01, 0xa7, 0x2c, 0xf4, 0x29, 0x13, 0x42, 0x6a, 0xa6,
	0x7d, 0x29, 0x94, 0xf5, 0x94, 0xfe, 0x75, 0xa5, 0xea, 0x4b, 0x45, 0x5d, 0xa6, 0xb8, 0x0d, 0xa3,
	0xe7, 0x75, 0x97, 0x6b, 0x56, 0xa7, 0x21, 0xf3, 0x7c, 0x61, 0xc4, 0xb1, 0xf6, 0x77, 0x32, 0x54,
	0x85, 0xa2, 0xa3, 0x99, 0xe6, 0xf6, 0xdc, 0xa1, 0xf0, 0xcf, 0xf1, 0xdc, 0xd9, 0xe2, 0xba, 0x13,
	0xbf, 0x69, 0xf3, 0x41, 0xc4, 0x95, 0x46, 0x05, 0x98, 0xf3, 0x45, 0x8f, 0x8f, 0x8a, 0xa0, 0x0c,
	0x6a, 0x3f, 0xdb, 0xf6, 0xc1, 0x39, 0x81, 0xc5, 0x6d, 0x83, 0x0a, 0xa5, 0x50, 0x1c, 0xed, 0xc3,
	0x1f, 0xc9, 0x99, 0x31, 0xe5, 0x1b, 0x98, 0xa4, 0xf5, 0x22, 0x0b, 0xe7, 0x42, 0xef, 0xb0, 0x18,
	0xa4, 0x19, 0x04, 0x9b, 0x20, 0x87, 0x10, 0x2e, 0xfb, 0xc4, 0xc1, 0x15, 0x62, 0xcb, 0x93, 0x79,
	0x79, 0x62, 0xbf, 0x64, 0x5c, 0x9e, 0x1c, 0x31, 0x2f, 0xf1, 0xb6, 0x57, 0x9c, 0xce, 0x3d, 0x88,
	0xd9, 0xd7, 0x66, 0xa4, 0xb2, 0x7f, 0xfb, 0x0a, 0x3b, 0x6a, 0xad, 0x01, 0x66, 0x0d, 0x60, 0xf5,
	0x43, 0x40, 0x3b, 0x78, 0x95, 0xb0, 0xf1, 0x90, 0x85, 0x39, 0x43, 0x88, 0xee, 0xc0, 0x92, 0x07,
	0xfd, 0x4f, 0x27, 0x79, 0x67, 0x71, 0x25, 0xf2, 0x59, 0xb9, 0x25, 0x70, 0xc8, 0xd5, 0xd3, 0xeb,
	0x4d, 0xb6, 0x86, 0x2a, 0xd4, 0xf8, 0xa8, 0xf5, 0xd1, 0xcd, 0x1b, 0x43, 0x2f, 0xcc, 0x0d, 0xb8,
	0x44, 0xb7, 0x00, 0xe6, 0x93, 0x90, 0x66, 0x10, 0xec, 0xc4, 0xdb, 0x5e, 0xe7, 0x4e, 0xbc, 0x94,
	0xcd, 0x38, 0x15, 0x83, 0x57, 0x46, 0x78, 0x37, 0xde, 0x41, 0xf3, 0x71, 0x8a, 0xc1, 0x64, 0x8a,
	0xc1, 0xcb, 0x14, 0x83, 0xeb, 0x19, 0xce, 0x4c, 0x66, 0x38, 0xf3, 0x3c, 0xc3, 0x99, 0xd3, 0xaa,
	0xe7, 0xeb, 0xb3, 0xc8, 0x25, 0x5d, 0xd9, 0x5f, 0xcf, 0x18, 0x2d, 0x52, 0xf4, 0x38, 0xe4, 0xca,
	0xfd, 0x6e, 0x7e, 0x8a, 0xbd, 0xb7, 0x00, 0x00, 0x00, 0xff, 0xff, 0x1a, 0xdd, 0x23, 0xe7, 0xa3,
	0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// this line is used by starport scaffolding # 2
	SpnState(ctx context.Context, in *QueryGetSpnStateRequest, opts ...grpc.CallOption) (*QueryGetSpnStateResponse, error)
	SpnStateAll(ctx context.Context, in *QueryAllSpnStateRequest, opts ...grpc.CallOption) (*QueryAllSpnStateResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) SpnState(ctx context.Context, in *QueryGetSpnStateRequest, opts ...grpc.CallOption) (*QueryGetSpnStateResponse, error) {
	out := new(QueryGetSpnStateResponse)
	err := c.cc.Invoke(ctx, "/lubtd.ibclab.testnet.Query/SpnState", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) SpnStateAll(ctx context.Context, in *QueryAllSpnStateRequest, opts ...grpc.CallOption) (*QueryAllSpnStateResponse, error) {
	out := new(QueryAllSpnStateResponse)
	err := c.cc.Invoke(ctx, "/lubtd.ibclab.testnet.Query/SpnStateAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// this line is used by starport scaffolding # 2
	SpnState(context.Context, *QueryGetSpnStateRequest) (*QueryGetSpnStateResponse, error)
	SpnStateAll(context.Context, *QueryAllSpnStateRequest) (*QueryAllSpnStateResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) SpnState(ctx context.Context, req *QueryGetSpnStateRequest) (*QueryGetSpnStateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SpnState not implemented")
}
func (*UnimplementedQueryServer) SpnStateAll(ctx context.Context, req *QueryAllSpnStateRequest) (*QueryAllSpnStateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SpnStateAll not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_SpnState_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetSpnStateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).SpnState(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/lubtd.ibclab.testnet.Query/SpnState",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).SpnState(ctx, req.(*QueryGetSpnStateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_SpnStateAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllSpnStateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).SpnStateAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/lubtd.ibclab.testnet.Query/SpnStateAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).SpnStateAll(ctx, req.(*QueryAllSpnStateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "lubtd.ibclab.testnet.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SpnState",
			Handler:    _Query_SpnState_Handler,
		},
		{
			MethodName: "SpnStateAll",
			Handler:    _Query_SpnStateAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "testnet/query.proto",
}

func (m *QueryGetSpnStateRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetSpnStateRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetSpnStateRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryGetSpnStateResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetSpnStateResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetSpnStateResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.SpnState != nil {
		{
			size, err := m.SpnState.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllSpnStateRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllSpnStateRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllSpnStateRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllSpnStateResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllSpnStateResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllSpnStateResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.SpnState) > 0 {
		for iNdEx := len(m.SpnState) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SpnState[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryGetSpnStateRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryGetSpnStateResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.SpnState != nil {
		l = m.SpnState.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllSpnStateRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllSpnStateResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.SpnState) > 0 {
		for _, e := range m.SpnState {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryGetSpnStateRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetSpnStateRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetSpnStateRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryGetSpnStateResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetSpnStateResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetSpnStateResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SpnState", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.SpnState == nil {
				m.SpnState = &SpnState{}
			}
			if err := m.SpnState.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllSpnStateRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllSpnStateRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllSpnStateRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllSpnStateResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllSpnStateResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllSpnStateResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SpnState", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SpnState = append(m.SpnState, &SpnState{})
			if err := m.SpnState[len(m.SpnState)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)