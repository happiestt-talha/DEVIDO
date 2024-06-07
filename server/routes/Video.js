import express from 'express'
import { addVideo, addView, deleteVideo, getRandom, getSub, getTrend, getVideo, updateVideo, videoTest } from '../controllers/Video.js'
import { verifyUser } from '../middlewares/verifyUser.js'
const router = express.Router()

router.get('/test', videoTest)
router.post('/test', videoTest)


router.post('/', verifyUser, addVideo)
router.put('/:id', verifyUser, updateVideo)
router.delete('/:id', verifyUser, deleteVideo)
router.get('/find/:id', getVideo)

router.put('/view/:id', addView)
router.get('/trend', getTrend)
router.get('/random', getRandom)
router.get('/sub/:id', verifyUser, getSub)

export default router