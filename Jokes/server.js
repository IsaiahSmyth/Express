const express = require('express')
const app = express()
require('dotenv').config()
const port = 8001

require ('./config/mongoose.config')

app.use( express.json());
app.use( express.urlencoded({ extended: true }));


const routeAttacher = require('./routes/joke.router')

routeAttacher(app)



app.listen( port, ()=>console.log(">>>SERVER ONLINE"))