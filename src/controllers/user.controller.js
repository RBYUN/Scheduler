const { UserService } = require('../services');
const { StatusCodes } = require('http-status-codes'); 

class UserController {
    constructor() {
        this.createUser = this.createUser.bind(this);
    }
    
    async createUser(req, res, next) {
        try {
            const user = await UserService.createUser(req.body, res, next);

            return res.status(StatusCodes.OK).json(user);
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new UserController();