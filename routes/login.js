const express = require('express');

const router = express.Router();

const fs = require('fs');

router.get('/login',(req,res) => {
    res.send(`<form action="/" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" methood="POST">
    <input id="username" type="text" name="username" placeholder="username">
    <button type="submit">send</button>
    </form>`)
})

router.post("/login",(req,res) => {
    console.log(req.body.username)
    fs.writeFile("username.txt",`${req.body.username}`,{flag:'a'},(err) => {
        err ? console.log(err) : res.redirect("/")
    })
    res.redirect('/')
})

module.exports = router;