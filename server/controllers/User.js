import { createError } from '../error/error.js'
import User from '../models/User.js'
let success = false
export const userTest = async (req, res, next) => {
    try {
        res.json({ msg: "User test", body: req.body })
        console.log('User test')
        console.log('Req body: ', req.body)
    }
    catch (err) {
        next(createError(404, "Test Failed"))
    }
}

export const updateUser = async (req, res, next) => {
    try {
        if (req.params.id === req.user.id) {

            const user = await User.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true })
            success = true

            res.status(200).json({ success, ...user._doc })
        } else {
            next(createError(403, "You can update only your account"))
        }

    } catch (error) {
        next(createError(404, error.message))
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        if (req.params.id === req.user.id) {

            const user = await User.findByIdAndDelete(req.params.id)
            success = true

            res.status(200).json({ success, ...user._doc })
        } else {
            next(createError(403, "You can Delete only your account"))
        }

    } catch (error) {
        next(createError(404, error.message))
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        success = true

        res.status(200).json({ success, ...user._doc })
    } catch (err) {
        next(createError(404, err.message))
    }
}

export const subscribeUser = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedUsers: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 }
        })
        res.json("Subscription successful")
    } catch (err) {
        next(createError(404, err.message))
    }
}

export const unsubscribeUser = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedUsers: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 }
        })
        res.json("Unsubscription successful")
    } catch (err) {
        next(createError(404, err.message))
    }
}

export const likeVideo = async (req, res, next) => {
    res.send("Like video")
    console.log('Like video')
    console.log('Req body: ', req.body)
}

export const dislikeVideo = async (req, res, next) => {
    res.send("Dislike video")
    console.log('Dislike video')
    console.log('Req body: ', req.body)
}