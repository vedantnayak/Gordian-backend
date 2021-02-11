const express= require('express')
const app = express()

const bodyparser = require('body-parser')
//app.use(bodyparser.text())
app.post('/',(req,res)=>{ 
    if(req.body.email==="vedant@gmail.com" && req.body.password==="vedant")
    //res.send({message:'yes'})
    console.log('yes')
    else
    //res.send({message:'no'})
    console.log('no')
})

app.listen(3000)