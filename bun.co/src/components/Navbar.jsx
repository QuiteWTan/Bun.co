import { useEffect, useRef, useState } from "react"
import Logo from '../assets/Logo.png'
import {AiOutlineInstagram, AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import MenuOverlay from "./MenuOverlay";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../pages/custom-hooks/useAuth";
import AnimatedProfile from "./animatedProfile";
import useGetData from "../pages/custom-hooks/useGetData";

const Navbar = () => {
    const location = useLocation()
    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const stickyHeader = () => {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
                headerRef.current.classList.add('sticky')
            }else{
                headerRef.current.classList.remove('sticky')
            }
        })
    }
    useEffect(() => {
        stickyHeader();
        if(currentUser){
            user.forEach(element => {
                if(element.email == currentUser.email){
                    setRole(element.role)
                }
            });
        }
        return () => window.removeEventListener("scroll",stickyHeader)
    })
    const {data:user} = useGetData('users')
    const [role,setRole] =useState('')
    const {currentUser} = useAuth()
    const [openNav, setOpenNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0)
    const NavLinks = [
        {
            Name: 'home',
            link: 'home'
        },
        {
            Name: 'products',
            link: 'products'
        },
        {
            Name: 'about',
            link: 'about'
        },
        {
            Name: 'news',
            link: 'news',
        },
    ]
    return (
        <header className="absolute border-b-2 top-0 left-0 right-0 z-10  font-raleway md:py-2 px-2 bg-white" ref={headerRef}>
            <div className="flex md:max-w-[1300px] max-w-[600px] m-auto flex-row justify-between items-center w-full h-full py-2 md:py-0 px-2 md:px-0 ">
                <Link to='/home'>
                    <div className="font-cinzel text-lg  md:text-2xl lg:text-4xl  md:flex">
                        BUN <span className="text-[#BCA37F]">.CO</span>
                    </div>
                </Link>

                <ul className="hidden md:flex flex-row justify-between gap-x-8 font-poppins text-[15px]">
                    {NavLinks.map((nav,index)=>(
                        <Link to={nav.link} 
                        className={` 
                        ${location.pathname.startsWith(`/${nav.Name}`) ? 'border-gray-700 font-bold hover:border-transparent' : ''} border-b-2 border-transparent hover:border-gray-700 hover:font-bold selection:transition-all duration-300`} 
                        key={index} onClick={() => setActiveNav(index)}>
                            {nav.Name.toUpperCase()}
                        </Link>
                    ))}
                    
                </ul>


                <div className="flex items-center gap-x-2 md:gap-x-4">
                    <Link to='cart'> 
                        <div className="rounded-full px-2 py-2 bg-white relative flex items-center justify-center">
                            <box-icon name='shopify' type='logo' size="34px"></box-icon>
                            <div className="w-4 h-4 rounded-full p-2 bg-[#BCA37F] absolute bottom-2 right-2 flex items-center justify-center text-white text-[12px] font-bold font-poppins">{totalQuantity}</div>
                        </div>
                    </Link>
                    <AnimatedProfile color={'black'} roles={role}/>      

                    <div className="flex md:hidden p-1 rounded-md border-gray-600 border-2 items-center ml-1" onClick={() => setOpenNav(!openNav)}>
                    {
                        openNav? 
                        <box-icon name='x' size="22px"></box-icon>
                        : 
                        <box-icon box-icon name='menu' size="22px"></box-icon>
                    }
                    </div>
                </div>
                
            </div>     
            {openNav? <MenuOverlay NavLinks={NavLinks} NavState={openNav} /> : null}  
        </header>
    )
}

export default Navbar