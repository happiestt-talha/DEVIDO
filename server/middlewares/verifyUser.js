import jwt from 'jsonwebtoken'
import { createError } from '../error/error.js'

export const verifyUser = (req, res, next) => {
    const token = req.cookies.accessToken
    
    if (!token) return next(createError(401, "You are not authenticated"))

    jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) return next(createError(403, "Token is not valid"))

        req.user = user
        next()
    })
}