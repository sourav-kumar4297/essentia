"use client";
import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactSection({
  details = {},
  onSubmit, 
}) {
  return (
    <section className="w-full py-20 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        <ContactDetails {...details} />
        <ContactForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}