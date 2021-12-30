import React, { useEffect } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "../Sidebar";

const Blog = () => {
  const [blogcard] = React.useState([
    // {
    //   id: 9,
    //   imgsrc: "https://1.bp.blogspot.com/-itnkiQgkQ6U/X_0qZdBw0AI/AAAAAAAACxo/GkRn6_uoaeos7JdFMZpOW0AikUEvsVZ5ACLcBGAsYHQ/s16000/Google%2BMost%2BTricky%2BQuestions%2BAsked%2BEver.webp",
    //   title: "Google Most Tricky Asked Questions Ever",
    //   visit: "/google-most-tricy-interview-questions",
    // },
    {
      id: 6,
      imgsrc: "https://1.bp.blogspot.com/-Xw1WFG_0gyg/X9buGHVdeXI/AAAAAAAACuY/8OfBpiz65DwwA95rGlvrJlGC-7xjx4MTQCLcBGAsYHQ/s16000/21%2BDays%2Bof%2BMachine%2BLearning.webp",
      title: "21 Days of Machine Learning",
      visit: "/21-days-of-machine-learning",
    },
    // {
    //   id: 5,
    //   imgsrc: "https://1.bp.blogspot.com/-OzAWaO1xmHw/X9XipD4semI/AAAAAAAACt8/s-vPFqGk_BALgRMce0iyd3Wv43mn32z7wCLcBGAsYHQ/s16000/Inside%2BTour%2Bof%2BGoogle%2527s%2BMassive%2BHeadquarter.webp",
    //   title: "Inside Tour of Google's Massive Headquarters",
    //   visit: "/inside-google-headquarter",
    // },
    {
      id: 5,
      imgsrc: "https://1.bp.blogspot.com/-rLmhZGljmWM/X8XWEKCsKLI/AAAAAAAACo0/YodP64pl8jMTSi4d69dGF49EI4Hs0EgeACLcBGAsYHQ/s16000/Data%2BScience%2BInternship.webp",
      title: "How to get a Data Science Internship in India?",
      visit: "/how-to-get-a-data-science-internship-in-india",
    },
    {
      id: 4,
      imgsrc: "https://1.bp.blogspot.com/-zgCiRPxJ8CA/X8ImqNmarvI/AAAAAAAACoQ/Dn4U4btX8zQFzYTNls6kH_WTERKWxnV2ACLcBGAsYHQ/s16000/integrate%2Bgit%2Bbash%2Bwith%2Bvscode.webp",
      title: "Integrate Git Bash with VS Code",
      visit: "/integrate-git-bash-with-vscode",
    },
    {
      id: 3,
      imgsrc: "https://1.bp.blogspot.com/-e7n8LQz3XMQ/X8DjIgMR_mI/AAAAAAAACoE/elglLVcV_cAqC_6y7XtCb3XNPIYXvxNvQCLcBGAsYHQ/s16000/GoogleInterview.webp",
      title: "How to get Interview at Google?",
      visit: "/how-to-get-interview-at-google",
    },
    {
      id: 2,
      imgsrc: "https://1.bp.blogspot.com/-yGDZMkKkfuc/X7x2k2SwGHI/AAAAAAAACng/KYhCO2CZvHcapiVDPDumUlE0azH-OXvMgCLcBGAsYHQ/s16000/How%2Bto%2Bprepare%2Bfor%2Bgate%2Bcse%2Bwithout%2Bcoaching.webp",
      title: "How to prepare for gate cse without coaching?",
      visit: "/how-to-prepare-for-gate-cse-without-coaching",
    },
    {
      id: 1,
      imgsrc: "https://1.bp.blogspot.com/-6YwJO3XZfho/X7JZYEY9BBI/AAAAAAAAClY/5hbE5bC4VB4FKObf4MS95QGZOiSLCJmNgCLcBGAsYHQ/s16000/Web%2BDeveloper%2Band%2BWeb%2BDesigner.webp",
      title: "Web Developer vs Web Designer",
      visit: "/web-developer-vs-web-designer",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Web Development Blog ~ Workforwin</title>
        <meta name="title" content="Workforwin Blogs" />
        <meta
          name="description"
          content="Workforwin writes technical blog for computer science and engineering students. Read tech blogs and web technology blog at workforwin." canonical="https://workforwin.com/blog"
        />
        <meta
          name="keywords"
          content="Web Development blog,blog,tech blog,online blog, Web Designing projects, web designing, web development, final year project idea, computer science project, project idea, website template, complete website design,eCommerce Website,Corporate Website, startup website, Small Business Website, SEO friendly website, Mobile Responsive website, Responsive website design"
        />
        <meta
          id="meta-description"
          name="description"
          content="Workforwin writes technical blog for computer science and engineering students. Read tech blogs and web technology blog at workforwin." canonical="https://workforwin.com/blog"
        />
        <meta
          id="og-title"
          property="og:title"
          content="Workforwin Blogs ~ Technical Blog"
        />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

      </Helmet>
      <div className="container-fluid mt-lg-5 mt-1">
        <div className="row">
          <div className="col-12 col-lg-11 mx-auto">
            <div className="row">
              <div
                className="col-lg-8 ml-lg-5 order-1 "
                style={{ paddingBottom: "5px", marginRight: "4%" }}
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
                  <MenuBookIcon
                    style={{
                      fontSize: "2rem",
                      marginTop: "-5px",
                      color: "#ff4a57",
                    }}
                  />{" "}
                  Blog For You
                </h1>

                {/* ************ Blog Header ********** */}
                {/* <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-2704444085018423"
     data-ad-slot="2247549308"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */}
                <div className=" col-12 mx-auto mt-5 mb-3 blog-post">
                  <div className="row">
                    <div className="col-lg-4 blog-post__img">
                      <img
                        src="https://1.bp.blogspot.com/-dYtEQw9OEEM/X6VrMa2xn_I/AAAAAAAACg8/WHbA8VjEepYQra179gBY3fJnbQvjTjHBQCLcBGAsYHQ/s16000/Top%2B10%2BMovies%2Bfor%2BWeb%2BDevelopers.webp"
                        className="img-fluid "
                        alt=""
                      ></img>
                    </div>
                    <div className="blogheader col-md-8 pt-5 spl  pt-lg-0">
                      <h4 className="pt-lg-8">
                        Top 10 Movies for Web Developers - Workforwin
                      </h4>
                      <p className="my-3">
                        Top 10 must-watch movies for web developers these are
                        the once personally I enjoyed watching and also the ones
                        I would recommend other people to watch if you want to
                        know more about what goes on behind the scenes in terms
                        of coding and programming.
                        <NavLink target="blank" exact to="/top-10-movies-web-developers" style={{ textDecoration: "none" }} >
                          continue reading <ArrowRightAltIcon />
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                </div>
                {/* ************ Blog Header End ********** */}

                {/* ************ Blog Area Start ********** */}

                <div className="col-lg-12 mx-auto mt-5 order-1 order-lg-2">
                  {blogcard.map((info) => (
                    <div
                      className="blogcard col-lg-4 mx-auto"
                      key={info.id}
                      style={{ display: "inline-block", padding: "10px" }}
                    >
                      <div className="card mb-5 shadow">
                        <img
                          src={info.imgsrc}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                        <NavLink target="blank" exact to={info.visit} style={{textDecoration:"none"}}>
                          <h5 className="card-title font-weight-bold">
                            {info.title}
                          </h5>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ************ Blog Area End ********** */}

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
export default Blog;
