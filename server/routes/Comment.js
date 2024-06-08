import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js'
import { addComment, commentTest, deleteComment, getComments } from '../controllers/Comment.js'
const router = express.Router()

router.get('/test', commentTest)
router.post('/test', commentTest)


router.post('/', verifyUser, addComment)
router.delete('/:id', verifyUser, deleteComment)
router.get('/:videoId', verifyUser, getComments)
export default router