import { useEffect, useRef, useState } from "react"
import {AiOutlineInstagram, AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import MenuOverlay from "../../components/MenuOverlay";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../custom-hooks/useAuth"
import AnimatedProfile from "../../components/animatedProfile";
const AdminNav = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    
    const {currentUser} = useAuth()
    const [openNav, setOpenNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0)
    const NavLinks = [
        {
            Name: 'dashboard',
            url : 'dashboard',
            link: 'admin/dashboard'
        },
        {
            Name: 'products',
            url : 'all-product',
            link: 'admin/all-product'
        },
        {
            Name: 'orders',
            url : 'orders',
            link: 'admin/orders'
        },
        {
            Name: 'users',
            url : 'users',
            link: 'admin/users',
        },
    ]
    const location = useLocation()
    return (
        <header className="w-full  border-b-2 top-0 left-0 right-0 z-10    bg-gray-700 font-poppins" >
            <div className="flex md:max-w-[1300px] max-w-[600px] m-auto flex-row justify-between items-center w-full h-full py-2 md:py-2 px-2 ">
                <Link to='/home'>
                  <div className="font-cinzel text-xl  md:text-2xl lg:text-4xl text-white hidden md:flex">
                      BUN <span className="text-[#BCA37F]">.CO</span>
                  </div>
                </Link>

                <div className='flex w-1/2 md:w-2/3'>
                  <div className=' border-[#9f8155] border-2 py-1 px-2 md:px-4 rounded-full flex items-center shadow-md w-full bg-white text-sm md:text-sm'>
                    <input type="text" className='focus:outline-none w-full' placeholder='Search here' onChange={() => FindProduct(e)}/>
                    <box-icon name='search' color="#9f8155"></box-icon>
                  </div>
                </div>


                <div className="flex items-center gap-x-1 md:gap-x-4">
                    <Link to='cart'> 
                        <div className="rounded-full px-2 py-2  relative flex items-center justify-center">
                            <box-icon type='solid' name='bell' size="28px" color='white'></box-icon>
                            <div className="w-4 h-4 rounded-full p-2 bg-[#BCA37F] absolute bottom-1 right-1 flex items-center justify-center text-white text-[12px] font-bold font-poppins">{totalQuantity}</div>
                        </div>
                    </Link>
                    <AnimatedProfile color={'white'}/>      

                    <div className="flex md:hidden p-1 rounded-md border-gray-50 border-2 items-center ml-1" onClick={() => setOpenNav(!openNav)}>
                    {
                        openNav? 
                        <box-icon name='x' size="22px" color='white'></box-icon>
                        : 
                        <box-icon box-icon name='menu' size="22px" color='white'></box-icon>
                    }
                    </div>
                </div>
                
            </div>     
            {openNav? <MenuOverlay NavLinks={NavLinks} NavState={openNav} text={'text-white'}/> : null}  
            <div className="w-full flex justify-center bg-white py-1">
              <div className="max-w-[1300px] flex flex-row gap-4 md:gap-4 text-xs md:text-sm ">
                {
                  NavLinks.map((nav, index)=>(
                    <Link to={nav.link}>
                      <h1 className={`${location.pathname.includes(`/admin/${nav.url}`) ? 'bg-gray-200' : ''} hover:bg-gray-100 duration-300 transition-all px-2 py-1`}>{nav.Name.toUpperCase()}</h1>
                    </Link>   
                  ))
                }
              </div>
            </div>
        </header>
    )
}

export default AdminNav
