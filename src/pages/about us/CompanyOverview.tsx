export default function CompanyOverview() {
  return (
    <section className="relative py-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/moving-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 container mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About the Company</h2>
              <p className="text-lg">
                Welcome to Sumitra Cargo Movers - Your Trusted Partner in
                Seamless Logistics! At Sumitra Cargo Movers, we take pride in
                being a leading name in the world of logistics, providing
                unparalleled services that redefine the way you experience cargo
                moving and packing. Our journey is rooted in a commitment to
                excellence, customer satisfaction, and innovative solutions that
                make logistics not just a service but an experience.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="https://placehold.co/600x400"
                alt="About Sumitra Cargo Movers"
                className="object-cover rounded-lg bg-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg">
                Established with a vision to revolutionize the logistics
                industry, Sumitra Cargo Movers has grown into a powerhouse of
                tech-driven solutions. Our story is woven with dedication,
                reliability, and a relentless pursuit of perfection in every
                service we offer.
              </p>
            </div>
            <div className="relative h-64 md:h-full md:order-1">
              <img
                src="https://placehold.co/600x400"
                alt="Sumitra Cargo Movers History"
                className="object-cover rounded-lg bg-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Commitments</h2>
              <p className="text-lg">
                At Sumitra Cargo Movers, our commitment goes beyond moving
                goods; it's about moving experiences. We prioritize customer
                satisfaction, offering a customer-centric approach that
                personalizes our services to match your requirements.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="https://placehold.co/600x400"
                alt="Sumitra Cargo Movers Commitments"
                className="object-cover rounded-lg bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
