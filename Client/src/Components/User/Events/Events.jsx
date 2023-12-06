import React from 'react'
import "./Events.css";


function Events() {
  return (
    <div className="event-card">
  <div className="event-left">
    <img src="https://www.shutterstock.com/image-photo/poznan-pol-sep-23-2020-600w-1947447292.jpg" alt="" className="event-image" />
  </div>
  <div className="event-right">
    <h1>Autocad Master</h1>
    <p>
      Participants must create plan, elevation and section for a particular topic which will be given on time. This event will organize in civil department seminar hall on 20 and 21 Feb. There will be three rounds and winner and runner up will be rewarded by the cash prize. First round will start at 11 o’ clock.
    </p>
    {/* 
    <p>In Paintball fun war game there will be some amount of
      entry fees for playes and it will be organise on both
      days of 'PRAJWALAN' and as it is a type of fun game so
      there will not be any prize for the winners it will be
      organize just for a fun purpose.</p>
    */}
    <h2>Rules</h2>
    <p>
      <ol style={{ color: "white" }}>
        <li>Drawing must be in a particular scale (1:50)</li>
        <li>Time: 60 minute per round</li>
      </ol>
    </p>
    {/* 
    <h2>Terms and Conditions</h2>
    <p>If there is any kind of damage to any equipment, then
      the participant will be responsible for it and will
      compensate for it.
    </p>
    */}
    <p style={{ marginTop: "20px" }}>
      For More Details <a
        style={{ color: "#ffbaff" }}
        href="https://docs.google.com/document/d/1xEmT-x1F52BqatlntCYV_VTzUc_GoeZL/edit?usp=sharing&ouid=106789508280481670729&rtpof=true&sd=true"
        target="_blank">Click Here</a>
    </p>
    <h2>Date of event</h2>
    <p>20 & 21 Feb 2023</p>
    <h2>Venue</h2>
    <p>Government college of engineering, Amravati</p>
    <h2>Entry Fee: Rs. 200</h2>
    <a style={{ textDecoration: "none", color: "white" }}
      href="https://surveyheart.com/form/63e880d036e5e053418cc653"
      target="_blank"><button>Register</button></a>
  </div>
</div>

  )
}

export default Events