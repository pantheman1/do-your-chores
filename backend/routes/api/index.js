const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const choresRouter = require('./chores');
const zonesRouter = require('./zones');
const squadsRouter = require('./squads');

router.use('/zones', zonesRouter);
router.use('/chores', choresRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/squads', squadsRouter);


module.exports = router;