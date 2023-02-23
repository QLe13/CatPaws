const express = require('express')
const cors = require('cors')

const authRoutes = require("./routes/auth.js")

const app = express()
const PORT = process.env.PORT || 4500

require('dotenv').config //this line just allows us to use the dotenv stuff within our app, in case we have like secret information like API

app.use(cors())
app.use(express.json()) //allows us to pass json payload from the frontend to the backend
app.use(express.urlencoded())

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.use('/auth', authRoutes)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))