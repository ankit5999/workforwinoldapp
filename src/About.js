import React, { useEffect } from "react";
import InfoIcon from "@material-ui/icons/Info";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import Sidebar from "./Sidebar";
import LanguageIcon from "@material-ui/icons/Language";



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Helmet>
        <title>About us ~ Workforwin</title>
        <meta name="title" content="About ~ Workforwin" />
    <meta name="description" content="Workforwin is a top Web Designing and Development Company In India founded in 2020 by Ankit Kumar. Vision of the company is to provide best web development services to the business partners or clients." canonical="https://workforwin.com/about" />
    <meta name="keywords" content="Web Development company, Web Designing projects, web designing, web development, final year project idea, computer science project, project idea, website template, complete website design,eCommerce Website,Corporate Website, startup website, Small Business Website, SEO friendly website, Mobile Responsive website, Responsive website design" />
    <meta id="meta-description" name="description" content="Workforwin is a top Web Designing and Development Company In India founded in 2020 by Ankit Kumar. Vision of the company is to provide best web development services to the business partners or clients." canonical="https://workforwin.com/about" />
      <meta id="og-title" property="og:title" content="About ~ Workforwin" />
      </Helmet>
      <div className="container-fluid mt-lg-5 mt-1">
        <div className="row">
          <div className="col-12 col-lg-11 mx-auto">
            <div className="row">
              <div
                className="col-lg-8 ml-lg-5 order-2 "
                style={{ paddingBottom: "5px", marginRight: "4%" }}
              >
                <h2
                  style={{
                    fontSize: "1.7rem",
                    wordSpacing: "5px",
                    paddingTop: "2%",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #ff4a57",
                  }}
                >
                  <InfoIcon style={{ fontSize: "2rem", marginTop: "-5px" }} />{" "}
                  About Workforwin
                </h2>

                {/* ************ Blog Header ********** */}

                <div className=" col-12 mx-auto mt-5 mb-3">
                  <div className="row">
                    <div className="col-lg-4 order-1 order-lg-1">
                      <img
                        src="https://1.bp.blogspot.com/-7w1bHzmhBEk/X6VKB3OXH_I/AAAAAAAACfM/86RoDDuqbXsEjkr4eyDAOWtjPL842KhFgCLcBGAsYHQ/s16000/about.webp"
                        className="img-fluid "
                        alt=""
                      ></img>
                    </div>
                    <div className="col-md-8 pt-5 spl  pt-lg-0 order-1">
                      <h4 className="pt-lg-8">About The Company</h4>
                      <p className="my-3">
                        {" "}
                        Workforwin is a top Web Designing and Development
                        Company In India founded in 2020 by Ankit Kumar. Vision
                        of the company is to provide best web development
                        services to the business partners or clients.
                        <br></br>We started our journey by providing web
                        designing services to two local clients and Know we have
                        international clients growing their online business with
                        us. Client satisfaction is key to our success and we
                        commit to keep it at the top.{" "}
                      </p>
                      <h4 className="pt-lg-8">About Founder and CEO</h4>
                      <p className="my-3">
                        {" "}
                        Hi I'm Ankit Kumar<br></br>I am founder and CEO of
                        Workforwin along I'm a professional Web Developer. I
                        started my dream company in my final year of engineering
                        to solve the problem of local business firms.{" "}
                      </p>
                      <p>
                        Education is free and I believe in providing it to each
                        and every student of the country so along with my
                        business, I deliver project-based learning to learners
                        through my educational platforms. I also conduct
                        seminars on entrepreneurship so you can get in touch
                        with me through my social accounts.
                      </p>
                      <NavLink
                        exact
                        to={{ pathname: "https://youtube.com/workforwin/" }}
                        target="_blank"
                        className="aboutsocial"
                      >
                        <YouTubeIcon
                          className="yout"
                          style={{ fontSize: "2rem" }}
                        />
                      </NavLink>
                      <NavLink
                        exact
                        to={{
                          pathname:
                            "https://www.linkedin.com/in/ceoankityadav/",
                        }}
                        target="_blank"
                        className="aboutsocial"
                      >
                        <LinkedInIcon
                          className="linked"
                          style={{ fontSize: "2rem" }}
                        />
                      </NavLink>
                      <NavLink
                        exact
                        to={{ pathname: "https://twitter.com/ceoankityadav/" }}
                        target="_blank"
                        className="aboutsocial"
                      >
                        <TwitterIcon
                          className="twit"
                          style={{ fontSize: "2rem" }}
                        />
                      </NavLink>
                      <NavLink
                        exact
                        to={{ pathname: "/contact" }}
                        target="_blank"
                        className="aboutsocial"
                      >
                        <MailIcon
                          className="twit"
                          style={{ fontSize: "2rem" }}
                        />
                      </NavLink>
                      <NavLink
                        exact
                        to={{ pathname: "/" }}
                        target="_blank"
                        className="aboutsocial"
                      >
                        <LanguageIcon
                          className="twit"
                          style={{ fontSize: "2rem" }}
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div
                  className="aboutcard shadow mt-5"
                  style={{
                    backgroundImage: `url(https://1.bp.blogspot.com/-71luBXFRA4Y/X6VKA7ttI_I/AAAAAAAACfA/gpFz5vSGincfTeIXyX1kvRTbcTlPLKcpQCLcBGAsYHQ/s16000/Aboutus%2Bservices.webp)`,
                    backgroundSize: "cover",
                    height: "30vh",
                    borderRadius: "5px",
                  }}
                ></div>

                <div className=" col-12 mx-auto mt-5 mb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src="https://1.bp.blogspot.com/-lge7De4zSRE/X6VKA3XTcaI/AAAAAAAACfE/oPDj8UqRm9sgd0aK0C41NmHjH3EDPRczwCLcBGAsYHQ/s16000/Internship.webp"
                        className="img-fluid "
                        alt=""
                      ></img>
                    </div>
                    <div className="blogheader col-md-6 pt-5 spl  pt-lg-0">
                      <h4 className="pt-lg-8">Get Internship @Workforwin</h4>
                      <p className="my-3">
                        For Engineering and non-engineering students who have a
                        passion for getting into the corporate IT industry for
                        them, <b>Workforwin provides internship</b> and give
                        them an opportunity of working with IT professional. For
                        more information, you can <NavLink
                          to="/contact"
                          style={{ textDecoration: "none" }}
                        >contact us
                        </NavLink>
                        or email us at <span style={{ color: "green" }}>
                          teamworkorwin@gmail.com
                        </span>
                      </p>
                        <NavLink className="a" target="blank" to="/internship-2021">
                        <button className="button mb-5">
                          <span> Apply Here </span>
                          </button>
                        </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* ************ Blog Header End ********** */}

              {/* ******* Side Bar Start******** */}

              <Sidebar />

              {/* ******* Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
