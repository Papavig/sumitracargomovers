import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Atharv Salunkhe",
    rating: 5,
    comment: "Fantastic service! I relocated from Worli to Juhu, and the entire process was stress-free. The movers were friendly, professional, and efficient. All my items were packed securely, and there was no damage during the move. Highly recommended for anyone moving within Mumbai!",
  },
  {
    name: "Anuj Jagtap",
    rating: 4,
    comment: "Recently moved from Mumbai to Pune with this packers and movers company. Excellent service, timely delivery, and very professional staff.",
  },
  {
    name: "navnath aher",
    rating: 5,
    comment: "I recently shifted from Goa to panvel, and the service was top-notch! The movers were quick, careful, and ensured that my fragile items were handled with care.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background/80 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                {/* <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                /> */}
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

