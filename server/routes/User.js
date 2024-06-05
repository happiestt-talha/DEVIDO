import express from 'express'
import { deleteUser, dislikeVideo, getUser, likeVideo, subscribeUser, unsubscribeUser, updateUser, userTest } from '../controllers/User.js'
import { verifyUser } from '../middlewares/verifyUser.js'
const router = express.Router()

//! TEST Routes
router.get('/test', userTest)
router.post('/test', userTest)

//update user
router.put('/:id',verifyUser, updateUser)
// router.put('/:id', updateUser)

//delete user
router.delete('/:id',verifyUser, deleteUser)

//get user
router.get('/find/:id',getUser)

//subscribe user
router.put('/sub/:id',verifyUser, subscribeUser)

//unsubscribe user
router.put('/unsub/:id',verifyUser, unsubscribeUser)

//like video
router.put('/like/:videoId',verifyUser, likeVideo)

//dislike video

router.put('/dislike/:videoId',verifyUser, dislikeVideo)
export default router