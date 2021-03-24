const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/posts')
  },
  filename: function (req, file, cb) {
    let filename = path.format({
      name: Date.now(),
      ext: path.extname(file.originalname),
    })
    cb(null, filename)
  },
})

module.exports = multer({ storage: storage })