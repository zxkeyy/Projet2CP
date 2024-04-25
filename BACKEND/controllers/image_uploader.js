const multer = require('multer')

const FILE_TYPE_MAP ={
  "image/png" : "png",
  "image/jpeg" : "jpeg",
  "image/jpg" : "jpg",

}

const thumbnailStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      const valideFile = FILE_TYPE_MAP[file.mimetype]
      let uploadError = new Error("invalide type")
      if(valideFile){
        uploadError=null
      }

      cb(uploadError, 'uploads/images/thumbnails')
    },
    filename: function (req, file, cb) {
      const filename = file.originalname.split(' ').join('-');
      const extention = FILE_TYPE_MAP[file.mimetype]
      cb(null, `${filename}-${Date.now()}.${extention}`)
    }
  })
  
  const uploadThumbnail = multer({ storage: thumbnailStorage })

  


  module.exports = uploadThumbnail