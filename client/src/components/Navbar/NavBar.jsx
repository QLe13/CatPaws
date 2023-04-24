import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const NavBar = ({ isTeacher }) => {

  if (isTeacher)
    require('./teacher-nav.css');
  else
    require('./nav.css');

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a href="/">User Info</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/schedule">Schedule</a>
        </li>
        <li className="navbar__menu-item">
          <a href={!isTeacher ? "/findclasses" : "/createclasses"}>{!isTeacher ? "Find Classes" : "Create Classes"}</a>
        </li>
        <li className="navbar__menu-item">
          <a href={!isTeacher ? "/register": "/editclasses"}>{!isTeacher?"Registration":"Edit Classes"}</a>
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
