import express, { Request, Response } from 'express';

const applicationsController = require('../controllers/applicationsController');

const router = express.Router();

router.get('/:userId', applicationsController.getAllApplications, (req: Request,res: Response) => {
  res.status(200).json(res.locals.applications);
});

router.post('/:userId', applicationsController.createApplication, (req: Request,res: Response) => {
  const successMessage = 'Application was successfully created';
  res.status(200).json({
    message: successMessage,
    application: res.locals.application
  });
});

router.put('/:applicationId', applicationsController.updateApplication, (req: Request,res: Response) => {
  const successMessage = 'Application was successfully updated';
  res.status(200).json({
    message: successMessage,
    application: res.locals.application
  });
});


router.delete('/:applicationId', applicationsController.deleteApplication, (req: Request,res: Response) => {
  const successMessage = 'Application was successfully deleted';
  res.status(200).json({
    message: successMessage,
    application: res.locals.application
  });
});


module.exports = router;