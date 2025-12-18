import Banner from '../components/Banner'
import PrivacySection from '../components/PrivacySection'

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information for Essentia Environments",
};

export default function PrivacyPage() {
  return (
    <>
      <Banner heading="Privacy Policy" image="/images/interior-design.jpg" />
      <PrivacySection />
    </>
  )
}
