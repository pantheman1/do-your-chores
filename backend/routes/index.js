const router = require('express').Router();
const apiRouter = require('./api');

router.get('/hello/world', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('HelloWorld!');
});

router.use('/api', apiRouter);

module.exports = router;