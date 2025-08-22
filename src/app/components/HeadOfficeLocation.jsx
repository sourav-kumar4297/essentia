"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function HeadOfficeLocation({
  title = "Head Office",
  address = "Building 6, Hero Honda Chowk, Block B, Sector 34, Gurugram, Haryana 122001",
  email = "info@essentiaenvironments.com",
  phone = "+91 9810088877",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357562.25917590567!2d76.61831979049889!3d28.524316114191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19376d00001b%3A0x481f7bccb176ef9d!2sessentia!5e1!3m2!1sen!2sin!4v1755069733481!5m2!1sen!2sin",
}) {
  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Contact details */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/15">
        <Mail className="h-6 w-6 text-black/80 dark:text-white" />
      </div>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/15">
        <Phone className="h-6 w-6 text-black/80 dark:text-white" />
      </div>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/15">
        <MapPin className="h-6 w-6 text-black/80 dark:text-white" />
      </div>
      </div>

          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-lg text-foreground/80">{address}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg text-foreground/70">
             <a
          href={`mailto:${email}`}
          className="hover:text-black flex items-center gap-1"
        >
          <span className="text-foreground/70 w-4 h-4 inline-flex items-center justify-center">
            <Mail />
          </span>
          {email}
        </a>
           <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className="hover:text-black flex items-center gap-1"
        >
          <span className="text-foreground/70 w-4 h-4 inline-flex items-center justify-center">
            <Phone />
          </span>
          {phone}
        </a>
          </div>
        </div>

        {/* Right Section: Google Map */}
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-foreground/10">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Head Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
