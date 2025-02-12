import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { icon: "🏍️", title: "Bike Transportation" },
  { icon: "🏢", title: "Office Relocation" },
  { icon: "🏠", title: "Home Shifting" },
  { icon: "📦", title: "Packing Services" },
  { icon: "🚛", title: "Intercity Moving" },
];

const ServiceCard: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <div className="flex flex-col items-center bg-white/50 p-5 rounded-xl shadow-md w-40 sm:w-56 mx-2">
    <span className="text-3xl sm:text-4xl bg-gray-100 rounded-full p-3">{icon}</span>
    <h3 className="text-sm sm:text-lg font-semibold text-center mt-3 leading-tight max-w-[90%]">
      {title}
    </h3>
  </div>
);

const ServicesSection: React.FC = () => {
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
    }, 6000); // Increased speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Services We Provide</h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex min-w-max space-x-4"
            animate={{ x: direction === "left" ? "-50%" : "0%" }}
            transition={{
              duration: 6, // Faster animation
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            {[...services, ...services].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
