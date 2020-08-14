const log = require('debug')('api:index-route')

import { router as defaultRouter } from './Default/Default'
import { router as adsRouter } from './Ads/Ads'
import { router as userRouter } from './User/User'
import { router as todoRouter } from './Todo/index'

log('Index.Routes')

export { defaultRouter, adsRouter, userRouter, todoRouter }
