import { Truck, Clock, Shield, Users } from "lucide-react"
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const features = [
  {
    icon: Truck,
    title: "Nationwide Coverage",
    description:
      "We offer moving services across the entire country, ensuring seamless relocations no matter the distance.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Our efficient processes and experienced team ensure your belongings arrive on time, every time.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "We use advanced packing techniques and materials to keep your items safe throughout the move.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 customer support to address your concerns and provide updates on your move.",
  },
]

export default function WhatSetsUsApart() {
  return (
    <section className="py-20 bg-background/80">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Sets Us Apart
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-background rounded-lg p-6 shadow-md"
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}