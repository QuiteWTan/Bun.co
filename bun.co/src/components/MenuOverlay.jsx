import React from "react";
import { Link } from 'react-router-dom';
import {AiOutlineInstagram, AiFillLinkedin,AiFillGithub,AiOutlineTwitter} from 'react-icons/ai';

const MenuOverlay = ({ NavLinks, NavState}) => {
  return (
    <ul className='flex flex-col items-center'>
        {NavLinks.map((link, index) => (
            <Link to=""
                className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0" key={index}>
                    {link.Name}
            </Link>
        ))}
    </ul>
  );
};

export default MenuOverlay;