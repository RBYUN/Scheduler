const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

const { ValidateUserCreationMiddleware } = require('../middlewares');

const { UserSchema } = require('../schemas');

router.post('/create', ValidateUserCreationMiddleware(UserSchema), UserController.createUser);

module.exports = router;