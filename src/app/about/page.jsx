import React from 'react'
import { LampBanner } from '../components/LampBanner'
import TimeLineEssentia from '../components/TimeLineEssentia'
import MissionVision from '../components/MissionVision'
import LeadershipSection from '../components/LeadershipSection'
import Team from '../components/Team'
import TeamGroup from '../components/TeamGroup'
import Text from '../components/Text'

const page = () => {
  const aboutText = [
  <p key="1">At Essentia Environments, we believe your house should be a personal haven. As India's premier interior design and furniture craftsmanship company, we transform your vision from a basic concept into a spectacular reality. We provide a full design-to-build service, guaranteeing that every detail is completed with precision and creativity.</p>,
  <p key="2">We are a multi-disciplinary team with a vast suite of capabilities. Whether you want a modern minimalist style or a classic, sumptuous design, our team combines sophistication and functionality to create spaces that reflect your unique craftsmanship and taste.</p>,
  <p key="3">At Essentia Environments, we're not just designing rooms; we're crafting premier experiences. Every piece of custom-made furniture, every carefully selected décor element, and every architectural decision is made with your vision at the forefront.</p>
]
  return (
    <>
    <LampBanner heading = "About Essentia"/>
    <Text content={aboutText} />
    <MissionVision />
    <LeadershipSection />
    <Team />
    <TimeLineEssentia />
    <TeamGroup />

    </>
  )
}

export default page