import React from "react";
import { NavLink, Link } from "react-router-dom";
// import navimg from './images/logo2.png';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Navbar() {
  const [{ user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="  container-fluid navmain">
        <div className="row ">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              {/* <img src={navimg} className="imglogo" alt="homeimg"></img> */}
              <NavLink className="navbar-brand" to="/">
                Workforwin
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/"
                    >
                      Home{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link pr-3"  to="/contest"  >
                      Contest
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/course"
                    >
                      Course
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/projects"
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/free-job-alert"
                    >
                      Jobs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/competitive-coding"
                    >
                      Coding
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link pr-3"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <Link to="/login">
                    <button className="button ml-lg-5" onClick={handleAuthenticaton}>
                      <span>
                        <AccountCircleIcon className="navicon" />
                        {user ? "Sign Out" : "Sign In"}
                      </span>
                    </button>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
