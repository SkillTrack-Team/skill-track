import { Request, Response, NextFunction } from 'express';
const db = require('../database/db');
import { CommentFromDB } from '../types'; 

const commentsController = {
  getCommentsByApplicationId: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationId = req.params.applicationId;
      const query = 'SELECT * FROM comments WHERE application_id = $1';
      const values = [applicationId];

      const response = await db.query(query, values);
      const comments: CommentFromDB[] = response.rows;

      res.locals.comments = comments;
      next();
    } catch (error) {
      next(error);
    }
  },

  createComment: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationId = req.params.applicationId;
      const { message, date, user_id } = req.body;

      const values = [applicationId, user_id, message, date];

      const query = `
        INSERT INTO comments (application_id, user_id, message, date)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      
      const insertedComment = await db.query(query, values);
      res.locals.comment = insertedComment.rows[0];

      next();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = commentsController;