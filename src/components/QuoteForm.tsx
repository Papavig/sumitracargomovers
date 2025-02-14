import React, { useState } from "react";
import { User, Phone, MapPin, Calendar } from "lucide-react";
import { Toaster, toast } from "sonner";
import { submitForm } from "@/services/api";

interface FormData {
  name: string;
  mobileNumber: string;
  pickupLocation: string;
  dropLocation: string;
  movingDate: string;
}

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobileNumber: "",
    pickupLocation: "",
    dropLocation: "",
    movingDate: "",
  });

  const validateForm = () => {
    let isValid = true;

    if (!formData.name.trim()) {
      toast.error("Name is required");
      isValid = false;
    }
    if (!formData.mobileNumber.trim()) {
      toast.error("Phone number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      toast.error("Enter a valid 10-digit phone number");
      isValid = false;
    }

    if (!formData.pickupLocation.trim()) {
      toast.error("Pickup location is required");
      isValid = false;
    }
    if (!formData.dropLocation.trim()) {
      toast.error("Drop location is required");
      isValid = false;
    }
    if (!formData.movingDate) {
      toast.error("Moving date is required");
      isValid = false;
    }

    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await submitForm(formData);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        mobileNumber: "",
        pickupLocation: "",
        dropLocation: "",
        movingDate: "",
      });
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error("Submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full"
    >
      <Toaster richColors />
      {/* Show title only on desktop */}
      <h3 className="text-2xl font-bold mb-4 sm:mb-6 text-primary hidden sm:block">
        Request a Quote
      </h3>

      <div className="space-y-3">
        {[
          {
            name: "name",
            type: "text",
            label: "Your Name",
            placeholder: "Who’s Moving?",
            icon: <User className="w-5 h-5 text-gray-400" />,
          },
          {
            name: "mobileNumber",
            type: "tel",
            label: "Mobile Number",
            placeholder: "So We Can Assist You",
            icon: <Phone className="w-5 h-5 text-gray-400" />,
          },
          {
            name: "pickupLocation",
            type: "text",
            label: "Pickup Location",
            placeholder: "Where Are You Moving From?",
            icon: <MapPin className="w-5 h-5 text-gray-400" />,
          },
          {
            name: "dropLocation",
            type: "text",
            label: "Drop Location",
            placeholder: "Where Are You Moving To?",
            icon: <MapPin className="w-5 h-5 text-gray-400" />,
          },
          {
            name: "movingDate",
            type: "date",
            label: "Moving Date",
            placeholder: "Preferred Moving Date",
            icon: <Calendar className="w-5 h-5 text-gray-400" />,
          },
        ].map(({ name, type, label, placeholder, icon }) => (
          <div key={name} className="relative">
            {/* Label for Desktop */}
            <label className="text-sm font-medium mb-1 text-gray-600 hidden sm:block">
              {label}
            </label>

            {/* Input Field with Icon */}
            <div className="relative mb-2">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                {icon}
              </span>
              <input
                type={type}
                name={name}
                value={formData[name as keyof FormData]}
                onChange={handleInputChange}
                className="w-full p-3 pl-10 border rounded-lg text-sm"
                placeholder={placeholder}
                required
              />
            </div>
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
