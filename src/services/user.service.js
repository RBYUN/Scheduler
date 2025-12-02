const { str } = require('ajv');
const { User } = require('../models');
const EmailService = require('./email.service');

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
            const email = req.email.toLowerCase();
            const firstName = req.firstname[0].toUpperCase() + req.firstname.slice(1).toLowerCase();

            const newUser = await User.create({
                first_name: req.firstname.toLowerCase(),
                last_name: req.lastname.toLowerCase(),
                email: req.email.toLowerCase(),
                password: hashedPassword,
                time: new Date().toISOString(),
                admin: false,
                verified: false
            });
            console.log(`User ${req.email} has been added.`)
            await EmailService.sendVerificationEmail(email, newUser.id, firstName)
        } catch (err) {
            console.error(err);
            if (err.original.code === '23505') { //Duplicate email
                return res.status(409).json({error: 'This email already exists'});
            }
            next(err)
        }
    }

    async verifyUser(req, res, next) {
        try {
            const user = await User.findByPk(req.query.id);
            console.log(user);
            user.verified = true;
            await user.save();
            res.status(200);
            console.log(`User ${req.query.id} has been verified`)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = new UserService();