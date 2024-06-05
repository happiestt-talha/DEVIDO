import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { createError } from '../error/error.js'

dotenv.config()
const authKey='qwedcsdbcidisjkcnb'
export const verifyUser = (req, res, next) => {
    const token = req.cookies.accessToken
    // const token = req.header('authToken')
    
    if (!token) return next(createError(401, "You are not authenticated"))

    // jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
    jwt.verify(token, authKey, (err, user) => {
        if (err) return next(createError(403, "Token is not valid"))

        req.user = user
        next()
    })
}