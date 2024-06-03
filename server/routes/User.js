import express from 'express'
import { userTest } from '../controllers/User.js'
const router = express.Router()

router.get('/test', userTest)
router.post('/test', userTest)

export default router