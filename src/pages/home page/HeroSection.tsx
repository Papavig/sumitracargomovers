import React from "react";
import Boxes from "@/assets/Images/Boxes.jpg";
import QuoteForm from "@/components/QuoteForm";

export const HeroSection: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-[80vh]">
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

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6 text-primary-">
            <h1 className="text-4xl lg:text-6xl font-bold">
            Befikar Shifting,
              <br />
              <span className="text-[#008EA1]">Aasaan Safar!</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-primary/70 font-semibold">
              Hire Sumitra Cargo Now,
              <br />
              All India Packers and Movers
            </h2>
          </div>

          {/* Quote Form */}
          <div className="lg:w-1/2 w-full">
            <QuoteForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};
