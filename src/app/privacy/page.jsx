import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy — Essentia Environments",
};

export default function PrivacyPage() {
  const content = [
    <h3 key="1" className="text-2xl font-bold text-white mt-6 mb-3">Information We Collect</h3>,
    <p key="2" className="text-gray-300 mb-4">
      Essentia Environments may collect information you provide directly to us, such as when you contact us for consultations, subscribe to our newsletter, or request our services. This may include your name, email address, phone number, and project details.
    </p>,
    <h3 key="3" className="text-2xl font-bold text-white mt-6 mb-3">How We Use Your Information</h3>,
    <p key="4" className="text-gray-300 mb-4">
      We use collected information to respond to your inquiries, provide our design and architectural services, improve our website, and communicate about our projects and offerings. We respect your privacy and will not share your personal information with third parties without your consent.
    </p>,
    <h3 key="5" className="text-2xl font-bold text-white mt-6 mb-3">Data Security</h3>,
    <p key="6" className="text-gray-300 mb-4">
      We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
    </p>,
    <h3 key="7" className="text-2xl font-bold text-white mt-6 mb-3">Cookies and Tracking</h3>,
    <p key="8" className="text-gray-300 mb-4">
      Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage analytics. You can control cookie settings through your browser preferences.
    </p>,
    <h3 key="9" className="text-2xl font-bold text-white mt-6 mb-3">Contact Information</h3>,
    <p key="10" className="text-gray-300 mb-4">
      If you have questions about our Privacy Policy or how we handle your information, please contact us at info@essentiaenvironments.com. We are committed to working with you to resolve any privacy concerns.
    </p>,
    <h3 key="11" className="text-2xl font-bold text-white mt-6 mb-3">Policy Updates</h3>,
    <p key="12" className="text-gray-300 mb-4">
      We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our website constitutes acceptance of our updated Privacy Policy.
    </p>,
  ];

  return (
    <>
      <Banner heading="Privacy Policy" image="/images/interior-design.jpg" />
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8">
          <Text heading="Privacy Policy" content={content} />
        </div>
      </div>
    </>
  );
}
