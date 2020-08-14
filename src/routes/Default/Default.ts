const log = require('debug')('api:Default')

import { Router, Request, Response } from 'express'

const router = Router({ strict: true })

log('Building Default routes')

router.get('/', (req: Request, res: Response, next) => {
  log('Router.GET')
  res.json({ message: 'Working' })
})

router.get('/ver', (req: Request, res: Response, next) => {
  log('Router.GET')
  res.json({ message: 'Version 1.0.0' })
})

router.get('/sec', (req: Request, res: Response, next) => {
  log('Router.GET')
  res.json({ message: 'Security v1.0.0' })
})

export { router }
