const log = require('debug')('api:routes-Ads')

import { Router, Request, Response } from 'express'
import { adsController } from '../../controllers'

const router = Router()

log('Building Ads routes')

router.post('/', (req: Request, res: Response) => {
  adsController.create(req, res)
})

router.get('/', (req: Request, res: Response) => {
  adsController.read(req, res)
})

router.patch('/', (req: Request, res: Response) => {
  adsController.update(req, res)
})

router.delete('/', (req: Request, res: Response) => {
  adsController.delete(req, res)
})

export { router }
