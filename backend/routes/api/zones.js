const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Zone, Chore, Squad, User } = require('../../db/models');


router.get('/:userId', asyncHandler(async function (req, res) {
    // this query finds the USER'S squad id
    const squadId = await User.findByPk(req.params.userId, {
        attributes: ['squad_id']
    });
    // console.log('ZONES--->>>', zones.dataValues.squad_id)

    // console.log('squadid...............', squadId)
    // this query takes the user's squad id and finds the zones and 
    const squad = await Squad.findByPk(squadId.dataValues.squad_id, {
        include: {
            model: Zone,
            include: Chore
        }
    })
    // console.log("squad--->", squad)
    // const zones = [];
    // squad.Zones.forEach(zone => {
    //     // console.log('zone------>>>>', zone)
    //     if (!zones.includes(zone.location)) {
    //         zones.push(zone.location);
    //     }
    // })
    // console.log('zone.location------>>>>', zone.location)
    // const zones = squad.Zones
    // console.log('zones----->>>', zones);
    return res.json({ squad });
}));

router.post('/:zoneId', asyncHandler(async (req, res) => {
    const {
        name,
        user_id,
        zone_id,
        estimated_time,
        description
    } = req.body;

    const newChore = await Chore.create({
        name: name,
        user_id: user_id,
        zone_id: zone_id,
        estimated_time: estimated_time,
        description: description
    })
    // console.log('newChore--->>>', newChore)
    res.json({ newChore })
}))

module.exports = router;