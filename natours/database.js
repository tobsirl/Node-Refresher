const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB = process.env.MONGODB.replace(
  '<password>',
  process.env.MONGODB_PASSWORD
);

const connectDatabase = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('Connected to the Database... 🤖');
  } catch (err) {
    console.log(err.message);
    // Exit connection process
    process.exit(1);
  }
};

module.exports = connectDatabase;
