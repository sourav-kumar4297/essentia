import Banner from "../components/Banner";
import React from "react";

export const metadata = {
  title: "Elevation Design",
  description: "Elevation design services by Essentia Environments",
};

const elevationFeatures = [
  {
    title: "Façade Design",
    description: "Innovative exterior designs that create visual impact and architectural identity"
  },
  {
    title: "Material Selection",
    description: "Premium materials chosen for durability, aesthetics, and sustainability"
  },
  {
    title: "Detailing Expertise",
    description: "Meticulous attention to every architectural detail and proportion"
  },
  {
    title: "Contextual Integration",
    description: "Designs that harmonize with surrounding environment and urban context"
  },
  {
    title: "Structural Excellence",
    description: "Elevations that balance beauty with structural integrity"
  },
  {
    title: "Modern Innovation",
    description: "Contemporary design solutions with timeless appeal"
  },
];

export default function ElevationPage() {
  return (
    <React.Fragment>
      <Banner heading="Elevation Design" image="/images/elevation-design-1.jpg" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Architectural Excellence Through Design</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our elevation design services focus on creating distinctive architectural exteriors that make a statement. We blend innovation with tradition, combining contemporary aesthetics with timeless principles to design façades that elevate your architectural vision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {elevationFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-white/20 transition-all hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Content */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-6">Our Design Process</h3>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              We approach each elevation project with a comprehensive design methodology. Our team analyzes the site context, building purpose, and architectural requirements to create elevations that are both functional and visually compelling.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From conceptual sketches to detailed technical drawings, we ensure every element serves a purpose. Our designs incorporate sustainable practices, optimize natural lighting, and create facades that age beautifully over time.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
