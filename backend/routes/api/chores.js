const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Chore, Zone } = require('../../db/models')

router.get('/:user_id', asyncHandler(async function (req, res) {
    // const { user } = req;

    // console.log(res.json(Zone.findZone(user.id)))
    const chores = await Chores.findAll({
        where: {
            user_id: req.params.user_id
        }
    });
    return res.json({ chores });
}));

module.exports = router;