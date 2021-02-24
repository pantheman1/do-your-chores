const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Chore, Zone, User } = require('../../db/models')

router.get('/:zoneId', asyncHandler(async function (req, res) {
    console.log('hello!!!!!!!!!!!!!!!!!!!!!!!!!')
    const chores = await Chore.findAll({
        where: {
            zone_id: req.params.zoneId
        },
        attributes: ['name', 'isComplete', 'user_id', 'zone_id'],
        // include: {
        //     model: Zone,
        //     attributes: ['location']
        // }
    });
    // const chore = res.json({ chores })
    // console.log('chores--->', chore)
    return res.json({ chores });
}));


// router.get('/:zoneId', asyncHandler(async (req, res) => {
//     const res = await 
// }))

module.exports = router;