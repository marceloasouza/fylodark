import React from 'react'
import './Button.css';


const Button = (props) => {
  return (
    <button
      style={{ margin: `${props.margin}`, width: `${props.width}`}}
      >
      {props.text}
      </button>
  )
}

export default Button