import React from 'react'
import FirstSection from './partials_about/FirstSection'
import SecondSection from './partials_about/SecondSection'

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <FirstSection/>
      <SecondSection/>
    </div>
  )
}

export default AboutPage
