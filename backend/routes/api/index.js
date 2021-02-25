const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const choresRouter = require('./chores');
const zonesRouter = require('./zones');

router.use('/zones', zonesRouter);
router.use('/chores', choresRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);


module.exports = router;