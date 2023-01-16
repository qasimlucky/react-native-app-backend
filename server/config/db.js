const mongoose = require('mongoose');
const express = require('express');
const app = express()
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//if (process.env.NODE_ENV == 'production'){process.env.DATABASE_URL="mongodb://localhost/vip-circle"}
//require('dotenv').config()
console.log(process.env.MONGOLAB_URL)
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(
        process.env.MONGOLAB_URL,
      { useNewUrlParser: true }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log('MongoDB is not Connected...');
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
