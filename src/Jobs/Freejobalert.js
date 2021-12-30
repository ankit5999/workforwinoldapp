import React, { useEffect } from "react";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Helmet } from "react-helmet";
import Rightbar from "./Rightbar";
import Leftbar from "./Leftbar";
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { NavLink } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Freejobalert = () => {





  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Free Job Alert For Fresher Engineers ~ Workforwin</title>
        <meta name="title" content="Free Job Alert For Fresher Engineers ~ Workforwin" />
        <meta name="description" content="Data Science Internship is very easy to get in India. As we all know technology is growing very fast, we are using technology regularly in our daily life, and that is producing a huge amount of data." canonical="https://workforwin.com/free-job-alert"  />
        <meta name="keywords" content="Data Science, Free Job Alert For Fresher Engineers, data science job ,dat science interview question, data science interview, workforwin" />
        <meta id="meta-description" name="description" content="Data Science Internship is very easy to get in India. As we all know technology is growing very fast, we are using technology regularly in our daily life, and that is producing a huge amount of data."  canonical="https://workforwin.com/free-job-alert" />
        <meta id="og-title" property="og:title" content="Free Job Alert For Fresher Engineers ~ Workforwin" />
      </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
              {/* ******** Left Side Bar ********* */}
              <Leftbar />
              {/* ******** Left Side Bar ********* */}
              <div className="col-lg-7 order-1 shadow-lg" style={{ paddingRight: "10px", paddingBottom: "5px" }} >
               <h1 style={{ fontSize: "1.7rem", wordSpacing: "5px", paddingTop: "2%", paddingBottom: "15px", borderBottom: "1px solid #ff4a57", color: "#ff4a57", textAlign:"center"}} >
                <NotificationsActiveIcon style={{ fontSize: "2.1rem", marginTop: "-5px", color: "#ff4a57", }} /> Free Job Alert For Fresher Engineers </h1>
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
                <h4 className="blinking" style={{ color: "#302424" }}><NewReleasesIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Free Job Alert</h4>
                
                <p>Get free job alert on your mobile. Workforwin provides free job alerts for freshers and engineers. Here you will get all types of latest jobs like gov jobs, IT jobs, bank jobs, PSU jobs. </p> 

 <div className="row mt-lg-5">
  <div className="col-sm-6">
  <div className="card shadow mb-3">
  <div className="card-header">Google</div>
  <div className="card-body text-success">
    <h5 className="card-title">Software Engineer, Graduate 2021</h5>
    <p className="card-text">Minimum qualifications:
    <br></br><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} />Bachelor's degree in Computer Science, related technical field or equivalent practical experience.
<br></br><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} />Experience in computer science, data structures, algorithms and software design.
<br></br><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} />Experience in Software Development and coding in a general purpose programming language.</p>
<NavLink target="blank" className="btn btn-success" exact to={{ pathname: "https://careers.google.com/jobs/results/140314437895496390/" }} style={{textDecoration:"none"}}>
 Apply Now </NavLink>
  </div>
</div>
  </div>
  
  <div className="col-sm-6">
  <div className="card shadow mb-3">
  <div className="card-header">Amazon</div>
  <div className="card-body text-info">
    <h5 className="card-title">Software Development Engineer II</h5>
    <p className="card-text">Minimum qualifications:
    <br></br><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} />Bachelors or Master’s Degree in Computer Science or related field.
<br></br><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} />4+yrs to 12 years of industry experience. Solid expertise in Data Structures and Algorithms.
<br></br><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} />Solid experience in C, C++, Java or Python (expert in at least one).</p>
<NavLink target="blank" className="btn btn-info" exact to={{ pathname: "https://www.amazon.jobs/en/jobs/971295/software-development-engineer-i" }} style={{textDecoration:"none"}}>
 Apply Now </NavLink>
  </div>
</div>
  </div>
</div>





              </div>

              {/* ******* Right Side Bar Start******** */}
              <Rightbar />
              {/* ******* Right Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Freejobalert;
