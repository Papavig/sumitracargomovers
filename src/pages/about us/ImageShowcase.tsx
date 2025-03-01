import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ImageShowcase.css";

interface ImageItem {
  url: string;
  alt: string;
  caption: string;
}

const images: ImageItem[] = [
  {
    url: "/assets/Showcase Images/1.jpg",
    alt: "A moving truck driving on the highway, ready for nationwide transportation",
    caption:
      "Seamless and Reliable Nationwide Moving Services for Your Peace of Mind",
  },
  {
    url: "/assets/Showcase Images/2.jpg",
    alt: "A dedicated packing team carefully wrapping and securing furniture",
    caption:
      "Expert Packing Services Ensuring Maximum Protection for Your Belongings",
  },
  {
    url: "/assets/Showcase Images/3.jpg",
    alt: "A happy customer receiving their belongings after a successful move",
    caption:
      "Customer Satisfaction Guaranteed with Our Hassle-Free Moving Experience",
  },
  {
    url: "/assets/Showcase Images/4.jpg",
    alt: "A secure and well-maintained storage facility for short and long-term storage",
    caption:
      "Safe, Spacious, and Secure Storage Solutions for Your Valuable Items",
  },
  {
    url: "/assets/Showcase Images/5.jpg",
    alt: "A professional local moving team efficiently handling a residential move",
    caption:
      "Fast, Efficient, and Stress-Free Local Moving Services for Your Convenience",
  },
  {
    url: "/assets/Showcase Images/6.jpg",
    alt: "Large shipping containers being loaded for international transport",
    caption:
      "Global Relocation Made Easy with Our Trusted International Shipping Expertise",
  },
  {
    url: "/assets/Showcase Images/7.jpg",
    alt: "A team of professionals loading boxes into a moving truck",
    caption:
      "Experienced Moving Crew Dedicated to a Smooth and Timely Moving Process",
  },
  {
    url: "/assets/Showcase Images/8.jpg",
    alt: "An organized warehouse with packed goods ready for dispatch",
    caption:
      "Well-Managed Logistics and Warehousing for a Hassle-Free Moving Experience",
  },
];

const ImageShowcase: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    document.body.style.overflow = modalIsOpen ? "hidden" : "unset";
  }, [modalIsOpen]);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="image-showcase">
      <div className="image-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="image-item"
            onClick={() => openModal(index)}
          >
            <img src={image.url || "/placeholder.svg"} alt={image.alt} />
          </motion.div>
        ))}
      </div>

      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={images[currentImageIndex].url || "/placeholder.svg"}
              alt={images[currentImageIndex].alt}
              className="modal-image"
            />
            <p className="image-caption">{images[currentImageIndex].caption}</p>
            <button className="nav-button prev" onClick={prevImage}>
              &#10094;
            </button>
            <button className="nav-button next" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageShowcase;
