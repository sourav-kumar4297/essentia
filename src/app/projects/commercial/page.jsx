import React from 'react'
import Banner from '../../components/Banner'
import Text from '../../components/Text'
import { Scroll } from '../../components/Scroll';
import { Grid } from '../../components/Grid';
import { WobbleCards } from '../../components/WobbleCards';

export const metadata = {
  title: "Commercial Projects",
  description: "Premier commercial interior design and fit-out by Essentia Environments",
};

const page = () => {
    const aboutHeading = "Commercial Projects: Designing Spaces for Success";
     const aboutText = [
  <p key="1">At Essentia Environments, our commercial project expertise spans hospitality, retail, corporate offices, and institutional spaces. We create functional, inspiring environments that enhance brand identity, elevate user experience, and optimize operational efficiency. Every commercial project reflects our commitment to excellence, sustainability, and timeless design.</p>,
];
const aboutText2 = [<p key="2">From initial concept through final execution, our integrated design and build team manages every aspect of your commercial transformation. Our portfolio includes award-winning corporate headquarters, sophisticated hospitality venues, cutting-edge retail environments, and innovative institutional spaces. Each project demonstrates our expertise in space planning, materials selection, lighting design, and sustainable building practices.</p>]
  return (
    <>
    <Banner heading="Commercial Projects" image="/images/commercial-projects-1.jpg" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page;
