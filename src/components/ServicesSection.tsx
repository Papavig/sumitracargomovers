import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";

const services = [
  { 
    icon: "🏍️", 
    title: "Bike Transportation", 
    path: "/service/local-moving" 
  },
  { 
    icon: "🏢", 
    title: "Office Relocation", 
    path: "/service/commercial-moving" 
  },
  { 
    icon: "🏠", 
    title: "Home Shifting", 
    path: "/service/residential-relocation" 
  },
  { 
    icon: "📦", 
    title: "Packing Services", 
    path: "/service/professional-packing" 
  },
  { 
    icon: "🚛", 
    title: "Intercity Moving", 
    path: "/service/long-distance-moving" 
  },
];

const ServiceCard: React.FC<{ 
  icon: string; 
  title: string; 
  isMobile: boolean;
  onClick: () => void;
}> = ({ icon, title, isMobile, onClick }) => (
  <div 
    className="flex flex-col items-center justify-center bg-white p-3 sm:p-4 rounded-xl shadow-md w-full h-full hover:bg-gray-50 cursor-pointer transition-colors"
    onClick={onClick}
  >
    <span className={`text-${isMobile ? '2xl' : '3xl'} sm:text-4xl bg-gray-100 rounded-full p-${isMobile ? '2' : '3'}`}>{icon}</span>
    <h3 className={`text-${isMobile ? 'xs' : 'sm'} sm:text-base font-semibold text-center mt-${isMobile ? '2' : '3'} leading-tight`}>
      {title}
    </h3>
  </div>
);

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust cylinder dimensions
  const cylinderWidth: number = isMobile ? 900 : 1800;
  const faceCount: number = services.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  // Framer Motion controls
  const dragFactor: number = 0.05;
  const rotation = useMotionValue<number>(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartTime, setDragStartTime] = useState(0);

  // Create a 3D transform based on the rotation motion value
  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: isMobile ? 15 : 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    const currentAngle = rotation.get();
    startInfiniteSpin(currentAngle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const handleUpdate = (latest: { rotateY?: number | null }) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    setDragStartTime(Date.now());
    controls.stop();
  };

  // Fixed event types to match what Framer Motion expects
  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const dragDuration = Date.now() - dragStartTime;
    
    // Only consider it a drag if it lasts more than 100ms or has significant velocity
    if (dragDuration > 100 || Math.abs(info.velocity.x) > 10) {
      const finalAngle = rotation.get() + info.velocity.x * dragFactor;
      rotation.set(finalAngle);
      startInfiniteSpin(finalAngle);
    }
    
    // Reset drag state after a short delay to allow click events to work
    setTimeout(() => {
      setIsDragging(false);
    }, 10);
  };

  const handleMouseEnter = (): void => {
    controls.stop();
  };

  const handleMouseLeave = (): void => {
    const currentAngle = rotation.get();
    startInfiniteSpin(currentAngle);
  };

  const handleCardClick = (path: string) => {
    if (!isDragging) {
      // Navigate to the new page
      navigate(path);
      
      // Scroll to top of the new page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Rectangular card dimensions
  const cardWidth = isMobile ? 160 : 220;  // Wider width for rectangular cards
  const cardHeight = isMobile ? 110 : 150; // Less height for rectangular cards
  
  // Adjust container height
  const containerHeight = isMobile ? 250 : 380;

  return (
    <section className="py-8 sm:py-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-center font-bold mb-4 sm:mb-6">Services We Provide</h2>

        <div className="relative w-full overflow-hidden" style={{ height: containerHeight }}>
          <div className="flex h-full items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
            <motion.div
              drag="x"
              dragElastic={0}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animate={controls}
              onUpdate={handleUpdate}
              style={{
                transform: transform,
                rotateY: rotation,
                width: cylinderWidth,
                transformStyle: "preserve-3d",
              }}
              className="flex cursor-grab items-center justify-center [transform-style:preserve-3d]"
            >
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
                  style={{
                    width: `${faceWidth}px`,
                    transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                  }}
                >
                  <div 
                    className="transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{ 
                      width: `${cardWidth}px`, 
                      height: `${cardHeight}px` 
                    }}
                  >
                    <ServiceCard 
                      icon={service.icon} 
                      title={service.title} 
                      isMobile={isMobile} 
                      onClick={() => handleCardClick(service.path)}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;