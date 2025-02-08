import { Truck, Clock, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Nationwide Coverage",
    description:
      "We offer moving services across the entire country, ensuring seamless relocations no matter the distance.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Our efficient processes and experienced team ensure your belongings arrive on time, every time.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "We use advanced packing techniques and materials to keep your items safe throughout the move.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 customer support to address your concerns and provide updates on your move.",
  },
]

export default function WhatSetsUsApart() {
  return (
    <section className="py-20 bg-background/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-md">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

