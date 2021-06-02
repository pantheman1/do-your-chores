const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Chore, Zone, User } = require('../../db/models')

//test comment

// localhost:5000/api/chores/:zoneId
router.get('/:zoneId', asyncHandler(async (req, res) => {
    //if user gives us a zone then we'll filter chores by that zone
    //else return all chores regardless of zone
    const { zoneId } = req.params;

    let chores = await Chore.findAll({
        where: {
            zoneId
        }
    });
    return res.json(chores);
}))

// localhost:5000/api/chores/:id
router.patch('/:id', asyncHandler(async (req, res) => {
    const { isComplete, id, zoneId } = req.body;
    const chore = await Chore.findByPk(id);

    chore.isComplete = !isComplete
    await chore.save();

    let chores = await Chore.findAll({
        where: {
            zoneId
        }
    });
    return res.json(chores)
}))

// localhost:5000/api/zones/:id
// creates a new chore...should be in the chores.js route
router.post('/:zoneId', asyncHandler(async (req, res) => {
    const {
        name,
        userId,
        zoneId,
        estimatedTime,
        description,
        isComplete,
    } = req.body;

    const newChore = await Chore.create({
        name,
        userId,
        zoneId,
        estimatedTime,
        description,
        isComplete,
    });

    return res.json(newChore)
}))


// localhost:5000/api/chores/:id
router.get('/:id', asyncHandler(async (req, res) => {
    const chore = await Chore.findByPk(req.params.id);
    return res.json({ chore });
}))

module.exports = router;