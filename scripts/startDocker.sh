#!/bin/bash

# Start docker with the first argument as the container name; if none is specified docker will
# ignore the --name option and just pick one

docker run -d --rm -p 8080:8080 --name=$1 reusr1/peregrine-cms:develop

# here's where we'll spam "docker inspect" to wait for the health check to return true
# until that's ready, we'll just sleep for 15 seconds :O
sleep 15

