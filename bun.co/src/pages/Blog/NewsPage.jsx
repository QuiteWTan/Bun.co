import React from 'react'
import FirstSection from './partials_news/FirstSection'
import SecondSection from './partials_news/SecondSection'

const NewsPage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <FirstSection/>
      <SecondSection/>
    </div>
  )
}

export default NewsPage
