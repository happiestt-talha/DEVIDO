import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

const port=process.env.PORT || 5000

const app = express();
dotenv.config();


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.HOST}:${process.env.PORT}`);
})