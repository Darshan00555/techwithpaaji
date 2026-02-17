"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const defaultForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Please share at least 20 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const errors = useMemo(() => validate(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const updateField = (key) => (event) => {
    setSubmitted(false);
    setErrorMessage("");
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (hasErrors) return;

    setLoading(true);
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_d44ivwg",
        "template_kmvx69m",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          time: new Date().toLocaleString(),
        },
        "OtLeN4-GXrnnCCoNU"
      );

      setSubmitted(true);
      setValues(defaultForm);
      setTouched({});
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-pad divider-line">
      <div className="container-premium grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0F3D3E] sm:text-5xl">
            Start your private relationship consultation.
          </h2>
          <p className="mt-5 max-w-xl text-sm text-[#0E1E1E]/80 sm:text-base">
            Share your context and priorities. Our team reviews every inquiry
            personally and replies with next-step recommendations.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="glass-card p-6 sm:p-7"
        >
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={updateField("name")}
              className="w-full rounded-xl border border-[#0F3D3E]/10 bg-white/50 p-4 text-[#0F3D3E] placeholder:text-[#0F3D3E]/50 focus:border-[#2A9D8F] focus:outline-none focus:ring-1 focus:ring-[#2A9D8F] transition-all"
            />
            {touched.name && errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={updateField("email")}
              className="w-full rounded-xl border border-[#0F3D3E]/10 bg-white/50 p-4 text-[#0F3D3E] placeholder:text-[#0F3D3E]/50 focus:border-[#2A9D8F] focus:outline-none focus:ring-1 focus:ring-[#2A9D8F] transition-all"
            />
            {touched.email && errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}

            <input
              type="tel"
              placeholder="Phone"
              value={values.phone}
              onChange={updateField("phone")}
              className="w-full rounded-xl border border-[#0F3D3E]/10 bg-white/50 p-4 text-[#0F3D3E] placeholder:text-[#0F3D3E]/50 focus:border-[#2A9D8F] focus:outline-none focus:ring-1 focus:ring-[#2A9D8F] transition-all"
            />
            {touched.phone && errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}

            <textarea
              placeholder="Message"
              rows={5}
              value={values.message}
              onChange={updateField("message")}
              className="w-full rounded-xl border border-[#0F3D3E]/10 bg-white/50 p-4 text-[#0F3D3E] placeholder:text-[#0F3D3E]/50 focus:border-[#2A9D8F] focus:outline-none focus:ring-1 focus:ring-[#2A9D8F] transition-all resize-none"
            />
            {touched.message && errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}

          </div>

          <button
            type="submit"
            disabled={loading}
            className="premium-button mt-6 w-full bg-[#F4A261] py-3 text-[#0F3D3E] shadow-[0_10px_20px_rgba(244,162,97,0.25)] hover:bg-[#f6b178] hover:shadow-[0_14px_28px_rgba(244,162,97,0.35)]"
          >
            {loading ? "Sending..." : "Submit Consultation Request"}
          </button>

          {submitted && (
            <p className="mt-4 rounded-lg bg-green-100 p-2 text-sm text-green-700">
              Thank you. Your message has been sent successfully.
            </p>
          )}

          {errorMessage && (
            <p className="mt-4 rounded-lg bg-red-100 p-2 text-sm text-red-700">
              {errorMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}