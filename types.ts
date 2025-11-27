export enum SubscriptionStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface FeatureData {
  title: string;
  description: string;
}

export interface NewsletterContent {
  placeholder: string;
  button: string;
  processing: string;
  successTitle: string;
  successMessage: string;
  registerAnother: string;
  errorEmail: string;
  subtext: string;
}

export interface NavigationContent {
  about: string;
  contact: string;
}

export interface FooterContent {
  rights: string;
  location: string;
}

export interface TranslationContent {
  comingSoon: string;
  title: string;
  tagline: string;
  nav: NavigationContent;
  newsletter: NewsletterContent;
  features: FeatureData[];
  footer: FooterContent;
}