import React from "react";
import Boxes from "@/assets/Images/Boxes.jpg";
import QuoteForm from "@/components/QuoteForm";

export const HeroSection: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${Boxes})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-accent/85"></div>
  </div>

  <div className="container mx-auto px-4 py-12 md:py-16 relative">
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center text-center lg:text-left">
      
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Befikar Shifting,
          <br />
          <span className="text-[#008EA1]">Aasaan Safar!</span>
        </h1>
        <h2 className="text-lg md:text-2xl text-primary/70 font-semibold">
          Hire Sumitra Cargo Now,
          <br />
          All India Packers and Movers
        </h2>
      </div>

      {/* Quote Form */}
      <div className="w-full max-w-md mx-auto lg:w-1/2">
        <QuoteForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  </div>
</section>

  );
};
