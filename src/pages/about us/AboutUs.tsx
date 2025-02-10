import HeroSection from "./Herosection";
import CompanyOverview from "./CompanyOverview";
import StatsCounter from "@/components/StatsCounter";
import WhatSetsUsApart from "./WhatSetsUsApart";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import PackersMovers from "../PackersMovers/PackersMovers";
import Footer from "@/components/Footer";
import ContactSection from "../contact page/ContactSection";
import InfiniteScrollingServices from "@/components/InfiniteScrollingServices";
import WhatsAppContact from "@/components/Chatbot";

export default function AboutUs() {
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
    "Packers And Movers In Panve Mumbai",
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
    <main className="min-h-screen">
      <Navbar />
      <WhatsAppContact />
      <HeroSection />
      <CompanyOverview />
      <StatsCounter />
      <WhatSetsUsApart />
      <InfiniteScrollingServices />
      <Testimonials />
      <ContactSection />
      <div className="flex flex-col md:flex-row gap-4 mt-8 mb-12">
        <PackersMovers title="In Mumbai:" locations={inMumbaiLocations} />
        <PackersMovers title="From Mumbai:" locations={fromMumbaiLocations} />
      </div>
      <Footer />
    </main>
  );
}
