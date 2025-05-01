"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await emailjs.send(
        "service_fze3myg",
        "template_ds48nui",
        {
          from_name: formData.name,
          "user-email": formData.email, // 👈 This matches your EmailJS template
          subject: formData.subject,
          message: formData.message,
        },
        "yGuUyQI3BjKBOcDaW"
      );
      console.log("Email successfully sent!", response.status, response.text);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-xl w-full mx-auto"
    >
      {submitted && <p className="text-green-600 font-medium">✅ Message sent successfully!</p>}
      {error && <p className="text-red-600 font-medium">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
