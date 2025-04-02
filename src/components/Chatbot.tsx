import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import guy from "/assets/Images/delivery guy.png";

interface WhatsAppContactProps {
  phoneNumber?: string;
  messageText?: string;
}

const WhatsAppContact: React.FC<WhatsAppContactProps> = ({
  phoneNumber = "917039001002",
  messageText = "Hi, I need assistance with moving services. Can you help?",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Start visible
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide on scroll
      // Clear the previous timeout to avoid flickering
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Reappear after stopping scroll
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 400); // Adjust delay to make it smoother
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(messageText);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <motion.div
      className="fixed bottom-0 right-4 z-50 font-sans flex flex-col items-end"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {isOpen && (
        <div className="bg-white shadow-xl flex flex-col w-[85vw] max-w-[280px] mb-2 rounded-lg">
          <div className="flex items-center justify-between bg-[#075E54] p-3 rounded-t-lg">
            <h3 className="text-white font-medium text-sm leading-tight">
              Sumitra Cargo Movers | Packers & Movers
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-[#075E54]/80 p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-[#ECE5DD] p-3">
            <div className="bg-white rounded-lg p-2 max-w-[70%] shadow-sm text-sm mb-16">
              {messageText}
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="w-[80%] mx-auto mt-3 mb-2 rounded-lg bg-[#25D366] text-white py-2 flex items-center justify-center gap-2 text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </button>
          <div className="text-center text-xs text-gray-500 py-2 flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Online | Privacy policy
          </div>
        </div>
      )}
      <div className="h-32 flex items-end">
        <img
          src={guy}
          alt="Contact Support"
          onClick={() => setIsOpen(true)}
          className="w-32 h-32 cursor-pointer hover:scale-105 transition-transform duration-200"
        />
      </div>
    </motion.div>
  );
};

export default WhatsAppContact;