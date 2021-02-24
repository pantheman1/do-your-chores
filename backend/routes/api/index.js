const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const zonesRouter = require('./zones');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/zones', zonesRouter);


module.exports = router;