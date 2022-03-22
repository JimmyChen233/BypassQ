#!/bin/bash
docker build -t $1 --build-arg $2=$3 --build-arg $4=$5 --build-arg $6=$7 .