import { useState } from "react"
import Logo from '../assets/Logo.png'
import {AiOutlineInstagram, AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import MenuOverlay from "./MenuOverlay";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0)
    const NavLinks = [
        {
            Name: 'Home',
            link: 'home'
        },
        {
            Name: 'Products',
            link: 'products'
        },
        {
            Name: 'About',
            link: 'about'
        },
        {
            Name: 'Contact',
            link: 'contact',
        },
    ]
    return (
        <div className="absolute border-b-2 top-0 left-0 right-0 z-10  font-raleway md:py-2 px-2 bg-white">
            <div className="flex md:max-w-[1300px] max-w-[600px] m-auto flex-row justify-between items-center w-full h-full py-2 md:py-0 px-2 md:px-0 ">
                <div className="font-cinzel text-2xl md:text-4xl">
                    BUN <span className="text-[#BCA37F]">.CO</span>
                </div>

                <ul className="hidden md:flex flex-row justify-between gap-x-8 font-poppins text-[15px]">
                    {NavLinks.map((nav,index)=>(
                        <Link to={nav.link} className={` ${index === activeNav ? 'border-gray-700 font-bold hover:border-transparent' : ''} border-b-2 border-transparent hover:border-gray-700 hover:font-bold selection:transition-all duration-300`} key={index} onClick={() => setActiveNav(index)}>
                            {nav.Name}
                        </Link>
                    ))}
                </ul>


                <div className="flex items-center gap-x-4">
                    <div className="rounded-full px-2 py-2 bg-white relative flex items-center justify-center">
                        <box-icon name='shopify' type='logo' size="md"></box-icon>
                        <div className="w-4 h-4 rounded-full p-1 bg-gray-400 absolute bottom-2 right-2 flex items-center justify-center text-white text-[10px] font-bold">0</div>
                    </div>
                    <div className="rounded-full p-1 bg-white border-2 flex items-center justify-center">
                        <box-icon name='user' ></box-icon>
                    </div>
                    <div className="flex md:hidden p-2 rounded-md border-gray-600 border-2 items-center" onClick={() => setOpenNav(!openNav)}>
                    {
                        openNav? 
                        <box-icon name='x'></box-icon>
                        : 
                        <box-icon box-icon name='menu' ></box-icon>
                    }
                    </div>
                </div>
                
            </div>     
            {openNav? <MenuOverlay NavLinks={NavLinks} NavState={openNav} /> : null}  
        </div>
    )
}

export default Navbar