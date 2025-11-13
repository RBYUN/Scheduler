const Ajv = require('ajv');

const ajvInstance = new Ajv({
    allErrors: true
});

const schema = {
    type: "object",
    properties: {
        first_name: {type: "string"},
        last_name: {type: "string"},
        email: {type: "string"},
        username: {type: "string"},
        password: {type: "string"},
        admin: {type: "boolean"}
    },
    required: ["first_name", "last_name", "email", "username", "password", "admin" ],
    additionalProperties: false
};

module.exports = ajvInstance.compile(schema);