const log = require('debug')('api:controller-Ads-AdsController')

import { Request, Response } from 'express'
import { CrudController } from '../CrudController'

import { getDatabase } from '../../database/mongo'
import { ObjectID } from 'mongodb'

const collectionName = 'ads'

class AdsController extends CrudController {
  // constructor() {
  //   super()
  // }

  public async create(
    req: Request<import('express-serve-static-core').ParamsDictionary>,
    res: Response
  ): Promise<void> {
    const database = await getDatabase()
    const { insertedId } = await database
      .collection(collectionName)
      .insertOne(req.body)

    res.json({ message: insertedId })
  }

  public async read(
    req: Request<import('express-serve-static-core').ParamsDictionary>,
    res: Response
  ): Promise<void> {
    const database = await getDatabase()
    const result = await database.collection(collectionName).find({}).toArray()

    res.json({ message: result })
  }

  public async update(
    req: Request<import('express-serve-static-core').ParamsDictionary>,
    res: Response
  ): Promise<void> {
    const database = await getDatabase()
    // delete ad._id
    // await database.collection(collectionName).update(
    //   { _id: new ObjectID(req.body) },
    //   {
    //     $set: {
    //       ...ad,
    //     },
    //   }
    // )

    res.json({ message: 'Deleted' })
  }

  public async delete(
    req: Request<import('express-serve-static-core').ParamsDictionary>,
    res: Response
  ): Promise<void> {
    const database = await getDatabase()
    await database.collection(collectionName).deleteOne({
      _id: new ObjectID(req.params.id),
    })

    res.json({ message: 'Deleted' })
  }
}

export { AdsController }
