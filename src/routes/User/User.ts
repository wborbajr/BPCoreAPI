const log = require('debug')('api:routes-User')

import { Router, Request, Response } from 'express'
import { userController } from '../../controllers'

const router = Router()

log('Building User routes')

router.post('/', (req: Request, res: Response) => {
  userController.create(req, res)
})

router.get('/', (req: Request, res: Response) => {
  userController.read(req, res)
})

router.patch('/', (req: Request, res: Response) => {
  userController.update(req, res)
})

router.delete('/', (req: Request, res: Response) => {
  userController.delete(req, res)
})

export { router }
