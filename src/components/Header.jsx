import React from 'react';
import { useNavigate } from 'react-router';
import './Header.css'; // Import the CSS file

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <h1>My App</h1>
      </div>
      
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-link" onClick={() => navigate('/')}>Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => navigate('/login')}>Log In</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => navigate('/about')}>About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => navigate('/contact')}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;