import { useState, useEffect } from 'react';
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Atharv Salunkhe",
    rating: 5,
    comment: "Fantastic service! I relocated from Worli to Juhu, and the entire process was stress-free. The movers were friendly, professional, and efficient. All my items were packed securely, and there was no damage during the move. Highly recommended for anyone moving within Mumbai!",
  },
  {
    name: "Anuj Jagtap",
    rating: 4,
    comment: "Recently moved from Mumbai to Pune with this packers and movers company. Excellent service, timely delivery, and very professional staff.",
  },
  {
    name: "Navnath Aher",
    rating: 5,
    comment: "I recently shifted from Goa to Panvel, and the service was top-notch! The movers were quick, careful, and ensured that my fragile items were handled with care.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const getCardVariants = (index: number) => {
    const position = (index - activeIndex + testimonials.length) % testimonials.length;
    const isSmallScreen = width < 768;

    if (isSmallScreen) {
      return {
        center: {
          scale: position === 0 ? 1 : 0.95,
          y: position === 0 ? 0 : position * 30,
          opacity: position === 0 ? 1 : 0.6,
          zIndex: position === 0 ? 3 : 1,
          transition: { duration: 0.5 },
        },
      };
    }

    const xOffset = width * 0.22;
    return {
      center: {
        x: position === 0 ? 0 : position === 1 ? xOffset : -xOffset,
        scale: position === 0 ? 1 : 0.85,
        rotateY: position === 0 ? 0 : position === 1 ? -10 : 10,
        opacity: position === 0 ? 1 : 0.7,
        zIndex: position === 0 ? 3 : 1,
        transition: { duration: 0.5 },
      },
    };
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background via-background to-transparent py-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          What Our Customers Say
        </h2>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div
          className="relative min-h-[400px] md:min-h-[300px] flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute w-[calc(100%-2rem)] md:w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              variants={getCardVariants(index)}
              animate="center"
              style={{
                transformOrigin: "center",
                translateX: "-50%",
                left: "50%",
                height: "280px",
              }}
            >
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
