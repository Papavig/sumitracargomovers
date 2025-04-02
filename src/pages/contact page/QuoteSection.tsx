import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="bg-primary text-primary-foreground py-24">
      <div className="container mx-auto px-4">
        <motion.blockquote 
          className="text-2xl md:text-3xl font-semibold text-center italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          "Our dedicated customer support team is available to assist you with any queries or concerns. We prioritize timely responses to ensure your experience with Sumitra Cargo Movers is smooth and efficient."
        </motion.blockquote>
        <motion.p 
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          - Sumitra Cargo Movers Team
        </motion.p>
      </div>
    </section>
  )
}