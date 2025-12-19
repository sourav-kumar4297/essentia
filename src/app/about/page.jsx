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
    <p key="1">
      At Essentia Environments, we believe beauty isn&apos;t a privilege, it&apos;s a
      fundamental part of life. Our spaces are designed to reflect grace,
      purpose, and the artistry of living and working well. We respond to the
      inner calling of those who seek meaning in their surroundings, where every
      detail enhances the sense of being.
    </p>,
    <p key="2">
      Founded in 1999, Essentia is India&apos;s leading full-service design and build
      firm, offering comprehensive solutions that span the entire design journey
      from architectural and interior design consultancy to turnkey onsite
      execution. Our integrated approach is supported by an in-house production
      facility that crafts bespoke furniture, custom millwork, wardrobes,
      vanities, and curated décor pieces. Rooted in a deep respect for global
      design principles and indigenous craftsmanship, our work seamlessly blends
      classic and contemporary sensibilities, always guided by the unique
      preferences and requirements of each client.
    </p>,
    <p key="3">
      For 26 years, we&apos;ve built more than just luxury homes and
      commercial spaces — we&apos;ve built enduring relationships. With over 1,000
      projects delivered, our signature lies in clean, refined design, expert
      craftsmanship and a relentless drive to innovate. At Essentia, every space
      is crafted to feel timeless, personal and powerfully serene.
    </p>,
    <p key="4">
      At Essentia, design is not decoration. It is a process of shaping spaces
      with purpose, precision and soul. Our design services span every layer of
      a project — from spatial flow and architectural detailing to bespoke
      furniture and curated finishes. Each space is envisioned as a complete
      experience, tailored to the way our clients live, move and interact. With
      in-house production and a multidisciplinary team, we ensure seamless
      execution and full creative control, delivering environments that feel as
      effortless as they are exceptional.
    </p>,
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