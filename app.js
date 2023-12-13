const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const postRouter = require('./routes/posts')
app.use('/api/posts', postRouter)


const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)

module.exports = app