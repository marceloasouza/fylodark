import React from 'react'
import './Products.css';
import access from '../../assets/icon-access-anywhere.svg';
import security from '../../assets/icon-security.svg';
import realtime from '../../assets/icon-collaboration.svg';
import anyfile from '../../assets/icon-any-file.svg';

const Products = () => {
  return (
    <div className='products'>
      <div className='products-container'>
        <div className='product-item'>
          <img src={access} alt="access" />
          <h3>Access your files, anywhere</h3>
          <p>The abillity to use a smartphone, tablet, or computer
            to access your account means your files follow you everyhere.
          </p>
        </div>
        <div className='product-item'>
          <img src={security} alt="" />
          <h3>Access your files, anywhere</h3>
          <p>The abillity to use a smartphone, tablet, or computer
            to access your account means your files follow you everyhere.
          </p>
        </div>
        <div className='product-item'>
          <img src={realtime} alt="" />
          <h3>Access your files, anywhere</h3>
          <p>The abillity to use a smartphone, tablet, or computer
            to access your account means your files follow you everyhere.
          </p>
        </div>
        <div className='product-item'>
          <img src={anyfile} alt="" />
          <h3>Access your files, anywhere</h3>
          <p>The abillity to use a smartphone, tablet, or computer
            to access your account means your files follow you everyhere.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Products