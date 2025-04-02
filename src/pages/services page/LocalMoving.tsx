import { Truck } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

export default function LocalMoving() {
  return (
    <ServiceTemplate
      title="Local Moving Services"
      subtitle="Efficient and reliable moving services within your city"
      icon={<Truck className="w-full h-full" />}
      imageSrc="/assets/ShowcaseImages/5.jpg"
      description={[
        "Our local moving services are designed to make your in-city relocation seamless and stress-free. Whether you're moving to a new apartment across town or a larger home in a neighboring community, our experienced team handles every aspect of your local move with care and efficiency.",
        "We understand the unique challenges of local moves and have optimized our processes to ensure quick turnaround times without compromising on the safety of your belongings. Our fleet of well-maintained vehicles and professional movers are equipped to handle moves of all sizes within the local area.",
      ]}
      features={[
        "Comprehensive moving services within the same city or metropolitan area",
        "Flexible scheduling options including weekends and evenings",
        "Trained professional movers familiar with local areas and buildings",
        "Properly equipped and well-maintained moving vehicles",
        "Furniture disassembly and reassembly services",
        "Special handling for bulky items like pianos and large appliances",
        "Floor and doorway protection to prevent damage to both locations",
        "Transparent pricing with no hidden fees",
      ]}
      process={[
        {
          title: "In-Home Assessment",
          description: "We visit your home to evaluate items and determine the right crew size and truck capacity",
        },
        {
          title: "Detailed Planning",
          description: "We create a moving plan including timing, special requirements, and parking arrangements",
        },
        {
          title: "Preparation",
          description: "Our team arrives with all necessary equipment and prepares your home with protective materials",
        },
        {
          title: "Loading & Transport",
          description: "Items are carefully loaded, secured in the truck, and transported to your new location",
        },
        {
          title: "Placement & Setup",
          description: "We place furniture and boxes in their designated rooms and reassemble furniture as needed",
        },
      ]}
      faqs={[
        {
          question: "How do you charge for local moves?",
          answer: "Local moves are typically charged at an hourly rate based on the number of movers and trucks required. We provide a detailed estimate after assessing your specific moving needs.",
        },
        {
          question: "How far in advance should I book my local move?",
          answer: "We recommend booking at least 2 weeks in advance, especially for weekend moves. However, we understand that plans change and can often accommodate last-minute requests.",
        },
        {
          question: "Do you provide moving supplies for local moves?",
          answer: "Yes, we can provide all necessary moving supplies including boxes, tape, bubble wrap, and furniture blankets, either as part of your package or for an additional fee.",
        },
        {
          question: "Can you move specialty items like pianos or pool tables?",
          answer: "Yes, we have specialized equipment and training to safely move pianos, pool tables, artwork, and other specialty items. Please mention these items during your estimate.",
        },
      ]}
    />
  );
}