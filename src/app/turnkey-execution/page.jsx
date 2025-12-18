import Banner from "../components/Banner";

export const metadata = {
  title: "Turnkey Execution",
  description: "Turnkey execution services — design to delivery.",
};

const stages = [
  { stage: "01", title: "Concept Development", desc: "Transform vision into detailed design concepts", items: ["Site Analysis", "Conceptual Design", "3D Renderings", "Design Approval"] },
  { stage: "02", title: "Planning & Procurement", desc: "Detailed planning and sourcing of materials", items: ["Detailed Plans", "Material Selection", "Vendor Coordination", "Budget Finalization"] },
  { stage: "03", title: "On-Site Execution", desc: "Expert installation with quality monitoring", items: ["Site Setup", "Construction", "Quality Checks", "Progress Updates"] },
  { stage: "04", title: "Final Delivery", desc: "Finishing touches and project handover", items: ["Final Touches", "Quality Audit", "Walkthrough", "Closure"] },
];

export default function TurnkeyPage() {
  return (
    <>
      <Banner heading="Turnkey Execution" image="/images/turnkey-execution-1.jpg" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">From Vision to Reality</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Complete end-to-end project execution. We handle every detail so you can focus on envisioning your perfect space. Delivery is our promise.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Execution Journey</h2>
          <div className="space-y-12">
            {stages.map((stage, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-600/30 rounded-lg p-8 hover:border-yellow-400/60 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-yellow-400">{stage.stage}</div>
                    <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{stage.desc}</p>
                  <div className="space-y-2">
                    {stage.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block h-64 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-600/20"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Our Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👤", title: "Single Point of Contact", desc: "One responsible party for entire project" },
              { icon: "⏱️", title: "Time Efficiency", desc: "Integrated workflow eliminates delays" },
              { icon: "💰", title: "Budget Control", desc: "Transparent pricing with no hidden costs" },
              { icon: "✓", title: "Quality Assurance", desc: "Rigorous quality checks at every stage" },
              { icon: "🛡️", title: "Risk Management", desc: "Professional handling of all challenges" },
              { icon: "🎯", title: "Seamless Handover", desc: "Complete project ready for immediate use" },
            ].map((adv, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-yellow-500/40 transition-colors text-center">
                <div className="text-4xl mb-3">{adv.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{adv.title}</h4>
                <p className="text-sm text-gray-400">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-2xl p-12 border border-yellow-600/30">
          <h3 className="text-3xl font-bold text-white mb-8">Scope of Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Residential Interiors", scope: "From concept to move-in ready homes" },
              { name: "Commercial Spaces", scope: "Office fitouts, retail, F&B, headquarters" },
              { name: "Landscaping", scope: "Outdoor spaces, gardens, terraces" },
              { name: "Custom Furniture", scope: "Bespoke design and manufacturing" },
              { name: "Renovation", scope: "Heritage properties and refurbishments" },
              { name: "Specialized Projects", scope: "Luxury installations and finishes" },
            ].map((service, idx) => (
              <div key={idx} className="border-l-4 border-yellow-400 pl-6">
                <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                <p className="text-gray-300">{service.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
