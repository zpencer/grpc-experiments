export class GetChannelRequest {
  constructor ();
  getChannelId(): number;
  setChannelId(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetChannelRequest;
}

export class GetChannelResponse {
  constructor ();
  getChannel(): {};
  setChannel(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetChannelResponse;
}

export class GetServerSocketsRequest {
  constructor ();
  getServerId(): number;
  setServerId(a: number): void;
  getStartSocketId(): number;
  setStartSocketId(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetServerSocketsRequest;
}

export class GetServerSocketsResponse {
  constructor ();
  getSocketRef(): {};
  setSocketRef(a: {}): void;
  getEnd(): boolean;
  setEnd(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetServerSocketsResponse;
}

export class GetServersRequest {
  constructor ();
  getStartServerId(): number;
  setStartServerId(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetServersRequest;
}

export class GetServersResponse {
  constructor ();
  getServer(): {};
  setServer(a: {}): void;
  getEnd(): boolean;
  setEnd(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetServersResponse;
}

export class GetSocketRequest {
  constructor ();
  getSocketId(): number;
  setSocketId(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetSocketRequest;
}

export class GetSocketResponse {
  constructor ();
  getSocket(): {};
  setSocket(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetSocketResponse;
}

export class GetSubchannelRequest {
  constructor ();
  getSubchannelId(): number;
  setSubchannelId(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetSubchannelRequest;
}

export class GetSubchannelResponse {
  constructor ();
  getSubchannel(): {};
  setSubchannel(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetSubchannelResponse;
}

export class GetTopChannelsRequest {
  constructor ();
  getStartChannelId(): number;
  setStartChannelId(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTopChannelsRequest;
}

export class GetTopChannelsResponse {
  constructor ();
  getChannel(): {};
  setChannel(a: {}): void;
  getEnd(): boolean;
  setEnd(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTopChannelsResponse;
}

