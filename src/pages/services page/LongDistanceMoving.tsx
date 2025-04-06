import { Globe } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

export default function LongDistanceMoving() {
  return (
    <ServiceTemplate
      title="Long Distance Moving"
      subtitle="Comprehensive interstate and long-distance moving services with real-time shipment tracking"
      icon={<Globe className="w-full h-full" />}
      imageSrc="/assets/ShowcaseImages/6.jpg"
      description={[
        "Our long distance moving services are designed to make cross-country and interstate relocations seamless and stress-free. We understand the unique challenges of long-distance moves and have developed specialized processes to ensure your belongings arrive safely and on time at your new destination.",
        "With our experienced team, dedicated long-haul vehicles, and advanced tracking systems, you can have peace of mind knowing your possessions are in good hands during every mile of the journey. We handle all the logistics so you can focus on settling into your new home.",
      ]}
      features={[
        "Comprehensive long-distance moving services across India",
        "Dedicated trucks for direct transport of your belongings",
        "Real-time GPS tracking of your shipment",
        "Professional packing with premium materials for extra protection",
        
      ]}
      process={[
        {
          title: "Virtual or In-Home Survey",
          description: "We assess your moving needs and provide a detailed estimate based on your inventory",
        },
        {
          title: "Customized Moving Plan",
          description: "We create a comprehensive plan including packing, loading, transport, and delivery schedules",
        },
        {
          title: "Professional Packing",
          description: "Your items are carefully packed with premium materials to withstand long-distance transport",
        },
        {
          title: "Loading & Departure",
          description: "We carefully load your belongings and properly secure them for the journey",
        },
        {
          title: "Transport & Tracking",
          description: "Your shipment is transported with care and can be tracked throughout the journey",
        },
        {
          title: "Delivery & Setup",
          description: "We unload, place items in designated rooms, and can help with basic setup at your new home",
        },
      ]}
      
    />
  );
}