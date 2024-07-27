import express from 'express'
import { authTest, googleAuth, login, signup } from '../controllers/Auth.js'
const router = express.Router()

//! TEST ROUTE
router.get('/test', authTest)
router.post('/test', authTest)

//? sign up
router.post('/signup',signup)

//? sign in
router.post('/login',login)

//TODO: Google
router.post('/google',googleAuth)

export default router