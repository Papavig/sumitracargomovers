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
    />
  );
}