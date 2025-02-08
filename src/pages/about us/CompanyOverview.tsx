export default function CompanyOverview() {
  return (
    <section className="relative py-20 overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/moving-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 container mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About the Company</h2>
              <p className="text-lg">
                Sumitra Cargo Movers is a leading packers and movers company, dedicated to providing exceptional
                relocation services. With our expertise and commitment to quality, we ensure a smooth and stress-free
                moving experience for our clients.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="About Sumitra Cargo Movers"
                className="object-cover rounded-lg bg-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg">
                Founded in 2000, Sumitra Cargo Movers has grown from a small local mover to a nationwide relocation
                expert. Our journey is marked by continuous improvement, expansion of services, and a growing list of
                satisfied customers.
              </p>
            </div>
            <div className="relative h-64 md:h-full md:order-1">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Sumitra Cargo Movers History"
                className="object-cover rounded-lg bg-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Commitments</h2>
              <p className="text-lg">
                At Sumitra Cargo Movers, we are committed to excellence, integrity, and customer satisfaction. We
                prioritize the safety of your belongings, timely delivery, and transparent communication throughout the
                moving process.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Sumitra Cargo Movers Commitments"
                className="object-cover rounded-lg bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

