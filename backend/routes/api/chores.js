const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Chore, Zone, User } = require('../../db/models')

// localhost:5000/api/chores
// localhost:5000/api/chores?zone=3
// localhost:5000/api/chores?user=1
// localhost:5000/api/chores?user=1&zone=3
router.get('/', asyncHandler(async (req, res) => {
    //if user gives us a zone then we'll filter chores by that zone
    //else return all chores regardless of zone

    let chores = await Chore.findAll();
    if (req.query.zone !== undefined) {
        chores = chores.filter(chore => {
            return req.query.zone == chore.dataValues.zone_id
        })
    }

    if (req.query.user !== undefined) {
        chores = chores.filter(chore => {
            return req.query.user == chore.dataValues.user_id
        })
    }
    return res.json(chores);
}))

// localhost:5000/api/chores/:id
router.patch('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const chore = await Chore.findByPk(id);
    const { isComplete } = req.body;

    chore.isComplete = !isComplete
    await chore.save();


    //is there a way to do this without sending back ALL of the chores?////////////////
    let chores = await Chore.findAll();
    if (req.query.zone !== undefined) {
        chores = chores.filter(chore => {
            return req.query.zone == chore.dataValues.zone_id
        })
    }

    if (req.query.user !== undefined) {
        chores = chores.filter(chore => {
            return req.query.user == chore.dataValues.user_id
        })
    }
    return res.json(chores)
}))



// localhost:5000/api/chores/:id
router.get('/:id', asyncHandler(async (req, res) => {
    const chore = await Chore.findByPk(req.params.id);
    return res.json({ chore });
}))

// localhost:5000/api/chores/zone/:id
router.get('/zone/:id', asyncHandler(async function (req, res) {
}));


module.exports = router;