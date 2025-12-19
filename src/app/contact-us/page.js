import React from 'react'
import ContactSection from '../components/ContactSection'
import HeadOfficeLocation from '../components/HeadOfficeLocation'
import CareerSection from '../components/CareerSection'

const page = () => {
  return (
    <>
    <ContactSection/>
    <HeadOfficeLocation />
    <CareerSection link="/career"/>
    </>
  )
}

export default page