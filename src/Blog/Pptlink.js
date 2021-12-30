import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";




const Pptlink = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ReactJs PPT</title>
        <meta name="title" content="ReactJs Complete Course 2021" />
        <meta name="description" content="We all use its services every day, it answers our most bizarre questions, yes you're reading about google or more importantly, it's bank-busting silicon valley headquarters." canonical="https://workforwin.com/inside-google-headquarter" />
        <meta name="keywords" content="reactjs, react course, react, web development, web development course, js, js framework,  workforwin" />
        <meta id="meta-description" name="description" content="We all use its services every day, it answers our most bizarre questions, yes you're reading about google or more importantly, it's bank-busting silicon valley headquarters." canonical="https://workforwin.com/inside-google-headquarter" />
        <meta id="og-title" property="og:title" content="ReactJs Complete Course 2021" />
        </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
              {/* ******** Left Side Bar ********* */}
              <div className="mhide col-md-2 pr-lg-4  mt-5 order-2 order-lg-1 " >
          {/* <NavLink exact to="" target="_blank" ><img src="https://1.bp.blogspot.com/-ZlOm7_np20I/YAUMiMoBf2I/AAAAAAAACzA/Z8QNNLv891EArkHPAWjkDTL7-EkFQH9lQCLcBGAsYHQ/s16000/coursewider1.webp" className="img-fluid" alt="Android Development" style={{borderRadius:"3px"}}></img></NavLink> */}
        </div>
              {/* ******** Left Side Bar ********* */}
              <div className="col-lg-8 order-1 shadow-lg " style={{ paddingRight: "10px", paddingBottom: "5px" }} >
              <div className=" col-12 mx-auto mt-4 mb-3 ">
                  <div className="row">
                    <div className=" blogheader col-md-12" style={{height:"100vh"}}>
                    <h2  style={{ fontSize: "1.7rem", wordSpacing: "5px" }} >Ankit Kumar PPT </h2>
                    <h4><NavLink exact to={{ pathname:"https://www.canva.com/design/DAEZSHLNh_o/x4BU59hdxSU1xTSKU689mw/view#1"}} target="_blank" >https://www.canva.com/design/DAEZSHLNh_o/x4BU59hdxSU1xTSKU689mw/view#1</NavLink></h4>
                    </div>
                  </div>
                </div>

             


  </div>
              {/* ******* Right Side Bar Start******** */}
              <div className="mhide col-md-2 pl-lg-4  mt-5 order-2 order-lg-1 " >
          {/* <NavLink exact to={{ pathname:"https://youtu.be/nY7qedxuGcQ"}} target="_blank" ><img src="https://1.bp.blogspot.com/-ZlOm7_np20I/YAUMiMoBf2I/AAAAAAAACzA/Z8QNNLv891EArkHPAWjkDTL7-EkFQH9lQCLcBGAsYHQ/s16000/coursewider1.webp" className="img-fluid" alt="Android Development" style={{borderRadius:"3px"}}></img></NavLink> */}
        </div>
              {/* ******* Right Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pptlink;
