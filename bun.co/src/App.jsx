import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route, createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/home/HomePage';
import Footer from './components/Footer';
import ProductPage from './pages/products/ProductPage';
import LoginPage from './pages/Auth/LoginPage';
import AboutPage from './pages/About/AboutPage';


function App() {

  const Layout = () => {
    return(
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const route = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <HomePage/>,
        },
        {
          path:'/products',
          element: <ProductPage/>,
        },
        {
          path:'/about',
          element:<AboutPage/>
        }
      ]
    },
    {
      path:'/login',
      element: <LoginPage/>
    },
    // {
    //   path:'/register',
    //   element: <RegisterPage/>
    // },
  ])



  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App