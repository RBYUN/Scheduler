const express = require('express')
const cors = require('cors')

const app = express();

require('./db');
app.use(express.json()); //built in middleware that will parse all incoming JSON requests
app.use(cors());

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started listening on port: 3000')
});