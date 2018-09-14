/*
 * @license
 * Copyright 2018, gRPC Authors All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "../environments/environment";
import * as grpcWeb from 'grpc-web';
import * as channelz from './protos/channelz_grpc_web_pb';
import * as channelz_pb from './protos/channelz_pb';

@Injectable()
export class ChannelzService {
  xsrfMeta: {};
  client: channelz.ChannelzClient;

  constructor() {
    this.xsrfMeta = ChannelzService.genXsrfMeta();
    this.client = new channelz.ChannelzClient(
      environment.grpcRemoteAddr, {}, {});
  }

  private static genXsrfMeta(): any {
    const arr = new Int8Array(32); // 256 bits of entropy
    window.crypto.getRandomValues(arr);
    const xsrfVal = btoa(arr.toString());
    document.cookie = `gdebug-xsrf-token=${xsrfVal};path=/`;
    return {"gdebug-xsrf-token": xsrfVal};
  }

  getServers(startId: number): Observable<channelz_pb.GetServersResponse> {
    const req = new channelz_pb.GetServersRequest();
    req.setStartServerId(startId);
    const sub: Subject<channelz_pb.GetServersResponse> = Subject.create();
    this.client.getServers(req, this.xsrfMeta,
      function(err: grpcWeb.Error, response: channelz_pb.GetServersResponse): void {
        sub.next(response);
        sub.complete();
      });
    return sub.asObservable();
  }

  getServerSockets(serverId: number, startId: number): Observable<channelz_pb.GetServerSocketsResponse> {
    const req = new channelz_pb.GetServerSocketsRequest();
    req.setServerId(serverId);
    req.setStartSocketId(startId);
    const sub: Subject<channelz_pb.GetServerSocketsResponse> = Subject.create();
    this.client.getServerSockets(req, this.xsrfMeta,
      function(err: grpcWeb.Error, response: channelz_pb.GetServerSocketsResponse): void {
        sub.next(response);
        sub.complete();
      });
    return sub.asObservable();
  }

  getTopChannels(startId: number): Observable<channelz_pb.GetTopChannelsResponse> {
    const req = new channelz_pb.GetTopChannelsRequest();
    req.setStartChannelId(startId);
    const sub: Subject<channelz_pb.GetTopChannelsResponse> = Subject.create();
    this.client.getTopChannels(req, this.xsrfMeta,
      function(err: grpcWeb.Error, response: channelz_pb.GetTopChannelsResponse): void {
        sub.next(response);
        sub.complete();
      });
    return sub.asObservable();
  }

  getSubchannel(id: number): Observable<channelz_pb.GetSubchannelResponse> {
    const req = new channelz_pb.GetSubchannelRequest();
    req.setSubchannelId(id);
    const sub: Subject<channelz_pb.GetSubchannelResponse> = Subject.create();
    this.client.getSubchannel(req, this.xsrfMeta,
      function(err: grpcWeb.Error, response: channelz_pb.GetSubchannelResponse): void {
        sub.next(response);
        sub.complete();
      });
    return sub.asObservable();
  }

  getChannel(id: number): Observable<channelz_pb.GetChannelResponse> {
    const req = new channelz_pb.GetChannelRequest();
    req.setChannelId(id);
    const sub: Subject<channelz_pb.GetChannelResponse> = Subject.create();
    this.client.getChannel(req, this.xsrfMeta,
      function(err: grpcWeb.Error, response: channelz_pb.GetChannelResponse): void {
        sub.next(response);
        sub.complete();
      });
    return sub.asObservable();
  }

  getSocket(id: number): Observable<channelz_pb.GetSocketResponse> {
    const req = new channelz_pb.GetSocketRequest();
    req.setSocketId(id);
    const sub: Subject<channelz_pb.GetSocketResponse> = Subject.create();
    this.client.getSocket(req, this.xsrfMeta,
      function(err: grpcWeb.Error, response: channelz_pb.GetSocketResponse): void {
        sub.next(response);
        sub.complete();
      });
    return sub.asObservable();
  }
}
