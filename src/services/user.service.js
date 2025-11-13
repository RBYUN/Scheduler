const { User } = require('../models');

class UserService {
    constructor () {
        this.createUser = this.createUser.bind(this);
    }

    async createUser(first_name, last_name, email, username, password, admin) {
        console.log("creating student with")
        await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            username: username,
            password: password,
            time: new Date().toISOString(),
            admin: admin
        });
    }
}