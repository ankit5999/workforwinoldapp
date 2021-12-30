import React, { useEffect } from "react";
import "./resume.css";
import { NavLink } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Helmet } from "react-helmet";



function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
    <Helmet>
        <title>Ankit Kumar</title>
        <meta name="title" content="Ankit Kumar Resume ~ Workforwin" />
        <meta name="description" content="Build your own resume in html and css that will land you a $1000 job. Get sourse code of your resume." canonical="https://workforwin.com/resume" />
        <meta name="keywords" content="Ankit Kumar Resume, How to build resume, Resume, CV, Job, How to build resume for job, computer science job resume, how to make cv,diffrence in cv and resume, cover latter, react, web development, web designing,react, reactjs, react project, react js interview questions, react bootstrap, react hooks, react tutorial, react js tutorial, create react app " />
      <meta id="meta-description" name="description" content="Build your own resume in html and css that will land you a $1000 job. Get sourse code of your resume." canonical="https://workforwin.com/resume" />
      <meta id="og-title" property="og:title" content="Ankit Kumar Resume ~ Workforwin" />
      </Helmet>
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
