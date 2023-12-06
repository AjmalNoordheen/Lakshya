import React from 'react'
import Navbar from '../Components/User/Navbar/Navbar'
import HomePage from '../Components/User/HomePage/HomePage'
import Footer from '../Components/User/Footer/Footer'

function UserHomePage() {
  return (
    <div>
        <Navbar/>
        <HomePage/>
        <Footer/>
    </div>
  )
}

export default UserHomePage