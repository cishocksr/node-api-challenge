const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const projectRouter = require('./routers/project-router');
const actionsRouter = require('./routers/actions-router');

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(helmet());
server.use('/api/projects', projectRouter);
// server.use('/api/actions', actionsRouter);

module.exports = server;
