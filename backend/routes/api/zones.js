const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Zone, Chore, Squad, User } = require('../../db/models');


// localhost:5000/api/zones/zone/:id
router.get('/zone/:zoneId', asyncHandler(async (req, res) => {
    const zone = await Zone.findByPk(req.params.zoneId, {
        attributes: ['location'],
    });
    return res.json({ zone })
}))

// localhost:5000/api/zones/:squadId
// this query finds Zones by squadId
router.get('/:squadId', asyncHandler(async (req, res) => {
    const { squadId } = req.params

    const zones = await Zone.findAll({
        where: {
            squadId,
        }
    })

    return res.json({ zones });
}));

// localhost:5000/api/zones/:id
// add a zone
router.post('/', asyncHandler(async (req, res) => {
    const {
        location,
        squadId,
    } = req.body;

    const newZone = await Zone.create({
        location,
        squadId,
    });

    return res.json(newZone);
}))


// localhost:5000/api/zones/:id
// creates a new chore...should be in the chores.js route
router.post('/:zoneId', asyncHandler(async (req, res) => {
    const {
        name,
        userId,
        zoneId,
        estimated_time,
        description
    } = req.body;

    const newChore = await Chore.create({
        name: name,
        userId,
        zoneId: zoneId,
        estimated_time: estimated_time,
        description: description
    })
    res.json({ newChore })
}))

module.exports = router;