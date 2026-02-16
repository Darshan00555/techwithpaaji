"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

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

function FloatingField({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  textarea = false,
}) {
  const active = value.length > 0;
  const fieldClasses = `w-full rounded-xl border bg-white/75 px-4 pb-3 pt-6 text-sm text-[#0E1E1E] outline-none transition-colors duration-200 ${
    error
      ? "border-red-400 focus:border-red-500"
      : "border-[#0F3D3E]/16 focus:border-[#2A9D8F]"
  }`;

  return (
    <label htmlFor={id} className="relative block">
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={onChange}
          className={fieldClasses + " resize-none"}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={fieldClasses}
        />
      )}
      <span
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          active
            ? "top-2 text-[11px] uppercase tracking-[0.16em] text-[#2A9D8F]"
            : "top-4 text-sm text-[#0E1E1E]/48"
        }`}
      >
        {label}
      </span>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </label>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => validate(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const updateField = (key) => (event) => {
    setSubmitted(false);
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleBlur = (key) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (!hasErrors) {
      setSubmitted(true);
      setValues(defaultForm);
      setTouched({});
    }
  };

  return (
    <section id="contact" className="section-pad divider-line">
      <div className="container-premium grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
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
          <div className="mt-6 space-y-2 text-sm text-[#0E1E1E]/80">
            <p>Email: hello@techwithpaaji.in</p>
            <p>Phone: +91 99999 12345</p>
            <p>Domain: techwithpaaji.in</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass-card p-6 sm:p-7"
        >
          <div className="space-y-4">
            <div onBlur={handleBlur("name")}>
              <FloatingField
                id="name"
                label="Name"
                value={values.name}
                error={touched.name ? errors.name : ""}
                onChange={updateField("name")}
              />
            </div>
            <div onBlur={handleBlur("email")}>
              <FloatingField
                id="email"
                type="email"
                label="Email"
                value={values.email}
                error={touched.email ? errors.email : ""}
                onChange={updateField("email")}
              />
            </div>
            <div onBlur={handleBlur("phone")}>
              <FloatingField
                id="phone"
                type="tel"
                label="Phone"
                value={values.phone}
                error={touched.phone ? errors.phone : ""}
                onChange={updateField("phone")}
              />
            </div>
            <div onBlur={handleBlur("message")}>
              <FloatingField
                id="message"
                label="Message"
                textarea
                value={values.message}
                error={touched.message ? errors.message : ""}
                onChange={updateField("message")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="premium-button mt-5 w-full bg-[#F4A261] text-[#0F3D3E] shadow-[0_10px_20px_rgba(244,162,97,0.3)] hover:bg-[#f6b178]"
          >
            Submit Consultation Request
          </button>

          {submitted && (
            <p className="mt-4 rounded-lg border border-[#2A9D8F]/30 bg-[#2A9D8F]/10 px-3 py-2 text-sm text-[#0F3D3E]">
              Thank you. Your message has been received. We will contact you
              shortly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
