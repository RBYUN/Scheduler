const { User } = require('../models');

class UserService {
    async hashPassword(password) {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(password);                    

        // hash the message
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));

        // convert bytes to hex string                  
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    async createUser(req, res, next) {
        try {
            const hashedPassword = await this.hashPassword(req.password);

            await User.create({
                first_name: req.firstname.toLowerCase(),
                last_name: req.lastname.toLowerCase(),
                email: req.email.toLowerCase(),
                password: hashedPassword,
                time: new Date().toISOString(),
                admin: false,
                verified: false
            });
            console.log(`User ${req.email} has been added.`)
        } catch (err) {
            console.error(err);
            if (err.original.code === '23505') { //Duplicate email
                return res.status(409).json({error: 'This email already exists'});
            }
            next(err)
        }
    }
}

module.exports = new UserService();