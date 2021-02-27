const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Squad } = require('../../db/models');


const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// Sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });
        await setTokenCookie(res, user);
        return res.json({
            user,
        });
    }),
);

// router.get('/', asyncHandler(async (req, res) => {
//     const users = await User.findAll({
//         attributes: ['name', 'id']
//     });

//     return res.json(users)
// }))


// localhost:5000/api/users
router.get('/', asyncHandler(async (req, res) => {
    //if user gives us a zone then we'll filter chores by that squad
    //else return all chores regardless of zone

    let users = await User.findAll({
        // include: Squad
    });
    // console.log("USERS-->", users)

    // let squads = await Squad.findByPk();

    // const usersArr = users.filter(user => user.squad_id === squads.dataValues.id)

    // console.log('squads--->', squads)
    return res.json(users);
}))

// router.get(
//     '/',
//     restoreUser,
//     (req, res) => {
//         const { user } = req;
//         if (user) {
//             return res.json({
//                 user: user.toSafeObject()
//             });
//         } else return res.json({});
//     }
// );

module.exports = router;