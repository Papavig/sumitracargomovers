import { Package } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

export default function CommercialMoving() {
  return (
    <ServiceTemplate
      title="Commercial Moving Services"
      subtitle="Minimize downtime with our streamlined office and business relocation services"
      icon={<Package className="w-full h-full" />}
      imageSrc="/assets/ShowcaseImages/7.jpg"
      description={[
        "Our commercial moving services are specifically designed to minimize business disruption while ensuring a smooth transition to your new location. We understand that time is money in business, which is why we develop efficient moving strategies that reduce downtime and keep your operations running as smoothly as possible.",
        "From small offices to large corporate headquarters, our experienced team handles every aspect of your commercial move with precision and care. We work around your schedule, including evenings and weekends, to ensure your business can resume operations quickly in the new location.",
      ]}
      features={[
        "Comprehensive project management from planning to execution",
        "Minimal disruption to daily business operations",
        "Specialized equipment for moving office furniture and equipment",
        "IT and technology relocation services including disconnection and setup",
        "Secure handling of sensitive documents and data",
        "Furniture installation and workspace setup",
        "Proper disposal or recycling of unwanted items",
        "After-hours and weekend moving options",
        "Employee relocation assistance if needed",
      ]}
      process={[
        {
          title: "Initial Consultation",
          description: "We meet with your team to understand your business needs and develop a preliminary moving plan",
        },
        {
          title: "Detailed Site Survey",
          description: "Our team surveys both current and new locations to identify any potential challenges",
        },
        {
          title: "Comprehensive Planning",
          description: "We create a detailed moving plan including timeline, logistics, and resource allocation",
        },
        {
          title: "Pre-Move Preparation",
          description: "We provide labeling systems and packing instructions to help your team prepare",
        },
        {
          title: "Execution",
          description: "Our team handles the move according to the agreed plan, with project managers overseeing the process",
        },
        {
          title: "Setup & Post-Move Support",
          description: "We set up furniture and equipment at the new location and provide post-move support",
        },
      ]}
      faqs={[
        {
          question: "How do you handle IT equipment during a commercial move?",
          answer: "Our team includes specialists trained in handling IT equipment. We carefully disconnect, pack, transport, and reconnect your technology systems following industry best practices to ensure data integrity and minimize downtime.",
        },
        {
          question: "Can you move our office during non-business hours?",
          answer: "Yes, we specialize in after-hours and weekend commercial moves to minimize disruption to your business operations. Many of our clients prefer this option to ensure they're operational during regular business hours.",
        },
        {
          question: "How do you ensure confidential documents remain secure during a move?",
          answer: "We use secure, lockable containers for sensitive documents and can provide chain-of-custody documentation if required. Our team is trained in handling confidential materials with appropriate discretion.",
        },
        {
          question: "Can you help with furniture installation at our new office?",
          answer: "Yes, we offer complete furniture installation services including assembly of new furniture, cubicle setup, and placement according to your office plan. We can also coordinate with your furniture vendors if needed.",
        },
      ]}
    />
  );
}