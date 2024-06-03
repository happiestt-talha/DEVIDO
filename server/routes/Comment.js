import express from 'express'
import { commentTest } from '../controllers/Comment.js'
const router = express.Router()

router.get('/test',commentTest)
router.post('/test',commentTest)

export default router