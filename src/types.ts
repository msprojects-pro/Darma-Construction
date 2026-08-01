export type ServiceId = 
  | 'kitchen-cabinets'
  | 'bathroom-renovations'
  | 'flooring'
  | 'drywall'
  | 'painting'
  | 'installation';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  timeline: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceId | 'full-home';
  categoryLabel: string;
  location: string;
  duration: string;
  imageAfter: string;
  imageBefore?: string;
  scope: string[];
  summary: string;
  year: string;
}

export interface WhyUsPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  projectType: string;
  rating: number;
  comment: string;
  date: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  city: string;
  squareFootage: string;
  budgetRange: string;
  timeframe: string;
  message: string;
}

export interface CostEstimateInput {
  serviceId: ServiceId | 'full-home';
  sqft: number;
  finishQuality: 'standard' | 'premium' | 'luxury';
}
