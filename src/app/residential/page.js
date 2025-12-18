import React from "react";
import Banner from "../components/Banner";

export const metadata = {
  title: "Residential Projects",
  description: "Explore our residential projects that blend aesthetics with functionality, creating dream homes tailored to your lifestyle.",
};

const homeTypes = [
  { title: "Luxury Apartments", desc: "Sophisticated urban living with premium finishes and amenities", features: ["Smart Home Integration", "Premium Finishes", "Curated Spaces"] },
  { title: "Farmhouses & Villas", desc: "Sprawling residences that seamlessly blend with nature", features: ["Landscape Integration", "Spacious Layouts", "Indoor-Outdoor Living"] },
  { title: "Penthouses", desc: "Exclusive high-rise residences with panoramic views", features: ["Sky Gardens", "Entertainment Zones", "Private Elevation"] },
  { title: "Heritage Homes", desc: "Respectful restoration of classic architecture with modern comfort", features: ["Preservation", "Contemporary Updates", "Timeless Appeal"] },
];

const designPhilosophies = [
  { philosophy: "Personalized Living", icon: "🏠", description: "Every home tells a unique story reflecting your lifestyle and aspirations." },
  { philosophy: "Luxury Meets Function", icon: "✨", description: "Beautiful aesthetics serve practical daily living needs." },
  { philosophy: "Timeless Design", icon: "⏳", description: "Interiors that transcend trends and remain beautiful for decades." },
  { philosophy: "Integrated Comfort", icon: "🌿", description: "Every detail contributes to your well-being." },
];

const testimonials = [
  { name: "The Sharma Family", type: "Luxury Apartment Project", quote: "Essentia transformed our apartment into our dream home. Every detail exceeded our expectations." },
  { name: "Raj & Priya", type: "Farmhouse Renovation", quote: "The team understood our vision perfectly and created a sanctuary that blends modern comfort with natural beauty." },
  { name: "Delhi Penthouse", type: "High-Rise Residence", quote: "The design maximizes our skyline views while creating intimate spaces for daily living. Absolutely stunning." },
];

export default function Page() {
  return (
    <>
      <Banner heading="Residential Projects" image="/images/residential.jpg" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Luxury Residential Interiors</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We transform houses into sanctuaries—spaces that reflect your personality, enhance your lifestyle, and create lasting memories for your family.
          </p>
        </div>

        {/* Home Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {homeTypes.map((home, idx) => (
            <div key={idx} className="bg-gradient-to-br from-rose-900/30 to-red-900/30 border border-rose-600/30 rounded-lg p-8 hover:border-rose-400/60 hover:shadow-lg hover:shadow-rose-500/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">{home.title}</h3>
              <p className="text-gray-300 mb-6">{home.desc}</p>
              <div className="space-y-2">
                {home.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Design Philosophy */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPhilosophies.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 text-center hover:border-rose-500/40 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-white mb-3">{item.philosophy}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-gradient-to-r from-rose-900/40 to-red-900/40 rounded-2xl p-12 border border-rose-600/30 mb-20">
          <h3 className="text-3xl font-bold text-white mb-8">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-rose-300 mb-3">Bespoke Design Process</h4>
              <p className="text-gray-300">We don't use templates. Each project begins with deep understanding of your lifestyle, preferences, and aspirations.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-rose-300 mb-3">Master Craftsmanship</h4>
              <p className="text-gray-300">Our team of architects, designers, and craftspeople bring decades of combined experience to every project.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-rose-300 mb-3">Premium Materials</h4>
              <p className="text-gray-300">We source the finest materials from around the world, ensuring durability, beauty, and sustainability.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-rose-300 mb-3">Attention to Detail</h4>
              <p className="text-gray-300">From lighting design to storage solutions, every element is thoughtfully curated and expertly executed.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
                <p className="text-gray-300 italic mb-4 text-lg">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-rose-900/40 to-red-900/40 rounded-2xl p-12 border border-rose-600/30">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Create Your Dream Home?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss your vision and explore how Essentia can create a residential space that truly reflects who you are.
          </p>
        </div>
      </div>
    </>
  );
}
