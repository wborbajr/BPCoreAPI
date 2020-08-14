const log = require('debug')('api:bootstrap')
import { app } from './app/app'
import Emoji from 'node-emoji'
// require('dotenv/config')
import dotenv from 'dotenv'
dotenv.config()

let PORT = process.env.SERVER_PORT || 5050
let HOST = process.env.SERVER_HOST || '127.0.0.1'

// start the server
const server = app.listen(PORT, HOST, () => {
  const host = server.address().address
  const port = server.address().port

  log(Emoji.get('rocket'), `Server running at http://${host}:${port}`)
})
