const express = require('express');
const homeRouter = require('./home');
const userRouter = require('./users');

const appRouter = express.Router();

appRouter.use('/', homeRouter)
appRouter.use('/users', userRouter)

module.exports = appRouter;
