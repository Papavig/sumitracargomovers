// import React, { useState, useEffect, useRef } from "react";
// import {
//   X,
//   Phone,
//   Mail,
//   Package,
//   HelpCircle,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// import guy from '/assets/Images/delivery guy.png';

// interface Message {
//   type: "bot" | "user";
//   content: string;
//   isQuoteForm?: boolean;
//   isFaqs?: boolean;
// }

// interface FAQ {
//   question: string;
//   answer: string;
// }

// const faqs: FAQ[] = [
//   {
//     question: "What areas do you service?",
//     answer:
//       "We provide cargo services across all major cities in India with international shipping options available.",
//   },
//   {
//     question: "How can I track my shipment?",
//     answer:
//       "You can track your shipment using the tracking number provided via email on our website's tracking page.",
//   },
//   {
//     question: "What are your working hours?",
//     answer:
//       "We operate Monday to Saturday, 9:00 AM to 6:00 PM IST. Emergency support is available 24/7.",
//   },
// ];

// type ActionType = "call" | "email" | "quote" | "faq";

// const SupportChatbot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = (): void => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     if (isOpen && messages.length === 0) {
//       setMessages([
//         {
//           type: "bot",
//           content: "Hi! How can we assist you today?",
//         },
//       ]);
//     }
//     scrollToBottom();
//   }, [isOpen, messages]);

//   const handleAction = (action: ActionType): void => {
//     switch (action) {
//       case "call":
//         window.location.href = "tel:+917039001002";
//         break;
//       case "email":
//         window.location.href = "mailto:support@sumitracargomovers.com";
//         break;
//       case "quote":
//         setMessages([
//           ...messages,
//           { type: "user", content: "Request a Quote" },
//           {
//             type: "bot",
//             content: "Please provide the following details for a quote:",
//             isQuoteForm: true,
//           },
//         ]);
//         break;
//       case "faq":
//         setMessages([
//           ...messages,
//           { type: "user", content: "View FAQs" },
//           {
//             type: "bot",
//             content: "Here are some frequently asked questions:",
//             isFaqs: true,
//           },
//         ]);
//         break;
//     }
//   };

//   const toggleChat = (): void => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50 font-sans">
//       <img
//         src={guy}
//         alt="Chat with us"
//         onClick={toggleChat}
//         className={`${
//           isOpen ? "hidden" : "block"
//         } w-40 h-40 cursor-pointer hover:scale-105 transition-all duration-200`}
//       />

//       {isOpen && (
//         <div className="bg-white rounded-lg shadow-xl flex flex-col md:w-96 w-[90vw] max-h-[600px] animate-slide-up">
//           <div className="flex items-center justify-between bg-primary p-4 rounded-t-lg">
//             <h3 className="text-primary-foreground font-semibold flex items-center gap-2">
//               Sumitra Cargo Support Bot
//             </h3>
//             <button
//               onClick={toggleChat}
//               className="hover:bg-primary/80 p-1 rounded"
//             >
//               <X className="w-5 h-5 text-primary-foreground" />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   message.type === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`rounded-lg p-3 max-w-[80%] ${
//                     message.type === "user"
//                       ? "bg-primary text-white"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {message.content}

//                   {message.isQuoteForm && (
//                     <div className="mt-4 space-y-2">
//                       <input
//                         type="text"
//                         placeholder="Your Name"
//                         className="w-full p-2 border rounded text-gray-800"
//                       />
//                       <input
//                         type="email"
//                         placeholder="Your Email"
//                         className="w-full p-2 border rounded text-gray-800"
//                       />
//                       <textarea
//                         placeholder="Cargo Details"
//                         className="w-full p-2 border rounded text-gray-800"
//                         rows={3}
//                       />
//                       <button className="bg-gray-800 text-white px-4 py-2 rounded hover:gray-500 w-full">
//                         Submit Quote Request
//                       </button>
//                     </div>
//                   )}

//                   {message.isFaqs && (
//                     <div className="mt-4 space-y-2">
//                       {faqs.map((faq, faqIndex) => (
//                         <div key={faqIndex} className="border rounded bg-white">
//                           <button
//                             className="w-full p-3 text-left flex justify-between items-center hover:bg-gray-50"
//                             onClick={() =>
//                               setSelectedFaq(
//                                 selectedFaq === faqIndex ? null : faqIndex
//                               )
//                             }
//                           >
//                             <span className="font-medium text-gray-800">
//                               {faq.question}
//                             </span>
//                             {selectedFaq === faqIndex ? (
//                               <ChevronUp className="w-4 h-4" />
//                             ) : (
//                               <ChevronDown className="w-4 h-4" />
//                             )}
//                           </button>
//                           {selectedFaq === faqIndex && (
//                             <div className="p-3 border-t text-gray-600">
//                               {faq.answer}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="p-4 border-t grid grid-cols-2 gap-2">
//             <button
//               onClick={() => handleAction("call")}
//               className="flex items-center justify-center gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
//             >
//               <Phone className="w-4 h-4" /> Call Us
//             </button>
//             <button
//               onClick={() => handleAction("email")}
//               className="flex items-center justify-center gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
//             >
//               <Mail className="w-4 h-4" /> Email Us
//             </button>
//             <button
//               onClick={() => handleAction("quote")}
//               className="flex items-center justify-center gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
//             >
//               <Package className="w-4 h-4" /> Get Quote
//             </button>
//             <button
//               onClick={() => handleAction("faq")}
//               className="flex items-center justify-center gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
//             >
//               <HelpCircle className="w-4 h-4" /> FAQs
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SupportChatbot;

import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide on scroll

      // Clear the previous timeout to avoid flickering
      clearTimeout(scrollTimeout);

      // Reappear after stopping scroll
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 400); // Adjust delay to make it smoother
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
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
      className="fixed bottom-4 right-4 z-50 font-sans flex flex-col items-end"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {isOpen && (
        <div className="bg-white shadow-xl flex flex-col w-[85vw] max-w-[280px] mb-4 rounded-lg">
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
            className="w-[80%] mx-auto mt-3 rounded-lg bg-[#25D366] text-white py-2 flex items-center justify-center gap-2 text-sm font-medium"
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

      <img
        src={guy}
        alt="Contact Support"
        onClick={() => setIsOpen(true)}
        className="w-32 h-32 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
    </motion.div>
  );
};

export default WhatsAppContact;
