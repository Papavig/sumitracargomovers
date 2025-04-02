import { Box, Clock, HomeIcon, MessageSquare, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren, listItem } from "@/lib/animations";

export default function CompanyOverview() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="bg-background/80 backdrop-blur-sm rounded-lg p-8 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold mb-4">About the Company</h2>
              <p className="text-lg">
                At Sumitra Cargo Movers, we don't just move your belongings; we
                move with your mindset. Every item, every box, every memory—we
                handle them as if they were our own. Because we know, deep down,
                you're not just looking for movers. You're looking for
                certainty.
              </p>
              
              <motion.ul 
                className="mt-6 space-y-3"
                variants={staggerChildren}
              >
                <motion.li variants={listItem} className="flex items-center">
                  <Truck className="w-6 h-6 text-black mrtext-black mr-2" />
                  <strong>Safe & Secure Packing</strong> 
                  <span className="hidden sm:inline"> – Advanced packing techniques for damage-free transit.</span>
                </motion.li>
                <motion.li variants={listItem} className="flex items-center">
                  <Clock className="w-6 h-6 text-black mr-2" />
                  <strong>On-Time Delivery</strong> 
                  <span className="hidden sm:inline"> – Because your time matters.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div 
              className="relative h-64 md:h-full"
              variants={fadeInRight}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/ShowcaseImages/Main.jpg"
                alt="About Sumitra Cargo Movers"
                className="w-[600px] h-[400px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="md:order-2"
              variants={fadeInRight}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg">
                Sumitra Cargo Movers was founded with a single mission – to make shifting stress-free. 
                Over the years, we have successfully helped thousands of families and businesses 
                relocate safely and efficiently. Our team is driven by a passion for excellence 
                and a commitment to customer satisfaction.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6">Our Process</h3>
              <motion.ul 
                className="mt-4 space-y-3"
                variants={staggerChildren}
              >
                <motion.li variants={listItem} className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-black mr-2" />
                  <strong>Get a Free Quote</strong> 
                  <span className="hidden sm:inline"> – Contact us with your shifting details.</span>
                </motion.li>
                <motion.li variants={listItem} className="flex items-center">
                  <Box className="w-6 h-6 text-black mr-2" />
                  <strong>Planning & Packing</strong> 
                  <span className="hidden sm:inline"> – Customized packing solutions to keep your belongings safe.</span>
                </motion.li>
                <motion.li variants={listItem} className="flex items-center">
                  <Truck className="w-6 h-6 text-black mr-2" />
                  <strong>Secure Transportation</strong> 
                  <span className="hidden sm:inline"> – Timely and efficient moving with our well-maintained fleet.</span>
                </motion.li>
                <motion.li variants={listItem} className="flex items-center">
                  <HomeIcon className="w-6 h-6 text-black mr-2" />
                  <strong>Unloading & Setup</strong> 
                  <span className="hidden sm:inline"> – We ensure your new space is ready for you.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div 
              className="relative h-64 md:h-full md:order-1"
              variants={fadeInLeft}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/ShowcaseImages/packers-movers.jpg"
                alt="About Sumitra Cargo Movers"
                className="w-[600px] h-[400px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}