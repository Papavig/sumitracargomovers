import React, { useState } from "react";
import { User, Phone, MapPin, Calendar } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  moveDate: string;
}

interface QuoteFormProps {
  onSubmit: (formData: FormData) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    moveDate: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = "Pickup location is required";
    if (!formData.dropLocation.trim()) newErrors.dropLocation = "Drop location is required";
    if (!formData.moveDate) newErrors.moveDate = "Moving date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full">
      {/* Show title only on desktop */}
      <h3 className="text-2xl font-bold mb-4 sm:mb-6 text-primary hidden sm:block">
        Request a Quote
      </h3>

      <div className="space-y-3">
        {[
          { name: "name", type: "text", label: "Your Name", placeholder: "Who’s Moving?", icon: <User className="w-5 h-5 text-gray-400" /> },
          { name: "phone", type: "tel", label: "Mobile Number", placeholder: "So We Can Assist You", icon: <Phone className="w-5 h-5 text-gray-400" /> },
          { name: "pickupLocation", type: "text", label: "Pickup Location", placeholder: "Where Are You Moving From?", icon: <MapPin className="w-5 h-5 text-gray-400" /> },
          { name: "dropLocation", type: "text", label: "Drop Location", placeholder: "Where Are You Moving To?", icon: <MapPin className="w-5 h-5 text-gray-400" /> },
          { name: "moveDate", type: "date", label: "Moving Date", placeholder: "Preferred Moving Date", icon: <Calendar className="w-5 h-5 text-gray-400" /> }
        ].map(({ name, type, label, placeholder, icon }) => (
          <div key={name} className="relative">
            {/* Label for Desktop */}
            <label className="text-sm font-medium mb-1 text-gray-600 hidden sm:block">
              {label}
            </label>

            {/* Input Field with Icon */}
            <div className="relative mb-2">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">{icon}</span>
              <input
                type={type}
                name={name}
                value={formData[name as keyof FormData]}
                onChange={handleInputChange}
                className={`w-full p-3 pl-10 border rounded-lg text-sm ${
                  errors[name] ? "border-red-500" : ""
                }`}
                placeholder={placeholder} 
                required
              />
            </div>

            {/* Error Message */}
            {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/80 transition-colors"
        >
          Get a Custom Quote
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
