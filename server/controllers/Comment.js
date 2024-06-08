import Comment from "../models/Comments.js"
import Video from "../models/Video.js"
import { createError } from "../error/error.js"

export const commentTest = (req, res) => {
    res.send("Comment test")
    console.log('Comment test')
    console.log('Req body: ', req.body)
}


export const addComment = async (req, res, next) => {
    try {
        const newComment = new Comment({ ...req.body, userId: req.user.id })
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (err) {
        next(createError(404, err.message))
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            await Comment.findByIdAndDelete(req.params.id)

            res.status(200).json("Comment has been deleted...")
        } else {
            next(createError(403, "You can delete only your comment..."))
        }
    } catch (err) {
        next(createError(404, err.message))
    }
}
export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId })
        // const comments = await Comment.find()
        res.status(200).json(comments)
    } catch (err) {
        next(createError(404, err.message))
    }
}