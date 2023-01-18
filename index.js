 import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();
app.use('/posts' , postRoutes)

app.use(bodyParser.json({limit: "30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}))

app.use(cors());

const CONNECTIION_URL = "mongodb+srv://hitaishkumar7587:hitaishkumar456@cluster0.2uk5rys.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTIION_URL)
.then( () => app.listen(PORT,()=> console.log("Server Running on Port:" ,PORT)) )
.catch((err) =>console.log('err.message :>> ', err.message) )

// mongoose.set('useFindAndModify',false)  including this line leads to error