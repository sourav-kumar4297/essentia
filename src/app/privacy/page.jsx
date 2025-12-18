import Banner from "../components/Banner";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy — Essentia Environments",
};

const sections = [
  { title: "Information We Collect", content: "We collect information when you contact us for consultations, subscribe to newsletters, or request services. This includes name, email, phone, and project details.", points: ["Contact information", "Project details", "Communication records", "Portfolio inquiries"] },
  { title: "How We Use Your Information", content: "We use collected information to respond to inquiries, provide services, improve our website, and communicate about projects and offerings. We respect your privacy and won't share information without consent.", points: ["Process requests", "Send updates", "Improve services", "Communication"] },
  { title: "Data Security", content: "We implement security measures to protect personal information from unauthorized access or disclosure. However, no method of internet transmission is 100% secure.", points: ["Encrypted transmission", "Secure storage", "Access controls", "Security audits"] },
  { title: "Cookies and Tracking", content: "Our website may use cookies and tracking technologies to enhance browsing experience and collect usage analytics. You can control cookie settings in your browser.", points: ["Essential cookies", "Analytics cookies", "Preference tracking", "Browser controls"] },
  { title: "Third-Party Links", content: "Our website may contain links to third-party websites. We're not responsible for their privacy practices. Review their policies before providing information.", points: ["External links", "Third-party responsibility", "User caution", "Link policy"] },
  { title: "Policy Updates", content: "We may update this Privacy Policy from time to time. We'll notify you of significant changes by updating the date on this page. Continued use constitutes acceptance.", points: ["Regular reviews", "Change notifications", "Date updates", "Use consent"] },
];

export default function PrivacyPage() {
  return (
    <>
      <Banner heading="Privacy Policy" image="/images/interior-design.jpg" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-20 bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-lg p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-4">Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            Essentia Environments ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
          <p className="text-gray-400 text-sm mt-4">Last Updated: December 2024</p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 mb-20">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{section.content}</p>
                
                {/* Key Points */}
                <div className="bg-slate-900/40 rounded-lg p-6 border border-slate-700/50">
                  <h4 className="text-lg font-bold text-slate-200 mb-4">Key Points:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rights & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-600/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Your Rights</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Access & Correction</h4>
                <p className="text-sm text-gray-300">You have the right to access and correct your personal information.</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Data Deletion</h4>
                <p className="text-sm text-gray-300">You may request deletion of your personal data where applicable.</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Opt-Out</h4>
                <p className="text-sm text-gray-300">You can opt-out of marketing communications at any time.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-600/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-emerald-300 mb-1">Email</h4>
                <p className="text-sm text-gray-300">info@essentiaenvironments.com</p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-300 mb-1">Address</h4>
                <p className="text-sm text-gray-300">Delhi, India</p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-300 mb-1">Support</h4>
                <p className="text-sm text-gray-300">We respond to privacy concerns within 48 hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-lg p-8 border border-slate-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Legal Compliance</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Essentia Environments complies with applicable data protection regulations including GDPR, CCPA, and local privacy laws. We take your privacy seriously and maintain the highest standards of data protection.
          </p>
          <p className="text-sm text-gray-400">
            For any privacy-related inquiries or concerns, please contact us directly. We value your trust and are committed to resolving any issues promptly.
          </p>
        </div>
      </div>
    </>
  );
}
