import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import WebIcon from "@material-ui/icons/Web";


const Course = () => {
  const [blogcard] = React.useState([
    {
      id: 1,
      imgsrc: "https://1.bp.blogspot.com/-904_PY_EtxY/YAVb1x25AsI/AAAAAAAACzM/eh7guLw7p4ooZCplUTJRae8jYSaLLVMGgCLcBGAsYHQ/s16000/Reactjs%2BCourse.webp",
      title: "ReactJs Complete Course 2021 with projects",
      visit: "https://youtu.be/mKJgtwIBreA",
    },
    {
      id: 2,
      imgsrc: "https://1.bp.blogspot.com/-nxmpxOW9bWI/YE-WNCPvrAI/AAAAAAAAC9w/rd05oOf2KckADpxmCJ_rZZMLv9pdNZhGQCLcBGAsYHQ/s16000/What%2Bis%2BReact%2Bjs%2Band%2Bwhy%2Bto%2Buse%2Breact%2Bjs%2B%2523workforwin.webp",
      title: "What is React js and why to use react js",
      visit: "https://youtu.be/iSnH7hX_eME",
    },
    {
      id: 3,
      imgsrc: "https://1.bp.blogspot.com/-C5lQnpI99FE/YE-WbQ2nR-I/AAAAAAAAC90/Qh6xo9rLgMw1P3Us-sc6J1xwCf2wiq9IwCLcBGAsYHQ/s16000/How%2Bto%2Binstall%2BReactjs%2Band%2Bthe%2Bfolder%2Bstructure.webp",
      title: "How to install Reactjs and the folder structure",
      visit: "https://youtu.be/_LBu_iTZjvs",
    },
    {
      id: 4,
      imgsrc: "https://1.bp.blogspot.com/-o0XIXTr3Y8c/YE-WkdaHP8I/AAAAAAAAC98/eRy4AQmMPr02UAZrR_By8KtGQbu6hg2wACLcBGAsYHQ/s16000/create-react-app%2Bnot%2Bworking%2B%2Berror%2Bsolved.webp",
      title: "Create-react-app not working  error solved",
      visit: "https://youtu.be/IZRGvyI80s8",
    },
    {
      id: 5,
      imgsrc: "https://1.bp.blogspot.com/-KavR-93OXDc/YFaGiEZHxJI/AAAAAAAAC-8/8DzoRFKqd7k5nUIPdJietlzjrc4Z-_TggCLcBGAsYHQ/s16000/Display%2BHello%2BWorld%2BIn%2BReact%2Bjs.webp",
      title: `Display "Hello World" In React Js`,
      visit: "https://youtu.be/IZRGvyI80s8",
    },
    {
      id: 6,
      imgsrc: "https://1.bp.blogspot.com/-ySldoF6-Jm0/YFaGuWUJbKI/AAAAAAAAC_A/dWTeQCFKqFUVYeq4I233vzGdV33RosNxQCLcBGAsYHQ/s16000/Function%2Band%2BClass%2BComponent%2BIn%2BReact%2BJs.webp",
      title: "Function Component & Class Component",
      visit: "https://youtu.be/IZRGvyI80s8",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Web Development Course</title>
        <meta name="title" content="Web Development Course ~ #ReactJs" />
        <meta name="description" content="If you prefer to learn by doing, start with our practical tutorial and build amazing reactjs projects." canonical="https://workforwin.com/course" />
        <meta name="keywords" content="Web Development Course,react, reactjs, reactjs tutorial, reactjs tutorial for beginners, reactjs for beginners, what is reactjs, reactjs interview questions, web development course, web development, web development tutorial, web development tutorial for beginners, web development full course, web development projects, how to become a web developer, reactjs developer," />
        <meta id="meta-description" name="description" content="If you prefer to learn by doing, start with our practical tutorial and build amazing reactjs projects." canonical="https://workforwin.com/course" />
        <meta id="og-title" property="og:title" content="Web Development Course ~ #ReactJs" />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">

            {/* *******Sidebar ******* */}
            <div className="col-md-2   pt-lg-0 order-2 order-lg-2 ">
      {/* <h2 className="text-center mt-2">Popular Post</h2> */}
      <div className="card shadow mt-4" data-aos="slide-right">
      <img src="https://1.bp.blogspot.com/-ZlOm7_np20I/YAUMiMoBf2I/AAAAAAAACzA/Z8QNNLv891EArkHPAWjkDTL7-EkFQH9lQCLcBGAsYHQ/s16000/coursewider1.webp"  className="img-fluid " alt="" style={{borderRadius:'3px', cursor:"pointer"}}></img>
      </div>
    </div>
              <div className="col-lg-9 ml-lg-5 order-lg-2 " style={{ paddingBottom: "5px", paddingLeft:"4%" }} >
                
                {/* ************ Blog Header ********** */}
                

                <div className="mhide col-12 mx-auto mt-4 mb-3 blog-post" data-aos="slide-down">
                  <div className="row">
                    <div className="courseheading blogheader col-md-12 pt-5  pt-lg-0">
                    <h2  style={{ fontSize: "1.7rem", wordSpacing: "5px", textAlign:"center" }} >Become A Job Ready Web Developer In 2021 ~ #ReactJs </h2>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-12 center">
  <div className=" mb-3 mt-3" style={{borderRadius:"10px"}}>
<img src="https://1.bp.blogspot.com/-YhlJMmPsToo/YAQX2EIwpjI/AAAAAAAACyg/kzKGlvtBMq47NQWUHgCZpMuc8iIxJA_7wCLcBGAsYHQ/s16000/reactcourse.jpg" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
</div>
  </div> */}

                {/* ************ Blog Header End ********** */}

                {/* ************ Blog Area Start ********** */}

                <div className="col-lg-12 mx-auto mt-2 order-1 order-lg-2">
                <h2 className="ml-lg-3"><WebIcon style={{ fontSize: "2rem", marginTop: "-5px" }} /> Start Learning</h2>
                  {blogcard.map((info) => (
                    <div className="blogcard col-lg-4 mx-auto" key={info.id} style={{ display: "inline-block", padding: "10px" }} >
                      <div className="card mb-5 shadow">
                        <img src={info.imgsrc} className="card-img-top" alt="" />
                        <div className="card-body">
                        <NavLink target="_blank" exact to={{pathname:info.visit}} style={{textDecoration:"none"}} >
                          <h5 className="card-title font-weight-bold"> {info.title} </h5>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ************ Blog Area End ********** */}

              {/* ******* Side Bar Start******** */}
              
             
              {/* ******* Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Course;
