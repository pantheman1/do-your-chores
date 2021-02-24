const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Zone, Chore } = require('../../db/models');

router.get('/:userId', asyncHandler(async function (req, res) {
    const chores = await Chore.findAll({
        where: {
            user_id: req.params.userId
        },
        include: [Zone]
    });
    const zones = [];
    chores.forEach(chore => {
        // console.log('------>>>>', chore.Zone.location)
        if (!zones.includes(chore.Zone.location)) {
            zones.push(chore.Zone.location);
        }
    })

    return res.json({ zones });
}));

module.exports = router;