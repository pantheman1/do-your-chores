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
    // console.log(chores)
    return res.json(chores);
}))

// localhost:5000/api/chores/:id
router.get('/:id')

// localhost:5000/api/chores/zone/:id
router.get('/zone/:id', asyncHandler(async function (req, res) {
}));


// router.post('/:zoneId', asyncHandler(async (req, res) => {
//     const {
//         name,
//         user_id,
//         zone_id,
//         estimated_time,
//         description
//     } = req.body;

//     const newChore = await Chore.create({
//         name: name,
//         user_id: user_id,
//         zone_id: zone_id,
//         estimated_time: estimated_time,
//         description: description
//     })
//     // console.log('newChore--->>>', newChore)
//     res.json({ newChore })
// }))

module.exports = router;