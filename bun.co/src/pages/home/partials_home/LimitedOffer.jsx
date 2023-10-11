import React, { useEffect, useRef, useState } from 'react'
import Limited from '../home/LimitedOffer.png'

const LimitedOffer = () => {

  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  let interval;
  useEffect(() => {
    const dateNow = new Date('Oct 29, 2023').getTime()

    interval = setInterval(()=> {
      const Current = new Date().getTime();
      const Diff = dateNow - Current;
      const Days = Math.floor(Diff / (1000* 60 * 60 * 24))
      const Hours = Math.floor(Diff % (1000* 60 * 60 * 24) / (1000* 60 * 60))
      const Minutes = Math.floor(Diff % (1000* 60 * 60) / (1000* 60 ))
      const Seconds = Math.floor(Diff % (1000* 60) / 1000)

      if(dateNow < 0 ) clearInterval(interval.current)
      else{
        setDay(Days)
        setHour(Hours)
        setMinute(Minutes)
        setSecond(Seconds)
      }
    })
  }, [])
  return (
    <div className='w-full flex justify-center bg-[#fcf4f2] my-4 font-poppins text-gray-700'>
        <div className='w-full max-w-[1200px] flex flex-col md:flex-row px-4 py-4 gap-8 md:gap-20 justify-center items-center'>
            <div className=' max-w-[400px] max-h-[500px] h-full w-full'>
                <img src={Limited} alt="" className=' max-w-[550px] w-full max-h-[500px] h-full'/>
            </div>
            <div className='flex flex-col max-w-[600px] justify-center gap-6 '>
              <h1 className='text-xl md:text-3xl'>LIMITED OFFER</h1>
              <h1 className='text-3xl md:text-5xl font-serif font-bold'>CHOCOLATE CAKE</h1>

              <div className='flex flex-row items-center gap-3 bg-[#8a7b6d] px-6 py-3 rounded-sm w-fit justify-end'>
                <h1 className='text-3xl lg:text-5xl text-gray-50 font-bold'  >{day} : {hour} : {minute} : {second}</h1>
              </div>
              
              <h1 className='text-xl sm:text-3xl md:text-5xl  font-cinzel'>──── 50% <span className='text-lg sm:text-2xl md:text-5xl font-poppins'>off</span></h1>
              
              <button className='text-xl bg-transparent border-[#8e765f] border-2 px-16 py-2 w-fit rounded-sm duration-500 transition-all hover:bg-[#8e765f] hover:text-white shadow-md'>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default LimitedOffer
