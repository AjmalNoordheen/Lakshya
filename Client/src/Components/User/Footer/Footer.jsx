import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main container (main div) */}
        <div className="footer-row">
          <div className="footer-col">
            {/* Column 01 */}
            <img src="/logo.jpg" alt="fg" className="footer-logo" />
            {/* Prajwalan logo */}
          </div>

          <div className="footer-col">
            {/* Column 02 */}
            <h4>Address</h4>
            {/* Column heading */}
            <p>Government Engineering College Kozhikode</p>
            <p>Westhill, Calicut</p>
            <p>Pin-6736005</p>
            {/* Gcoea Website */}
          </div>

          <div className="footer-col">
            {/* Column 03 */}
            <h4>Help</h4>
            {/* Column heading */}
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </div>

          <div className="footer-col">
            {/* Column 04 */}
            <h4>follow us</h4>
            {/* Column heading */}
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
