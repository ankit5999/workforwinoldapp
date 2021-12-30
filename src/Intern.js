import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { NavLink } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import Internad from "./Internad";



const Intern = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Internship 2021 ~ Workforwin</title>
        <meta name="title" content="Internship 2021 why should you be hired for this internship" />
        <meta name="description" content="Internship 2021, why should you be hired for internship at workforwin even you are searching for fresher internship." />
        <meta name="keywords" content="Internship 2021, why should you be hired for this internship, internship, summer internship 2020, the internship, internship certificate, virtual internship, what is internship, workforwin" />
        <meta id="meta-description" name="description" content="Data Science Internship is very easy to get in India. As we all know technology is growing very fast, we are using technology regularly in our daily life, and that is producing a huge amount of data. " />
        <meta id="og-title" property="og:title" content="Internship 2021 why should you be hired for this internship" />
      </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
            
              <div className="col-lg-7 order-1 shadow-lg center" style={{ paddingRight: "10px", paddingBottom: "5px" }} >
               <h1 className="blinking" style={{ fontSize: "1.7rem", wordSpacing: "5px", paddingTop: "2%", paddingBottom: "15px", color: "gray", textAlign:"center"}} >
               <NewReleasesIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Hurry Up! </h1>
               {/* <Internad /> */}

 <div className="row">
  <div className="col-sm-12">

  <div className="card shadow mb-3" style={{border:"2px solid gray"}}>
  <div className="card-header"><h3 style={{textAlign:"center"}}>Internship 2021 @workforwin</h3></div>
  <div className="row">
                    <div className="col-lg-5">
                      <img
                        src="https://1.bp.blogspot.com/-v339XK3sHek/X89zKxWfroI/AAAAAAAACrs/EqUUeabXqIIiV0hWB3qzp5iADtq9HY_pwCLcBGAsYHQ/s16000/Intern%2Bad.webp"
                        className="img-fluid "
                        alt=""
                      ></img>
                    </div>
                    <div className="blogheader col-md-7 pt-5 pt-lg-0">
                      <h4 className="pt-lg-4">Read Before Applying</h4>
                      <p className="my-3">
                      Filling the form not means you are hired.<br></br> 
Our team will contact you based on your knowledge and conduct an interview.<br></br>
If you pass our tech interview you will get a mail.<br></br>
For any query you can <NavLink
                          to="/contact"
                          style={{ textDecoration: "none" }}
                        > contact us
                        </NavLink>{" "}
                        or email us at{" "}
                        <span style={{ color: "green" }}>
                          teamworkorwin@gmail.com
                        </span>
                      </p>
                      <h4>Who can apply?</h4>
                      <p>Engineering and non-engineering students who have a
                        passion for getting into the corporate IT industry.</p>
                      <h4>Requirements</h4>
                      <p><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Web Development<br></br>
                      <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Web Designing<br></br>
                      <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> SEO ( search engine optimization )<br></br>
                      <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Blogging / Content Writing</p>
                        <NavLink target="_blank" className="a" exact to={{pathname:"https://forms.gle/RVUUVA5qLRBcEmnz9"}}>
                          <button className="button mb-5">
                          <span> Apply Here </span>
                          </button>
                        </NavLink>
                    </div>
                  </div>
</div>
  </div>
</div>


              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intern;
