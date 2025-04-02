import React from 'react';
import { Phone, ClipboardCheck, Box, Truck } from 'lucide-react';
import { ProcessStep } from './types';
import { motion } from "framer-motion";
import { staggerChildren, fadeInUp } from "@/lib/animations";

const steps: ProcessStep[] = [
  { icon: Phone, title: 'Contact Office', description: 'Get in touch for initial inquiry and discussion' },
  { icon: ClipboardCheck, title: 'Pre-Move Survey', description: 'We assess your moving requirements' },
  { icon: Box, title: 'Packing Day', description: 'Professional packing and preparation' },
  { icon: Truck, title: 'Moving Day', description: 'Safe transportation and delivery' }
];

export const ProcessSection: React.FC = () => {
  return (
    <div className="mb-16 px-4 md:px-6 flex justify-center">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 md:mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works?
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow mx-auto w-full max-w-xs md:max-w-none"
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};