import { Request, Response, NextFunction } from 'express';
const db = require('../database/db');
import { User } from '../types';

const UserController = {
  //test controller checking db connection
  getAllUsers: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const query = 'SELECT * from users';

      const response = await db.query(query);
      const users: User[] = response.rows;

      res.locals.users = users;
      next();
    } catch(error){
      next(error);
    }
  },

  createUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const {
        linkedin_id,
        first_name,
        last_name,
        vanityName,
        localizedHeadline
      } = req.body;

      const values = [
        linkedin_id,
        first_name,
        last_name,
        vanityName,
        localizedHeadline
      ]

      const query = `
      INSERT INTO users (
        linkedin_id,
        first_name,
        last_name,
        vanityName,
        localizedHeadline
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `; 
      const insertedUser = await db.query(query, values);
      res.locals.user = insertedUser.rows[0];
      next();
    } catch(error){
      next(error);
    }
  },
}

module.exports = UserController;