const multer = require("multer");
const path = require("path");

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Initialize upload middleware
const upload = multer({ storage: storage });

module.exports = upload;
