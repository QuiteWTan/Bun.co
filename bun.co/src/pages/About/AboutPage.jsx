import React from 'react'
import FirstSection from './partialsAbout/FirstSection'
import SecondSection from './partialsAbout/SecondSection'
import ThirdSection from './partialsAbout/ThirdSection'
import FourthSection from './partialsAbout/FourthSection'

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
    </div>
  )
}

export default AboutPage
