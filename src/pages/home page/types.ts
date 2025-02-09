export interface QuoteFormData {
    name: string;
    phone: string;
    pickupLocation: string;
    dropLocation: string;
    moveDate: string;
  }
  
  export interface Stats {
    years: number;
    moves: number;
  }
  
  export interface ProcessStep {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }