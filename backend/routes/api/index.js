const router = require('express').Router();

router.post('/test', (req, res) => {
    res.json({ reqBody: req.body });
});



module.exports = router;