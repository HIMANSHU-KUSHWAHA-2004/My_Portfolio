import { useState } from "react";
import "../App.css";
import "./Navbar.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "coding-profiles", label: "Coding Profiles" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact-me", label: "Contact" },
];

function Navbar({ theme, onToggleTheme, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeLabel = theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">&lt;/Himanshu&gt;</div>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? "active-nav-link" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <button onClick={onToggleTheme} className="toggle-btn" aria-label="Toggle theme">
            Theme: {themeLabel}
          </button>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            &#9776;
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-link ${activeSection === link.id ? "active-mobile-link" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mobile-toggle-btn"
            onClick={() => {
              onToggleTheme();
              setMobileMenuOpen(false);
            }}
          >
            Switch Theme ({themeLabel})
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
