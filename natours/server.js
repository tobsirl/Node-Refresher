const dotenv = require('dotenv');
const app = require('./app');

const connectDatabase = require('./database');

dotenv.config();

// Make database connection
connectDatabase();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
