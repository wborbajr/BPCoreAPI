const { getDatabase } = require('../../database/mongo')
const { ObjectID } = require('mongodb')

const collectionName = 'ads'

const insertAd = async (ad) => {
  const database = await getDatabase()
  const { insertedId } = await database.collection(collectionName).insertOne(ad)
  return insertedId
}

const getAds = async () => {
  const database = await getDatabase()
  return await database.collection(collectionName).find({}).toArray()
}

const findAdsById = async (id) => {
  const database = await getDatabase()
  return await database
    .collection(collectionName)
    .findOne({ _id: id })
    .toArray()
}

const deleteAd = async (id) => {
  const database = await getDatabase()
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  })
}

const updateAd = async (id, ad) => {
  const database = await getDatabase()
  delete ad._id
  await database.collection(collectionName).update(
    { _id: new ObjectID(id) },
    {
      $set: {
        ...ad,
      },
    }
  )
}

export { insertAd, getAds, deleteAd, updateAd, findAdsById }
