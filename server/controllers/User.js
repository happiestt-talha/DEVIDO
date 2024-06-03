export const userTest = (req, res) => {
    res.send("User test")
    console.log('User test')
    console.log('Req body: ', req.body)
}