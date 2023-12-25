const express = require('express')

const router = express.Router()

const fs = require('fs')

router.get('/', (req, res) => {
    fs.readFile('username.txt', (err, data) => {
        if (err) {
            console.log(err)
            data = 'no chat exist'
        }
        res.send(
            `${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"method="POST">
        <input id="message" type="text" placeholder="message" name="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">send</button>
        </form>`
        )
    })
})

router.post('/', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, { flag: 'a' }, (err) => {
        err ? console.log(err) : res.redirect("/")
    })
})

module.exports = router