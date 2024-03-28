require('dotenv').config()
const express = require('express')
const axios = require('axios')
const rateLimit = require('express-rate-limit')
const PORT = process.env.PORT || 5000
const app = express()

const API_URI = 'https://v6.exchangerate-api.com/v6'
const API_KEY = process.env.EXCHANGE_RATE_API_KEY
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100,
})

//! Middlewares
app.use(express.json()) // parse the incoming data from the user
app.use(apiLimiter)

//! Conversion router
app.post('/api/convert', async (req, res) => {
    const {from, to, amount} = req.body //! 14.54
    console.log({from, to, amount});
    try {
        
    } catch (error) {
        
    }
})

//! Start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}...`))