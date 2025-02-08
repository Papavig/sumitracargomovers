import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Excellent service! The team was professional and handled our belongings with care.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Very satisfied with the moving experience. Would definitely recommend to others.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mike Johnson",
    rating: 5,
    comment: "Punctual, efficient, and friendly staff. Made our interstate move stress-free!",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
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

