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
      <motion.div
        whileHover={{ 
          y: -10, 
          boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <Card className="h-full transition-all duration-300">
          <CardHeader>
            <motion.div 
              className="mb-4 text-primary"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: delay + 0.2
              }}
            >
              {icon}
            </motion.div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3 }}
              >
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Professional equipment and materials</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.4 }}
              >
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Trained and experienced staff</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.5 }}
              >
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Fully insured service</span>
              </motion.li>
            </ul>
          </CardContent>
          <CardFooter>
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="sm" className="group" asChild>
                <a href={`/service/${slug}`}>
                  Learn More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 1.5,
                      ease: "easeInOut",
                      repeatDelay: 2
                    }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}