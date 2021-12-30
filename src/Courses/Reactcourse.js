import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";




const Reactcourse = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ReactJs Complete Course 2021</title>
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
          <NavLink exact to="" target="_blank" ><img src="https://1.bp.blogspot.com/-ZlOm7_np20I/YAUMiMoBf2I/AAAAAAAACzA/Z8QNNLv891EArkHPAWjkDTL7-EkFQH9lQCLcBGAsYHQ/s16000/coursewider1.webp" className="img-fluid" alt="Android Development" style={{borderRadius:"3px"}}></img></NavLink>
        </div>
              {/* ******** Left Side Bar ********* */}
              <div className="col-lg-8 order-1 shadow-lg " style={{ paddingRight: "10px", paddingBottom: "5px" }} >
              <div className=" col-12 mx-auto mt-4 mb-3 ">
                  <div className="row">
                    <div className=" blogheader col-md-12">
                    <h2  style={{ fontSize: "1.7rem", wordSpacing: "5px" }} >Learn ReactJs In 2021 </h2>
                    <p>We all use its services every day, it answers our most bizarre questions, yes you're reading about google or more importantly, it's bank-busting silicon valley headquarters. A short walk from the San Francisco bay area and a stone's throw away from other multinational headquarters like 
<span className="text-success"> apple park</span> and the homes of <span className="text-success">facebook, eBay and Netflix.</span></p>
                    </div>
                  </div>
                </div>

              <div className="mhide col-sm-12 center">
  <div className=" mb-3 " style={{borderRadius:"10px"}}>
<img src="https://1.bp.blogspot.com/-uJd2ve6suT0/YAgSf8y7BdI/AAAAAAAACz0/_uHfS3v11l8cr6_KEJWcI2o-VbM2WLZKwCLcBGAsYHQ/s16000/Workforwin%2BReact%2Bcourse.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
</div>
  </div>


  </div>
              {/* ******* Right Side Bar Start******** */}
              <div className="mhide col-md-2 pl-lg-4  mt-5 order-2 order-lg-1 " >
          <NavLink exact to={{ pathname:"https://youtu.be/nY7qedxuGcQ"}} target="_blank" ><img src="https://1.bp.blogspot.com/-ZlOm7_np20I/YAUMiMoBf2I/AAAAAAAACzA/Z8QNNLv891EArkHPAWjkDTL7-EkFQH9lQCLcBGAsYHQ/s16000/coursewider1.webp" className="img-fluid" alt="Android Development" style={{borderRadius:"3px"}}></img></NavLink>
        </div>
              {/* ******* Right Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reactcourse;
