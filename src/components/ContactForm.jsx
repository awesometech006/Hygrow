// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const ContactForm = () => {
  const { themeClasses } = useTheme();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      alert(`Thank you for your message, ${formData.name}! We will be in touch.`);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  const inputColorClasses = themeClasses.bgDefault.includes('white')
    ? 'bg-white text-gray-800'
    : 'bg-gray-700 border-gray-600 text-gray-200';

  return (
    <section id="contact" className={`py-12 section-padding text-center ${themeClasses.bgSecondary}`}>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${themeClasses.textDefault}`}>
        Get In Touch
      </h2>
      <p className={`text-base mb-8 ${themeClasses.textMuted}`}>
        Have questions about our systems, advertising opportunities, or partnership? Contact the Hygrow team.
      </p>

      <form className={`max-w-xl mx-auto p-6 md:p-8 rounded-xl shadow-2xl text-left ${themeClasses.card}`} onSubmit={handleSubmit} noValidate>

        <label htmlFor="name" className={`block font-semibold mb-1 ${themeClasses.textDefault} text-sm`}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full p-2 md:p-3 mb-1 rounded-lg border focus:ring-hygrow-blue focus:border-hygrow-blue ${inputColorClasses}`}
        />
        {errors.name && <p id="name-error" className="text-red-500 text-xs mb-4">{errors.name}</p>}

        <label htmlFor="email" className={`block font-semibold mb-1 ${themeClasses.textDefault} text-sm`}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full p-2 md:p-3 mb-1 rounded-lg border focus:ring-hygrow-blue focus:border-hygrow-blue ${inputColorClasses}`}
        />
        {errors.email && <p id="email-error" className="text-red-500 text-xs mb-4">{errors.email}</p>}

        <label htmlFor="message" className={`block font-semibold mb-1 ${themeClasses.textDefault} text-sm`}>Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full p-2 md:p-3 mb-1 rounded-lg border focus:ring-hygrow-blue focus:border-hygrow-blue ${inputColorClasses}`}
        ></textarea>
        {errors.message && <p id="message-error" className="text-red-500 text-xs mb-6">{errors.message}</p>}

        <button type="submit" className={`w-full py-2 md:py-3 rounded-lg font-bold text-base md:text-lg transition duration-300 ${themeClasses.btnPrimary} ${themeClasses.textDefault}`}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;