const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const imagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file)
    const valideFile = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalide type");
    if (valideFile) {
      uploadError = null;
    }
    if (file.fieldname == "thumbnail") {
      cb(uploadError, "uploads/images/thumbnails");
    } else if (file.fieldname === "gallery") {
      cb(null, "uploads/images/gallery");
    }
  },
  filename: function (req, file, cb) {
    const filename = file.originalname.split(" ").join("-");
    const extention = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${filename}-${Date.now()}.${extention}`);
  },
});

const uploadimages = multer({ storage: imagesStorage });

module.exports = uploadimages;
