import path from 'path'
import dotenv from 'dotenv'
import { createServer } from 'http'

const __dirname = path.resolve()
dotenv.config()

const port = parseInt(process.argv[1]) || process.env.PORT || 8080

import express from 'express'
const app = express()

const server = createServer(app)
server.listen(port)

app.get('/', async function (req, res) {
	// res.sendFile(__dirname + '/index.html')
	res.json({ "message": "Hello World!" });
})