#!/bin/bash
container=$(docker ps -a -q --filter volume=elastic_certs);
pwd=$(pwd)
if [[ -n $container ]]
then
    echo "Stopping all containers using elastic certs volume ....";
    docker container stop $container;
    echo "All containers using elastic certs volume stopped ....";
    echo "Removing containers using elastic certs volume....";
    docker container rm $container;
    echo "All containers removed elastic certs volume....";
else
    echo "0 containers use certs volume"
fi;
docker volume rm elastic_certs;
docker-compose -f ./create-certs.yml up 
echo $container;
