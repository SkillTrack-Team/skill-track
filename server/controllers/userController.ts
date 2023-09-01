import { Request, Response, NextFunction } from 'express';
const db = require('../database/db');
import { User } from '../types';

const UserController = {
  //test controller checking db connection
  getAllUsers: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const getUsers = 'SELECT * from users';

      const response = await db.query(getUsers);
      const users: User[] = response.rows;

      res.locals.users = users;
      next();
    } catch(error){
      next(error);
    }
   
  }
}

module.exports = UserController;