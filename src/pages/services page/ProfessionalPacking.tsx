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
        "Eco-friendly packing options available upon request",
        "Full or partial packing services based on your needs",
        "Unpacking services available at destination",
        "Debris removal after unpacking completion",
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
      faqs={[
        {
          question: "How far in advance should I schedule packing services?",
          answer: "We recommend booking at least 2-3 weeks before your move date, but we can accommodate last-minute requests based on availability.",
        },
        {
          question: "Do I need to be present during the packing process?",
          answer: "While not absolutely necessary, we recommend being present at least at the beginning to provide any specific instructions and at the end to verify everything has been packed.",
        },
        {
          question: "How do you handle fragile or valuable items?",
          answer: "Fragile items receive special attention with extra cushioning and custom boxes or crates when necessary. We recommend transporting extremely valuable items (jewelry, important documents) personally.",
        },
        {
          question: "Do you provide unpacking services as well?",
          answer: "Yes, we offer comprehensive unpacking services where we'll unpack your belongings, arrange them according to your instructions, and remove all packing materials.",
        },
      ]}
    />
  );
}