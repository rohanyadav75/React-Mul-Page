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
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/service" onClick={closeMenu}>Service</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/hook" onClick={closeMenu}>Hook</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;


