const express = require('express')
const cors = require('cors')

const app = express();

require('./db');
app.use(express.json());
app.use(cors());

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started listening on port: 3000')
});