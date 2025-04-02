import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, listItem } from "@/lib/animations";

interface PackersMoversProps {
  title: string;
  locations: string[];
}

const PackersMovers: React.FC<PackersMoversProps> = ({ title, locations }) => {
  return (
    <motion.div 
      className="flex-1 p-4 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
    >
      <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>
      <motion.div 
        className="bg-white shadow-md rounded-lg p-8 h-full"
        variants={staggerChildren}
      >
        {locations.map((location, index) => (
          <motion.p
            key={index}
            variants={listItem}
            whileHover={{ scale: 1.02, color: "#f43f5e" }}
            className="text-sm text-center py-1 hover:text-destructive cursor-pointer transition"
          >
            {location}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PackersMovers;