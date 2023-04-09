import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  FaTwitter, FaFacebookF, FaInstagramSquare, FaYoutube, FaLinkedin, FaRegCopyright,
} from 'react-icons/fa';

export default function Navbar() {
  const [view, setView] = useState('view');

  const handleView = () => {
    setView(view === '' ? 'view' : '');
  };

  /* Catch current URL */
  const params = useLocation();
  const pathView = params.pathname;

  const handleLogout = () => {
    localStorage.setItem('user', JSON.stringify(''));
  };

  return (
    <div className="navContainer">
      <GiHamburgerMenu onClick={handleView} className="hamView" />

      <div className={`${view} viewContainer`}>
        <p className="viewDoctors">Doctors</p>
        <Link to="/home" onClick={handleView}><p className={pathView === '/home' ? 'select' : ''}>Home</p></Link>
        <Link to="/reserve" onClick={handleView}><p className={pathView === '/reserve' ? 'select' : ''}>Reserve</p></Link>
        <Link to="/myreservations" onClick={handleView}><p className={pathView === '/myreservations' ? 'select' : ''}>My reservation</p></Link>
        <Link to="/add" onClick={handleView}><p className={pathView === '/add' || pathView === '/add2' ? 'select' : ''}>Add doctor</p></Link>
        <Link to="/delete" onClick={handleView}><p className={pathView === '/delete' ? 'select' : ''}>Delete doctor</p></Link>
        <a href="/" onClick={handleLogout}><p className="logout">Log out</p></a>
      </div>

      <div className="socialContainer">
        <div className="socialIcons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagramSquare />
          <FaYoutube />
          <FaLinkedin />
        </div>
        <p>
          <FaRegCopyright />
          2023 Doctors SAC
        </p>
      </div>

    </div>
  );
}
