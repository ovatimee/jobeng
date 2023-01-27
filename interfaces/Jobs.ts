export interface Job {
  id: Number | String;
  title: string;
  link: string;
  company: string;
  company_logo: string;
  company_name: string;
  createdAt: Date;
  updatedAt?: Date;
  location: string;
  description: string;
  salary?: Number;
  type: String;
  seniority?: String;
  category: String;
}

export interface Testimony {
  text: string;
  author: string;
  company: string;
  image: string;
}

