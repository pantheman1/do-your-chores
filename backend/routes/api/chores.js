const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Chore, Zone, User } = require('../../db/models')

router.get('/:userId', asyncHandler(async function (req, res) {
    const chores = await Chore.findAll({
        where: {
            user_id: req.params.userId
        },
        attributes: ['name', 'isComplete'],
        include: [User]
    });
    // const chore = res.json(chores)
    // console.log('chores--->', chore)
    return res.json({ chores });
}));

module.exports = router;