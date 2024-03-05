const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const cwd = process.cwd();
    cb(null, path.resolve(cwd, '../client/public/'));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.webp`);
  },
});

const upload = multer({ storage });

module.exports = upload;
