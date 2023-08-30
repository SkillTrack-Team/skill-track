// Application-related types/interfaces

export interface Application {
  id: number;
  user_id: number;
  company: string;
  position: string;
  interest_level: number, // default to 0
  date_submitted: Date | null,
  location: string | null,
  description: string | null;
  application_type: string | null;
  job_posting_url: string | null;
  internal_contact: string | null;
  internal_contact_email: string | null;
  follow_up: boolean | null;
  notes: string | null;
  status: string;
}