import React from 'react'
import './Intro.css';
import introimg from '../../assets/illustration-intro.png';
import Button from '../../Components/Button/Button'; 

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-img'>
        <img src={introimg} alt="introdução" />
      </div>
      <div className='intro-txt'>
        <h2>All your files in one secure location, accessible anywhere.</h2>
          <p>Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends family,
            and co-workers.
          </p>
      </div>
      <Button width="260px" margin="0 auto" text="Get Started" />
    </div>
  )
}

export default Intro