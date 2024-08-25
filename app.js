const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');


// Body Parser
app.use(bodyParser.json());

//CORS middleware
app.use(cors());

// Routers 
const assignmentRouter = require('./src/router/router');


app.use('/api/v1/assignment', assignmentRouter);



module.exports = app;
