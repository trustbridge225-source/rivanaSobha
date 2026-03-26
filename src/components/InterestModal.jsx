import { X, Check, Loader2 } from "lucide-react";
import { useState } from "react";

export default function InterestModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    const text = `Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Message: ${formData.message}
        I am intersted in Sobha Rivana sec-01 greater noida`;

    const whatsappUrl = `https://wa.me/917303975006?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");

    setStatus("success");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative bg-white w-full max-w-xl rounded-3xl p-10">

        <button
          onClick={onClose}
          className="absolute right-2 top-1 border border-gray-300 rounded-full p-2 hover:bg-gray-300"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="text-center py-12">
            <Check className="mx-auto mb-4 text-green-600" size={40} />
            <h3 className="text-2xl font-bold">Request Sent</h3>
            <p className="text-gray-500 mt-2">
              Our team will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Message"
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}