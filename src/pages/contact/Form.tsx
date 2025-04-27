import type React from "react";

import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Send, Building } from "lucide-react";

const ContactPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lName: "",
    email: "",
    message: "",
    number: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lName: "",
    email: "",
    message: "",
    number: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: "",
      lName: "",
      email: "",
      message: "",
      number: "",
    };

    if (!formData.name) newErrors.name = "First Name is required";
    if (!formData.lName) newErrors.lName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.number) newErrors.number = "Contact Number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      setShowAlert(true);
      console.log("Form Submitted", formData);
      setFormData({ name: "", lName: "", email: "", message: "", number: "" });
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-80">
          <img
            src="/../contact.jpg"
            alt="Contact pattern"
            className="w-full h-full object-cover opacity-[0.3]"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team for any
            questions, feedback, or support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
            <div className="p-6 border-b">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-[#0e746b]" />
                <h2 className="text-2xl font-bold">Our Office</h2>
              </div>
              <p className="text-gray-600">
                Visit our headquarters or reach out to us through the contact
                form.
              </p>
            </div>
            <div className="w-full h-[400px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2844521450574!2d85.31429671506268!3d27.712861982790663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1b3c89acd%3A0x6c2c78fe71177378!2sKathmandu%20Marriott%20Hotel!5e0!3m2!1sen!2s!4v1645523456789!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center gap-3 mb-4">
                <Send className="h-6 w-6 text-[#0e746b]" />
                <h2 className="text-2xl font-bold">Send a Message</h2>
              </div>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>
            <div className="p-6 relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Input
                      type="text"
                      placeholder="First Name*"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Last Name*"
                      value={formData.lName}
                      onChange={(e) =>
                        setFormData({ ...formData, lName: e.target.value })
                      }
                      className={errors.lName ? "border-red-500" : ""}
                    />
                    {errors.lName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number*"
                      value={formData.number}
                      onChange={(e) =>
                        setFormData({ ...formData, number: e.target.value })
                      }
                      className={errors.number ? "border-red-500" : ""}
                    />
                    {errors.number && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.number}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message*"
                    className={`min-h-[150px] resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full border border-[#0e746b] bg-[#0e746b] text-gray-100 hover:bg-white hover:text-[#0e746b] duration-300"
                >
                  Send Message
                  <Send className="h-4 w-4 mr-2" />
                </Button>

                {showAlert && (
                  <Alert className="mt-4 bg-green-100 border border-green-200">
                    <Terminal className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Success!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Your message has been sent successfully. We'll get back to
                      you soon.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions ?
            </h2>
          </div>
          <p className="text-gray-600">
            Find quick answers to common questions about our services and
            support.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                What are your business hours?
              </h3>
              <p className="text-gray-600">
                Our customer support team is available Monday through Friday
                from 9AM to 5PM, and Saturday from 10AM to 2PM. We're closed on
                Sundays and major holidays.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 business hours. For
                urgent matters, please call our customer support line for
                immediate assistance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you offer virtual meetings?
              </h3>
              <p className="text-gray-600">
                Yes, we offer virtual meetings via Zoom or Microsoft Teams. You
                can schedule a virtual consultation through our contact form or
                by calling our office.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
