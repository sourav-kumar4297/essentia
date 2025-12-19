"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareerSection({
  title = "Join Our Team",
  description = "We are always looking for talented designers, architects, and creatives to join our growing family. Explore open positions and build your career with Essentia.",
  link = "/career",
  buttonText = "View Careers",
}) {
  return (
    <section className="w-full py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold text-foreground">{title}</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">{description}</p>

        {/* Career Button */}
        <Link
          href={link}
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
