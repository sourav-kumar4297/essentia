import React from 'react'
import Banner from '../components/Banner'
import TwoColumnSection from '../components/TwoColumnSection'

export const metadata = {
  title: "Turnkey Execution",
  description: "Complete turnkey design and build services by Essentia Environments",
};

const page = () => {
  const content = [
    "At Essentia Environments, our turnkey execution service eliminates the complexity of managing multiple contractors and vendors. We provide comprehensive design-to-build solutions where a single, dedicated team manages every aspect of your project.",
    "From initial concept and design through material procurement, construction, installation, and final handover, we ensure seamless project delivery with unwavering quality standards.",
    "Our integrated approach offers unified responsibility, coordinated timelines, cost efficiency, and consistent quality oversight. We handle project complexity so you can focus on your vision."
  ];

  return (
    <>
    <Banner heading="Turnkey Execution" image="/images/turnkey-execution-1.jpg" />
    <TwoColumnSection 
      image="/images/turnkey-execution-1.jpg" 
      content={content} 
    />
    </>
  )
}

export default page;
