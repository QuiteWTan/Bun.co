import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route, createBrowserRouter, Outlet, RouterProvider, useLocation} from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/home/HomePage';
import Footer from './components/Footer';
import ProductPage from './pages/products/ProductPage';
import LoginPage from './pages/Auth/LoginPage';
import AboutPage from './pages/About/AboutPage';
import NewsPage from './pages/Blog/NewsPage';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/products/partialsProducts/ProductDetails';
import Billing from './pages/Billings/Billing';
import RegisterPage from './pages/Auth/RegisterPage';
import ProtectedAuth from './pages/Router/ProtectedAuth';
import AdminNav from './pages/Admin/AdminNav';
import Dashboard from './pages/Admin/Dashboard';
import AllProduct from './pages/Admin/AllProduct';
import AddProduct from './pages/Admin/AddProduct';
import Layout from './pages/Layout/Layout';
import Users from './pages/Admin/Users';
import Orders from './pages/Admin/Orders';
import AdminAuth from './pages/Router/AdminAuth';

function App() {
  

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
          path:'/home',
          element: <HomePage/>,
        },
        {
          path:'/products',
          element: <ProductPage/>,
        },
        {
          path:'/about',
          element:<AboutPage/>
        },
        {
          path:'/news',
          element:<NewsPage/>
        },
        {
          path:'products/:id',
          element:<ProductDetails/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'billing',
          element:<ProtectedAuth><Billing/></ProtectedAuth>
        },
        {
          path:'admin/dashboard',
          element:<AdminAuth>
            <Dashboard/>
          </AdminAuth>
        },
        {
          path:'admin/all-product',
          element:<AdminAuth>
            <AllProduct/>
          </AdminAuth>
        },
        {
          path:'admin/users',
          element:<AdminAuth>
            <Users/>
          </AdminAuth>
        },
        {
          path:'admin/orders',
          element:<AdminAuth>
            <Orders/>
          </AdminAuth>
        },
      ]
    },
    {
      path:'/login',
      element: <LoginPage/>
    },
    {
      path:'/register',
      element: <RegisterPage/>
    },
  ])



  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App
