#!/bin/bash

#
if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: docker is not installed.' >&2
  exit 1
fi

# Start docker with the first argument as the container name; if none is specified docker will
# ignore the --name option and just pick one

TAG=${2:-develop}
CONTAINER_NAME=${2:-peregrine_cms_container}

docker run -d --rm -p 8080:8080 --name=$CONTAINER_NAME peregrinecms/peregrine-cms:$TAG

# make sure it didn't fail for whatever reason
if ! [ $? -eq 0 ]; then
    echo 'Error: docker unable to start.' >&2
    exit 1
fi

# Call docker inspect every second until status comes back as "healthy"
until docker inspect -f {{.State.Health.Status}} $CONTAINER_NAME | grep -q "healthy";
do
    sleep 1;
done


