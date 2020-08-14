const log = require('debug')('api:mongoDS')

import * as Mongoose from 'mongoose'
import { UserModel } from '../models/usersModel'

let database: Mongoose.Connection

export const connect = () => {
  // add your own uri below
  const uri =
    'mongodb+srv://<username>:<password>@cluster0-v6q0g.mongodb.net/test?retryWrites=true&w=majority'

  if (database) {
    return
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  database = Mongoose.connection

  database.once('open', async () => {
    log('Connected to database')
  })

  database.on('error', () => {
    log('Error connecting to database')
  })

  return {
    UserModel,
  }
}

export const disconnect = () => {
  if (!database) {
    return
  }

  Mongoose.disconnect()
}
