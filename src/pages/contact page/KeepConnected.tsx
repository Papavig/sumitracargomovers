import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, staggerChildren, listItem } from "@/lib/animations";

export default function KeepConnected() {
  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInLeft}
    >
      <h2 className="text-xl font-medium text-destructive">Keep Connected</h2>
      <h3 className="text-4xl font-bold text-black">Let's Get You Moving!</h3>
      <p className="text-muted-foreground">
        Your search for <strong>trusted packers and movers in Maharashtra</strong> ends here. 
        Whether you're relocating your <strong>home, office, or vehicle</strong>, we are here to make 
        your move <strong>safe, smooth, and stress-free</strong>.
      </p>
      {/* Contact Details */}
      <motion.div 
        className="space-y-4"
        variants={staggerChildren}
      >
        {/* Email */}
        <motion.div 
          className="flex items-center space-x-3"
          variants={listItem}
          whileHover={{ x: 5 }}
        >
          <Mail className="text-primary" />
          <a
            href="mailto:support@sumitracargomovers.com"
            className="hover:text-destructive transition"
          >
            support@sumitracargomovers.com
          </a>
        </motion.div>

        {/* Phone Numbers */}
        <motion.div 
          className="flex items-center space-x-3"
          variants={listItem}
          whileHover={{ x: 5 }}
        >
          <Phone className="text-primary" />
          <a
            href="tel:+917039001002"
            className="hover:text-destructive transition"
          >
            +91 70390 01002
          </a>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-3"
          variants={listItem}
          whileHover={{ x: 5 }}
        >
          <Phone className="text-primary" />
          <a
            href="tel:+917039001003"
            className="hover:text-destructive transition"
          >
            +91 70390 01003
          </a>
        </motion.div>

        {/* Address */}
        <motion.div 
          className="flex items-start space-x-3"
          variants={listItem}
        >
          <MapPin className="text-primary" size={24} />{" "}
          <p>
            <strong className="text-black">Sumitra Cargo Movers</strong> <br />
            Mayur Park Complex, G-102, Sector - 36, <br />
            Kamothe, Panvel, Navi Mumbai, <br />
            Maharashtra 410206
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}