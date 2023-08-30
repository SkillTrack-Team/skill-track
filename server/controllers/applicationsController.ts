import { Request, Response, NextFunction } from 'express';
const db = require('../database/db');
import { Application } from '../types';

const applicationsController = {
  //test controller checking db connection
  getAllApplications: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const query = 'SELECT * from applications';

      const response = await db.query(query);
      const applications: Application[] = response.rows;

      res.locals.applications = applications;
      next();
    } catch(error){
      next(error);
    }
  },

  createApplication: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const {
        user_id,
        company,
        position,
        interest_level,
        date_submitted,
        location,
        description,
        application_type,
        job_posting_url,
        internal_contact,
        internal_contact_email,
        follow_up,
        notes,
        status,
      } = req.body;

      const values = [
        user_id,
        company,
        position,
        interest_level,
        date_submitted,
        location,
        description,
        application_type,
        job_posting_url,
        internal_contact,
        internal_contact_email,
        follow_up,
        notes,
        status,
      ]

      const query = `
      INSERT INTO applications (
        user_id,
        company,
        position,
        interest_level,
        date_submitted,
        location,
        description,
        application_type,
        job_posting_url,
        internal_contact,
        internal_contact_email,
        follow_up,
        notes,
        status
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;
    `; 
      await db.query(query, values);
      next();
    } catch(error){
      next(error);
    }
  },

  deleteApplication: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const {application_id} = req.body;
      const values = [application_id]
      const query = 'DELETE FROM applications WHERE id = $1';

      await db.query(query, values);
      next();
    } catch(error){
      next(error);
    }
  },
}

module.exports = applicationsController;