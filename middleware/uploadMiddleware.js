const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: './uploads/', 
  filename: function (req, file, cb) {
    
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});


function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/; 
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); 
  const mimetype = filetypes.test(file.mimetype); 

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!'); 
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

module.exports = upload;
