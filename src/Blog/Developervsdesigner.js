import React, { useEffect } from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Helmet } from "react-helmet";
import Rightbar from "./Rightbar";
import Leftbar from "./Leftbar";
import Bootombar from "./Bootombar";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const Developervsdesigner = () => {

    const [diffrence] = React.useState([
        {
          rank: 1,
          title1: `Build the user interface using HTML, CSS, and JS languages.`,
          title2: `Use software tools such as Adobe Photoshop, Framer, or Sketch to build the final layout design of the website.`,
        },
        {
          rank: 2,
          title1: `Front-end developer can use styling preprocessor, JavaScript Libraries, and frameworks to fasten development.`,
          title2: `Good skills in graphics design and logo design.`,
        },
        {
          rank: 3,
          title1: `Front-end developers provide the markup design to back-end developers to implement a dynamic website.`,
          title2: `Have a good feel for user experience, to identify the simplest approach possible to attain the desired function.`,
        },
        {
          rank: 4,
          title1: `Back-end developers create the backbone of the website using languages such as PHP and MySQL.`,
          title2: `Web designers must keep themselves up to date with the latest design trends.`,
        },
        {
          rank: 5,
          title1: `Web developers also use versioning tools to keep a history of the previous builds to quickly and effortlessly move back to a previous version.`,
          title2: `They also need to keep in mind the branding of the website, color palettes to be used, and the typography and readability of the website.`,
        },


      ]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Difference Between A Web Developer And A Web Designer ~ Workforwin</title>
        <meta
          name="title"
          content="Difference Between A Web Developer And A Web Designer ~ Workforwin"
        />
        <meta
          name="description"
          content="People often get confused when it comes to using the term web designer and web developer. Now both are involved in the task of web development but in very different areas." canonical="https://workforwin.com/web-developer-vs-web-designer"
        />
        <meta
          name="keywords"
          content="web developer,web designer,developer, designer, how to become web developer, Difference between a web developer and a web designer,Web Developer vs Web Designer, workforwin"
        />
      
      <meta
        id="meta-description"
        name="description"
        content="People often get confused when it comes to using the term web designer and web developer. Now both are involved in the task of web development but in very different areas." canonical="https://workforwin.com/web-developer-vs-web-designer"
      />
      <meta
        id="og-title"
        property="og:title"
        content="Difference Between A Web Developer And A Web Designer ~ Workforwin"
      />
      </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
              {/* ******** Left Side Bar ********* */}
              <Leftbar />
              {/* ******** Left Side Bar ********* */}
              <div
                className="col-lg-7 order-1 shadow-lg "
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
                  <MenuBookIcon
                    style={{
                      fontSize: "2.1rem",
                      marginTop: "-5px",
                      color: "#ff4a57",
                    }}
                  />{" "}
                  Difference between a web developer and a web designer{" "}
                </h1>
                <p>
                People often get confused when it comes to using the term web designer and web developer. Now both are involved in the task of web development but in very different areas. Developers build the core structure of a website using coding languages while the designers are more visually creative and focusing on the user interface.</p>
                <p><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Agenda: <br></br>
                1) What is web development<br></br>
2) Who is a web developer<br></br>
3) Who is a web designer<br></br>
4) Key roles of web designer and web developer<br></br>
5) Salary of a web developer and a web designer</p>


<h4 style={{ color: "#302424" }}>1. What is Web Development?</h4>
<p>Web development is the process of developing websites for hosting them on the internet. Web development is a process that involves web design, web development content, client-side and server-side scripting, and network security configuration. <br></br>
A website can be a simple single-page type or incredibly complex web application. You see your website in a web browser it is because of all the processes involved in web development. So know you have understood what is web development.
</p>

<div className="col-sm-6 center">
  <div className="shadow mb-3 mt-3" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
  <div className="card-header text-success ">Image</div>
  <div className="card-body text-success">
<img src="https://1.bp.blogspot.com/-6YwJO3XZfho/X7JZYEY9BBI/AAAAAAAAClY/5hbE5bC4VB4FKObf4MS95QGZOiSLCJmNgCLcBGAsYHQ/s16000/Web%2BDeveloper%2Band%2BWeb%2BDesigner.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
  </div>
</div>
  </div>

<h4 style={{ color: "#302424" }}>2. Who is a Web Developer?</h4>
<p>A web developer is a programmer trained in developing worldwide web applications using a client-server model. They are also responsible for designing coding and modifying websites from layout to function and coding to a client's specifications. Web developers usually concentrate on a few languages. Either you can focus on front-end programming of a website using the HTML, CSS, and javascript or on the server-side programming like PHP, java, ruby. There are different job profiles of a web developer.</p>
      
<h5 style={{ color:'gray' }}>Front end developer:</h5>
<p>Front end development is known as client-side development, so mostly it involves programming all the public-facing visuals and elements as part of website designs. Front-end developers ofter collaborate with web designers also they must have strong coding skills in HTML, CSS, and javascript.</p>

<h5 style={{ color:'gray' }}>Back end developers:</h5>
<p>The backend refers to the hidden layer that users cant sees when they visit a website. So they must have programming skills because the backend layer forms a dynamic connection between the front end and the database. To get this layer working it's important to know atlases on the programming languages such as python, java, PHP, SQL, c#, ruby. It also involves server-side frameworks such as Nodejs.</p>

<h5 style={{ color:'gray' }}>Full-stack developer:</h5>
<p>The full-stack developer either can work on the front-end or the back-end. It is someone who has a good understanding of how the web works at each and every level including setting up and configuring Linux or the windows servers, coding server-side API, running the client-side application by using the javascript operating, and querying the database, structuring and designing the web page with CSS, HTML, and javascript.</p>

<h4 style={{ color: "#302424" }}>3. Who is a web designer?</h4>
<p>Web designers create layouts that are visually pleasing for visitors. Another work of a web designer is to make sure that the user spends more time on a website, they analyze the latest trends in web design, respect design principles and nomes follow whats the user respects when visiting a website. Not just that web designers also focus on adding branding elements on a website without making them too abrupt compare to the rest of the design. Since web design covers a lot of responsibilities, web designers can specialize in specific areas of the websites. There are different job profiles for a web designer as well.</p>

<h5 style={{ color:'gray' }}>UI designers:</h5>
<p>The user interface designers that is UI designers are the ones who deal with user interaction they make sure that the users are able to interact with the elements that are present on the website. The user interface is everything that a visitor sees when they excess a website and it needs to be designed in a manner so that it fits the user expected workflow.</p>

<h5 style={{ color:'gray' }}>UX Designers:</h5>
<p>Mostly you have seen the role as UI/Ux designers so you can either specialized in the UI designer or a UX designer. Now the user experience designers that's UX designers make sure that your website is able to give the visitors engaged. They analyze data before finalizing any design on the website also the UX designers run complex tests and restructure the websites when needed to keep the user experience optimal.</p>

<h5 style={{ color:'gray' }}>Visual Designers:</h5>
<p>When we combine the duties of UI and UX designers it creates a separate profile called the visual designer. Visual designing refers to creating interfaces that are both visually pleasing and convenient to use also they must respect the voice of the brand. So visual design skills involve both creativity and programming.</p>

<h4 style={{ color: "#302424" }}>4. Difference between and Key roles of a web developer and a web designer:</h4>


<div>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Web Developer</th>
                        <th>Web Designers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {diffrence.map((info) => (
                        <tr key={info.rank}>
                          <td>{info.title1}</td>
                          <td>{info.title2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h4 style={{ color: "#302424" }}>5. Salary of a web developer and a web designer:</h4>
                <p>Now talking about the salary trend the average web developer salary in India is around Rs 308,656, in the US it's around $59,108. According to Glassdoor, it's around $96,000 which is much higher.<br></br>
                The average salary of a web designer in India is around Rs 281,410 which is slightly less than a web developer, in the US it's around $49,693.</p>



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
                        Auther:
                        <span style={{ color: "gray" }}> @ceoankityadav</span>
                        <br></br>Post on:
                        <span style={{ color: "gray" }}> 25/11/20 </span>
                      </h3>
                    </div>
                    </div>

                <NavLink exact to={{ pathname: "https://youtube.com/workforwin/" }} target="_blank" className="aboutsocial"><YouTubeIcon className="yout" style={{fontSize:"2rem"}} /></NavLink>
        <NavLink exact to={{ pathname: "https://www.linkedin.com/in/ceoankityadav/" }} target="_blank" className="aboutsocial"><LinkedInIcon className="linked" style={{fontSize:"2rem"}} /></NavLink>
        <NavLink exact to={{ pathname: "https://twitter.com/ceoankityadav/" }} target="_blank" className="aboutsocial"><TwitterIcon className="twit" style={{fontSize:"2rem"}} /></NavLink>
        <NavLink exact to={{ pathname: "/contact" }} target="_blank" className="aboutsocial"><MailIcon className="twit" style={{fontSize:"2rem"}} /></NavLink>
        <Bootombar />
        
                </div>
              </div>

              {/* ******* Right Side Bar Start******** */}
              <Rightbar />
              {/* ******* Right Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Developervsdesigner;
