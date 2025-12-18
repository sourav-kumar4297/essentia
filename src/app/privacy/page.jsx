import React from 'react'
import Banner from '../components/Banner'
import Text from '../components/Text'
import { Scroll } from '../components/Scroll';
import { Grid } from '../components/Grid';
import { WobbleCards } from '../components/WobbleCards';

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information for Essentia Environments",
};

const page = () => {
    const aboutHeading = "Privacy Policy: Your Data Protection";
     const aboutText = [
  <p key="1">At Essentia Environments, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and protect your personal information. This privacy policy explains our practices regarding data collection and usage. We comply with all applicable data protection regulations and maintain industry-standard security measures to safeguard your information.</p>,
];
const aboutText2 = [<p key="2">We collect personal information to provide our services, communicate with clients, process orders, and improve our offerings. Your data is never shared with third parties without explicit consent, and we implement robust security protocols to protect your privacy. You have the right to access, modify, or delete your personal information at any time by contacting our data protection officer.</p>]
  return (
    <>
    <Banner heading="Privacy Policy" image="/images/interior-design.jpg" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page;
