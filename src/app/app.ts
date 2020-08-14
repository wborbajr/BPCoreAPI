const log = require('debug')('api:app')

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import {
  defaultRouter,
  adsRouter,
  userRouter,
  todoRouter,
} from '../routes/index'
import { startDatabase } from '../database/mongo'
import { insertAd } from '../controllers/Ads/Ads-old'

const app = express()

// Middleware
app.use((request, response, next) => {
  log(request.query, `request at: ${new Date().toISOString()}`)
  return next()
})

// adding Helmet to enhance your API's security
app.use(helmet())

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// enabling CORS for all requests
let allowedOrigins = ['http://localhost:1414', 'http://127.0.0.1:1414']
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
  })
)

app.use(express.json())

// Middleware
app.use('/api', defaultRouter)
app.use('/api/ads', adsRouter)
app.use('/api/user', userRouter)
app.use('/api/todo', todoRouter)

// start the in-memory MongoDB instance
startDatabase().then(async () => {
  log('Initializing database...')
  await insertAd({ title: 'Hello, now from the in-memory database!' })
})

export { app }
