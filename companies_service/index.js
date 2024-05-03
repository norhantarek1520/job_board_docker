const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//========================= INITIALIZE EXPRESS APP ===============

const db = require('./db');

const app = express();
const apiPort = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/companies', require('./routes/companies-router'));


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

