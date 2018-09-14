declare var goog: any;
goog.require('proto.grpc.channelz.v1.ChannelzClient');
goog.require('proto.grpc.channelz.v1.SocketOptionLinger');
goog.require('proto.grpc.channelz.v1.SocketOptionTimeout');
goog.require('proto.grpc.channelz.v1.SocketOptionTcpInfo');
declare var proto: any;

describe('ChannelzService', () => {
  it('ChannelzClient is available',
    () => {
      const client = new proto.grpc.channelz.v1.ChannelzClient();
      expect(typeof client).toBe("something");
    })
});
