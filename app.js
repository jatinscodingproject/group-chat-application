const express = require('express');

const app = express();

app.use('/login',(req,res) => {
    res.send('index.html')
})

app.listen(4000)