import express from 'express'
import { deleteUser, dislikeVideo, getUser, likeVideo, subscribeUser, unsubscribeUser, updateUser, userTest } from '../controllers/User.js'
const router = express.Router()

//! TEST Routes
router.get('/test', userTest)
router.post('/test', userTest)

//update user
router.put('/:id',updateUser)

//delete user
router.delete('/:id',deleteUser)

//get user
router.get('/find/:id',getUser)

//subscribe user
router.put('/sub/:id',subscribeUser)

//unsubscribe user
router.put('/unsub/:id',unsubscribeUser)

//like video
router.put('/like/:videoId',likeVideo)

//dislike video

router.put('/dislike/:videoId',dislikeVideo)
export default router