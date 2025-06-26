import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-quote">“Code. Create. Contribute. Consistently.”</p>
      <p className="footer-built">Built with ❤️ using React & Vite</p>
      <p className="footer-contact">Let’s connect — youremail@example.com</p>
      <p className="footer-copy">© {new Date().getFullYear()} Himanshu Kushwaha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
