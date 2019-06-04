#!/bin/bash

#
if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: docker is not installed.' >&2
  exit 1
fi

# Start docker with the first argument as the container name; if none is specified docker will
# ignore the --name option and just pick one

TAG=${2:-develop}

docker run -d --rm -p 8080:8080 --name=$1 reusr1/peregrine-cms:$TAG

# make sure it didn't fail for whatever reason
if ! [ $? -eq 0 ]; then
    echo 'Error: docker unable to start.' >&2
    exit 1
fi

# here's where we'll spam "docker inspect" to wait for the health check to return true
# until that's ready, we'll just sleep for 15 seconds :O
sleep 15

