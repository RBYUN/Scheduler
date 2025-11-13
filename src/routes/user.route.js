const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

const { ValidateRequestBodyMiddleware } = require('../middlewares');

const { UserSchema } = require('../schemas');

router.post('/create', ValidateRequestBodyMiddleware(UserSchema), UserController.createUser);

module.exports = router;