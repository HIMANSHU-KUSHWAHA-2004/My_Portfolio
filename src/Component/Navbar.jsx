import { useState, useEffect } from "react";
import "../App.css";
import "./Navbar.css";

const navLinks = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Coding-Profiles",
  "Experience",
  "Projects",
  "Contact-me",
];

// ✅ Proper initialization to default dark mode
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // default to dark
  });

  // 🔄 Sync body class and localStorage
  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">Himanshu Kushwaha</div>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <button onClick={() => setDark(!dark)} className="toggle-btn">
            {dark ? "Light" : "Dark"}
          </button>
          <div
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            &#9776;
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            className="mobile-toggle-btn"
            onClick={() => {
              setDark(!dark);
              setMobileMenuOpen(false);
            }}
          >
            {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
