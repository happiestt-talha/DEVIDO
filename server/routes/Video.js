import express from 'express'
import { videoTest } from '../controllers/Video.js'
const router = express.Router()

router.get('/test', videoTest)
router.post('/test', videoTest)

export default router