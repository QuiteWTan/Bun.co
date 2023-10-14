import React from 'react'
import FirstSection from './partialsHome/FirstSection'
import SecondSection from './partialsHome/SecondSection'
import ThirdSection from './partialsHome/ThirdSection'
import FourthSection from './partialsHome/FourthSection'
import LimitedOffer from './partialsHome/LimitedOffer'

const HomePage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-gray-50'>
      <FirstSection/>
      <LimitedOffer/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
    </div>
  )
}

export default HomePage
