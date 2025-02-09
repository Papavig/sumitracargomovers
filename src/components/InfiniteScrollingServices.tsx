import React from "react";
import { motion } from "framer-motion";

interface Service {
  icon: string;
  title: string;
}

const services: Service[] = [
  { icon: "🚚", title: "Bike Transportation" },
  { icon: "📦", title: "Storage Facility" },
  { icon: "🏢", title: "Office Relocation" },
  { icon: "🏠", title: "Home Shifting" },
];

const ServiceCard: React.FC<Service> = ({ icon, title }) => (
  <div className="flex flex-col items-center w-56 p-4 bg-white rounded-xl shadow-lg mx-2">
    <span className="text-4xl mb-2">{icon}</span>
    <h3 className="text-lg font-semibold text-center">{title}</h3>
  </div>
);

const InfiniteScrollingServices: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Our Services</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 min-w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, // Adjust speed (higher = slower)
              ease: "linear",
            },
          }}
        >
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfiniteScrollingServices;
