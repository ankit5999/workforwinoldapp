import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./Social";

const Footer = () => {
  return (
    <>
      <footer className=" foo font-small ">
        <div className="footer-section ">
          <div className="up-section col-10 mx-auto">
            <div className="footer-logo col-md-4">
              <NavLink className="navbar-brand" to="/">
                Workforwin
              </NavLink>
              {/* <NavLink className="a" to="/"><img src={img} className="imglogo" alt="Workforwin" /> </NavLink> */}
              <p className="pt-4 pb-3">
                We @workforwin are considered as the topmost web service
                provider firm. We believe in building our client's trust by
                providing them effective services. We provide 24/7 services to
                our clients and help them in running their business.
              </p>
              <Social />
            </div>
            <ul>
              <h2>Company</h2>
              <li>
                <NavLink className="a" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/about">
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/contact">
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/about">
                  About us
                </NavLink>
              </li>
            </ul>
            <ul>
              <h2>Services</h2>
              <li>
                <NavLink className="a" to="#">
                  SEO service
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="#">
                  Web Designing Service
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="#">
                  Web Development Service
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="#">
                  Digital Marketing Service
                </NavLink>
              </li>
            </ul>
            <ul>
              <h2>Courses</h2>
              <li>
                <NavLink target="blank" className="a" to="/competitive-coding">
                  Competitive Coding
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="#">
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="blank"
                  className="a"
                  to="#"
                >
                  Python Programming
                </NavLink>
              </li>
            </ul>
          </div>
          <p className="foop text-center">
            &copy; 2021 Workforwin | All Rights Reserved |{" "}
            <NavLink to="/privacy" target="blank" className="a">
              <span style={{ color: "#ff4a57" }}>Privacy</span>
            </NavLink>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
