const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Zone, Chore } = require('../../db/models');
// const { setTokenCookie, restoreUser } = require('../../utils/auth');


// router.get('/:userId', asyncHandler(async function (req, res) {
//     // const { user } = req;

//     // console.log(res.json(Zone.findZone(user.id)))
//     const zones = await Zone.findAll({
//         where: {
//             userId: req.params.userId
//         }
//     });
//     return res.json({ zones });
// }));

router.get('/:userId', asyncHandler(async function (req, res) {
    const chores = await Chore.findAll({
        where: {
            user_id: req.params.userId
        },
        include: [Zone]
    });
    const zones = [];
    chores.forEach(chore => {
        console.log('------>>>>', chore.Zone.location)
        if (!zones.includes(chore.Zone.location)) {
            zones.push(chore.Zone.location);
        }
    })
    // console.log('//zones//', zones)
    // console.log("chores-->", chores[0].chores)
    // return res.json("")
    return res.json({ zones });
}));

module.exports = router;