import React from 'react'
import FirstSection from './partials_about/FirstSection'
import SecondSection from './partials_about/SecondSection'
import ThirdSection from './partials_about/ThirdSection'
import FourthSection from './partials_about/FourthSection'

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
