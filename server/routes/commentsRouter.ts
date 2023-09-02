import express, { Request, Response } from 'express';
const commentsController = require('../controllers/commentsController');

const router = express.Router();

// Create a comment for an application
router.post('/:applicationId', commentsController.createComment, (req: Request, res: Response) => {
  const successMessage = 'Comment was successfully created';
  res.status(200).json({
    message: successMessage,
    comment: res.locals.comment
  });
});

// Get all comments for an application
router.get('/:applicationId', commentsController.getCommentsByApplicationId, (req: Request, res: Response) => {
  res.status(200).json(res.locals.comments);
});


module.exports = router;

