import { motion } from "framer-motion";
import { fadeInDown } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
        >
          Packers and Movers - Sumitra Cargo Movers
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Moving isn't just about shifting boxes — it's about shifting lives
        </motion.p>
      </div>
    </section>
  )
}