const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI
});

module.exports = {
  query: (text:string, params:any, callback:Function) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
