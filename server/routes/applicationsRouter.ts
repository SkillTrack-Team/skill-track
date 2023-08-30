import express, { Request, Response } from 'express';

const applicationsController = require('../controllers/applicationsController');

const router = express.Router();

router.get('/', applicationsController.getAllApplications, (req: Request,res: Response) => {
  res.status(200).json(res.locals.applications);
});

router.post('/', applicationsController.createApplication, (req: Request,res: Response) => {
  res.status(200).send('Successfully created application');
});

router.delete('/', applicationsController.deleteApplication, (req: Request,res: Response) => {
  res.status(200).send('Successfully deleted application');
});


module.exports = router;