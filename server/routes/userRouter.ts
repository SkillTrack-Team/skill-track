import express, { Express, NextFunction, Request, Response } from 'express';

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers, (req: Request,res: Response) => {
  res.status(200).json(res.locals.users);
});

router.post('/', userController.createUser, (req: Request,res: Response) => {
  const successMessage = 'User was created successfully';
  res.status(200).json({
    message: successMessage,
    user: res.locals.user
  });
});

module.exports = router;