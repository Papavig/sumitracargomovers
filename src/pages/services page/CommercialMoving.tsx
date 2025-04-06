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
    />
  );
}