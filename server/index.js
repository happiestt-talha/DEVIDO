import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db.js";

import authRoute from './routes/Auth.js'
import userRoute from './routes/User.js'
import videoRoute from './routes/Video.js'
import commentRoute from './routes/Comment.js'
import cors from 'cors'

const port=process.env.PORT || 5000
const host=process.env.HOST || "http://localhost"
// const feUrl= "https://devido.vercel.app"
const feUrl=process.env.FE_URL|| "http://localhost:3000"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[feUrl,"http://localhost:3000","https://api-devido.vercel.app"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));


app.get('/', (req, res) => {
    res.send('Welcome to Devido')
})

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/video', videoRoute);
app.use('/api/comment', commentRoute);

app.use((err, req, res, next) => {
    
    const status = err.status || 500
    const message = err.message || "Something went wrong"

    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${host}:${port}`);
})