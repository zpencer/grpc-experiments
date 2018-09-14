import * as grpcWeb from 'grpc-web';
import {
  GetChannelRequest,
  GetChannelResponse,
  GetServerSocketsRequest,
  GetServerSocketsResponse,
  GetServersRequest,
  GetServersResponse,
  GetSocketRequest,
  GetSocketResponse,
  GetSubchannelRequest,
  GetSubchannelResponse,
  GetTopChannelsRequest,
  GetTopChannelsResponse} from './channelz_pb';

export class ChannelzClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  getTopChannels(
    request: GetTopChannelsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetTopChannelsResponse) => void
  ): grpcWeb.ClientReadableStream;

  getServers(
    request: GetServersRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetServersResponse) => void
  ): grpcWeb.ClientReadableStream;

  getServerSockets(
    request: GetServerSocketsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetServerSocketsResponse) => void
  ): grpcWeb.ClientReadableStream;

  getChannel(
    request: GetChannelRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetChannelResponse) => void
  ): grpcWeb.ClientReadableStream;

  getSubchannel(
    request: GetSubchannelRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetSubchannelResponse) => void
  ): grpcWeb.ClientReadableStream;

  getSocket(
    request: GetSocketRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: GetSocketResponse) => void
  ): grpcWeb.ClientReadableStream;

}

