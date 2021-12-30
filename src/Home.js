import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Flexbox from "./Flexbox";
import Sfat from "./Sfet";
import Clientweb from "./Clientweb";
import Process from "./Process";
import Technology from "./Technology";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Helmet>
        <title>
          Top Web Development Services Company In India ~ Workforwin
        </title>
        <meta name="title" content="Top Web Development Services Company In India ~ Workforwin" />
    <meta name="description" content="Workforwin is one of the top web development companies in India providing highly effective web development services across the globe." canonical="https://workforwin.com" />
    <meta name="keywords" content="Web Development Services,Top Web Development Company, Web Designing Services, web designing, web development, website development projects, seo, website template, complete website design,eCommerce Website,Corporate Website, startup website, Small Business Website, SEO friendly website, Mobile Responsive website, Responsive website design" />
    <meta id="meta-description" name="description" content="Workforwin is one of the top web development companies in India providing highly effective web development services across the globe." canonical="https://workforwin.com" />
      <meta id="og-title" property="og:title" content="Top Web Development Services Company In India ~ Workforwin" />
      </Helmet>
      <div className="hero">
      
        <div className="container">
        {/* <div className="alert alert-success homealert" role="alert">
      Code Development Program In C Language  &nbsp; -- &nbsp; <NavLink className="a" exact to={{ pathname:"http://contest.workforwin.com"}} target="_blank" ><span style={{fontWeight:"bold", color:"blue"}}> Start Here</span> </NavLink>
      </div> */}
          <div className="row homerow">
            <div className="col-1" data-aos="slide-right">
              <h1>Web Development Services</h1>
              <p>
                <span className="maintext">Workforwin</span> is one of the
                <b> top web development companies in India</b> providing highly
                effective<b> web development services</b> across the globe. We
                design custom websites for your business. Your business, your
                website, you decide how your website should look like. A good
                website can grow your business profit by 100%.{" "}
              </p>
              <p>
                We have a team of expert web designers and web developers, who
                develop your website using new technologies. Our experienced
                digital marketing specialist use proven strategies to promote
                and enhance customer reach by converting visitors into your
                customers.{" "}
              </p>
              <h3>(Web Designing & Web Development)</h3>
              <h4 className="maintext">You Ask We Deliver</h4>
              <button className=" btn btn-outline-danger  border rounded-pill my-2">
                <Link className="a" to="/">
                  <span style={{ color: "white" }}>
                    Explore More <ArrowRightAltIcon />
                  </span>
                </Link>
              </button>
            </div>
            <div className="col-2" data-aos="zoom-in">
              <img
                src="https://1.bp.blogspot.com/-9pnF-ACxDVc/X6VKC2SiPuI/AAAAAAAACfY/MRHH5eKfHaQcdkshek8-wbM6PwyGsy5lACLcBGAsYHQ/s16000/bannermain.webp"
                alt=""
                className="controller"
              ></img>
              <img
                src="https://1.bp.blogspot.com/-RHiTf_uhsxg/X6VKDUMVl-I/AAAAAAAACfc/G2zh8_Ln2fk76WBTxRT4BsiFn2hHD4axgCLcBGAsYHQ/s16000/bannermainback.webp"
                alt=""
                className="color-box"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Flexbox />
      <Sfat />
      <Clientweb />
      <Process />
      <Technology />
      <FAQ />

      <div className=" col-lg-9 col-11 mx-auto mt-5">
        <div className="row">
          <div className="col-lg-5 mt-lg-5" data-aos="slide-right">
            <img
              className="img-fluid"
              src="https://1.bp.blogspot.com/-vRdHubZo7MY/X6VKA28kdII/AAAAAAAACfI/A3m7mjULa7sCOvkmToUdBbI0jjdnhWI2QCLcBGAsYHQ/s16000/Final-Year-Projects-Idea.webp"
              alt=""
              style={{ backgroundSize: "cover", borderRadius: "5px" }}
            ></img>
            {/* <button className="button mb-5 mt-lg-2 mb-lg-0" ><Link className="a"  to="/projects"><span> Know More </span></Link></button> */}
          </div>
          <div className="col-md-7 pt-5 pt-lg-0 mt-lg-5" data-aos="zoom-in">
            <h4 className="pt-lg-8">Projects For Final Year Students</h4>
            <p className="my-3 ">
              {" "}
              If you are in the final year of your engineering and looking for a
              good web development project and ideas related to projects then we
              have some cool projects for you. In our project section, we have
              the projects done by us in the past few months. You can download
              the complete project source code without giving any kind of
              charges. We have maintained documentation of each project by
              reading them you can understand the project very easily. For
              beginners who don't have any kind of knowledge and experience of
              development, we have a free course in our course section. Anyone
              can excess it at any time. We include many web development
              projects in it so after completing that course you will become a
              great web developer.
              <Link to="#" style={{ textDecoration: "none" }}>
                {" "}
                continue reading <ArrowRightAltIcon />
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
AOS.init({duration: 3000});

export default Home;
