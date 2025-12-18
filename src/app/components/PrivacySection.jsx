'use client';

export default function PrivacySection() {
  const sections = [
    {
      title: "Information We Collect",
      description: "Contact information, project details, communication records, and portfolio inquiries."
    },
    {
      title: "Data Security",
      description: "We implement industry-standard security measures including encryption and secure storage protocols."
    },
    {
      title: "Data Usage",
      description: "Your data is used solely to provide services, send updates, and improve our offerings."
    },
    {
      title: "Your Rights",
      description: "You can request access, modification, or deletion of your personal information at any time."
    },
    {
      title: "Third-Party Sharing",
      description: "We never share your personal data without explicit consent from you."
    },
    {
      title: "Policy Updates",
      description: "We review and update our privacy policy regularly to comply with evolving regulations."
    },
  ];

  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-black">Privacy Protection</h2>
          <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
            Your privacy is important to us. We are transparent about how we collect, use, and protect your information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border dark:bg-slate-800/40 dark:border-slate-700 bg-white border-gray-200 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-slate-500/20 hover:shadow-gray-300/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold mb-3 dark:text-white text-black">
                {section.title}
              </h3>
              <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r dark:from-blue-900/30 dark:to-cyan-900/30 from-blue-50 to-cyan-50 p-8 rounded-lg border dark:border-blue-600/30 border-blue-200">
          <h3 className="text-2xl font-bold mb-4 dark:text-white text-black">Contact & Support</h3>
          <p className="dark:text-gray-300 text-gray-700 mb-4">
            For any privacy-related questions or to exercise your data rights, please contact our data protection officer:
          </p>
          <div className="space-y-2">
            <p className="dark:text-gray-300 text-gray-700"><span className="font-semibold">Email:</span> privacy@essentiaenvironments.com</p>
            <p className="dark:text-gray-300 text-gray-700"><span className="font-semibold">Response Time:</span> Within 48 hours</p>
            <p className="dark:text-gray-300 text-gray-700"><span className="font-semibold">Compliance:</span> GDPR, CCPA, and local privacy laws</p>
          </div>
        </div>
      </div>
    </div>
  );
}
