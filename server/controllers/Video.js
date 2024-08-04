import { createError } from '../error/error.js'
import Video from '../models/Video.js'
import User from '../models/User.js'
let success = false
export const videoTest = (req, res) => {
    res.send("Video test")
    console.log('Video test')
    // console.log('Req body: ', req.body)
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
        next(createError(403, err.message))
    }
}

export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        })

        res.status(200).json("The view has been increased")
    } catch (error) {
        next(createError(403, error.message))
    }
}

export const getTrend = async (req, res, next) => {
    try {
        const videos =await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    } catch (error) {
        next(createError(403, error.message))
        console.log('Error: ', error)
    }
}

export const getRandom = async (req, res, next) => {
    try {
        // console.log('Fetching random videos...')
        const video = await Video.aggregate([{ $sample: { size: 40 } }])
        // console.log('Random video: ', video)
        res.status(200).json(video)
    } catch (error) {
        next(createError(403, error.message))
    }
}

export const getSub = async (req, res, next) => {
    try {
        const user = User.findById(req.user.id)
        if (!user) {
            return next(createError(404, 'User not found'));
        }
        const subscribedChannel = user.subscribedUsers
        const list = await Promise.all(
            subscribedChannel.map(async (channelId) => {
                return await Video.find({ userId: channelId })
            })
        )
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
    } catch (error) {
        next(createError(403, error.message))
    }
}

export const getByTag = async (req, res, next) => {
    try {
        const tags = req.query.tags.split(',')

        const videos = await Video.find({ tags: { $in: tags } })

        res.status(200).json(videos)
        res.json({ query })
    } catch (err) {
        next(createError(403, err.message))
    }
}

export const search = async (req, res, next) => {
    try {
        const searchQuery = req.query.q
        const videos = await Video.find({
            title: { $regex: searchQuery, $options: 'i' }
        })
        res.status(200).json(videos)
    } catch (error) {
        next(createError(403, err.message))
    }
}