import React from 'react'
import Button from '../../Components/Button/Button';
import './Form.css';

const Form = () => {
  return (
    <div className='form'>
      <div className='form-container'>
          <h2>Get early access today</h2>
          <p>It only takes a minute to sign up and our free starter is extremely
            generous. If you have any questions, our support tem would be happy to help you.
          </p>
          <div className='form-email'>
            <input type="text" placeholder='email@exemple.com'/>
            <Button width="170px" text="Get Started For Free" />
          </div>
      </div>
    </div>
  )
}

export default Form