import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

import authRoute from './routes/Auth.js'
import userRoute from './routes/User.js'
import videoRoute from './routes/Video.js'
import commentRoute from './routes/Comment.js'

const port=process.env.PORT || 5000

const app = express();
dotenv.config();

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/video', videoRoute);
app.use('/api/comment', commentRoute);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.HOST}:${process.env.PORT}`);
})