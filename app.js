const express = require('express');
const cors = require('cors'); //QUESTION: WHY DID I NEED TO ADD THIS? -JJ

const app = express();

// TODO: Add application-wide middleware
app.use(cors());

// TODO: Add controller(s)

// TODO: Implement health check route

module.exports = app;