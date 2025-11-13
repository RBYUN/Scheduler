const { UserService } = require('../services');
const { StatusCodes } = require('http-status-codes'); 

class UserController {
    constructor() {
        this.createUser = this.createUser.bind(this);
    }
    
    async createUser(req, res, next) {
        try {
            console.log(request)
            console.log(request.body);
            const user = await UserService.createUser(req);

            return res.status(StatusCodes.OK).json(user);
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new UserController();