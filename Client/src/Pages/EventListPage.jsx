import React from 'react'
import Navbar from '../Components/User/Navbar/Navbar'
import Footer from '../Components/User/Footer/Footer'
import EventList from '../Components/User/EventList/EventList'




function EventListPage() {
  return (
    <div>
        <Navbar/>
        <EventList/>
        <Footer/>
    </div>
  )
}

export default EventListPage