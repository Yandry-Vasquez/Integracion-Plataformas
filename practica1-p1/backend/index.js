
const mongoose = require("mongoose");
const express = require('express')
const cors= require('cors')
const DisenadorModel= require("./disenador.model") ;

const URI= "mongodb+srv://admin:admin@cluster0.6cmrtjq.mongodb.net/?retryWrites=true&w=majority"
const URI_DOCKER= "mongodb://mongo:27017/test"
mongoose.connect(URI_DOCKER, { useNewUrlParser:true, useUnifiedTopology:true } )  
    .then(x=>{
        console.log("conexion exitosa")

    })
        .catch(x=>{
            console.log(x)
        })
    ;
//const { disenador } = require("./disenador.model");

const app = express()
const port= 3000
let  transaccionarr=[]




app.use(
    express.urlencoded({
        extended: true
    })
)
//\b\0\AddMailService
app.use(express.json({
    type:"*/*"
})

)
app.use(cors());





//cuando hagan un get a httplocalhos:3000/transaccion
app.get('/transaccion',async(req,res)=>{
    const data=await DisenadorModel.find();
    res.json(data);
})

//cuando hagan un post a httplocalhos:3000/transaccion
app.post('/transaccion',async(req,res)=>{
    let transaccion =req.body;
    const transaccionCreada=  await DisenadorModel.create(transaccion);
    res.json(transaccionCreada);
})




app.listen(port,()=>{
    console.log(  `http://localhost:${port} `);
})