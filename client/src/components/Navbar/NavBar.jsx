import React from 'react';
import './auth.css';
import Cookies from 'universal-cookie';

function NavBar(props) {
  const deleteCookies = (cookies) =>{
    cookies.remove('curUser')
    return
  }

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item"><a href="/">User Info</a></li>
        <li className="navbar__menu-item"><a href="/">Schedule</a></li>
        <li className="navbar__menu-item"><a href="/register">Registration</a></li>
        <li className="navbar__menu-item"><a href="/findclasses">Find Classes</a></li>
        <li className="navbar__menu-item"><a href="/" onClick={()=>deleteCookies(props.cookies)}>Log out</a></li> 
        {/* We can make the log out button double confirmation about logging out later on */}
      </ul>
    </nav>
  );
}

export default NavBar;
