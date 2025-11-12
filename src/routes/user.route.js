const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

router.post('/creates', UserController.createUser);

module.exports = router;