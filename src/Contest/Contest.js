import React, { useEffect } from "react";
import './Contest.css';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CodeIcon from "@material-ui/icons/Code";


const Contest = () => {
    const [state] = React.useState([
        {
          id: 1,
          icon: <CodeIcon />,
          heading: "Python",
          text: `Test your coding skills by fighting challenges in the world most popular programming.`,
          img:"https://1.bp.blogspot.com/-l4q98BoM5EQ/YCX3U8A-_0I/AAAAAAAAC5A/dyBgC8hlMlgvxQH63IOH76CUjPQrC3s3gCLcBGAsYHQ/s16000/Python%2BContest%2B%2523workforwin.webp",
          link:"#"
        },
        {
          id: 2,
          icon: <CodeIcon />,
          heading: "Java",
          text: `Test your Java programming skills by fighting coding challenges at workforwin. `,
          img:"https://1.bp.blogspot.com/-A0JPFjz-HIA/YCX3q9TCPLI/AAAAAAAAC5I/9Y6IKqKKI4U17PweSapUg8lbJGXLKv7ywCLcBGAsYHQ/s16000/Java%2BContest%2B%2523workforwin.webp",
          link:"#"
        },
        {
          id: 3,
          icon: <AssignmentIcon />,
          heading: "Aptitude",
          text: `Analyze your general aptitude skills by fighting challenges across the globe. `,
          img:"https://1.bp.blogspot.com/-sBonuu4PT-Y/YCX33uApd3I/AAAAAAAAC5M/LqLVtPeNKUkAlZdAtrQbu1hpe0x361QRACLcBGAsYHQ/s16000/Aptitude%2BContest%2B%2523workforwin.webp",
          link:"#"
        },
      ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Workforwin Contest</title>
        <meta name="title" content="Workforwin Online Contest" />
        <meta name="description" content="If you prefer to learn by doing, start with our practical tutorial and build amazing reactjs projects." canonical="https://workforwin.com/course" />
        <meta name="keywords" content="Web Development Course,react, reactjs, reactjs tutorial, reactjs tutorial for beginners, reactjs for beginners, what is reactjs, reactjs interview questions, web development course, web development, web development tutorial, web development tutorial for beginners, web development full course, web development projects, how to become a web developer, reactjs developer," />
        <meta id="meta-description" name="description" content="If you prefer to learn by doing, start with our practical tutorial and build amazing reactjs projects." canonical="https://workforwin.com/course" />
        <meta id="og-title" property="og:title" content="Workforwin Online Contest" />
      </Helmet>
    
            <div className="contesthero">
                <div className="container">
                <div className="row contestrow">
            <div className="contest-col1">
              <h1>Online Aptitude Reasoning Contest</h1>
              <p>The best way for checking power of knowledge, skills and Logical Ability</p>
              <button className="contestbutton mb-5 mb-lg-0">
            <NavLink className="a" exact to={{pathname:"http://contest.workforwin.com/login/?redirect_to=http%3A%2F%2Fcontest.workforwin.com%2Finstructions%2F"}} target="_blank">
              <span> Start Now </span>
            </NavLink>
          </button>
            </div>
            <div className="contest-col2">
              <img
                src="https://1.bp.blogspot.com/--XhLsRpsh2s/YCUSjzqs5JI/AAAAAAAAC4Q/jRDZ-G0d-ZIuMfTrr37ICiVXZLiankacgCLcBGAsYHQ/s16000/Workforwin%2BOnline%2BCOntest.webp"
                alt="Workforwin Conline Contest"
                className="contestheader"
              ></img>
            </div>
          </div>
                </div>
            </div>

            <div className="col-md-9 col-11 mx-auto">
      <h2 className=" upcommingcontest">Upcoming Contest</h2>
      {state.map((info) => (
        <div
          className="blogcard col-md-4 col-12 mx-auto"
          key={info.id}
          style={{ display: "inline-flex", padding: "10px" }}
        >
          <div className="promain">
            <div className="commingcontest">
              
              <img
                src={info.img}
                alt="Workforwin Conline Contest"
                className="contestheader" style={{borderRadius:"5px"}}
              ></img>
              <h4 className="pro4 mt-4">
                <span style={{ fontSize: "2rem" }}>
                  {info.icon}
                </span>{" "}
                {info.heading}
              </h4>
              <p className="mt-3 prop">{info.text}</p>
              <button className="button mb-5 mb-lg-0">
            <NavLink className="a" to={info.link}>
              <span> Start Now </span>
            </NavLink>
          </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="contestbottom ">
    <div className="container">
                <div className="row contestrow">
            <div className="contestwin1 mhide">
              <h2><span role="img" aria-label="">✨</span> Fight challenges and win amazing prizes</h2>
              <hr style={{borderTop:"1px solid white"}} />
              <h2><span role="img" aria-label="">🥇</span> Top 10 winners name will be displayed on the leaderboard</h2>
              <hr style={{borderTop:"1px solid white"}} />
              <h2><span role="img" aria-label="">🎉</span> Any one participant will get paid web development course free</h2>
            </div>
            <div className="contestwin2">
              <img
                src="https://1.bp.blogspot.com/-zsMO7A2Ug18/YCX9b-XqB4I/AAAAAAAAC5o/ExFn1wsSKHcaXGdQkXJkquJNK0hVkmhwACLcBGAsYHQ/s16000/image-removebg-preview.png"
                alt="Workforwin Conline Contest" className="contestheader" ></img>
            </div>
          </div>
                </div>
    </div>
    </>
  );
};
export default Contest;
