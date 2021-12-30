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

const Christmas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Htmlcode = ` 
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Workforwin</title>
      <style>
          body {
              margin: 0;
              padding: 0;
          }
          .bg {
              background: url(background1.jpg) no-repeat;
              overflow: hidden;
              height: 100%;
              background-size: cover;
              position: relative;
          }
          .roundSmall,
          .roundMedium,
          .roundLarge {
              background: #fff;
              border-radius: 50%;
              position: absolute;
              width: 3px;
              height: 3px;
          }
          .roundMedium {
              width: 4px;
              height: 4px;
          }
          .roundLarge {
              width: 5px;
              height: 5px;
          }
          .starSmall,
          .starMedium,
          .starLarge {
              position: absolute;
              width: 10px;
              height: 10px;
              background: url(http://www.freepngimg.com/thumb/snowflakes/52-snowflake-png-image-thumb.png);
              background-size: 100% 100%;
          }
          .starMedium {
              width: 15px;
              height: 15px;
          }
          .starLarge {
              width: 20px;
              height: 20px;
          }
          .realSmall,
          .realMedium,
          .realLarge {
              position: absolute;
              width: 25px;
              height: 25px;
              background: url(http://pngimg.com/upload/snowflakes_PNG7576.png);
              background-size: 100% 100%;
          }
          .realMedium {
              width: 30px;
              height: 30px;
          }
          .realLarge {
              width: 40px;
              height: 40px;
          }
          .sharpSmall,
          .sharpMedium,
          .sharpLarge {
              position: absolute;
              width: 20px;
              height: 20px;
              background-size: 100% 100%;
              background: url(http://pngimg.com/upload/snowflakes_PNG7559.png);
              background-size: 100% 100%;
          }
          .sharpMedium {
              width: 28px;
              height: 28px;
          }
          .sharpLarge {
              width: 35px;
              height: 35px;
          }
          .ringSmall,
          .ringMedium,
          .ringLarge {
              position: absolute;
              width: 15px;
              height: 15px;
              background-image: url(http://www.freepngimg.com/thumb/snowflakes/13-white-snowflake-png-image-thumb.png);
              background-size: 100% 100%;
          }
          .ringMedium {
              width: 25px;
              height: 25px;
          }
          .ringLarge {
              width: 35px;
              height: 35px;
          }
          /* Text animation */
          a {
              text-decoration: none;
              color: #fff;
          }
          h1 {
              padding-top: 102px;
          }
          h1.neon-heading,
          h3.neon-heading {
              color: #fff;
              font-family: 'Dosis', Calibri, sans-serif;
              text-transform: uppercase;
              font-size: 170px;
              font-weight: 200;
              text-align: center;
          }
          h3.neon-heading {
              text-transform: lowercase;
              font-size: 100px;
          }
          h1.neon-heading.first {
              text-shadow: 0px 0px 10px #7700ff,
                  0px 0px 20px #7700ff,
                  0px 0px 30px #7700ff,
                  0px 0px 40px #7700ff,
                  0px 0px 50px #7700ff,
                  0px 0px 60px #7700ff;
          }
  
          h3.neon-heading.second {
              text-shadow: 0px 0px 10px #0e101d,
                  0px 0px 20px #0e101d,
                  0px 0px 30px #0e101d,
                  0px 0px 40px #0e101d,
                  0px 0px 50px #0e101d,
                  0px 0px 60px #0e101d;
              animation: pulsating 3s infinite;
          }
          /* FLICKERING */
          span.flickering-1 {
              animation: flickering-1 6s infinite;
          }
          span.flickering-2 {
              animation: flickering-2 3s infinite;
          }
          span.flickering-3 {
              animation: flickering-3 5s infinite;
          }
          /* ANIMATIONS */
          @keyframes pulsating {
              0% {
                  text-shadow: 0px 0px 0px;
                  opacity: 0;
              }
              50% {
                  text-shadow: 0px 0px 10px #121022,
                      0px 0px 20px #121022,
                      0px 0px 30px #121022,
                      0px 0px 40px #121022,
                      0px 0px 50px #121022,
                      0px 0px 60px #121022;
                  opacity: 1;
              }
              100% {
                  text-shadow: 0px 0px 0px;
                  opacity: 0;
              }
          }
          @keyframes flickering-1 {
              0% {
                  opacity: 1;
              }
              52% {
                  opacity: 1;
              }
              55% {
                  opacity: 0;
              }
              56% {
                  opacity: 1;
              }
              100% {
                  opacity: 1;
              }
          }
          @keyframes flickering-2 {
              0% {
                  opacity: 1;
              }
              62% {
                  opacity: 1;
              }
              65% {
                  opacity: 0;
              }
              66% {
                  opacity: 1;
              }
              69% {
                  opacity: 0;
              }
              70% {
                  opacity: 1;
              }
              73% {
                  opacity: 0;
              }
              74% {
                  opacity: 1;
              }
              100% {
                  opacity: 1;
              }
          }
          @keyframes flickering-3 {
              0% {
                  opacity: 1;
              }
              82% {
                  opacity: 1;
              }
              84% {
                  opacity: 0;
              }
              85% {
                  opacity: 1;
              }
              87% {
                  opacity: 0;
              }
              88% {
                  opacity: 1;
              }
              90% {
                  opacity: 0;
              }
              91% {
                  opacity: 1;
              }
              100% {
                  opacity: 1;
              }
          }
          @media only screen and (max-width: 600px) {
              h1 {
                  font-size: 50px !important;
                  padding-top: 150px !important;
              }
              h3 {
                  font-size: 40px !important;
              }
              .bg {
                  height: 100vh;
              }
          }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
  </head>
  <body>
      <div class="bg">
          <div id='container'></div>
          <h1 class="neon-heading first"><a href="https://workforwin.com" target="_blank"><span
                      class="flickering-3">M</span>err<span class="flickering-1">y</span> Chr<span
                      class="flickering-3">i</span>st<span class="flickering-2">m</span>as</a></h1>
          <h3 class="neon-heading second"><a href="https://linkedin.com/in/ceoankityadav"
                  target="_blank">@teamworkforwin</a></h3>
      </div>
      <script type="text/javascript">
          var w = window.innerWidth, h = window.innerHeight,
              container = document.getElementById("container"),
              sizes = ["Small", "Medium", "Large"],
              types = ["round", "star", "real", "sharp", "ring"],
              snowflakes = 100;
          for (var i = 0; i < snowflakes; i++) {
              var snowflakeDiv = document.createElement('div');
              var sizeIndex = Math.ceil(Math.random() * 3) - 1; //get random number between 0 and 2
              var size = sizes[sizeIndex]; //get random size
              var typeIndex = Math.ceil(Math.random() * 5) - 1;
              var type = types[typeIndex];
              TweenMax.set(snowflakeDiv, { attr: { class: type + size }, x: R(0, w), y: R(-200, -150) });
              container.appendChild(snowflakeDiv);
              snowing(snowflakeDiv);
          }
          function snowing(element) {
              TweenMax.to(element, R(5, 12), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
              TweenMax.to(element, R(4, 8), { x: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut });
              TweenMax.to(element, R(2, 8), { rotation: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
          };
          function R(min, max) {
              return min + Math.random() * (max - min)
          };
      </script>
  </body>
  </html>
    `;


  return (
    <>
      <Helmet>
        <title>Merry Christmas 2020 animation in HTML and CSS </title>
        <meta name="title" content="Merry Christmas 2020 animation in HTML and CSS" />
        <meta name="description" content="Merry Christmas 2020 animation in HTML and CSS that will make you happy. Get source code of your web page." canonical="https://ceoankityadav.github.io/merry-christmas-2020/" />
        <meta name="keywords" content="merry christmas 2020, merry christmas, christmas 2020, christmas, christmas tree, merry christmas images, christmas wishes, happy christmas" />
      <meta id="meta-description" name="description" content="Merry Christmas 2020 animation in HTML and CSS that will make you happy. Get source code of your web page." canonical="https://ceoankityadav.github.io/merry-christmas-2020/" />
      <meta id="og-title" property="og:title" content="Merry Christmas 2020 animation in HTML and CSS" />
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
                  <span className="blinking">Merry Christmas 2020 @teamworkforwin</span> </h1>

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
                <p className="ml-lg-5"> <span></span>📙 Today we are going to build a simple animated web page in HTML, CSS, and javascript for Merry Christmas 2020. </p>

                <div className="col-sm-6 center">
  <div className="shadow mb-3 mt-3" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
  <div className="card-header text-success ">Image</div>
  <div className="card-body text-success">
<img src="https://1.bp.blogspot.com/-DZHQ4a6MJB8/X-M7VAg4nBI/AAAAAAAACvc/Vd4IqEoowE8wCTI51GvEANlMnS5suI9KACLcBGAsYHQ/s16000/merry%2Bchristmas.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
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
<iframe className="embed-responsive-item center"  src="https://www.youtube.com/embed/2dQbaxGEq3Y?controls=0"  title='Google Interview' controls="0" style={{borderRadius: "15px"}}></iframe>
  </div>
</div>
  </div>




                <div className="alert alert-success alert-dismissible fade show" role="alert" >
                  <WarningIcon className="mr-3" style={{ fontSize: "2rem" }} />
                  <strong>Alert!</strong> Download Source Code Zip file and Images.
                  <NavLink to={{ pathname: "https://github.com/ceoankityadav/merry-christmas-2020" }} target="_blank" className="alert-link" > Click Here </NavLink>.
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
                        <span style={{ color: "gray" }}> 24/12/20 </span>
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
export default Christmas;
