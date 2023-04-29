import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

const NavBar = ({ isTeacher /* currentPage */ }) => {
  if (isTeacher) import("./teacher-nav.css");
  else import("./nav.css");

  const class_name = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <NavLink to="/" className={class_name}>
            Landing
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to={!isTeacher ? "/findclasses" : "/createclasses"}
            className={class_name}
          >
            {!isTeacher ? "Find Classes" : "Create Classes"}
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to={!isTeacher ? "/register" : "/editclasses"}
            className={class_name}
          >
            {!isTeacher ? "Registration" : "Edit Classes"}
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <a
            href="/"
            onClick={() => {
              signOut(auth).then(() => {
                window.location.reload();
              });
            }}
          >
            Log out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
