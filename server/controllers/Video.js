import { createError } from '../error/error.js'
import Video from '../models/Video.js'
let success = false
export const videoTest = (req, res) => {
    res.send("Video test")
    console.log('Video test')
    console.log('Req body: ', req.body)
}

export const addVideo = async (req, res, next) => {
    try {
        const video = new Video({ userId: req.user.id, ...req.body })
        const savedVideo = await video.save()
        success = true
        res.status(200).json({ success, ...savedVideo._doc })
    } catch (err) {
        next(createError(403, err.message))
    }
}

export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(403, "video not found"))

        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            success = true
            res.status(200).json({ success, ...updatedVideo._doc })
        } else {
            next(createError(403, "You can update only your video!"))
        }
    } catch (err) {
        next(createError(403, err.message))
    }
}

export const deleteVideo = async (req, res, next) => {
    try {
        await Video.findByIdAndDelete(req.params.id)
        success = true
        res.status(200).json({ success, message: "Video has been deleted" })
    } catch (err) {
        next(createError(403, err.message))
    }
}

export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        success = true
        res.status(200).json({ success, ...video._doc })
    } catch (err) {
        next(createError(404, err.message))
    }
}