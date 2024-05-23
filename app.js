const express = require('express')
require('dotenv').config()
const users = require('./routes/user')
const ConnectDb=require('./config/db')
const cors = require('cors')
const app = express()
app.use(cors())
app.use('/auth', users)
ConnectDb();
app.get('/', (req, res) => {
   res.send("home page")
})
app.listen(process.env.PORT, () => {
   console.log(`server is running on port ${process.env.PORT}`)
})





