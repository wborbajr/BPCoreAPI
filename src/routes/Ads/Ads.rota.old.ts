const log = require('debug')('api:ads-route')

import { Router, request, response } from 'express'
import {
  insertAd,
  getAds,
  deleteAd,
  updateAd,
  findAdsById,
} from '../../controllers/Ads/AdsController'

const router = Router()

log('Default.Router')

router.get('/ads', async (req, res) => {
  res.send(await getAds())
})

router.get('/ads/:id', async (req, res) => {
  log(`findAdsById: ${req.params.id}`)
  res.send(await findAdsById(req.params.id))
})

router.post('/ads', async (req, res) => {
  const newAd = req.body
  await insertAd(newAd)
  res.send({ message: 'New ad inserted.' })
})

// endpoint to delete an ad
router.delete('/ads/:id', async (req, res) => {
  await deleteAd(req.params.id)
  res.send({ message: 'Ad removed.' })
})

// endpoint to update an ad
router.put('/ads/:id', async (req, res) => {
  const updatedAd = req.body
  await updateAd(req.params.id, updatedAd)
  res.send({ message: 'Ad updated.' })
})

export { router }
