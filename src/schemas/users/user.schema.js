const Ajv = require('ajv');

const ajvInstance = new Ajv({
    allErrors: true
});

const schema = {
    type: "object",
    properties: {
        firstname: {type: "string"},
        lastname: {type: "string"},
        email: {type: "string"},
        password: {type: "string"},
        verified: {type: "boolean"}
    },
    required: ["firstname", "lastname", "email", "password" ],
    additionalProperties: false
};

module.exports = ajvInstance.compile(schema);