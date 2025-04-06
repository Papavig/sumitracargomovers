import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Package,
  Truck,
} from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function OurProcess() {
  const process: ProcessStep[] = [
    {
      title: "Free Consultation",
      description: "We discuss your requirements and provide an initial assessment.",
      icon: Search,
    },
    {
      title: "Detailed Planning",
      description: "Our team creates a comprehensive plan tailored to your specific needs.",
      icon: Calendar,
    },
    {
      title: "Professional Packing",
      description: "We carefully pack your belongings using high-quality materials.",
      icon: Package,
    },
    {
      title: "Safe Transportation",
      description: "Your items are safely transported to their destination.",
      icon: Truck,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <div className="text-primary font-bold text-sm mb-2">
                  {`0${index + 1}`}
                </div>

                {/* Circle with Icon */}
                <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center shadow-md bg-white relative">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Down Arrow */}
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary mt-2 mb-4"></div>

                {/* Title */}
                <h3 className="text-base font-semibold mb-1">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground px-2">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
