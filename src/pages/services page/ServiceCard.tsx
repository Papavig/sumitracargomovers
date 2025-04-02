import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  // Create a slug from the title - convert to lowercase and replace spaces with hyphens
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="mb-4 text-primary">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 text-primary">•</span>
              <span>Professional equipment and materials</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 text-primary">•</span>
              <span>Trained and experienced staff</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 text-primary">•</span>
              <span>Fully insured service</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" className="group" asChild>
            <a href={`/service/${slug}`}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}