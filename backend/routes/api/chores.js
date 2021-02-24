const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Chore, Zone, User } = require('../../db/models')

router.get('/:zoneId', asyncHandler(async function (req, res) {
    const chores = await Chore.findAll({
        where: {
            zone_id: req.params.zoneId
        },
        attributes: ['name', 'isComplete', 'user_id'],
        include: {
            model: Zone,
            attributes: ['location']
        }
    });
    // const chore = res.json({ chores })
    // console.log('chores--->', chore)
    return res.json({ chores });
}));

module.exports = router;