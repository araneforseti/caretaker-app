#!/usr/bin/env bash

function usage() {
    echo "Usage: \$ mb.sh [start|stop] [port]"
    echo "Must be run from the project root."
}

if [[ $# -gt 2 || $# -lt 1 || "$1" == "-h" || "$1" == "--help" ]]; then
    usage
    exit
fi

PORT=${2:-2525}
MB_DIR="node_modules/mountebank"
PID_FILE="${MB_DIR}/mb.pid"

function stop() {
    echo -n "Stopping mountebank if it's running..."
    node node_modules/mountebank/bin/mb stop \
        --pidfile ${PID_FILE}
    echo "done."
}

function start() {
    stop
    echo -n "Starting mountebank..."
    node node_modules/mountebank/bin/mb start \
        --port ${PORT} \
        --loglevel error \
        --logfile ${MB_DIR}/mb.log \
        --pidfile ${PID_FILE} \
        &

    while [ ! -f ${PID_FILE} ]; do
        sleep 1
    done
    echo "done."
}

operation="$1"
case $operation in
    start)
        start;;
    stop)
        stop;;
    *)
        usage;;
esac






