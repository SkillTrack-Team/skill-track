const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI
});

module.exports = {
  query: async(text:string, params:[], callback:Function) => {
    try{
      const response = await pool.query(text, params, callback);
      console.log('executed query', text);
      return response;
    }catch(err){
      console.log(err);
    }
  }
};
