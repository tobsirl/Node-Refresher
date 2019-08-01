const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Tour = require('./../../models/tourModel');

dotenv.config();

const { MONGODB, MONGODB_PASSWORD } = process.env;

const DB = MONGODB.replace('<password>', MONGODB_PASSWORD);

(async () => {
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

  // read the json file
  const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));

  // import data into the database
  const importData = async () => {
    try {
      await Tour.create(tours);
      console.log('Data successfully loaded');
    } catch (error) {
      console.log(error);
    }
    process.exit(1);
  };

  // Delete all data from collection
  const deleteData = async () => {
    try {
      await Tour.deleteMany();
      console.log('Data successfully deleted');
    } catch (error) {
      console.log(error);
    }
    process.exit(1);
  };

  if (process.argv[2] === '--import') {
    importData();
  } else if (process.argv[2] === '--delete') {
    deleteData();
  }

  console.log(process.argv);
})();
