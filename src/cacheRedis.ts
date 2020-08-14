import redis from 'redis'
const redisClient = redis.createClient()

const getCache = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, value) => {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    })
  })
}

const setCache = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.set(key, value, 'EX', 10, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
