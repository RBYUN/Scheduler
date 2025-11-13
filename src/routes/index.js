const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Healthy")
});

router.use('/v1/users', require('./user.route'));

module.exports = router;