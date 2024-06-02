import express from 'express'
import { authTest } from '../controllers/Auth.js'
const router = express.Router()

router.get('/test', authTest)

export default router