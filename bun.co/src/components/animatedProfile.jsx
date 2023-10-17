
import React, { useState,useEffect  } from "react";
import { motion} from "framer-motion";
import { useAuth } from "../pages/custom-hooks/useAuth"
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import useGetData from "../pages/custom-hooks/useGetData";


const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };
  



const AnimatedProfile = ({color, roles}) => {

  const SignOut = () => {
      const auth = getAuth();
          signOut(auth).then(() => {
              toast.success('Logged out successful')
          }).catch((error) => {
              toast.error(error.message)
      });
    }
    const [isOpen, setIsOpen] = useState(false);
    const {currentUser} = useAuth()
    return (
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative p-2 "
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row gap-2 items-center justify-center"
        >
            <motion.div
                variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
            >
                <svg  viewBox="0 0 20 20" className="w-3 h-3 md:w-5">
                  <path d="M0 7 L 20 7 L 10 16" fill={color} />
                </svg>
          </motion.div>
            <div className="rounded-full p-[2px] bg-white border-2 flex items-center justify-center">
            {
                currentUser?
                <img src={currentUser.photoURL} alt="" className="w-[25px] h-[25px] rounded-full"/>
                : <box-icon name='user' size="20px"></box-icon>
            }
            </div>
          
        </motion.button>
        <motion.ul className="absolute bg-white px-4 py-2 w-[140px] font-poppins flex flex-col gap-1 left-[-100%] mt-[10px] shadow-md border-2 rounded-md text-sm"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants} className="text-lg font-bold break-normal flex flex-col">
            <h1 className="font-normal text-sm">{roles ? roles : 'Guest'}</h1>
            {
                currentUser ? 
                currentUser.displayName : 'Anonymous'
            }
          </motion.li>
          
          <motion.li variants={itemVariants} className="pt-2">
              Setting
          </motion.li>
          {
            roles == 'Admin' ? 
                <motion.li variants={itemVariants}>
                    <Link to='/admin/dashboard'>
                        Dashboard
                    </Link>
                </motion.li>
            :
            null
          }
          
          {
            currentUser ? 
            <motion.li variants={itemVariants}>
                <button onClick={SignOut}>
                    Logout
                </button>
            </motion.li>
            :
            <React.Fragment>
                <motion.li variants={itemVariants}>
                    <Link to='/login'>
                        Login
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link to='/register'>
                        Register
                    </Link>
                </motion.li>
            </React.Fragment>
          }
          
        </motion.ul>
      </motion.nav>
    );
  }

  export default AnimatedProfile