const ValidateUserCreationMiddleware = (ajvInstance) => {
    return async (req, res, next) => {
        try {
            /*
            req.body=
            {
                firstname: 'firstName',
                lastname: 'lastName',
                email: 'email',
                password: 'password',
                confirmpassword: 'password'
              }
            */
            await ajvInstance(req.body);
            

            return next();
        } catch (err) {
            
            return next(err);
        }
    };
};

module.exports = ValidateUserCreationMiddleware;