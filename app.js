const express = require('express');

const app = express();

const fs = require('fs')

const bodyparser = require('body-parser')

const loginRoutes = require('./routes/login')

const chatRoutes = require('./routes/chat')

app.use(bodyparser.urlencoded({extended:true}))
// it is used to determine how the values in the url encoded data are passed

app.use(loginRoutes);

app.use(chatRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})
app.listen(4000);