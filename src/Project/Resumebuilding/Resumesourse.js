import React, { useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Helmet } from "react-helmet";
import HelpIcon from "@material-ui/icons/Help";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import WarningIcon from "@material-ui/icons/Warning";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeIcon from '@material-ui/icons/Code';
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { NavLink } from "react-router-dom";



const Resumesource = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const Reactcode = ` 
  import React from "react";
  import "./resume.css";
  import { NavLink } from "react-router-dom";
  import LanguageIcon from "@material-ui/icons/Language";
  import MailOutlineIcon from "@material-ui/icons/MailOutline";
  import LinkedInIcon from "@material-ui/icons/LinkedIn";
  import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
  
  function Resume() {
    const [project] = React.useState([
      {
        id: 1,
        icon: <ArrowRightAltIcon />,
        text: "Web development projects to aspiring web developers.",
      },
      {
        id: 2,
        icon: <ArrowRightAltIcon />,
        text: "Conduct online coding / technical contests.",
      },
      {
        id: 3,
        icon: <ArrowRightAltIcon />,
        text: "Project based learning to engineering students.",
      },
      {
        id: 4,
        icon: <ArrowRightAltIcon />,
        text:
          "E-commerce, Business, Portfolio website templates built using the latest technology and trends.",
      },
    ]);
  
    const [experience] = React.useState([
      {
        id: 1,
        heading: " Organizing Coding Contest:",
        text:
          "At the college level organized an online coding contest. And successfully managed more than 700 participants.",
      },
      {
        id: 2,
        heading: " Blog:",
        text:
          "Along with building an seo friendly blogging website, I’m having experience writing clean and seo friendly technical blog articles that can be easily ranked on google.",
      },
      {
        id: 3,
        heading: " Team Leading:",
        text:
          "As a developer managing team of 4 peoples contributing their work on the website.",
      },
    ]);
  
    const [skill] = React.useState([
      {
        id: 1,
        text: "HTML5",
      },
      {
        id: 2,
        text: "CSS3",
      },
      {
        id: 3,
        text: "Bootstrap",
      },
      {
        id: 4,
        text: "Reactjs",
      },
    ]);
  
    return (
      <div>
        <div id="cv" className="instaFade">
          <div className="mainDetails">
            <div id="headshot" className="quickFade">
              <img
                src="https://1.bp.blogspot.com/-D9LtP3gnkeo/X7YPJhWVNSI/AAAAAAAACmY/ZJrnbJl9q6YaRqSCyeW-bDUlcZ_IKKqqgCLcBGAsYHQ/s16000/AnkitTransparent.png"
                alt=""
              />
            </div>
  
            <div id="name">
              <h1 className="quickFade delayTwo">Ankit Kumar</h1>
              <h6 className="quickFade delayThree">
                Web Developer . Reactjs enthusiast
              </h6>
            </div>
  
            <div id="contactDetails" className="quickFade delayFour">
              <ul>
                <li>
                  <MailOutlineIcon />{" "}
                  <NavLink to="mailto:teamworkforwin@gmail.com" target="_blank">
                    teamworkforwin@gmail.com
                  </NavLink>
                </li>
                <li>
                  <LanguageIcon />{" "}
                  <NavLink to="https://www.workforwin.com">
                    www.workforwin.com
                  </NavLink>
                </li>
                <li>
                  <LinkedInIcon />{" "}
                  <NavLink to="https://linkedin.com/in/ceoankityadav">
                    linkedin/in/ankitkumar
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="clear"></div>
          </div>
  
          <div id="mainArea" className="quickFade delayFive">
            <section>
              <article>
                <div className="sectionTitle">
                  <h1>Personal Profile</h1>
                </div>
  
                <div className="sectionContent">
                  <p>
                    I am a Web Developer and a Reactjs enthusiast. My primary
                    focus is on building Front End Web Applications. I love
                    building dynamic, responsive, interactive, and completely SEO
                    friendly web applications.
                  </p>
                </div>
              </article>
              <div className="clear"></div>
            </section>
  
            <section>
              <div className="sectionTitle">
                <h1>Project</h1>
              </div>
  
              <div className="sectionContent">
                <article>
                  <h6>Infopreneur Website</h6>
                  <p>
                    I have built a website using Reactjs and host via internet
                    that provides
                  </p>
                  {project.map((info) => (
                    <div key={info.id}>
                      <p>
                        {info.icon} {info.text}{" "}
                      </p>
                    </div>
                  ))}
                </article>
              </div>
              <div className="clear"></div>
            </section>
  
            <section>
              <div className="sectionTitle">
                <h1>Experience</h1>
              </div>
  
              <div className="sectionContent">
                <article>
                  {experience.map((info) => (
                    <div key={info.id}>
                      <h6>{info.heading}</h6>
                      <p>{info.text} </p>
                    </div>
                  ))}
                </article>
              </div>
              <div className="clear"></div>
            </section>
  
            <section>
              <div className="sectionTitle">
                <h1>Key Skills</h1>
              </div>
  
              <div className="sectionContent">
                {skill.map((info) => (
                  <ul className="keySkills" key={info.id}>
                    <li>{info.text} </li>
                  </ul>
                ))}
              </div>
              <div className="clear"></div>
            </section>
  
            <section>
              <div className="sectionTitle">
                <h1>Education</h1>
              </div>
  
              <div className="sectionContent">
                <article>
                  <h6>Rao Pahlad Singh Group of Institutions, Mahendragarh</h6>
                  <p>B.Tech, computer science and engineering</p>
                  <p className="subDetails">August 2017 - April 2021 (current)</p>
                </article>
              </div>
              <div className="clear"></div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  
  export default Resume;
  
    `;
  const resumecss = ` 
  .clear {
    clear: both;
  }
  
  p {
    font-size: 1em;
    line-height: 1.4em;
    margin-bottom: 20px;
    color: #444;
  }
  
  #cv {
    width: 90%;
    height: 100%;
    max-width: 800px;
    background: #f3f3f3;
    margin: 30px auto;
  }
  
  .mainDetails {
    padding: 25px 35px;
    border-bottom: 2px solid #ff4a57;
    background: #ededed;
  }
  
  #name h1 {
    font-size: 2.5em;
    font-weight: 700;
    font-family: "Rokkitt", Helvetica, Arial, sans-serif;
    margin-bottom: -6px;
  }
  
  #mainArea {
    padding: 0 40px;
  }
  
  #headshot {
    width: 12.5%;
    float: left;
    margin-right: 30px;
  }
  
  #headshot img {
    width: 100%;
    height: auto;
    -webkit-border-radius: 50px;
    border-radius: 50px;
  }
  
  #name {
    float: left;
  }
  
  #contactDetails {
    float: right;
  }
  
  #contactDetails ul {
    list-style-type: none;
    font-size: 0.9em;
    margin-top: 2px;
  }
  
  #contactDetails ul li {
    margin-bottom: 3px;
    color: #444;
  }
  
  #contactDetails ul li a {
    color: #444;
    text-decoration: none;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }
  
  #contactDetails ul li a:hover {
    color: #ff4a57;
  }
  
  section {
    border-top: 1px solid #dedede;
    padding: 20px 0 0;
  }
  
  section:first-child {
    border-top: 0;
  }
  
  section:last-child {
    padding: 20px 0 10px;
  }
  
  .sectionTitle {
    float: left;
    width: 25%;
  }
  
  .sectionContent {
    float: right;
    width: 72.5%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  
  .sectionTitle h1 {
    font-family: "Rokkitt", Helvetica, Arial, sans-serif;
    font-style: italic;
    font-size: 1.5em;
    color: #ff4a57;
  }
  
  .sectionContent h2 {
    font-family: "Rokkitt", Helvetica, Arial, sans-serif;
    font-size: 1.5em;
    margin-bottom: -2px;
  }
  
  .subDetails {
    font-size: 0.8em;
    font-style: italic;
    margin-bottom: 3px;
  }
  
  .keySkills {
    list-style-type: none;
    margin-bottom: 20px;
    font-size: 1em;
    color: #444;
  }
  
  @media all and (min-width: 602px) and (max-width: 800px) {
    #headshot {
      display: none;
    }
  }
  
  @media all and (max-width: 601px) {
    #cv {
      width: 95%;
      margin: 10px auto;
      min-width: 280px;
    }
  
    #headshot {
      display: none;
    }
  
    #name,
    #contactDetails {
      float: none;
      width: 100%;
      text-align: center;
    }
  
    .sectionTitle,
    .sectionContent {
      float: none;
      width: 100%;
    }
  
    .sectionTitle {
      margin-left: -2px;
      font-size: 1.25em;
    }
  }
  
  @media all and (max-width: 480px) {
    .mainDetails {
      padding: 15px 15px;
    }
  
    section {
      padding: 15px 0 0;
    }
  
    #mainArea {
      padding: 0 25px;
    }
  
    #name h1 {
      line-height: 0.8em;
      margin-bottom: 4px;
    }
  }
  
  @media print {
    #cv {
      width: 100%;
    }
  }
  
  @-webkit-keyframes reset {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-moz-keyframes reset {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  @-moz-keyframes fade-in {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes reset {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .instaFade {
    -webkit-animation-name: reset, fade-in;
    -webkit-animation-duration: 1.5s;
    -webkit-animation-timing-function: ease-in;
  
    -moz-animation-name: reset, fade-in;
    -moz-animation-duration: 1.5s;
    -moz-animation-timing-function: ease-in;
  
    animation-name: reset, fade-in;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
  }
  
  .quickFade {
    -webkit-animation-name: reset, fade-in;
    -webkit-animation-duration: 2.5s;
    -webkit-animation-timing-function: ease-in;
  
    -moz-animation-name: reset, fade-in;
    -moz-animation-duration: 2.5s;
    -moz-animation-timing-function: ease-in;
  
    animation-name: reset, fade-in;
    animation-duration: 2.5s;
    animation-timing-function: ease-in;
  }
  
  .delayOne {
    -webkit-animation-delay: 0, 0.5s;
    -moz-animation-delay: 0, 0.5s;
    animation-delay: 0, 0.5s;
  }
  
  .delayTwo {
    -webkit-animation-delay: 0, 1s;
    -moz-animation-delay: 0, 1s;
    animation-delay: 0, 1s;
  }
  
  .delayThree {
    -webkit-animation-delay: 0, 1.5s;
    -moz-animation-delay: 0, 1.5s;
    animation-delay: 0, 1.5s;
  }
  
  .delayFour {
    -webkit-animation-delay: 0, 2s;
    -moz-animation-delay: 0, 2s;
    animation-delay: 0, 2s;
  }
  
  .delayFive {
    -webkit-animation-delay: 0, 2.5s;
    -moz-animation-delay: 0, 2.5s;
    animation-delay: 0, 2.5s;
  }
  
    `;

  return (
    <>
      <Helmet>
        <title>Build Resume In Html and CSS</title>
        <meta name="title" content="Build Resume / CV In HTML, CSS and React ~ Workforwin" />
        <meta name="description" content="Build your own resume in html and css that will land you a $1000 job. Get sourse code of your resume." canonical="https://workforwin.com/resumesource" />
        <meta name="keywords" content="How to build resume, Resume, CV, Job, How to build resume for job, computer science job resume, how to make cv,diffrence in cv and resume, cover latter, react, web development, web designing,react, reactjs, react project, react js interview questions, react bootstrap, react hooks, react tutorial, react js tutorial, create react app " />
      <meta id="meta-description" name="description" content="Build your own resume in html and css that will land you a $1000 job. Get sourse code of your resume." canonical="https://workforwin.com/resumesource" />
      <meta id="og-title" property="og:title" content="Build Resume / CV In HTML and CSS ~ Workforwin" />
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
              <div
                className="col-lg-8 order-1 shadow-lg "
                style={{ paddingRight: "20px", paddingBottom: "5px" }}
              >
                <h1
                  style={{
                    fontSize: "1.7rem",
                    wordSpacing: "5px",
                    paddingTop: "2%",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #ff4a57",
                    color: "#ff4a57",
                  }}
                >
                  <HelpIcon
                    style={{
                      fontSize: "2.1rem",
                      marginTop: "-5px",
                      color: "#ff4a57",
                    }}
                  />{" "}
                  Build Resume / CV In HTML, CSS and React
                </h1>

                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <WarningIcon className="mr-3" style={{ fontSize: "2rem" }} />
                  <strong>Warning!</strong> React should be pre-installed in
                  your system with its required module.
                  <NavLink
                    to={{ pathname: "https://youtube.com/workforwin/" }}
                    target="_blank"
                    className="alert-link"
                  >
                    {" "}
                    Learn React
                  </NavLink>
                  .
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <h4 style={{ color: "rgba(79,172,254,.8)" }}>
                  <ArrowRightAltIcon
                    style={{
                      fontSize: "2.1rem",
                      marginTop: "-5px",
                      color: "rgba(79,172,254,.8)",
                    }}
                  />{" "}
                  Agenda:{" "}
                </h4>
                <p className="ml-lg-5">
                  {" "}
                  Today we are going to create a resume in reactjs.
                  <br />
                  To create a react project required to react installed on your
                  operating system with node js.
                  <br />
                  We will use material UI icons in our app.
                  <br />
                  Install material UI inside your app project by putting the
                  command in terminal
                </p>
                <SyntaxHighlighter language={js} style={prism}>
{`// with npm
npm install @material-ui/icons
// with yarn
yarn add @material-ui/icons`
}

                </SyntaxHighlighter>
                <h4 style={{ color: "#a64eee" }}>
                  <CodeIcon
                    style={{
                      fontSize: "2.1rem",
                      marginTop: "-5px",
                      color: "#a64eee",
                    }}
                  />{" "}
                  React Code{" "}
                </h4>

                <SyntaxHighlighter language={js} style={prism}>
                  {Reactcode}
                </SyntaxHighlighter>

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
                  {resumecss}
                </SyntaxHighlighter>

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
                        <span style={{ color: "gray" }}> 21/11/20 </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* ******* Right Side Bar Start******** */}
              <div className="col-md-2   pt-lg-0 order-2 order-lg-1 " style={{ paddingLeft: "1%" }}>
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
export default Resumesource;
