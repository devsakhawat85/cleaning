export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  tasks: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyRequirements: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration?: string;
}

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  facilityType: string;
  serviceNeeded: string;
  message: string;
}
