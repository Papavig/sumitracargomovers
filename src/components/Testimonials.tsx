import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul S.",
    location: "Delhi",
    rating: 5,
    comment: "Sumitra Cargo Movers made my shifting hassle-free. Highly recommended!",
  },
  {
    name: "Priya M.",
    location: "Mumbai",
    rating: 4,
    comment: "Professional team, on-time delivery, and no hidden charges.",
  },
  {
    name: "Navnath A.",
    location: "Mumbai",
    rating: 5,
    comment: "I recently shifted from Goa to Panvel, and the service was top-notch! The movers were quick, careful, and ensured that my fragile items were handled with care.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
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
    
    if (isMobile) {
      return {
        center: {
          scale: position === 0 ? 1 : 0.85,
          y: position === 0 ? 0 : 30,
          opacity: position === 0 ? 1 : 0,
          zIndex: position === 0 ? 3 : 1,
          transition: { duration: 0.5 },
        },
      };
    }

    const xOffset = width * 0.18; // Reduced offset for better appearance
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background via-background to-transparent py-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          What Our Customers Say
        </h2>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-16">
        <div
          className="relative min-h-[360px] md:min-h-[280px] flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute w-[calc(100%-3rem)] md:w-[500px]" // Reduced width
              variants={getCardVariants(index)}
              animate="center"
              style={{
                transformOrigin: "center",
                translateX: "-50%",
                left: "50%",
              }}
              onClick={() => isMobile && handleNext()}
            >
              <Card className="h-full shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-6 w-6 text-primary/40" />
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
                  <p className="italic text-muted-foreground text-sm md:text-base">
                    {testimonial.comment}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="w-8 h-1 bg-primary/30 mb-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          
          {/* Navigation arrows for desktop */}
          {!isMobile && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}