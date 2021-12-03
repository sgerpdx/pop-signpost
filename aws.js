require("dotenv").config();

const AWS = require("aws-sdk");
//
const myBucket = "pop-portfolio-bucket";

//to fetch my logo from S3 bucket:
const myKey = "seamles_topopatt04_edit-01-480.png";
const signedUrlExpireSeconds = 60 * 1;
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  signatureVersion: "v4",
  region: "us-west-2",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const url = s3.getSignedUrl("getObject", {
  Bucket: myBucket,
  Key: myKey,
  Expires: signedUrlExpireSeconds,
});

console.log(url);
