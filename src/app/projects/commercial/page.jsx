import Banner from "../../components/Banner";

export const metadata = {
  title: "Commercial Projects",
  description: "Commercial design and interior projects by Essentia.",
};

const projects = [
  { name: "Corporate Offices", scope: "High-rise workspace design with collaborative zones", elements: ["Conference Rooms", "Open Plans", "Executive Suites", "Breakout Areas"] },
  { name: "Hospitality", scope: "Hotels, resorts, and restaurant design", elements: ["Lobby Design", "Guest Suites", "Restaurants", "Bar & Lounge"] },
  { name: "Retail", scope: "Engaging storefronts and customer spaces", elements: ["Display Solutions", "Customer Flow", "Brand Expression", "POS Areas"] },
  { name: "Healthcare", scope: "Healing environments with medical functionality", elements: ["Reception", "Patient Rooms", "Treatment Zones", "Staff Areas"] },
];

export default function CommercialProjects() {
  return (
    <>
      <Banner heading="Commercial Projects" image="/images/commercial-projects-1.jpg" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Elevating Commercial Spaces</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our commercial projects combine strategic design thinking with comprehensive project execution, creating environments that enhance brand value, improve operational efficiency, and provide exceptional user experiences.
          </p>
        </div>

        {/* Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-600/30 rounded-xl p-8 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-6">{project.scope}</p>
              <div className="space-y-2">
                {project.elements.map((el, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-sm text-gray-400">{el}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understand your vision and objectives" },
              { step: "02", title: "Strategic Design", desc: "Develop tailored design concepts" },
              { step: "03", title: "Execution", desc: "Professional project delivery" },
              { step: "04", title: "Optimization", desc: "Final refinements and satisfaction" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg p-6 border border-cyan-600/30 text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-3">{item.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl p-12 border border-blue-600/30">
          <h3 className="text-3xl font-bold text-white mb-8">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Space Planning", "Brand Integration", "Sustainable Design", "ADA Compliance", "Project Management", "Budget Optimization", "Timeline Adherence", "Quality Assurance", "Support"].map((exp, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-200">{exp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
