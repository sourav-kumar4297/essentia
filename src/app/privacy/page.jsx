import Banner from '../components/Banner'

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information for Essentia Environments",
};

export default function PrivacyPage() {
  return (
    <>
      <Banner heading="Privacy Policy" image="/images/interior-design.jpg" />
      <div className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 dark:text-gray-300 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information when you contact us for consultations, subscribe to newsletters, or request services. This includes name, email, phone, and project details. We only collect information that is necessary to provide you with our services and improve our offerings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use collected information to respond to inquiries, provide services, improve our website, and communicate about projects and offerings. We respect your privacy and won't share information without your consent. Your data is used solely to enhance your experience with Essentia Environments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Data Security</h2>
              <p className="leading-relaxed">
                We implement security measures to protect personal information from unauthorized access or disclosure. We use encrypted transmission, secure storage, and access controls to ensure your data is protected. However, no method of internet transmission is 100% secure, and we encourage you to take precautions with your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Cookies and Tracking</h2>
              <p className="leading-relaxed">
                Our website may use cookies and tracking technologies to enhance browsing experience and collect usage analytics. You can control cookie settings in your browser. These tools help us understand how you use our site and improve our services accordingly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We're not responsible for their privacy practices. We encourage you to review their policies before providing any personal information to external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, modify, or request deletion of your personal information. You can also opt-out of marketing communications at any time. To exercise these rights or for any privacy concerns, please contact our data protection officer at privacy@essentiaenvironments.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Policy Updates</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We'll notify you of significant changes by updating the date on this page. Your continued use of our website constitutes your acceptance of these changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Contact Us</h2>
              <p className="leading-relaxed">
                For any privacy-related questions or concerns, please reach out to us at privacy@essentiaenvironments.com. We are committed to protecting your privacy and will respond to your inquiries within 48 hours. Essentia Environments complies with applicable data protection regulations including GDPR, CCPA, and local privacy laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
