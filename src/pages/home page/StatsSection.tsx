import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Briefcase, Building, Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerChildren } from "@/lib/animations";

const stats = [
  { icon: Briefcase, value: 10, label: "Years of Experience", suffix: "+" },
  { icon: Truck, value: 1000, label: "Successful Moves", suffix: "+" },
  { icon: Building, value: 50, label: "Branch Offices", suffix: "+" },
  {
    icon: Users,
    value: 250,
    label: "Professional Courier Partners",
    suffix: "+",
  },
];

export const StatsSection: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector("#stats-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Company Overview */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl font-bold text-primary">
              About Sumitra Cargo Movers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sumitra Cargo Movers has been a trusted name in the relocation
              industry, providing comprehensive packing and moving services
              across India. Our commitment to excellence and customer
              satisfaction has made us a preferred choice for both residential
              and commercial moves.
            </p>
            <motion.a
              href="/about"
              className="bg-primary text-primary-foreground px-6 py-3 inline-block rounded-lg font-bold hover:bg-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 rounded-lg p-6 text-center hover:bg-primary/10 transition-colors"
                variants={fadeInRight}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2 text-primary">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};