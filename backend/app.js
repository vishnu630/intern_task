const express = require('express')
const axios = require('axios')
const cors = require('cors')
const morgan = require("morgan");
const apicache = require("apicache");


const app = express()

const port = 5000 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

let cache = apicache.middleware

// app.use(cache('1 minutes'))

app.post('/', (req, res) =>{
    const text = req.body.input_text
    const data ={'text':text}
    axios.post('http://127.0.0.1:8000/validate_text',data)
    .then((response)=>{
        const val=response.data
        res.json(val)
    }) 
  });





app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})