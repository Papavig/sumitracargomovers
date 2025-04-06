import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card,  CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
        className="h-full"
      >
        <Card className="h-full transition-all duration-300">
          <CardHeader className="pb-2 md:pb-4">
            <motion.div 
              className="mb-2 md:mb-4 text-primary"
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
            <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
            <CardDescription className="text-xs md:text-sm mt-1">{description}</CardDescription>
          </CardHeader>
          
          <CardFooter className="pt-0 pb-2 md:pb-4">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="sm" className="group h-8 md:h-10 px-2 md:px-4 text-xs md:text-sm" asChild>
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
                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
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