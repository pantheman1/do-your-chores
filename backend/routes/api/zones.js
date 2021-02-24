const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Zone, Chore, Squad, User } = require('../../db/models');
const choresRouter = require('./chores');

router.use('/chores', choresRouter);

router.get('/:userId', asyncHandler(async function (req, res) {
    // this query finds the USER'S squad id
    const squadId = await User.findByPk(req.params.userId, {
        attributes: ['squad_id']
    });
    // console.log('ZONES--->>>', zones.dataValues.squad_id)

    // console.log('squadid...............', squadId)
    // this query takes the user's squad id and finds the zones and 
    const squad = await Squad.findByPk(squadId.dataValues.squad_id, {
        include: [Zone]
    })
    const zones = [];
    squad.Zones.forEach(zone => {
        // console.log('zone------>>>>', zone.location)
        if (!zones.includes(zone.location)) {
            zones.push(zone.location);
        }
    })
    // console.log('zone.location------>>>>', zone.location)
    // const zones = squad.Zones
    // console.log('zones----->>>', zones);
    return res.json({ zones });
}));

module.exports = router;