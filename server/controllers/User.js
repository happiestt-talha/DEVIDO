export const userTest = (req, res) => {
    res.send("User test")
    console.log('User test')
    console.log('Req body: ', req.body)
}

export const updateUser = (req, res, next) => {
    res.send("Update user")
    console.log('Update user')
    console.log('Req body: ', req.body)
}

export const deleteUser = (req, res, next) => {
    res.send("Delete user")
    console.log('Delete user')
    console.log('Req body: ', req.body)
}

export const getUser = (req, res, next) => {
    res.send("Get user")
    console.log('Get user')
    console.log('Req body: ', req.body)
}

export const subscribeUser = (req, res, next) => {
    res.send("Subscribe user")
    console.log('Subscribe user')
    console.log('Req body: ', req.body)
}

export const unsubscribeUser = (req, res, next) => {
    res.send("Unsubscribe user")
    console.log('Unsubscribe user')
    console.log('Req body: ', req.body)
}

export const likeVideo = (req, res, next) => {
    res.send("Like video")
    console.log('Like video')
    console.log('Req body: ', req.body)
}

export const dislikeVideo = (req, res, next) => {
    res.send("Dislike video")
    console.log('Dislike video')
    console.log('Req body: ', req.body)
}