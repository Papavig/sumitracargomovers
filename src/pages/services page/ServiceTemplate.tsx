import { useRef, ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppContact from "@/components/Chatbot"
import Testimonials from "@/components/Testimonials"
import PackersMovers from "../PackersMovers/PackersMovers"
import ContactSection from "../contact page/ContactSection"
import StatsCounter from "@/components/StatsCounter"
import WhatsAppQuoteButton from "@/components/WhatsAppQuoteButton"
import FAQSection from "../home page/FAQSection"

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  imageSrc: string;
  description: string[];
  features: string[];
  process: ProcessStep[];
}

export default function ServiceTemplate({
  title,
  subtitle,
  icon,
  imageSrc,
  description,
  features,
  process,
}: ServiceTemplateProps) {
  const featuresRef = useRef<HTMLDivElement>(null)

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

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
          <motion.div 
            className="inline-block p-4 bg-white/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="w-16 h-16 text-white">
              {icon}
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToFeatures} 
              className="bg-white text-primary hover:bg-white/90"
            >
              Learn More
            </Button>
            <WhatsAppQuoteButton 
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              service={title}
            >
              Get a Quote
            </WhatsAppQuoteButton>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our {title}</h2>
              {description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
              <WhatsAppQuoteButton 
                className="mt-4"
                service={title}
              >
                Request Service
              </WhatsAppQuoteButton>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">✓</div>
                  <p>{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="relative">
            {/* Timeline line - only shown on md and above */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  {/* Mobile layout - stacked vertically with number at top */}
                  <div className="md:hidden flex flex-col items-center w-full">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    <div className="text-center w-full">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Desktop layout - horizontal with alternating sides */}
                  <div className={`hidden md:flex w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full z-10 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience our professional {title.toLowerCase()} services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppQuoteButton 
              size="lg"
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              service={title}
            >
              Get a Free Quote
            </WhatsAppQuoteButton>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-8"><Testimonials /></section>

      {/* Stats Counter */}
      <StatsCounter />

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