import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink } from 'react-router-dom';


const NavBar = ({ isTeacher, currentPage }) => {

  if (isTeacher)
    require('./teacher-nav.css');
  else
    require('./nav.css');

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <NavLink to="/" exact activeClassName="active">User Info</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/schedule" exact activeClassName="active">Schedule</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to={!isTeacher ? "/findclasses" : "/createclasses"} exact activeClassName="active">{!isTeacher ? "Find Classes" : "Create Classes"}</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to={!isTeacher ? "/register": "/editclasses"} exact activeClassName="active">{!isTeacher?"Registration":"Edit Classes"}</NavLink>
        </li>
        <li className="navbar__menu-item">
          <a href="/" onClick={() => {
            signOut(auth)
            .then(() => {
              window.location.reload();
            })
          }}>Log out</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
