import React from 'react'
import FirstSection from './partialsBlog/FirstSection'
import SecondSection from './partialsBlog/SecondSection'

const NewsPage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <FirstSection/>
      <SecondSection/>
    </div>
  )
}

export default NewsPage
