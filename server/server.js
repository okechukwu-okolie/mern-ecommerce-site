const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
const PORT = process.env.PORT || 5500

mongoose.connect('mongodb+srv://mern-ecommerce-site:mern-ecommerce-site@cluster0.2zydziu.mongodb.net/?appName=Cluster0').then(()=>console.log('database connected sucessfully!!!')).catch((error)=>console.log(error))

app.use(
    cors({
        origin:'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true 
    })
)
app.use(cookieParser())
app.use(express.json())

app.listen(PORT,()=>console.log('server is connected sucessfully on port: ',PORT))
