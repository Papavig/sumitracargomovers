import Navbar from "@/components/Navbar";
import { FC } from "react";

const AboutUs: FC = () => {
  return (<>
  <Navbar />
    <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Packers and Movers - Sumitra Cargo Movers
      </h1>

      {/* Three Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Section
          title="About the Company"
          content="Sumitra Cargo Movers is a leading packers and movers company, dedicated to providing seamless relocation services. We ensure your belongings reach their destination safely and on time."
        />
        <Section
          title="Our Story"
          content="Founded in 2005, Sumitra Cargo Movers has grown from a small local mover to a nationwide logistics provider. We continuously improve, adopt new technology, and expand our customer base."
        />
        <Section
          title="Our Commitments"
          content="We are committed to reliability, transparency, and customer satisfaction. We treat your possessions with utmost care, ensuring a stress-free moving experience."
        />
      </div>

      {/* What Sets Us Apart Section */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Differentiator icon="🚚" title="Nationwide Network" description="Extensive coverage across India." />
          <Differentiator icon="🛡️" title="Fully Insured" description="Comprehensive insurance for peace of mind." />
          <Differentiator icon="👥" title="Expert Team" description="Skilled professionals with years of experience." />
          <Differentiator icon="🔧" title="Custom Solutions" description="Tailored moving plans for unique needs." />
          <Differentiator icon="📱" title="Real-time Tracking" description="Stay informed with live tracking." />
          <Differentiator icon="🌿" title="Eco-friendly Practices" description="Committed to reducing environmental impact." />
        </div>
      </div>
    </div>
    </>
  );
};

// Section Component
const Section: FC<{ title: string; content: string }> = ({ title, content }) => (
  <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

// Differentiator Component
const Differentiator: FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <span className="text-4xl mb-2">{icon}</span>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default AboutUs;
