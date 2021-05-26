const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Squad, OwnerSquad } = require('../../db/models');

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
router.post('/', asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const newSquad = await Squad.create({ name });
    console.log("NEW SQUAD-------", newSquad)



    // const newSquadId = await Squad.find
    return res.json(newSquad);
}));

router.post('/:id', asyncHandler(async (req, res) => {
    // needs both the id for the user/owner and for the squad
}))


module.exports = router;