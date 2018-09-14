#!/bin/bash
set -eux -o pipefail

if [ "$#" -gt  1 ]; then
    echo "Usage: $0 [GRPC_PROTO_REPO_SHA]"
    echo "GRPC_PROTO_SHA defaults to 'origin/master'"
fi

# Check out a known good SHA for reproducibility
readonly GRPC_WEB_SHA=86631990e365130d5cfca3aa93613ec1eeef7da4
readonly GRPC_PROTO_SHA="${1:-origin/master}"

readonly GRPC_ZPAGES_DIR="$(cd "$(dirname "$0")"/.. && pwd)"
readonly GITHUB_DIR="$GRPC_ZPAGES_DIR"/buildscripts/github/

if [[ ! -d "$GITHUB_DIR"/grpc-web ]]; then
  mkdir -p "$GITHUB_DIR"
  cd "$GITHUB_DIR"
  git clone https://github.com/grpc/grpc-web.git
fi

cd "$GITHUB_DIR"/grpc-web/
git fetch
git checkout "$GRPC_WEB_SHA"

cd "$GITHUB_DIR"/grpc-web//net/grpc/gateway/docker
docker build -t channelz_grpc_web_prereqs ./prereqs/

cd "$GRPC_ZPAGES_DIR"/docker
docker build -t channelz_codegen codegen

docker run --rm -v "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir:/shared_dir/ channelz_codegen bash -c "function fixFiles() { chown -R $(id -u):$(id -g) /shared_dir; }; trap fixFiles EXIT; /shared_dir/scripts/gen_channelz_pb.sh $GRPC_PROTO_SHA"

if [[ -d "$GRPC_ZPAGES_DIR"/web/channelzui/src/protos/ ]]; then
    rm -rf "$GRPC_ZPAGES_DIR"/web/channelzui/src/protos/
fi
mkdir -p "$GRPC_ZPAGES_DIR"/web/channelzui/src/protos/
cp -r "$GRPC_ZPAGES_DIR"/docker/codegen/shared_dir/gen_out/* "$GRPC_ZPAGES_DIR"/web/channelzui/src/app/protos/
echo "DONE!"
