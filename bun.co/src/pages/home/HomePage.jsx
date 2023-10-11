import React from 'react'
import FirstSection from './partials_home/FirstSection'
import SecondSection from './partials_home/secondsection'
import ThirdSection from './partials_home/ThirdSection'
import FourthSection from './partials_home/FourthSection'
import LimitedOffer from './partials_home/LimitedOffer'

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
