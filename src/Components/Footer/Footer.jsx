import React from "react";
import "./Footer.css";
import logo from "../../assets/react.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            tenetur sunt, odit necessitatibus inventore nesciunt quae, ipsum
            voluptate asperiores assumenda natus eius saepe doloremque?
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2025 jounur-rahman.com - All Rights Reserved.
        </div>
        <div className="footer-bottom-right">
          <p>Term of servise</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
