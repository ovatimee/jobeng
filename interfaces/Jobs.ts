export interface Job {
  id?: Number | String;
  title: string;
  company?: string;
  createdAt?: Date;
  updatedAt?: Date;
  location?: string;
  description?: string[];
  salary?: Number;
  type?: String;
  seniority?: String;
  category?: String;
}
