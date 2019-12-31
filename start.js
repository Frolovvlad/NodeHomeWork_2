require('dotenv').config();

const server = require('./server');

const {
    INTERVAL,
    STOP
} = process.env;

server.server(INTERVAL, STOP)