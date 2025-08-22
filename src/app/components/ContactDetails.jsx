import {
  Instagram,
  Locate,
  LocateFixedIcon,
  LocateIcon,
  LogIn,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactDetails({
  title = "Let's create something extraordinary together",
  blurb = "We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.",
  email = "info@essentiaenvironments.com",
  phone = "+91 9810088877",
}) {
  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-3xl md:text-4xl font-semibold"
      >
        {title}
      </motion.h2>

      <p className="max-w-prose text-base leading-relaxed text-foreground/80">
        {blurb}
      </p>

      {/* <div className="flex flex-wrap gap-x-6 gap-y-2 text-md text-foreground/70">
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className="hover:text-black flex items-center gap-1"
        >
          <span className="text-foreground/70 w-4 h-4 inline-flex items-center justify-center">
            <Phone />
          </span>
          {phone}
        </a>

        <a
          href={`mailto:${email}`}
          className="hover:text-black flex items-center gap-1"
        >
          <span className="text-foreground/70 w-4 h-4 inline-flex items-center justify-center">
            <Mail />
          </span>
          {email}
        </a>
        
      </div> */}

      {/* tiny “map” with pin */}
      <div className="relative mt-10 h-84 w-full overflow-hidden rounded-xl border border-black/10 bg-white/60 dark:border-white/10 dark:bg-white/5">
        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-90 [background-image:url('/images/contact-us.jpg')] bg-cover bg-center" />
        <div className="absolute left-1/2 top-36 -translate-x-1/2">
          <div className="mx-auto h-16 w-0.5 rounded bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,.7)]" />
          <div className="mt-1 rounded-md bg-black/70 px-2 py-0.5 text-xs text-white">
            We are here
          </div>
        </div>
      </div>
    </div>
  );
}
