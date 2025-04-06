import { Box } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

export default function ProfessionalPacking() {
  return (
    <ServiceTemplate
      title="Professional Packing Services"
      subtitle="Expert packing solutions to ensure your belongings arrive safely at your new destination"
      icon={<Box className="w-full h-full" />}
      imageSrc="/assets/ShowcaseImages/2.jpg"
      description={[
        "Our professional packing services are designed to take the stress out of your move. We understand that proper packing is the foundation of a successful relocation, which is why we employ trained packers who use industry-leading techniques and high-quality materials.",
        "From fragile items to bulky furniture, our team has the expertise to pack everything securely, minimizing the risk of damage during transit. We carefully label all boxes for easy unpacking and can create a detailed inventory of your belongings upon request.",
      ]}
      features={[
        "High-quality packing materials including sturdy boxes, bubble wrap, and packing paper",
        "Custom crating for valuable or delicate items requiring extra protection",
        "Specialized packing for electronics, artwork, and antiques",
        "Systematic labeling system for efficient unpacking",
      ]}
      process={[
        {
          title: "Assessment",
          description: "Our team evaluates your items and develops a customized packing plan",
        },
        {
          title: "Material Selection",
          description: "We bring appropriate high-quality packing supplies for your specific needs",
        },
        {
          title: "Systematic Packing",
          description: "Items are carefully packed, labeled, and organized by room or category",
        },
        {
          title: "Loading & Transport",
          description: "Packed items are securely loaded into our vehicles for safe transportation",
        },
        {
          title: "Unpacking (Optional)",
          description: "We can help unpack at your new location and remove all packing debris",
        },
      ]}
      
    />
  );
}