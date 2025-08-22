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
  <p key="1">At Essentia, design is not just about aesthetics — it's a philosophy, a lifestyle, and a promise to craft spaces that evoke emotion and purpose. With decades of expertise and a portfolio that spans the globe, we redefine luxury by merging form with function."</p>,
  <p key="2">Every detail, material, and silhouette is handpicked and curated to reflect your story. Our team of passionate designers, architects, and craftsmen work collaboratively to turn vision into reality — one timeless space at a time.</p>,
  <p key="3">We don't just design interiors. We build narratives. Stories of bold choices, harmonious proportions, and deeply personal expressions of identity. Welcome to spaces that breathe life and inspire the everyday.</p>
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