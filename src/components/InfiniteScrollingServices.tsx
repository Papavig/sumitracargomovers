import { motion } from "framer-motion"

const services = [
  "🚚 Bike Transportation Service",
  "📦 Storage Facility",
  "🏢 Office Relocation Service",
  "🏠 Home Shifting Service",
]

export default function InfiniteScrollingServices() {
  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
      </div>
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...services, ...services].map((service, index) => (
            <div key={index} className="inline-block mx-8 text-2xl font-semibold">
              {service}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

