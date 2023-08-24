import express, { Express, NextFunction, Request, Response } from 'express';

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers, (req: Request,res: Response) => {
  res.status(200).json(res.locals.users);
});

module.exports = router;