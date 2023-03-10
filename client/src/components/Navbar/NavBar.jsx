import React from 'react';
import './nav.css';
import { useLocation } from 'react-router-dom';

function NavBar(props) {
  const deleteCookies = (cookies) =>{
    cookies.remove('curUser')
  }
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a href="/" className={currentPage === 'userInfo' ? 'selected' : ''}>User Info</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/schedule" className={currentPage === 'userInfo' ? 'selected' : ''}>Schedule</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/findclasses" className={currentPage === 'userInfo' ? 'selected' : ''}>Find Classes</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/register" className={currentPage === 'userInfo' ? 'selected' : ''}>Registration</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/" onClick={() => deleteCookies(props.cookies)}>Log out</a>
        </li> 
        {/* We can make the log out button double confirmation about logging out later on */}
      </ul>
    </nav>
  );
}

export default NavBar;
