import { createError } from '../error/error.js'

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
        // get user from cookies
        // const token = req.cookies.accessToken
        res.json({"req body: ": req.body, "user": req.user,"Params: ": req.params})
    } catch (error) {
        next(createError(404, "User not found"))
    }
}

export const deleteUser = async (req, res, next) => {
    res.send("Delete user")
    console.log('Delete user')
    console.log('Req body: ', req.body)
}

export const getUser = async (req, res, next) => {
    res.send("Get user")
    console.log('Get user')
    console.log('Req body: ', req.body)
}

export const subscribeUser = async (req, res, next) => {
    res.send("Subscribe user")
    console.log('Subscribe user')
    console.log('Req body: ', req.body)
}

export const unsubscribeUser = async (req, res, next) => {
    res.send("Unsubscribe user")
    console.log('Unsubscribe user')
    console.log('Req body: ', req.body)
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