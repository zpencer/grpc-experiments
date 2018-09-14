#!/bin/bash
set -eux -o pipefail

if [ "$#" -ne  1 ]; then
    echo "Usage: $0 GRPC_PROTO_SHA"
fi

readonly GRPC_PROTO_SHA="$1"
readonly SHARED_DIR="$(cd "$(dirname "$0")"/.. && pwd)"

mkdir -p /github
cd /github/
git clone https://github.com/grpc/grpc-proto.git
cd /github/grpc-proto
git checkout "$GRPC_PROTO_SHA"

readonly GENOUT="$SHARED_DIR"/gen_out/

if [[ -d "$GENOUT" ]]; then
    rm -rf "$GENOUT"
fi
mkdir -p "$GENOUT"
protoc  -I=/github/grpc-web-base/third_party/grpc/third_party/protobuf/src/ -I=/github/grpc-proto/grpc/channelz/v1/ --js_out=import_style=commonjs:"$GENOUT" --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:"$GENOUT" google/protobuf/any.proto google/protobuf/duration.proto google/protobuf/timestamp.proto google/protobuf/wrappers.proto channelz.proto
