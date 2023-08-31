import express, { Request, Response } from 'express';

const interviewRoundsController = require('../controllers/interviewRoundsController');

const router = express.Router();

router.get('/:id', interviewRoundsController.getInterviewRounds, (req: Request,res: Response) => {
  res.status(200).json(res.locals.interviewRounds);
});

router.post('/', interviewRoundsController.createInterviewRound, (req: Request,res: Response) => {
  const successMessage = 'Interview round was created successfully';
  res.status(200).json({
    message: successMessage,
    interviewRound: res.locals.interviewRound
  });
});

router.put('/:id', interviewRoundsController.updateInterviewRound, (req: Request,res: Response) => {
  const successMessage = 'Interview round was updated successfully';
  res.status(200).json({
    message: successMessage,
    interviewRound: res.locals.interviewRound
  });
});

router.delete('/:id', interviewRoundsController.deleteInterviewRound, (req: Request,res: Response) => {
  const successMessage = 'Interview round was deleted successfully';
  res.status(200).json({
    message: successMessage,
    interviewRound: res.locals.interviewRound
  });
});


module.exports = router;