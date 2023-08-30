import express, { Express, NextFunction, Request, Response } from 'express'

const usersController = require('../controllers/usersController')
const mockLinkedInAuth = require('../controllers/mockLinkedInAuth')

const router = express.Router();

router.get('/', usersController.getAllUsers, (req: Request,res: Response) => {
  res.status(200).json(res.locals.users);
});

router.post('/', mockLinkedInAuth.signUp, usersController.createUser, (req: Request,res: Response) => {
  const successMessage = 'User was created successfully';
  res.status(200).json({
    message: successMessage,
    user: res.locals.user
  });
});

module.exports = router;