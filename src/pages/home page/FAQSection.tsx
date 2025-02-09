import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="text-gray-600 text-center mt-2">
        Find answers to common questions about our moving services. If you need more help, feel free to contact us.
      </p>

      <div className="space-y-4 mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <button
              className="w-full flex justify-between items-center font-bold text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="mr-2">{faq.question}</span>
              <span className="ml-auto text-lg">{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 150 }}  // Limits height to prevent shifting
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
