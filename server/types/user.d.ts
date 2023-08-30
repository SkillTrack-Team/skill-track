// User-related types/interfaces

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  linkedin_id: string;
}

import { Request } from "express"
export interface IGetUserAuthInfoRequest extends Request {
  user: any // or any other type
}