import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface WhatsAppQuoteButtonProps {
  children?: ReactNode;
  service?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export default function WhatsAppQuoteButton({
  children = "Get a Quote",
  service,
  className,
  size = "default",
  variant = "default",
}: WhatsAppQuoteButtonProps) {
  const openWhatsApp = () => {
    const phoneNumber = "917039001002"; // Your WhatsApp business number
    let message = "Hello, I'm interested in getting a quote for your moving services.";
    
    if (service) {
      message = `Hello, I'm interested in getting a quote for your ${service} service.`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <Button
      className={className}
      size={size}
      variant={variant}
      onClick={openWhatsApp}
    >
      {children}
    </Button>
  );
}