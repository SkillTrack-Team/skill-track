export interface CommentFromDB {
  id: number;
  application_id: number;
  date: Date;
  user_id: number;
  message: string;
}