import React from 'react'
import './Footer.css';
import logofooter from '../../assets/logo.svg';
import iconphone from '../../assets/icon-phone.svg';
import iconemail from '../../assets/icon-email.svg';
import location from '../../assets/icon-location.svg';
import twitter from '../../assets/icons8-twitter.svg';
import facebook from '../../assets/icons8-facebook.svg';
import instagram from '../../assets/icons8-instagram.svg';

const Footer = () => {
  return (
    <div className='footer container'>
      <div className='footer-logo'>
        <img src={logofooter} alt="Logo" />
      </div>
     <div className='footer-container'>
      <div className='contact-txt'>
        <img src={location} alt="Location" />
        <p>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className='contact-icon'>
        <div className='phone'>
          <img src={iconphone} alt="Fone" />
          <p>+1-543-123-4567</p>
        </div>
        <div className='email'>
          <img src={iconemail} alt="Fone" />
          <p>exemple@fylo.com</p>
        </div>
      </div>
      <div className='links'>
        <ul>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/press">Press</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div className='link'>
        <ul>
          <li><a href="/contactus">Contact Us</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/privacy">Privacy</a></li>
        </ul>
      </div>
      <div className='social-media'>
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
      </div>
     </div>
    </div>
  )
}

export default Footer