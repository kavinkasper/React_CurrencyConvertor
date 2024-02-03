import React from 'react'
import logo from "../curr.png"
import "../Header.css";

const Header = () => {
  return (
    <div className='header-container'>
    <img
      src={logo}
      alt="Currency Converter"
      className='header-logo'
    />
    <h1 className='header-title'>Xe Currency Converter</h1>
  </div>
  )
}

export default Header