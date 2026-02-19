import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-quote">Code. Create. Contribute. Consistently.</p>
      <p className="footer-built">Built with React and Vite</p>
      <p className="footer-contact">Let us connect at hk5652990@gmail.com</p>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Himanshu Kushwaha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
