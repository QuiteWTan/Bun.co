import {AiOutlineTwitter,AiOutlineWhatsApp,AiOutlineSkype,AiOutlineInstagram} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Package1 from '../pages/home/home/Packaging1.jpg'
import Package2 from '../pages/home/home/Packaging2.jpg'

const Footer = () => {
    return(
       <div className='mx-auto w-full border-t-4'>
         <div className='grid max-w-[1300px] mx-auto py-16 px-2 gap-8 text-gray-800 md:grid-cols-6 '>
            <div className='col-span-2'>
                <div className="font-cinzel text-2xl md:text-4xl">
                    BUN <span className="text-[#BCA37F]">.CO</span>
                </div>
                <p className='py-4 text-xs text-left md:text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='flex flex-row md:max-w-[50%] justify-between md:hidden'>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent" src=''><AiOutlineInstagram className='bg-transparent  hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineWhatsApp className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineTwitter className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineSkype className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                </div>
            </div>

            <div className='lg:flex grid grid-cols-2 lg:grid-cols-4 col-span-0 md:col-span-4 justify-between md:gap-x-4 mt-6 col-span-2'>
                <div className=''>
                    <h4 className='font-bold text-left'>Resources</h4>
                    <ul>
                        <li className='text-left'>Help Center</li>
                        <li className='text-left'>Affiliate</li>
                        <li className='text-left'>Products Review</li>
                        <li className='text-left'>Services</li>
                    </ul>
                </div>

                <div className='max-w-[150px] md:px-2'> 
                    <h4 className='font-bold pb-2'>Latest News</h4>
                    <ul className='grid gap-y-2 grid-row-2'>
                        <li className='grid grid-cols-2 justify-center gap-x-3'>
                            <div className='max-w-[70px] h-[70px] row-span-2 col-span-1 ml-auto'><img src={Package2} alt="" className='w-[70px] h-[70px] row-span-2'/></div>
                            <h1 className='text-left text-xs max-w-[100px]'>Introducing Bronson Shoes XI</h1>
                        </li>
                        <li className='grid grid-cols-2 gap-x-3'>
                        <div className='max-w-[70px] h-[70px] row-span-2 col-span-1 ml-auto'><img src={Package2} alt="" className='w-[70px] h-[70px] row-span-2'/></div>
                            <h1 className='text-left text-xs max-w-[100px]'>New Fabric Material Coming Soon</h1>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold text-left mt-4 lg:mt-0'>Navigates</h4>
                    <ul className="">
                        <li className="text-left">Home</li>
                        <li className="text-left">About</li>
                        <li className="text-left">Contact</li>
                        <li className="text-left">Sign Up</li>
                        <li className="text-left">Login</li>
                    </ul>
                </div>

                <div className='max-w-[200px] mt-4 lg:mt-0 pb-2'>
                    <h4 className='font-bold'>Instagram</h4>
                    <ul className=" grid grid-cols-2 gap-x-2 gap-y-2 ">
                        <li className="max-w-[55px]"><img src={Package1} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={Package1} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={Package1} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={Package1} alt="" className='w-[100%] h-[55px]'/></li>

                    </ul>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Footer;
