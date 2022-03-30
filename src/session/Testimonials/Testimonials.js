import React from 'react'
import './Testimonials.css';
import profile1 from '../../assets/profile-1.jpg';
import profile2 from '../../assets/profile-2.jpg';
import profile3 from '../../assets/profile-3.jpg';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='testimonial container'>
            <div className='testimonials-item'>
                  <p>Fylo has improved our team productivity by
                  an order of magnitude. Since making the
                  switch our team has become a well-olled 
                  collaboration machine.
                  </p>
                  <div className='client-name'>
                      <img src={profile1} alt="Profile" />  
                      <h4>Satiche Patel<br/> <span>Founder CEO, Huddle</span></h4>
                  </div>
            </div>
            <div className='testimonials-item'>
                  <p>Fylo has improved our team productivity by
                  an order of magnitude. Since making the
                  switch our team has become a well-olled 
                  collaboration machine.
                  </p>
                  <div className='client-name'>
                      <img src={profile2} alt="Profile" />  
                      <h4>Satiche Patel<br/> <span>Founder CEO, Huddle</span></h4>
                  </div>
            </div>
            <div className='testimonials-item'>
                  <p>Fylo has improved our team productivity by
                  an order of magnitude. Since making the
                  switch our team has become a well-olled 
                  collaboration machine.
                  </p>
                  <div className='client-name'>
                      <img src={profile3} alt="Profile" />  
                      <h4>Satiche Patel<br/> <span>Founder CEO, Huddle</span></h4>
                  </div>
            </div>
          </div>
        </div>
  )
}

export default Testimonials