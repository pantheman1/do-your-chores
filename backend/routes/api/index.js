const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const choresRouter = require('./chores');
const zonesRouter = require('./zones');
const squadsRouter = require('./squads');
const ownerSquadsRouter = require('./ownerSquads');
const userSquadsRouter = require('./userSquads');

router.use('/zones', zonesRouter);
router.use('/chores', choresRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/squads', squadsRouter);
router.use('/ownerSquads', ownerSquadsRouter);
router.use('/userSquads', userSquadsRouter);


module.exports = router;