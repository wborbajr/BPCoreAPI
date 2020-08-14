const log = require('debug')('api:mongo')

import { MongoMemoryServer } from 'mongodb-memory-server'
import { MongoClient } from 'mongodb'

let database = null

const startDatabase = async () => {
  log('Starting MongoDB')

  const mongo = new MongoMemoryServer()
  const mongoDBURL = await mongo.getConnectionString()
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  database = connection.db()
}

const getDatabase = async () => {
  log('Getting database - MongoDB')
  if (!database) await startDatabase()
  return database
}

export { getDatabase, startDatabase }
