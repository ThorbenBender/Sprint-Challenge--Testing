const express = require('express');
const helmet = require('helmet');
const GameRoute = require('./Routes/GamesRoute');

const server = express();

// server.use(helmet());

server.use(express.json());

server.use('/games', GameRoute);

module.exports = server;