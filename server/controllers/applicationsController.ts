import { Request, Response, NextFunction } from 'express';
const db = require('../database/db');
import { Application } from '../types';

const applicationsController = {
  getAllApplications: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const id = req.params.userId;
      const query = 'SELECT * from applications WHERE user_id = $1';
      const values = [id];

      const response = await db.query(query, values);
      const applications: Application[] = response.rows;

      res.locals.applications = applications;
      next();
    } catch(error){
      next(error);
    }
  },

  createApplication: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const id = req.params.userId;
      const {
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
        id,
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
      const insertedApplication = await db.query(query, values);
      res.locals.application = insertedApplication.rows[0]
      next();
    } catch(error){
      next(error);
    }
  },

  updateApplication: async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const application_id = req.params.applicationId;
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
        application_id
      ];

      const query = `
        UPDATE applications 
        SET
          user_id = $1,
          company = $2,
          position = $3,
          interest_level = $4,
          date_submitted = $5,
          location = $6,
          description = $7,
          application_type = $8,
          job_posting_url = $9,
          internal_contact = $10,
          internal_contact_email = $11,
          follow_up = $12,
          notes = $13,
          status = $14
        WHERE id = $15
        RETURNING *;
      `;
      const updatedApplication = await db.query(query, values);
      res.locals.application = updatedApplication.rows[0]
      
      next();

    }catch(err){
      next(err);
    }
  },

  deleteApplication: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const application_id = req.params.applicationId;
      const values = [application_id]
      const query = 'DELETE FROM applications WHERE id = $1 RETURNING *';

      const deletedApplication = await db.query(query, values);
      res.locals.application = deletedApplication.rows[0];
      next();
    } catch(error){
      next(error);
    }
  },
}

module.exports = applicationsController;