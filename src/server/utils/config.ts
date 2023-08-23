const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { PG_URI } = process.env;

module.exports = {
  PG_URI
};
