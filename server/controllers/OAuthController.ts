import { Request, Response, NextFunction } from 'express';

const OAuthController ={
    getAuthorizationCode: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const authorizationUrl = req.params.id
            console.log(authorizationUrl)
            next();
        } catch(error){
          next(error);
        }
       
      }
}

module.exports = OAuthController;