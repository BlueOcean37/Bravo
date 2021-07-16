const imageUploadRouter = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const multers3 = require('multer-s3');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ID,
  secretAccessKey: process.env.S3_SECRET,
});

const upload = multer({
  storage: multers3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    contentType: multers3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const parts = file.mimetype.split('/');
      cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`);
    },
    acl: 'public-read',
  }),
});

imageUploadRouter.post('/', upload.single('show'), (req, res) => {
  const name = req.file.location;
  res.status(201).json(name);
});

module.exports = imageUploadRouter;
