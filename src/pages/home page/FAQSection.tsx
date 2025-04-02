import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const faqs = [
  { question: "How do I book Sumitra Cargo Movers?", answer: "You can book by calling us or filling out our online form." },
  { question: "What areas do you provide services in?", answer: "We offer services across multiple cities. Contact us for availability." },
  { question: "How long does the moving process take?", answer: "It depends on the distance and volume of items. We provide an estimated timeline during booking." },
  { question: "Are my belongings insured during the move?", answer: "Yes, we offer insurance coverage for your items. Ask our team for details." },
  { question: "What are the payment options available?", answer: "We accept cash, credit/debit cards, and bank transfers." },
  { question: "Can I track my shipment in real-time?", answer: "Yes, we provide real-time tracking for all shipments." },
  { question: "Do you provide packing materials?", answer: "Yes, we offer high-quality packing materials for safe transport." },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <motion.h2 
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p 
        className="text-gray-600 text-center mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Find answers to common questions about our moving services. If you need more help, feel free to contact us.
      </motion.p>

      <motion.div 
        className="space-y-4 mt-6"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className="border rounded-lg p-4 shadow-md"
            variants={fadeInUp}
          >
            <motion.button
              className="w-full flex justify-between items-center font-bold text-left"
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="mr-2">{faq.question}</span>
              <motion.span 
                className="ml-auto text-lg"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;