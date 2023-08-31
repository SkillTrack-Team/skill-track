import express, { Request, Response } from 'express';

const interviewRoundsController = require('../controllers/interviewRoundsController');

const router = express.Router();

router.get('/:applicationId', interviewRoundsController.getInterviewRounds, (req: Request,res: Response) => {
  res.status(200).json(res.locals.interviewRounds);
});

router.post('/:applicationId', interviewRoundsController.createInterviewRound, (req: Request,res: Response) => {
  const successMessage = 'Interview round was created successfully';
  res.status(200).json({
    message: successMessage,
    interviewRound: res.locals.interviewRound
  });
});

router.put('/:interviewRoundId', interviewRoundsController.updateInterviewRound, (req: Request,res: Response) => {
  const successMessage = 'Interview round was updated successfully';
  res.status(200).json({
    message: successMessage,
    interviewRound: res.locals.interviewRound
  });
});

router.delete('/:interviewRoundId', interviewRoundsController.deleteInterviewRound, (req: Request,res: Response) => {
  const successMessage = 'Interview round was deleted successfully';
  res.status(200).json({
    message: successMessage,
    interviewRound: res.locals.interviewRound
  });
});


module.exports = router;