import React, { useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Helmet } from "react-helmet";
import HelpIcon from "@material-ui/icons/Help";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import WarningIcon from "@material-ui/icons/Warning";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeIcon from "@material-ui/icons/Code";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { NavLink } from "react-router-dom";

const Web1sourcecode = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Htmlcode = ` 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Web Development Project ~ Workforwin</title>
</head>

<body>
    <div class="hero">
        <div class="navbar">
            <img src="images/logo2.png" class="logo" alt="" />
            <a href="https://workforwin.com/login"><button type="button">Sign Up</button></a>
        </div>
        <div class="content">
            <span>Welcome to</span>
            <h1>Workforwin</h1>
            <a href="https://workforwin.com/"><button type="button">Know More</button></a>
        </div>
        <div class="sidebar">
            <img src="images/menu.png" class="menu" alt="">
            <a href="https://linkedin.com/in/ceoankityadav">
                <h3 class="sidetexttop">@ceoankityadav</h3>
            </a>
            <div class="social-link">
                <img src="images/fb.png" alt="">
                <img src="images/ig.png" alt="">
                <img src="images/tw.png" alt="">
                <a href="https://workforwin.com/">
                    <h3 class="sidetext">Workforwin.com</h3>
                </a>
            </div>
            <div class="useful-link">
                <img src="images/share.png" alt="">
                <img src="images/info.png" alt="">
            </div>
        </div>
        <div class="bubbles">
            <img src="images/bubble.png" alt="">
            <img src="images/bubble.png" alt="">
            <img src="images/bubble.png" alt="">
            <img src="images/bubble.png" alt="">
            <img src="images/bubble.png" alt="">
            <img src="images/bubble.png" alt="">
            <img src="images/bubble.png" alt="">
        </div>
    </div>
</body>

</html>
    `;
  const csscode = ` 
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  .hero {
    width: 100%;
    height: 100vh;
    background-image: url(images/background.png);
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
  }
  .logo {
    width: 200px;
    cursor: pointer;
  }
  .navbar {
    width: 85%;
    height: 15%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    color: #fbfcfd;
    padding: 10px 25px;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
  }
  .content {
    color: #fbfcfd;
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);
    z-index: 2;
  }
  h1 {
    font-size: 80px;
    margin: 10px 0 30px;
    line-height: 80px;
  }
  .sidebar {
    width: 50px;
    height: 100vh;
    background: linear-gradient(#00545d, #000729);
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu {
    display: block;
    width: 25px;
    margin: 40px auto 0;
    cursor: pointer;
  }
  .social-link img,
  .useful-link img {
    width: 25px;
    margin: 5px auto;
    cursor: pointer;
  }
  .social-link {
    width: 50px;
    text-align: center;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
  }
  .useful-link {
    width: 50px;
    text-align: center;
    position: absolute;
    bottom: 30px;
  }
  .sidetext {
    writing-mode: vertical-lr;
    color: white;
    padding: 12px;
    margin-top: 30px;
  }
  .sidetexttop {
    writing-mode: vertical-lr;
    color: white;
    padding: 12px;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .bubbles img {
    width: 50px;
    animation: bubble 7s linear infinite;
  }
  .bubbles {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: -70px;
  }
  
  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh);
      opacity: 0;
    }
  }
  
  .bubbles img:nth-child(1) {
    animation-delay: 2s;
    width: 25px;
  }
  .bubbles img:nth-child(2) {
    animation-delay: 1s;
  }
  .bubbles img:nth-child(3) {
    animation-delay: 3s;
    width: 25px;
  }
  .bubbles img:nth-child(4) {
    animation-delay: 4.5s;
  }
  .bubbles img:nth-child(5) {
    animation-delay: 3s;
  }
  .bubbles img:nth-child(6) {
    animation-delay: 6s;
    width: 20px;
  }
  .bubbles img:nth-child(7) {
    animation-delay: 7s;
    width: 30px;
  }
  
    `;

  return (
    <>
      <Helmet>
        <title>Build A Simple Webpage In HTML & CSS </title>
        <meta name="title" content="Build A Simple Webpage In HTML & CSS ~ Workforwin" />
        <meta name="description" content="Build A Simple Webpage In HTML & CSS that will land you a $1000 job. Get source code of your web page." canonical="https://ceoankityadav.github.io/wd-project1/" />
        <meta name="keywords" content="How to build website, Job, How to build website for job, computer science job, how to make website, web development project, web development, web designing,react, reactjs, react project, react bootstrap, create react app " />
      <meta id="meta-description" name="description" content="Build A Simple Webpage In HTML & CSS that will land you a $1000 job. Get source code of your web page." canonical="https://ceoankityadav.github.io/wd-project1/" />
      <meta id="og-title" property="og:title" content="Build A Simple Webpage In HTML & CSS ~ Workforwin" />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
              {/* ******** Left Side Bar ********* */}
              <div className="col-md-2 pr-lg-4  mt-5 order-2 order-lg-1 ">
                {/* <NavLink exact to={{ pathname:"https://workforwin.com/"}} target="_blank" style={{color:"blue"}}><img src="https://lh3.googleusercontent.com/qAWQetgeCuT2rsQXLSbLKvObBf-d3kdP02suSKTaQvO-z2WvMCb6Eux4gb_OynEh7NmDr70VknHYeUIF2ywWogfXmf5ckGzP-oDp0MvCclUSbk0MzVsDVSo7WbZIHSq05he7nRc2qQ=w2400" className="img-fluid" alt="Data Sceicnce"></img></NavLink> */}
              </div>
              {/* ******** Left Side Bar ********* */}
              <div className="col-lg-8 order-1 shadow-lg " style={{ paddingRight: "20px", paddingBottom: "5px" }} >
                <h1 style={{ fontSize: "1.7rem", wordSpacing: "5px", paddingTop: "2%", paddingBottom: "15px", borderBottom: "1px solid #ff4a57", color: "#ff4a57", }} >
                  <HelpIcon style={{ fontSize: "2.1rem", marginTop: "-5px", color: "#ff4a57", }} />{" "}
                  Build A Simple Webpage In HTML & CSS </h1>

                <div className="alert alert-danger alert-dismissible fade show" role="alert" >
                  <WarningIcon className="mr-3" style={{ fontSize: "2rem" }} />
                  <strong>Alert!</strong> You should have basic knowledge of web development.
                  <NavLink to={{ pathname: "https://youtube.com/workforwin/" }} target="_blank" className="alert-link" > Learn Web Development </NavLink>.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <h4 style={{ color: "rgba(79,172,254,.8)" }}>
                  <ArrowRightAltIcon style={{ fontSize: "2.1rem", marginTop: "-5px", color: "rgba(79,172,254,.8)", }} /> Agenda: </h4>
                <p className="ml-lg-5"> Today we are going to create a simple web page in HTML & CSS. </p>

                <div className="col-sm-6 center">
  <div className="shadow mb-3 mt-3" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
  <div className="card-header text-success ">Image</div>
  <div className="card-body text-success">
<img src="https://1.bp.blogspot.com/-unjGCrDJTIc/X-FV1pR9L4I/AAAAAAAACvQ/IjkCXjDcyKkPvBXeZzTaoxpndF6CpblEQCLcBGAsYHQ/s16000/wd%2Bproject1.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
  </div>
</div>
  </div>

                <h4 style={{ color: "#a64eee" }}>
                  <CodeIcon
                    style={{
                      fontSize: "2.1rem",
                      marginTop: "-5px",
                      color: "#a64eee",
                    }}
                  />{" "}
                  Html Code{" "}
                </h4>

                <SyntaxHighlighter language={js} style={prism}>
                  {Htmlcode}
                </SyntaxHighlighter>

                <div className="col-sm-6 center">
  <div className="card shadow mb-3 mt-3">
  <div className="card-header text-danger">Video</div>
  <div className="card-body text-danger embed-responsive embed-responsive-16by9">
<iframe className="embed-responsive-item center"  src="https://www.youtube.com/embed/AldT3ki0uxU?controls=0"  title='Google Interview' controls="0" style={{borderRadius: "15px"}}></iframe>
  </div>
</div>
  </div>

                <h4 style={{ color: "#a64eee" }}>
                  <CodeIcon
                    style={{
                      fontSize: "2.1rem",
                      marginTop: "-5px",
                      color: "#a64eee",
                    }}
                  />{" "}
                  Css Code{" "}
                </h4>

                <SyntaxHighlighter language={js} style={prism}>
                  {csscode}
                </SyntaxHighlighter>

                <div className="alert alert-success alert-dismissible fade show" role="alert" >
                  <WarningIcon className="mr-3" style={{ fontSize: "2rem" }} />
                  <strong>Alert!</strong> Download Source Code Zip file and Images.
                  <NavLink to={{ pathname: "https://github.com/ceoankityadav/wd-project1" }} target="_blank" className="alert-link" > Click Here </NavLink>.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className=" col-12 mx-auto mt-5 mb-3">
                  <div className="row">
                    <div className="col-lg-1 mhide">
                      <AccountCircleIcon
                        style={{ fontSize: "3.5rem", color: "gray" }}
                      />
                    </div>
                    <div className="col-lg-11 pt-2">
                      <h3
                        style={{
                          fontSize: "1rem",
                          wordSpacing: "5px",
                          paddingBottom: "15px",
                          color: "#000",
                        }}
                      >
                        Contributor:{" "}
                        <span style={{ color: "gray" }}>
                          {" "}
                          <NavLink
                            exact
                            to={{
                              pathname:
                                "https://www.linkedin.com/in/ceoankityadav/",
                            }}
                            target="_blank"
                            className="alert-light alert-link"
                          >
                            @ankitkumar
                          </NavLink>
                        </span>
                        <br></br>Post on:
                        <span style={{ color: "gray" }}> 22/12/20 </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* ******* Right Side Bar Start******** */}
              <div
                className="col-md-2   pt-lg-0 order-2 order-lg-1 "
                style={{ paddingLeft: "1%" }}
              >
                {/* <NavLink exact to={{ pathname:"https://workforwin.com/"}} target="_blank" style={{color:"blue"}}><img src="https://lh3.googleusercontent.com/FYFfLo2IKOZQEw6bRouaUtZynpKnmj3uLbw5rto5bsUuteSxT_eIRd6lR45KVXir7wZaOTCRmANgSDyIhkRgfl3WTlpsVtS0BfE8yH6IP4TfdLBH41gxy22_muC-8GK32ex1wVcrdA=w2400" className="img-fluid shadow mt-5" alt="webcourse" ></img></NavLink> */}
              </div>
              {/* ******* Right Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Web1sourcecode;
