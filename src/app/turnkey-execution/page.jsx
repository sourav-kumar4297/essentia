import React from 'react'
import Banner from '../components/Banner'
import Text from '../components/Text'
import { Scroll } from '../components/Scroll';
import { Grid } from '../components/Grid';
import { WobbleCards } from '../components/WobbleCards';

export const metadata = {
  title: "Turnkey Execution",
  description: "Complete turnkey design and build services by Essentia Environments",
};

const page = () => {
    const aboutHeading = "Turnkey Execution: Complete Design and Build Solutions";
     const aboutText = [
  <p key="1">At Essentia Environments, our turnkey execution service eliminates the complexity of managing multiple contractors and vendors. We provide comprehensive design-to-build solutions where a single, dedicated team manages every aspect of your project. From initial concept and design through material procurement, construction, installation, and final handover, we ensure seamless project delivery with unwavering quality standards.</p>,
];
const aboutText2 = [<p key="2">Our integrated approach offers numerous advantages: unified responsibility, coordinated timelines, cost efficiency, and consistent quality oversight. Whether your project spans residential spaces, commercial interiors, or landscape environments, our turnkey model streamlines execution while maintaining our signature excellence at every phase. We handle project complexity so you can focus on your vision.</p>]
  return (
    <>
    <Banner heading="Turnkey Execution" image="/images/turnkey-execution-1.jpg" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page;
