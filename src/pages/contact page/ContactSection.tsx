import KeepConnected from "./KeepConnected"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <KeepConnected />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

