import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import WebIcon from "@material-ui/icons/Web";
import { Helmet } from "react-helmet";
import Projectsidebar from "./Projectsidebar";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [project] = React.useState([
    {
      id: 1,
      imgsrc:
        "https://1.bp.blogspot.com/-V7xgeSNOydQ/X7XsEgoNkiI/AAAAAAAACmM/M8xUaH4GpIg3Tkc-o4YoDpwRfzMXcVx-gCLcBGAsYHQ/s16000/Resume.webp",
      visit1: "/resume",
      visit2: "/resumesource",
    },
  ]);

  const [blogcard] = React.useState([
    {
      id: 1,
      imgsrc:
        "https://1.bp.blogspot.com/-DG2c09kaVD4/X6VKFkyPwwI/AAAAAAAACf8/WQokIMeeLOkU7wNSeUd_q_SpvvN-u5kTQCLcBGAsYHQ/s16000/foodwebsite.webp",
      visit1: "/project",
      visit2: "/project",
    },
    {
      id: 2,
      imgsrc:
        "https://1.bp.blogspot.com/-gWoFa2I6p4c/X6VKEajIheI/AAAAAAAACfo/z3HmO7uBVOkF2sIM0ZYLa5rKM0E7EwJYQCLcBGAsYHQ/s16000/businesswebsite.webp",
      visit1: "/project",
      visit2: "/project",
    },
  ]);

  const [blogcard2] = React.useState([
    {
      id: 1,
      imgsrc: "https://1.bp.blogspot.com/-DZHQ4a6MJB8/X-M7VAg4nBI/AAAAAAAACvc/Vd4IqEoowE8wCTI51GvEANlMnS5suI9KACLcBGAsYHQ/s16000/merry%2Bchristmas.webp",
      visit1: "https://ceoankityadav.github.io/merry-christmas-2020/",
      visit2: "/merry-christmas-2020",
    },
    {
      id: 2,
      imgsrc: "https://1.bp.blogspot.com/-unjGCrDJTIc/X-FV1pR9L4I/AAAAAAAACvQ/IjkCXjDcyKkPvBXeZzTaoxpndF6CpblEQCLcBGAsYHQ/s16000/wd%2Bproject1.webp",
      visit1: "https://ceoankityadav.github.io/wd-project1/",
      visit2: "/web-development-project1-sourcecode",
    },
  ]);

  const [blogcard3] = React.useState([
    {
      id: 1,
      imgsrc: "https://1.bp.blogspot.com/-Fxtggup3bPk/X9GfuI7uyQI/AAAAAAAACso/xsuDOsWMt0ggAno3Dbkp9kFwoI7aQt_YACLcBGAsYHQ/s16000/Pyhton%2Bsnake%2Bgame.webp",
      visit: "/snake-game-in-python",
    },
    {
      id: 2,
      imgsrc: "https://1.bp.blogspot.com/-ht0e7yCl0_o/X8oWGMtoOII/AAAAAAAACpw/jPeZ-E7D1Jg3q11YhBre6142zPt1IdWeQCLcBGAsYHQ/s16000/Build%2BText%2BEditor%2BIn%2BPython.webp",
      visit: "/how-to-build-software-in-python",
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Web Development Projects ~ Workforwin</title>
        <meta name="title" content="Web Development Projects for Engineering Students" />
        <meta name="description" content="Get web development projects for your final year. Workforwin provides websites templates with sourse code build in latest technology." canonical="https://workforwin.com/projects" />
        <meta name="keywords" content="Web Development project,Top Web Development Company, Web Designing projects, web designing, web development, final year project idea, computer science project, project idea, website template, complete website design,eCommerce Website,Corporate Website, startup website, Small Business Website, SEO friendly website, Mobile Responsive website, Responsive website design" />
        <meta id="meta-description" name="description" content="Get web development projects for your final year. Workforwin provides websites templates with sourse code build in latest technology." canonical="https://workforwin.com/projects" />
        <meta id="og-title" property="og:title" content="Web Development Projects for Engineering Students" />
      </Helmet>
      <div className="container-fluid mt-lg-5 mt-1">
        <div className="row">
          <div className="col-12 col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-8 ml-lg-5 order-2 " style={{ paddingBottom: "5px", marginRight: "4%" }} >
                <h2 style={{ fontSize: "1.7rem", wordSpacing: "5px", paddingTop: "2%", paddingBottom: "15px", borderBottom: "1px solid #ff4a57", }} >
                  <WebIcon style={{ fontSize: "2rem", marginTop: "-5px" }} />{" "} Our Projects </h2>

                {/* ************ Project Header ********** */}

                <div className="col-lg-12 mx-auto mt-5 order-1 order-lg-2">

                {blogcard2.map((info) => (
                    <div className="blogcard col-lg-6 mx-auto" key={info.id} style={{ display: "inline-block", padding: "10px" }} >
                      <div className="card mb-5 shadow">
                        <span className="position-absolute px-2 py-1 upcomming"> New </span>
                        <img src={info.imgsrc} className="card-img" alt="" />
                        <div className="card-body" style={{ backgroundColor: "#efefef" }} >
                          <NavLink exact to={{pathname:info.visit1}} target="_blank" className="btn btn-outline-danger  border rounded-pill my-2 ml-md-5" > <span>Live View</span> </NavLink>
                          <NavLink exact to={info.visit2} target="_blank" className="btn btn-outline-success  border rounded-pill my-2 ml-3 ml-md-5" > <span>Source Code</span> </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                  {project.map((info) => (
                    <div className="blogcard col-lg-4 mx-auto" key={info.id} style={{ display: "inline-block", padding: "10px" }} >
                      <div className="card mb-5 shadow">
                        <img src={info.imgsrc} className="card-img" alt="" />
                        <div className="card-body" style={{ backgroundColor: "#efefef" }} >
                          <NavLink exact to={info.visit1} target="blank" className="btn btn-outline-danger  border rounded-pill my-2" > <span>Live View</span> </NavLink>
                          <NavLink exact to={info.visit2} target="blank" className="btn btn-outline-success  border rounded-pill my-2 ml-3" > <span>Source Code</span> </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                  {blogcard.map((info) => (
                    <div className="blogcard col-lg-4 mx-auto" key={info.id} style={{ display: "inline-block", padding: "10px" }} >
                      <div className="card mb-5 shadow">
                        <span className="position-absolute px-2 py-1 upcomming"> UpComming </span>
                        <img src={info.imgsrc} className="card-img" alt="" />
                        <div className="card-body" style={{ backgroundColor: "#efefef" }} >
                          <NavLink exact to={info.visit1} className="btn btn-outline-danger  border rounded-pill my-2" > <span>Live View</span> </NavLink>
                          <NavLink exact to={info.visit2} className="btn btn-outline-success  border rounded-pill my-2 ml-3" > <span>Source Code</span> </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}

              <div className="col-lg-12 mx-auto mt-5 order-1 order-lg-2">

                {blogcard3.map((info) => (
                    <div className="blogcard col-lg-6 mx-auto" key={info.id} style={{ display: "inline-block", padding: "10px" }} >
                      <div className="card mb-5 shadow">
                        <span className="position-absolute px-2 py-1 upcomming"> Python </span>
                        <img src={info.imgsrc} className="card-img" alt="" />
                        <div className="card-body center" >
                          <NavLink exact to={info.visit} target="_blank" className="btn btn-outline-success  border rounded-pill my-2" > <span>Source Code</span> </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ************ Project Header End ********** */}
              </div>

              {/* ******* Side Bar Start******** */}

              <Projectsidebar />

              {/* ******* Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
