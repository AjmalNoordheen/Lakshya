import React from 'react'
import './Register.css'


function Register() {
  return (
    <>
    <div className="header">
    <h1 style={{ fontWeight: "bold" }}>REGISTRATION</h1>
  </div>
    <div className="container">
     
  <form action="#">
    <div className="container__main-user-info">
      {/* the elements in form */}
      <div className="container__user-input-box">
        <label htmlFor="fullName">First Name</label>
        <input type="text" id="container__firstName" name="fullName" placeholder="Enter first name" />
      </div>
      <div className="container__user-input-box">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="container__lastName" name="lastName" placeholder="Enter last name" />
      </div>
      <div className="container__user-input-box">
        <label htmlFor="Email">Email</label>
        <input type="text" id="container__email" name="email" placeholder="Enter email" />
      </div>
      <div className="container__user-input-box">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="container__phoneNumber" name="phoneNumber" placeholder="+910000000000" />
      </div>
      <div className="container__user-input-box">
        <label htmlFor="College">College Name</label>
        <input type="text" id="container__collegeName" name="CollegeName" placeholder="College name" />
      </div>
      <div className="container__user-input-box" id='address'>
        <label htmlFor="address">Address</label>
        <textarea type="text"  id="container__address" name="address" placeholder="Current address" ></textarea>
      </div>
    </div>
    <div className="container__gender-details-box">
      <span className="container__gender-title">Gender</span>
      <div className="container__gender-category">
        <input type="radio" name="gender" id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="other" />
        <label htmlFor="other">Other</label>
      </div>
    </div>
    <button className="container__btnOne" type="button" onClick={() => { window.location.href = '#' }}>Register</button>
  </form>
</div>
</>

  )
}

export default Register