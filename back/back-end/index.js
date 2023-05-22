// dot env file to load automatically. Use config to do that.
require('dotenv').config()

const express = require('express')

const cors = require('cors')

// const logic = require('./controller/logic')

const router = require('./routes/router')

require('./db/connection')

const server = express()

//var to hold prt number
const port = 3000

server.use(cors())
server.use(express.json())
//use routes
server.use(router)

server.get('/', (req,res)=>{
    res.send('Server Started')
})


server.listen(port, ()=>{
    console.log(`Ecart server started at port ${port}`);
})

// server.post('/register',(req, res)=>{
//     logic.register(req.body.email, req.body.password)
// })

