import React from 'react'
import Banner from '../components/Banner'
import Text from '../components/Text'
import { Scroll } from '../components/Scroll';
import { Grid } from '../components/Grid';
import { WobbleCards } from '../components/WobbleCards';

export const metadata = {
  title: "Elevation Design",
  description: "Premium elevation design services by Essentia Environments - Creating distinctive architectural exteriors with modern innovation",
};

const page = () => {
    const aboutHeading = "Elevation Design: Architectural Excellence Through Innovation";
     const aboutText = [
  <p key="1">At Essentia Environments, our elevation design services create distinctive architectural exteriors that make a powerful statement. We specialize in transforming buildings into iconic landmarks by blending cutting-edge contemporary design with timeless architectural principles. Our team meticulously crafts façades that not only enhance visual impact but also harmonize with surrounding contexts and structural requirements.</p>,
];
const aboutText2 = [<p key="2">Our approach to elevation design combines aesthetic brilliance with practical functionality. We work with premium materials, sustainable building practices, and innovative detailing to create exteriors that age beautifully and perform exceptionally. Whether you're designing a corporate headquarters, luxury residential tower, or heritage restoration, our team brings expertise in material selection, contextual integration, and modern innovation to deliver elevations that truly transform the urban landscape.</p>]
  return (
    <>
    <Banner heading="Elevation Design" image="/images/elevation-design-1.jpg" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page
