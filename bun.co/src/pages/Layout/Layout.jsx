import { Outlet, useLocation } from "react-router"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import AdminNav from "../Admin/AdminNav";

const Layout = () => {
    const location = useLocation(); 
    return(
      <>
         {
          location.pathname.includes('admin') ? 
          <AdminNav /> : <Navbar /> 
        }
        <Outlet/>
        {
          location.pathname.includes('admin') ? 
          null : <Footer/>
        }

      </>
    )
  }

  export default Layout