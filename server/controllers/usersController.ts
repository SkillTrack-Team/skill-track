import { Request, Response, NextFunction } from 'express';
const db = require('../database/db');
import { User, LocalizedData } from '../types';

const UsersController = {
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

  getUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const {username, password} = req.body;
      const query = 'SELECT * from users WHERE username = $1 AND password = $2';

      const values = [
        username,
        password
      ];

      const response = await db.query(query, values);
      const users: User[] = response.rows[0];
      res.locals.users = users;
      
      next();
    } catch(error){
      next(error);
    }
  },

  createUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const {username, password} = req.body

      const values = [
        username,
        password
      ]

      const query = `
        INSERT INTO users (
          username,
          password
        )
        VALUES ($1, $2)
        RETURNING *;
      `; 
      const insertedUser = await db.query(query, values);
      res.locals.user = insertedUser.rows[0];
    
      next();
    } catch(error){
      next(error);
    }
  },

  // createUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try{
  //     const{
  //       firstName,
  //       headline,
  //       vanityName,
  //       id,
  //       lastName
  //     } = res.locals.profileData;

  //     function preferredLocaleValue (localizedData:LocalizedData): string{
  //       const {localized, preferredLocale} = localizedData;

  //       const countryLanguagePreference = `${preferredLocale.language}_${preferredLocale.country}`;

  //       return localized[countryLanguagePreference];
  //     }

  //     const linkedin_id = id;
  //     const first_name = preferredLocaleValue(firstName);
  //     const last_name = preferredLocaleValue(lastName);
  //     const localizedHeadline = preferredLocaleValue(headline);

  //     const values = [
  //       linkedin_id,
  //       first_name,
  //       last_name,
  //       vanityName,
  //       localizedHeadline
  //     ]

  //     const query = `
  //       INSERT INTO users (
  //         linkedin_id,
  //         first_name,
  //         last_name,
  //         vanityName,
  //         localizedHeadline
  //       )
  //       VALUES ($1, $2, $3, $4, $5)
  //       RETURNING *;
  //     `; 
  //     const insertedUser = await db.query(query, values);
  //     res.locals.user = insertedUser.rows[0];
    
  //     next();
  //   } catch(error){
  //     next(error);
  //   }
  // },
}

module.exports = UsersController;