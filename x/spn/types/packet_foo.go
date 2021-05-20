package types

// ValidateBasic is used for validating the packet
func (p FooPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p FooPacketData) GetBytes() ([]byte, error) {
	var modulePacket SpnPacketData

	modulePacket.Packet = &SpnPacketData_FooPacket{&p}

	return modulePacket.Marshal()
}
