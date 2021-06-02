const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Squad, OwnerSquad, UserSquad } = require('../../db/models');

// get request to get the ID and name from the OWNER's squads
// localhost:5000/api/squads/:id
router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params; // userId
    const squads = await OwnerSquad.findAll({
        where: {
            userId: id,
        },
        include: [Squad]
    })
    return res.json({ squads })
}))

// Create a post route which will allow a new user to create a new Squad
// We create an owner squad to make the user the owner, and a user squad to make sure the owner is also a user
// localhost:5000/api/squads
router.post('/', asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const newSquad = await Squad.create({ name });
    const newSquadId = newSquad.dataValues.id

    await OwnerSquad.create({
        userId,
        squadId: newSquadId,
    });

    await UserSquad.create({
        userId,
        squadId: newSquadId,
    });

    return res.json(newSquad);
}));


module.exports = router;