const express = require('express');
const cors = require('cors'); //QUESTION: WHY DID I NEED TO ADD THIS? -JJ

const app = express();

// TODO: Add application-wide middleware
app.use(cors());
app.use(express.json())

// TODO: Add controller(s)
app.get('/', (req, res) => {
    res.status(200).json({
        data: "Service is running."
    })
})

// TODO: Implement health check route

module.exports = app;