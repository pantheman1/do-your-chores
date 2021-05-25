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


module.exports = router;