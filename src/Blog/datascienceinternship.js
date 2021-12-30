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



const Datascienceinternship = () => {

    const [diffrence] = React.useState([
        {
          rank: 1,
          title: `What is bias, variance trade-off?`,
        },
        {
          rank: 2,
          title: `What is exploding gradients?`,
        },
        {
          rank: 3,
          title: `What is a confusion matrix?`,
        },
        {
          rank: 4,
          title: `Explain how a ROC curve works?`,
        },
        {
          rank: 5,
          title: `What is selection Bias?`,
        },
        {
          rank: 6,
          title: `Explain the SVM machine learning algorithm in detail.`,
        },
        {
          rank: 7,
          title: `What are the support vectors in SVM?`,
        },
        {
          rank: 8,
          title: `What are the different kernel functions in SVM?`,
        },
        {
          rank: 9,
          title: `Explain the Decision Tree algorithm in detail.`,
        },
        {
          rank: 10,
          title: `What is pruning in the Decision Tree?`,
        },

        {
          rank: 11,
          title: `What is Ensemble Learning?`,
        },
        {
          rank: 12,
          title: `What is the Random Forest? How does it work?`,
        },
        {
          rank: 13,
          title: `What is deep learning?`,
        },
        {
          rank: 14,
          title: `What is reinforcement learning?`,
        },
        {
          rank: 15,
          title: `What is a p-value?`,
        },
      ]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>How to get a Data Science Internship in India? ~ Workforwin</title>
        <meta
          name="title"
          content="How to get a Data Science Internship in India? ~ Workforwin"
        />
        <meta
          name="description"
          content="Data Science Internship is very easy to get in India. As we all know technology is growing very fast, we are using technology regularly in our daily life, and that is producing a huge amount of data. " canonical="https://workforwin.com/how-to-get-a-data-science-internship-in-india"
        />
        <meta
          name="keywords"
          content="Data Science, How to get a Data Science Internship in India?, data science job ,dat science interview question, data science interview, workforwin"
        />
      
      <meta
        id="meta-description"
        name="description"
        content="Data Science Internship is very easy to get in India. As we all know technology is growing very fast, we are using technology regularly in our daily life, and that is producing a huge amount of data. " canonical="https://workforwin.com/how-to-get-a-data-science-internship-in-india"
      />
      <meta
        id="og-title"
        property="og:title"
        content="How to get a Data Science Internship in India? ~ Workforwin"
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
                 How to get a Data Science Internship in India?
                </h1>
                <p>Data Science Internship is very easy to get in India. As we all know technology is growing very fast, we are using technology regularly in our daily life, and that is producing a huge amount of data. When you apply for a data science internship, a company that will hire you as an intern, that will give you an opportunity to work on that data to find some useful information from that.</p>


<h4 style={{ color: "#302424" }}>What is Data Science?</h4>
<p>Data science is an art of playing with data. A person who plays with data and makes it useful called Data Scientist. Now a day’s data science is the hottest job in the IT sector. Data science contains mainly four parts.
<br></br><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Machine learning <br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Statistics<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Data Visualization<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Data Mining<br></br>
These are the four main steps that you should follow if you want to become a data scientist. Rest of that you should have knowledge of coding, communication, databases, public speaking, business. The company want’s a creative person, it will batter for you having creative ideas always in your mind.</p>

<div className="col-sm-6 center">
  <div className="shadow mb-3 mt-3" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
  <div className="card-header text-success ">Image</div>
  <div className="card-body text-success">
<img src="https://1.bp.blogspot.com/-rLmhZGljmWM/X8XWEKCsKLI/AAAAAAAACo0/YodP64pl8jMTSi4d69dGF49EI4Hs0EgeACLcBGAsYHQ/s16000/Data%2BScience%2BInternship.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
  </div>
</div>
  </div>

<h4 style={{ color: "#302424" }}>Data Science vs Machine Learning</h4>
<p>Data science deals with data to find some valuable information from a huge amount of data. Here we filter out useful data and garbage data. Now a day’s companies are collecting data in a huge amount. Data analytics analyze the data and provide information about that data to the relevant companies. There is a popular quote ” Data is Money”. If someone has data then he is the king of his field, and he can do whatever he wants.<br></br>
Big companies like Google, Amazon, Microsoft, Uber, Ola, IBM, Walmart, Apple, Flipkart are collecting data from their customers. Companies use this data to improve their services. Machine learning is a process of data science. In machine learning, we trained a machine by providing data as an input to a machine learning model. Here we have three types of models in machine learning.<br></br>Supervised learning<br></br>Unsupervised learning</p>
      

<h4 style={{ color: "#302424" }}>Education Requirement to Get A Data Science Internship?</h4>
<p>To become a Data scientist you should have the following educational background<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Computer science<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Statistics<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Physics<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Social Science<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Mathematics<br></br>
<ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'gray'}} /> Economics</p>
<p>There are some steps to get a Data Science Internship<br></br>1) You should have a bachelor’s degree in computer science.<br></br>
2) Earn a data science master’s degree or an ms degree in data science related to the data field.<br></br>
3) Work on projects and gain some experience in your field of interest. ( ex: mathematics, physics, CS ).</p>

<h4 style={{ color: "#302424" }}>How to apply for a Data Science Internship?</h4>
<p>If you are having good experience in the data science field and having the skills required for data science or you want an internship as a data scientist then you can apply on Internshala, Linked In, Indeed. There are some paid or some free data science internships, you can apply for an internship at the location of Hyderabad, Bangalore, and Pune.</p>

<h4 style={{ color: "#302424" }}>Data Science Jobs & Data Science Salary</h4>
<p>As we can see demand for a data scientist is increasing day by day. It’s very to get a data scientist job in India if you have proper knowledge of data science. In India, many companies are recruiting freshers so you can get data science jobs in Hyderabad, data science jobs in Bangalore and Pune. Here you will get a good salary as a data scientist. A data science salary is nearly around? 500,000 per annum. The Highest-paid salary of a data scientist is around $212,000 per year.</p>

<h4 style={{ color: "#302424" }}>Is Data Science Hard</h4>
<p>Data science is a complex field, it is not easy to become a data scientist. For that, you should have a strong educational background and require a deep knowledge of data. Commonly asked question is data science hard. Giving an answer to that type of question is not worthful, because if you are passionate about data science only then you can learn data science. Here you should have knowledge of coding and this is the first step to become a data scientist. To learn to code you can go for data science with r and data science with python. Both languages are popular for data science.</p>

<h4 style={{ color: "#302424" }}>Where Data Science is Applied?</h4>
<p>For example, you visit the first time the Amazon website then you are a new customer of amazon till now amazon doesn’t know anything about you, but he will track you what you are searching for, in which product you are interested, which product you buy. when you will visit that website the second time then it will show you products related to what you search and buy lat time, and they will continue to improve their service for you every time when you visit that website.<br></br>
Another example is google adds. Google also tracks your data about what you search on google, on which website you spend more time. On behalf of this data it shows you advertisements, youtube is also having the same strategy.</p>

<h4 style={{ color: "#302424" }}>Data Science Tutorial</h4>
<p>You can find many resources on the internet to learn data science. You can search for a data science course by nptel, you can watch videos on youtube. To complete a data science course takes a minimum of 6 months.</p>

<h4 style={{ color: "#302424" }}>How to prepare for a Data Science Interview?</h4>
<p>To prepare for a data science interview follow these steps:<br></br>
1) Practice lots of question which are previously asked in interviews of data science.<br></br>
2) Work on real-life problems and try to find out solutions.<br></br>
3) Try to design models of machine learning.<br></br>
4) Build your concepts stronger.<br></br>
5) Manage your social profiles such as your Linkedin profile.<br></br>
6) Always keep a positive mindset.<br></br>
7) During the interview never say bad things about your previous company.<br></br>
8) Before going to the interview know some important facts about the company.<br></br>
9) Don’t take so much stress while interviewing, relax, and be honest.<br></br>
10) The first listen carefully question of the interviewer and then answer.</p>



<h4 style={{ color: "#302424" }}>Frequently Asked Data Science Interview Questions</h4>

<div>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Question</th>
                      </tr>
                    </thead>
                    <tbody>
                      {diffrence.map((info) => (
                        <tr key={info.rank}>
                          <td>{info.rank}</td>
                          <td>{info.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

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
                        <span style={{ color: "gray" }}> 3/12/20 </span>
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
export default Datascienceinternship;
