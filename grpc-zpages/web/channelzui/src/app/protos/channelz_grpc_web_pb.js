/**
 * @fileoverview gRPC-Web generated client stub for grpc.channelz.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.grpc = {};
proto.grpc.channelz = {};
proto.grpc.channelz.v1 = require('./channelz_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.channelz.v1.ChannelzClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.channelz.v1.ChannelzPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.grpc.channelz.v1.ChannelzClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.grpc.channelz.v1.ChannelzClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.channelz.v1.GetTopChannelsRequest,
 *   !proto.grpc.channelz.v1.GetTopChannelsResponse>}
 */
const methodInfo_GetTopChannels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.channelz.v1.GetTopChannelsResponse,
  /** @param {!proto.grpc.channelz.v1.GetTopChannelsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.channelz.v1.GetTopChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.channelz.v1.GetTopChannelsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.channelz.v1.GetTopChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.channelz.v1.GetTopChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzClient.prototype.getTopChannels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.channelz.v1.Channelz/GetTopChannels',
      request,
      metadata,
      methodInfo_GetTopChannels,
      callback);
};


/**
 * @param {!proto.grpc.channelz.v1.GetTopChannelsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.channelz.v1.GetTopChannelsResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzPromiseClient.prototype.getTopChannels =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTopChannels(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.channelz.v1.GetServersRequest,
 *   !proto.grpc.channelz.v1.GetServersResponse>}
 */
const methodInfo_GetServers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.channelz.v1.GetServersResponse,
  /** @param {!proto.grpc.channelz.v1.GetServersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.channelz.v1.GetServersResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.channelz.v1.GetServersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.channelz.v1.GetServersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.channelz.v1.GetServersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzClient.prototype.getServers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.channelz.v1.Channelz/GetServers',
      request,
      metadata,
      methodInfo_GetServers,
      callback);
};


/**
 * @param {!proto.grpc.channelz.v1.GetServersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.channelz.v1.GetServersResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzPromiseClient.prototype.getServers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getServers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.channelz.v1.GetServerSocketsRequest,
 *   !proto.grpc.channelz.v1.GetServerSocketsResponse>}
 */
const methodInfo_GetServerSockets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.channelz.v1.GetServerSocketsResponse,
  /** @param {!proto.grpc.channelz.v1.GetServerSocketsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.channelz.v1.GetServerSocketsResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.channelz.v1.GetServerSocketsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.channelz.v1.GetServerSocketsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.channelz.v1.GetServerSocketsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzClient.prototype.getServerSockets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.channelz.v1.Channelz/GetServerSockets',
      request,
      metadata,
      methodInfo_GetServerSockets,
      callback);
};


/**
 * @param {!proto.grpc.channelz.v1.GetServerSocketsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.channelz.v1.GetServerSocketsResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzPromiseClient.prototype.getServerSockets =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getServerSockets(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.channelz.v1.GetChannelRequest,
 *   !proto.grpc.channelz.v1.GetChannelResponse>}
 */
const methodInfo_GetChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.channelz.v1.GetChannelResponse,
  /** @param {!proto.grpc.channelz.v1.GetChannelRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.channelz.v1.GetChannelResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.channelz.v1.GetChannelRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.channelz.v1.GetChannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.channelz.v1.GetChannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzClient.prototype.getChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.channelz.v1.Channelz/GetChannel',
      request,
      metadata,
      methodInfo_GetChannel,
      callback);
};


/**
 * @param {!proto.grpc.channelz.v1.GetChannelRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.channelz.v1.GetChannelResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzPromiseClient.prototype.getChannel =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getChannel(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.channelz.v1.GetSubchannelRequest,
 *   !proto.grpc.channelz.v1.GetSubchannelResponse>}
 */
const methodInfo_GetSubchannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.channelz.v1.GetSubchannelResponse,
  /** @param {!proto.grpc.channelz.v1.GetSubchannelRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.channelz.v1.GetSubchannelResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.channelz.v1.GetSubchannelRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.channelz.v1.GetSubchannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.channelz.v1.GetSubchannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzClient.prototype.getSubchannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.channelz.v1.Channelz/GetSubchannel',
      request,
      metadata,
      methodInfo_GetSubchannel,
      callback);
};


/**
 * @param {!proto.grpc.channelz.v1.GetSubchannelRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.channelz.v1.GetSubchannelResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzPromiseClient.prototype.getSubchannel =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getSubchannel(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.channelz.v1.GetSocketRequest,
 *   !proto.grpc.channelz.v1.GetSocketResponse>}
 */
const methodInfo_GetSocket = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.channelz.v1.GetSocketResponse,
  /** @param {!proto.grpc.channelz.v1.GetSocketRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.channelz.v1.GetSocketResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.channelz.v1.GetSocketRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.channelz.v1.GetSocketResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.channelz.v1.GetSocketResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzClient.prototype.getSocket =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.channelz.v1.Channelz/GetSocket',
      request,
      metadata,
      methodInfo_GetSocket,
      callback);
};


/**
 * @param {!proto.grpc.channelz.v1.GetSocketRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.channelz.v1.GetSocketResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc.channelz.v1.ChannelzPromiseClient.prototype.getSocket =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getSocket(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.grpc.channelz.v1;

