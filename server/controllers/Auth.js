import mongoose from 'mongoose'
import User from '../models/User.js'

export const authTest=(req,res)=>{
    res.send("Auth test")
}

export const signup=async (req,res)=>{
    try {
        const newUser= new User(req.body)
        await newUser.save()
        res.status(200).json(newUser)
        console.log("New User: ",newUser)
    } catch (err) {
        res.json(err)
    }
}

export const login=(req,res)=>{
    res.send("Login")
}