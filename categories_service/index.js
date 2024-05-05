const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const  ApiError = require('./Shared/ApiError');
const globalError = require('./middlewares/errorMiddleware');
//========================= INITIALIZE EXPRESS APP ===============

const db = require('./db');

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/category', require('./routes/category-router'));

app.use(globalError);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

