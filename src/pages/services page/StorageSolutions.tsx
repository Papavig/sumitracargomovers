import { Warehouse } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

export default function StorageSolutions() {
  return (
    <ServiceTemplate
      title="Storage Solutions"
      subtitle="Secure, climate-controlled storage facilities for short-term and long-term needs"
      icon={<Warehouse className="w-full h-full" />}
      imageSrc="/assets/ShowcaseImages/4.jpg"
      description={[
        "Our storage solutions provide safe, secure, and accessible options for your belongings during transitions or when you need extra space. Whether you need short-term storage during a move or long-term solutions for seasonal items, our facilities are designed to keep your possessions in optimal condition.",
        "We offer a range of storage options including climate-controlled units for sensitive items, containerized storage for added security, and specialized storage for unique items. Our facilities are monitored 24/7 and equipped with modern security systems for your peace of mind.",
      ]}
      features={[
        "Climate-controlled facilities to protect sensitive items",
        "24/7 security monitoring and controlled access",
        "Flexible short-term and long-term storage options",
        "Clean, pest-free environment with regular maintenance",
      ]}
      process={[
        {
          title: "Storage Needs Assessment",
          description: "We help determine the right storage solution based on your items and timeframe",
        },
        {
          title: "Inventory Creation",
          description: "We create a detailed inventory of items for storage to ensure proper tracking",
        },
        {
          title: "Professional Packing",
          description: "Items are properly packed for storage to prevent damage during the storage period",
        },
        {
          title: "Transportation",
          description: "We transport your items safely to our secure storage facility",
        },
        {
          title: "Organized Storage",
          description: "Items are placed in storage with logical organization for easy retrieval when needed",
        },
        {
          title: "Monitoring & Maintenance",
          description: "Regular checks ensure your items remain in optimal condition throughout storage",
        },
      ]}
      
    />
  );
}