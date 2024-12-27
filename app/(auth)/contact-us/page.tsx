"use client";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <section className="bg-gray-100 py-16 px-4 font-[family-name:var(--font-rethink)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <SectionHeader
          title="Century"
          heading="Fully comprehensive School Management Platform"
          description="Ready to transform your school's digital infrasture? Fill out the form below and we will help you get started with a customized solution tailored to your institution's needs."
        />
        <h2 className="text-3xl dark:text-black lg:text-5xl font-bold font-[family-name:var(--font-rethink)] mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600 font-[family-name:var(--font-rethink)] mb-8 pb-4">
          Streamline your processes and empower your team with our products.
          Effortlessly manage employee data, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="bg-orange-800 text-white p-6 rounded-2xl">
              <h3 className="font-semibold text-xl mb-2">
                Tell us about your institution and requirements
              </h3>
              <p className="text-sm mb-4 py-4">
                Our team will reach out within 24 hours to schedule a
                personalized demo and discuss your specific needs.
              </p>
              <Button
                variant="outline"
                className="text-sm font-semibold transition duration-300"
              >
                Book Appointment
              </Button>
            </div>
            <div className="bg-blue-950 p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-2 text-xl">
                Contact to our team
              </h3>
              <p className="text-white text-sm mb-4 py-4">
                To create a more value-added solution, is essential to an
                analysis of the possibilities of improvement.
              </p>
              <Button
                variant="outline"
                className="text-sm font-semibold transition duration-300"
              >
                Send an Email
              </Button>
            </div>
          </div>

          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-rethink)]">
              Send us a message
            </h3>
            <form
              className="font-[family-name:var(--font-rethink)]"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded dark:bg-white"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300  rounded dark:bg-white"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border-gray-300  p-2 border rounded mb-4 dark:bg-white"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border-gray-300  p-2 border rounded mb-4 dark:bg-white"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full border-gray-300  p-2 border rounded mb-4 dark:bg-white"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <Button
                type="submit"
                className="bg-black text-white px-6 py-2.5 text-sm font-semibold transition duration-300 hover:bg-black-700"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
