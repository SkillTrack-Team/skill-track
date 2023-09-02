import { Request, Response, NextFunction } from 'express';
const profileApiMockJsonData = require('../database/mockData/profileApiMockJsonData');


const mockLinkedInAuth = {
  signUp: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.locals.profileData = profileApiMockJsonData;
    next();
  }
}


module.exports = mockLinkedInAuth;

