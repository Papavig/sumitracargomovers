import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  icon: string;
  title: string;
}

interface ServiceCardProps extends Service {}

const services: Service[] = [
  {
    icon: "🚚",
    title: "Bike Transportation"
  },
  {
    icon: "📦",
    title: "Storage Facility"
  },
  {
    icon: "🏢",
    title: "Office Relocation"
  },
  {
    icon: "🏠",
    title: "Home Shifting"
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => (
  <div className="inline-flex flex-col items-center w-64 mx-4 p-6 bg-white rounded-xl shadow-lg">
    <span className="text-4xl mb-4">{icon}</span>
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

const InfiniteScrollingServices: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
      </div>
      
      <div className="relative w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Double the services to ensure smooth infinite loop */}
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default InfiniteScrollingServices;