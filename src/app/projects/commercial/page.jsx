import React from 'react'
import Banner from '../../components/Banner'
import TwoColumnSection from '../../components/TwoColumnSection'

export const metadata = {
  title: "Commercial Projects",
  description: "Premier commercial interior design and fit-out by Essentia Environments",
};

const page = () => {
  const content = [
    "At Essentia Environments, our commercial project expertise spans hospitality, retail, corporate offices, and institutional spaces. We create functional, inspiring environments that enhance brand identity, elevate user experience, and optimize operational efficiency.",
    "From initial concept through final execution, our integrated design and build team manages every aspect of your commercial transformation. We collaborate with your stakeholders to understand business objectives, spatial requirements, and aesthetic vision.",
    "Our portfolio includes award-winning corporate headquarters, sophisticated hospitality venues, cutting-edge retail environments, and innovative institutional spaces. Each project demonstrates our expertise in space planning, materials selection, lighting design, and sustainable building practices."
  ];

  return (
    <>
    <Banner heading="Commercial Projects" image="/images/commercial-projects-1.jpg" />
    <TwoColumnSection 
      image="/images/commercial-projects-1.jpg" 
      content={content} 
    />
    </>
  )
}

export default page;
