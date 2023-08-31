import { Request, Response, NextFunction } from 'express';
const db = require('../database/db');
import { InterviewRoundsFromDB } from '../types';

const interviewRoundsController = {
  //test controller checking db connection
  getInterviewRounds: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const application_id = req.params.id;
      const values = [application_id]
      const query = `SELECT * from interview_rounds WHERE application_id = $1;`;

      const response = await db.query(query, values);
      const interviewRounds: InterviewRoundsFromDB[] = response.rows;

      res.locals.interviewRounds = interviewRounds;
      next();
    } catch(error){
      next(error);
    }
  },

  createInterviewRound: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const {
        round_number,
        application_id,
        contents,
        date,
        internal_contact,
        internal_contact_email,
        follow_up
      } = req.body;

      const values = [
        round_number,
        application_id,
        contents,
        date,
        internal_contact,
        internal_contact_email,
        follow_up
      ]

      const query = `
        INSERT INTO interview_rounds (
          round_number,
          application_id,
          contents,
          date,
          internal_contact,
          internal_contact_email,
          follow_up
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `; 
      const insertedInterviewRound = await db.query(query, values);
      res.locals.interviewRound = insertedInterviewRound.rows[0];
    
      next();
    } catch(error){
      next(error);
    }
  },

  updateInterviewRound: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const interview_round_id = req.params.id;
      const {
        round_number,
        application_id,
        contents,
        date,
        internal_contact,
        internal_contact_email,
        follow_up
      } = req.body;

      const values = [
        round_number,
        application_id,
        contents,
        date,
        internal_contact,
        internal_contact_email,
        follow_up,
        interview_round_id
      ]

      const query = `
        UPDATE interview_rounds 
        SET
          round_number = $1,
          application_id = $2,
          contents = $3,
          date = $4,
          internal_contact = $5,
          internal_contact_email = $6,
          follow_up = $7
        WHERE id = $8
        RETURNING *;
      `; 
      const updatedInterviewRound = await db.query(query, values);
      res.locals.interviewRound = updatedInterviewRound.rows[0];
    
      next();
    } catch(error){
      next(error);
    }
  },

  deleteInterviewRound: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const interview_round_id = req.params.id;
      const values = [interview_round_id]
      const query = `
      DELETE FROM interview_rounds WHERE id = $1 RETURNING *;`
      ;

      const deletedInterviewRound = await db.query(query, values);
      res.locals.interviewRound = deletedInterviewRound.rows[0];
    
      next();
    } catch(error){
      next(error);
    }
  },
}

module.exports = interviewRoundsController;