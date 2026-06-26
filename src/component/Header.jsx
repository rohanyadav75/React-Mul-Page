import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hamheader.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">YourLogo</div>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <Link to="/" end>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
     


      </nav>

      {/* Hamburger Icon */}
      {!menuOpen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          ☰
        </div>
      )}


      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={closeMenu}>
          ✕
        </div>

        <nav className="mobile-links">
          <Link to="/" end onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/service" onClick={closeMenu}>Service</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;


