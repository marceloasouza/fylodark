import React from 'react'
import './Productive.css';
import productive from '../../assets/illustration-stay-productive.png';
import iconarrow from '../../assets/icon-arrow.svg';

const Productive = () => {
  return (
    <div className='productive'>
      <div className='produ'>
        <div className='productive-img'>
          <img src={productive} alt="Productive" />
        </div>
        <div className='productive-txt'>
          <h2>Stay productive,<br/> wherever you are</h2>
          <p>Never let location be an issue when accessing your files. Fylo has you
            covered for all of your file starage needs.<br/><br/>
            Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required.
          </p>
          <a href='/'>
            See how fylo works
            <img src={iconarrow} alt="" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Productive