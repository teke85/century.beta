export type Course = 
  | "Accounting"
  | "Nursing"
  | "Information Technology"
  | "Business Administration"
  | "Engineering"
  | "Education"
  | "Medicine"
  | "Law"
  | "Agriculture"
  | "Hospitality"
  | "Mathematics"
  | "Science"
  | "English";

export type School = {
  id: string;
  name: string;
  town: string;
  type: string;
  isBoarding: boolean;
  offerAccommodation: boolean;
  isSponsored: boolean;
  isPopular: boolean;
  email: string;
  phoneNumber: string;
  address: string;
  gender: 'Boys' | 'Girls' | 'Mixed';
  courses: Course[];
};

export type Filters = {
  town: string;
  type: string;
  isBoarding: boolean | null;
  offerAccommodation: boolean | null;
  gender: string;
  courses: Course[];
};

