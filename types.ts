export interface FeatureData {
  title: string;
  description: string;
}

export interface FooterContent {
  rights: string;
  location: string;
}

export enum SubscriptionStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface NewsletterContent {
  placeholder: string;
  button: string;
  processing: string;
  subtext: string;
  successTitle: string;
  successMessage: string;
  registerAnother: string;
  errorEmail: string;
}

export interface AppContent {
  comingSoon: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  tagline: string;
  features: FeatureData[];
  footer: FooterContent;
}