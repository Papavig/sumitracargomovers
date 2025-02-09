import React from 'react';
import { Phone, ClipboardCheck, Box, Truck } from 'lucide-react';
import { ProcessStep } from './types';

const steps: ProcessStep[] = [
  { icon: Phone, title: 'Contact Office', description: 'Get in touch for initial inquiry and discussion' },
  { icon: ClipboardCheck, title: 'Pre-Move Survey', description: 'We assess your moving requirements' },
  { icon: Box, title: 'Packing Day', description: 'Professional packing and preparation' },
  { icon: Truck, title: 'Moving Day', description: 'Safe transportation and delivery' }
];

export const ProcessSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">How It Works?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};