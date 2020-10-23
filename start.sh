#!/bin/sh
while ! curl --cacert $ELASTIC_CLIENT_CA_PATH -u $ELASTIC_USER:$ELASTIC_PASSWORD https://$ELASTICSEARCH_PRIMARY; do sleep 3; done
nodemon