const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Squad, OwnerSquad } = require('../../db/models');


// They will enter a squad name and that's it to create a squad. 
// Give them a message that says, if you would like to invite others to join your squad,
// just share this squadId with those members: Squad.name.concat(squad.id)

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
// localhost:5000/api/squads
// router.post('/', asyncHandler(async (req, res) => {
//     const { name } = req.body;
//     const newSquad = await Squad.create({ name });
//     return res.json({ newSquad });
// }));

module.exports = router;