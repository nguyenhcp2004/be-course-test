const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url} hehehehehehe`)
  next() // chuyển sang middleware tiếp theo
}

module.exports = loggerMiddleware
