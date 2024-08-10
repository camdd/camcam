import Navbar from '../components/Navbar';
import React from 'react'
import Footer from '../components/Footer';
import './Layout.css'

const Layout = ({children}) => {
  
  return (
    <div className='containerLayout'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
