const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const zonesRouter = require('./zones');
const choresRouter = require('./chores');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/zones', zonesRouter);
router.use('/chore', choresRouter);


module.exports = router;