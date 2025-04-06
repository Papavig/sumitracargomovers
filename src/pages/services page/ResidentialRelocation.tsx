import { Home } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";


export default function ResidentialRelocation() {
  return (
    <ServiceTemplate
      title="Residential Relocation"
      subtitle="Complete home moving solutions tailored to your family's specific requirements"
      icon={<Home className="w-full h-full" />}
      imageSrc="/assets/ShowcaseImages/1.jpg"
      description={[
        "Our residential relocation services offer comprehensive solutions for moving your home and family. We understand that your home contains not just possessions but memories and sentiments, which is why we approach each residential move with personalized care and attention to detail.",
        "From studio apartments to large family homes, we tailor our services to match your specific needs, timeline, and budget. Our team works closely with you throughout the entire process to ensure a smooth transition to your new home.",
      ]}
      features={[
        "Customized moving plans based on your specific household size and requirements",
        "Full-service packing and unpacking options",
        "Specialized handling for valuable and sentimental items",
        "Furniture disassembly and reassembly services",
      ]}
      process={[
        {
          title: "Pre-Move Consultation",
          description: "We discuss your needs, concerns, and special requirements to create a personalized moving plan",
        },
        {
          title: "Detailed Inventory",
          description: "We develop a comprehensive inventory of items to be moved for proper planning and protection",
        },
        {
          title: "Packing & Preparation",
          description: "Your belongings are carefully packed and prepared for the move with appropriate materials",
        },
        {
          title: "Moving Day Execution",
          description: "Our team arrives on schedule, loads your belongings securely, and transports them to your new home",
        },
        {
          title: "Unpacking & Setup",
          description: "We place items in their designated rooms, reassemble furniture, and help set up your new home",
        },
      ]}
      
    />
  );
}