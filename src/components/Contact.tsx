import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import CalendlyModal from './CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Contact = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Home Page Contact Form'
      };

      console.log('Submitting contact form data:', {
        name: submissionData.name,
        email: submissionData.email,
        company: submissionData.company,
        service: submissionData.service
      });

      const response = await fetch('/.netlify/functions/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      let result;
      try {
        const responseText = await response.text();
        console.log('Raw response:', responseText);
        
        if (!responseText) {
          throw new Error('Empty response from server');
        }
        
        result = JSON.parse(responseText);
        console.log('Parsed response:', result);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Invalid response from server. Please try again.');
      }

      if (response.ok && result.success) {
        console.log('✅ Contact form submitted successfully');
        setSubmitStatus({
          type: 'success',
          message: result.warnings && result.warnings.length > 0 
            ? 'Your message has been received! We will get back to you within 24 hours. (Note: There was a minor issue with our data storage, but your message was received.)'
            : 'Your message has been sent successfully! We will get back to you within 24 hours.'
        });
        
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        console.error('❌ Contact form submission failed:', result);
        setSubmitStatus({
          type: 'error',
          message: result.message || result.error || 'Failed to send message. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: import.meta.env.VITE_CONTACT_PHONE || '+971 56 496 0040',
      subtitle: import.meta.env.VITE_CONTACT_HOURS || 'Mon-Fri 9am-6pm GST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: import.meta.env.VITE_CONTACT_EMAIL || 'hello@bizvisor.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: import.meta.env.VITE_CONTACT_ADDRESS || '2909 Silver Tower Business Bay Dubai UAE',
      subtitle: 'United Arab Emirates'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Sunday - Thursday',
      subtitle: '9:00 AM - 6:00 PM GST'
    }
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-40">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-4">
              Let's Start Your Business Journey
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Ready to establish your business in the UAE? Get in touch with our team of experts for a free consultation and discover how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold text-heading-dark mb-6">
                Get in Touch
              </h3>
              <p className="text-grey-600 mb-8">
                We're here to help you succeed. Reach out to us through any of these channels, and we'll get back to you promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-grey-700 mb-1">
                        {item.details}
                      </p>
                      <p className="text-sm text-grey-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free Consultation CTA */}
              <div className="mt-8 bg-primary-navy rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-2">Free Initial Consultation</h4>
                <p className="text-sm opacity-90 mb-4">
                  Schedule a 30-minute call to discuss your business setup requirements and explore how we can help.
                </p>
                <button 
                  onClick={openCalendly}
                  className="bg-white text-primary-navy px-4 py-2 rounded-lg text-sm font-medium hover:bg-grey-100 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-heading-dark mb-6">
                  Send us a Message
                </h3>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center ${
                    submitStatus.type === 'success' 
                      ? 'bg-alert-success/10 text-alert-success border border-alert-success/20' 
                      : 'bg-alert-mistake/10 text-alert-mistake border border-alert-mistake/20'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-grey-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors disabled:bg-grey-100 disabled:cursor-not-allowed"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-grey-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors disabled:bg-grey-100 disabled:cursor-not-allowed"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-grey-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors disabled:bg-grey-100 disabled:cursor-not-allowed"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-grey-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors disabled:bg-grey-100 disabled:cursor-not-allowed"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-grey-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors disabled:bg-grey-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service</option>
                      <option value="mainland-formation">Mainland Company Formation</option>
                      <option value="freezone-setup">Free Zone Setup</option>
                      <option value="pro-services">PRO Services</option>
                      <option value="offshore-formation">Offshore Formation</option>
                      <option value="accounting-services">Accounting Services</option>
                      <option value="visa-services">Visa Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-grey-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors resize-none disabled:bg-grey-100 disabled:cursor-not-allowed"
                      placeholder="Tell us about your business setup requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold flex items-center justify-center group disabled:bg-grey-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/saidtouma-bizvisor/consultation?month=2025-06"
      />
    </>
  );
};

export default Contact;