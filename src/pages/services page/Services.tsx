import { useRef } from "react"
import { motion } from "framer-motion"
import { Box, Truck, Home, Package, Warehouse, Globe} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppContact from "@/components/Chatbot"
import Testimonials from "@/components/Testimonials"
import ServicesSection from "@/components/ServicesSection"
import ServiceCard from "./ServiceCard"
import PackersMovers from "../PackersMovers/PackersMovers"
import ContactSection from "../contact page/ContactSection"
import StatsCounter from "@/components/StatsCounter"

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // WhatsApp integration function
  const openWhatsApp = () => {
    const phoneNumber = "917039001002"; // Your WhatsApp business number
    const message = "Hello, I'm interested in getting a quote for your moving services. Can you provide more information?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  // Locations content for the PackersMovers component
  const inMumbaiLocations = [
    "Packers And Movers In Ghansoli- Mumbai",
    "Packers And Movers In Seawoods- Mumbai",
    "Packers And Movers In Juinagar- Mumbai",
    "Packers And Movers In Andheri- Mumbai",
    "Packers And Movers In Borivali- Mumbai",
    "Packers And Movers In Dombivali- Mumbai",
    "Packers And Movers In Khar- Mumbai",
    "Packers And Movers In Bandra- Mumbai",
    "Packers And Movers In Airoli- Mumbai",
    "Packers And Movers In Belapur- Mumbai",
    "Packers And Movers In Kharghar- Mumbai",
    "Packers And Movers In Panve- Mumbai",
    "Packers And Movers In Ulwa- Mumbai",
    "Packers And Movers In Kamothe- Mumbai",
    "Packers And Movers In Nerol- Mumbai",
    "Packers And Movers In Taloja- Mumbai",
    "Packers And Movers In Vashi- Mumbai",
  ];

  const fromMumbaiLocations = [
    "Packers And Movers from Mumbai to Bangalore",
    "Packers And Movers from Mumbai to Pune",
    "Packers And Movers from Mumbai to Chennai",
    "Packers And Movers from Mumbai to Gurgaon",
    "Packers And Movers from Mumbai to Hyderabad",
    "Packers And Movers from Mumbai to Delhi",
    "Packers And Movers from Mumbai to Faridabad",
    "Packers And Movers from Mumbai to Noida",
    "Packers And Movers from Mumbai to Ghaziabad",
    "Packers And Movers from Mumbai to Kolkata",
    "Packers And Movers from Mumbai to Surat",
    "Packers And Movers from Mumbai to Indore",
    "Packers And Movers from Mumbai to Jaipur",
    "Packers And Movers from Mumbai to Coimbatore",
    "Packers And Movers from Mumbai to Ahmedabad",
    "Packers And Movers from Mumbai to Delhi NCR",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppContact />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Professional Moving Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive packing and moving solutions tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToServices} 
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={openWhatsApp}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section 
        ref={servicesRef} 
        className="py-20 bg-background" 
        id="services"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Comprehensive Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              From packing your belongings to setting up your new space, we handle every aspect of your move with care
              and precision.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
            <ServiceCard
              icon={<Box className="h-10 w-10" />}
              title="Professional Packing"
              description="Our expert packers use high-quality materials to ensure your belongings are protected during transit."
              delay={0.1}
            />
            <ServiceCard
              icon={<Truck className="h-10 w-10" />}
              title="Local Moving"
              description="Efficient and reliable moving services within your city, with careful handling of all your possessions."
              delay={0.2}
            />
            <ServiceCard
              icon={<Home className="h-10 w-10" />}
              title="Residential Relocation"
              description="Complete home moving solutions tailored to your family's specific requirements and timeline."
              delay={0.3}
            />
            <ServiceCard
              icon={<Package className="h-10 w-10" />}
              title="Commercial Moving"
              description="Minimize downtime with our streamlined office and business relocation services."
              delay={0.4}
            />
            <ServiceCard
              icon={<Warehouse className="h-10 w-10" />}
              title="Storage Solutions"
              description="Secure, climate-controlled storage facilities for short-term and long-term needs."
              delay={0.5}
            />
            <ServiceCard
              icon={<Globe className="h-10 w-10" />}
              title="Long Distance Moving"
              description="Comprehensive interstate and long-distance moving services with real-time shipment tracking."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Moving Services Carousel */}
      <div className="py-10 bg-background">
        <ServicesSection />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Stress-Free Move?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today for a free, no-obligation quote and let our experts handle your move with care and
              precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={openWhatsApp}
              >
                Get a Free Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />

      {/* Locations Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 mb-12">
        <PackersMovers title="In Mumbai:" locations={inMumbaiLocations} />
        <PackersMovers title="From Mumbai:" locations={fromMumbaiLocations} />
      </div>

      <Footer />
    </div>
  );
}