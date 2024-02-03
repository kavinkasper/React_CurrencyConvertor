import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className="icon" />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2024 Currency Converter App</p>
          <p style={{marginLeft:"30px"}}>Created by Kavin Kumar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
