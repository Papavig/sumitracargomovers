import React, { useState } from 'react';
import Boxes from '@/assets/Images/Boxes.jpg';

interface FormData {
  name: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  moveDate: string;
}

export const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    moveDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-[80vh]">
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${Boxes})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-accent/85"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Tagline & CTA */}
          <div className="lg:w-1/2 space-y-6 text-primary-">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Shifting Karani Hai?<br />
              <span className="text-[#008EA1]">Ho Jayega!</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-primary/70 font-semibold">
              Hire Sumitra Cargo Now,<br />All India Packers and Movers
            </h2>
          </div>

          {/* Quote Form */}
          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Request a Quote</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-600">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-600">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-600">Pickup Location</label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-600">Drop Location</label>
                  <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-600">Moving Date</label>
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/80 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};