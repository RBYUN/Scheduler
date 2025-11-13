const { User } = require('../models');

class UserService {
    // constructor () {
    //     this.createUser = this.createUser.bind(this);
    // }

    async createUser(req) {
        try {
            await User.create({
                first_name: req.first_name,
                last_name: req.last_name,
                email: req.email,
                username: req.username,
                password: req.password,
                time: new Date().toISOString(),
                admin: req.admin
            });
            console.log(`User ${req.email} has been added.`)
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = new UserService();