import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Stylist</h1>
      <div className="header-buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
