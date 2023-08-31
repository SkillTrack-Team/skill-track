export interface InterviewRoundsFromDB {
  id: number;
  round_number: number | null;
  application_id: number;
  contents: text | null;
  date: Date | null;
  internal_contact: string | null;
  internal_contact_email: string | null;
  follow_up: boolean; // default to false
}

export interface InterviewRoundsFrontEnd {
  round_number: number | null;
  application_id: number;
  contents: text | null;
  date: Date | null;
  internal_contact: string | null;
  internal_contact_email: string | null;
  follow_up: boolean; // default to false
}