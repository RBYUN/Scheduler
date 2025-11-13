const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Healthy")
});


router.use('/v1/user', require('./user.route'));

module.exports = router;