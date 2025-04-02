import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, image, slug }: BlogCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg mb-16 shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
    >
      <motion.img
        src={image || "https://placehold.co/400x200"}
        alt={title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={`/blog/${slug}`}
            className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors duration-300"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}