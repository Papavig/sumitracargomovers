import { Mail, Phone } from "lucide-react"

export default function KeepConnected() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Keep Connected</h2>
      <h3 className="text-3xl font-bold text-primary">Let's Get In Touch With Us</h3>
      <p className="text-muted-foreground">
      Thank you for considering Sumitra Cargo Movers. We value your interest and look forward to assisting you with your logistics needs. Feel free to reach out to us through the following contact options:
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="text-primary" />
          <span>Support@sumitracargomovers.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-primary" />
          <span>+91 7039001002</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-primary" />
          <span>+91 7039001003</span>
        </div>
      </div>
    </div>
  )
}

