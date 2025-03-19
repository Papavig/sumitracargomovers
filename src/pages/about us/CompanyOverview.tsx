
export default function CompanyOverview() {
  return (
    <section className="relative py-16 overflow-hidden">
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
                src="/assets/ShowcaseImages/Main.jpg"
                alt="About Sumitra Cargo Movers"
                className="w-[600px] h-[400px] object-cover rounded-lg"
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
                src="/assets/ShowcaseImages/packers-movers.jpg"
                alt="About Sumitra Cargo Movers"
                className="w-[600px] h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
