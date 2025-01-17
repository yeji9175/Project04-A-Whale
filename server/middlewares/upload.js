const uuidv4 = require('uuid').v4;
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const endpoint = 'https://kr.object.ncloudstorage.com';
const region = 'kr-standard';
const accessKeyId = process.env.API_ACCESS_KEY;
const secretAccessKey = process.env.API_SECRET_KEY;
const bucketName = process.env.API_BUCKET_NAME;

const S3 = new AWS.S3({
  endpoint,
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

exports.upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, `${uuidv4()}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
});
