import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className=" paddings innerWidth footer-content">
        <div className="footer-logo logo">
          <img src="./logo.png.png" alt="Website Logo" />
          <h1>Studybuddy</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
        <ul>
        <h3 className="flexcColStart
        ">Coming soon on</h3>
          <li><a href="https://www.facebook.com/yourpage"><FaFacebook /></a>Facebook</li>
          <li><a href="https://wa.me/yourphonenumber"><FaWhatsapp /></a>Whatsapp</li>
          <li><a href="https://www.instagram.com/yourprofile"><FaInstagram /></a>Instagram</li>
        </ul>
      </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
