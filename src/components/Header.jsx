import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>My App</h1> {/* You can replace this with an actual logo */}
      </div>
      
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
