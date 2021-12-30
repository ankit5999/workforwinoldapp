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



const Machinedays = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>21 Days of Machine Learning</title>
        <meta name="title" content="21 Days of Machine Learning" />
        <meta name="description" content="Learn Machine Learning just in 21 days at workforwin. Workforwin providing machine learning course for freshers." canonical="https://workforwin.com/21-days-of-machine-learning" />
        <meta name="keywords" content="machine learning, data science, machine learning tutorials, 21 days of machine learning, machine learning for begineers, workforwin machine learning,  workforwin" />
        <meta id="meta-description" name="description" content="Learn Machine Learning just in 21 days at workforwin. Workforwin providing machine learning course for freshers." canonical="https://workforwin.com/21-days-of-machine-learning" />
        <meta id="og-title" property="og:title" content="21 Days of Machine Learning" />
        </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
              {/* ******** Left Side Bar ********* */}
              <Leftbar />
              {/* ******** Left Side Bar ********* */}
              <div className="col-lg-7 order-1 shadow-lg " style={{ paddingRight: "10px", paddingBottom: "5px" }} >
                <h1 style={{ fontSize: "1.7rem", wordSpacing: "5px", paddingTop: "2%", paddingBottom: "15px", borderBottom: "1px solid #ff4a57", color: "#ff4a57", }} >
                  <MenuBookIcon style={{ fontSize: "2.1rem", marginTop: "-5px", color: "#ff4a57", }} /> 21 Days of Machine Learning</h1>
              

{/* <p>We all use its services every day, it answers our most bizarre questions, yes you're reading about google or more importantly, it's bank-busting silicon valley headquarters. A short walk from the San Francisco bay area and a stone's throw away from other multinational headquarters like 
<span className="text-success"> apple park</span> and the homes of <span className="text-success">facebook, eBay and Netflix.</span></p> */}


<div className="card shadow mb-3">
  <div className="card-header text-white bg-secondary">Day: 1</div>
  <div className="card-body">
    <h5 className="card-title">Introduction of Data Science</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=edZ_JYpOM8U" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=edZ_JYpOM8U</NavLink> ( 30 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://intellipaat.com/blog/what-is-data-science/" }} style={{textDecoration:"none"}}> https://intellipaat.com/blog/what-is-data-science/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://medium.com/@rathi.ankit/data-science-introduction-e03773919c6" }} style={{textDecoration:"none"}}> https://medium.com/@rathi.ankit/data-science-introduction-e03773919c6</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/intro-to-data-science-531079c38b22" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/intro-to-data-science-531079c38b22</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Application in Day to Day Life</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=HKcO3-6TYr0" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=HKcO3-6TYr0</NavLink> ( 6 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.geeksforgeeks.org/machine-learning-introduction/" }} style={{textDecoration:"none"}}> https://www.geeksforgeeks.org/machine-learning-introduction/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://medium.com/app-affairs/9-applications-of-machine-learning-from-day-to-day-life-112a47a429d0" }} style={{textDecoration:"none"}}> https://medium.com/app-affairs/9-applications-of-machine-learning-from-day-to-day-life-112a47a429d0</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://data-flair.training/blogs/machine-learning-applications/" }} style={{textDecoration:"none"}}> https://data-flair.training/blogs/machine-learning-applications/</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>



  <div className="col-sm-6 center">
  <div className="shadow mb-3 mt-3" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
  <div className="card-header text-success ">Image</div>
  <div className="card-body text-success">
<img src="https://1.bp.blogspot.com/-Xw1WFG_0gyg/X9buGHVdeXI/AAAAAAAACuY/8OfBpiz65DwwA95rGlvrJlGC-7xjx4MTQCLcBGAsYHQ/s16000/21%2BDays%2Bof%2BMachine%2BLearning.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
  </div>
</div>
  </div>


  <div className="card shadow mb-3">
  <div className="card-header text-white bg-primary">Day: 2 & 3</div>
  <div className="card-body">
    <h5 className="card-title">Python</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=YfO28Ihehbk" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=YfO28Ihehbk</NavLink> ( 7 Hrs )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://docs.python.org/3/tutorial/" }} style={{textDecoration:"none"}}> https://docs.python.org/3/tutorial/</NavLink> ( Official Website )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.tutorialspoint.com/python/index.htm" }} style={{textDecoration:"none"}}> https://www.tutorialspoint.com/python/index.htm</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-success">Day: 4</div>
  <div className="card-body">
    <h5 className="card-title">Exercises in Python</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.w3resource.com/python-exercises/" }} style={{textDecoration:"none"}}> https://www.w3resource.com/python-exercises/</NavLink> <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.hackerrank.com/domains/python" }} style={{textDecoration:"none"}}> https://www.hackerrank.com/domains/python</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://codingbat.com/python" }} style={{textDecoration:"none"}}> https://codingbat.com/python</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.practicepython.org/" }} style={{textDecoration:"none"}}> https://www.practicepython.org/</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://pynative.com/python-exercises-with-solutions/" }} style={{textDecoration:"none"}}> https://pynative.com/python-exercises-with-solutions/</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://edabit.com/challenges/python3" }} style={{textDecoration:"none"}}> https://edabit.com/challenges/python3</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://exercism.io/tracks/python/exercises" }} style={{textDecoration:"none"}}> https://exercism.io/tracks/python/exercises</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://programmingwithmosh.com/python/python-exercises-and-questions-for-beginners/" }} style={{textDecoration:"none"}}> https://programmingwithmosh.com/python/python-exercises-and-questions-for-beginners/</NavLink><br></br>
    </p>
    <h5 className="card-title">Installation of Anaconda Distribution and others</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=5mDYijMfSzs" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=5mDYijMfSzs</NavLink> ( 14 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://docs.anaconda.com/anaconda/install/" }} style={{textDecoration:"none"}}> https://docs.anaconda.com/anaconda/install/</NavLink> ( Official Website )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.programiz.com/python-programming/first-program" }} style={{textDecoration:"none"}}> https://www.programiz.com/python-programming/first-program</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-danger">Day: 5</div>
  <div className="card-body">
    <h5 className="card-title">Numpy</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=QUT1VHiLmmI" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=QUT1VHiLmmI</NavLink> ( 1 Hrs ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://docs.scipy.org/doc/numpy/user/basics.html" }} style={{textDecoration:"none"}}> https://docs.scipy.org/doc/numpy/user/basics.html</NavLink> ( Official Website )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.w3resource.com/python-exercises/numpy/index.php" }} style={{textDecoration:"none"}}> https://www.w3resource.com/python-exercises/numpy/index.php</NavLink> ( Exercises )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.machinelearningplus.com/python/101-numpy-exercises-python/" }} style={{textDecoration:"none"}}> https://www.machinelearningplus.com/python/101-numpy-exercises-python/</NavLink> ( Exercises )<br></br>
    </p>
    <h5 className="card-title">Pandas</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=ZyhVh-qRZPA&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=ZyhVh-qRZPA&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS</NavLink> ( 4 Hrs )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=eMOA1pPVUc4" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=eMOA1pPVUc4</NavLink> ( Project) )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html" }} style={{textDecoration:"none"}}> https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html</NavLink> ( Official Website )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.w3resource.com/python-exercises/pandas/index.php" }} style={{textDecoration:"none"}}> https://www.w3resource.com/python-exercises/pandas/index.php</NavLink> ( Exercises )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-warning">Day: 6 ~ Visualization</div>
  <div className="card-body">
    <h5 className="card-title">Matplotlib</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=UO98lJQ3QGI&list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=UO98lJQ3QGI&list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_</NavLink> ( 3 Hrs ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://matplotlib.org/tutorials/index.html" }} style={{textDecoration:"none"}}> https://matplotlib.org/tutorials/index.html</NavLink> ( Official Website )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.machinelearningplus.com/plots/matplotlib-tutorial-complete-guide-python-plot-examples/" }} style={{textDecoration:"none"}}> https://www.machinelearningplus.com/plots/matplotlib-tutorial-complete-guide-python-plot-examples/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Seaborn</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=GcXcSZ0gQps" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=GcXcSZ0gQps</NavLink> ( 2.5 Hrs )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://seaborn.pydata.org/introduction.html" }} style={{textDecoration:"none"}}> https://seaborn.pydata.org/introduction.html</NavLink> ( Official Website) )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://elitedatascience.com/python-seaborn-tutorial" }} style={{textDecoration:"none"}}> https://elitedatascience.com/python-seaborn-tutorial</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Plotly</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=NPznsxeL3FM&list=PLH6mU1kedUy9HTC1n9QYtVHmJRHQ97DBa" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=NPznsxeL3FM&list=PLH6mU1kedUy9HTC1n9QYtVHmJRHQ97DBa</NavLink> ( 2 Hrs)<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://plotly.com/python/" }} style={{textDecoration:"none"}}> https://plotly.com/python/</NavLink> ( Official Website) )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-info">Day: 7 & 8</div>
  <div className="card-body">
    <h5 className="card-title">Linear Algebra <br></br>Matrix <br></br>Statistics</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.mathsisfun.com/data/" }} style={{textDecoration:"none"}}> https://www.mathsisfun.com/data/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=uhxtUt_-GyM&list=PL1328115D3D8A2566" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=uhxtUt_-GyM&list=PL1328115D3D8A2566</NavLink> ( 7 Hrs )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header">Day: 9</div>
  <div className="card-body">
    <h5 className="card-title">Machine Learning and Types</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=HcqpanDadyQ" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=HcqpanDadyQ</NavLink> ( 6 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=xtOg44r6dsE" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=xtOg44r6dsE</NavLink> ( 20 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/machine-learning-an-introduction-23b84d51e6d0" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/machine-learning-an-introduction-23b84d51e6d0</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Exploratory Data Analysis</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=5NcbVYhQJvw" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=5NcbVYhQJvw</NavLink> ( 45 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Data Extraction</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/extracting-data-for-machine-learning-f90b97a97f4c" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/extracting-data-for-machine-learning-f90b97a97f4c</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Data Cleansing and Transformation</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/data-preparation-for-machine-learning-cleansing-transformation-feature-engineering-d2334079b06d" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/data-preparation-for-machine-learning-cleansing-transformation-feature-engineering-d2334079b06d</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Data Preparation</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=Zi-0rlM4RDs" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=Zi-0rlM4RDs</NavLink> ( 7 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/difference-test-validation-datasets/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/difference-test-validation-datasets/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header text-white bg-dark">Day: 10</div>
  <div className="card-body">
    <h5 className="card-title">Model</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=60oFFvywKrQ" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=60oFFvywKrQ</NavLink> ( 12 Mins ) <br></br>
    </p>
    <h5 className="card-title">Types of Model</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/types-of-learning-in-machine-learning/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/types-of-learning-in-machine-learning/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/types-of-machine-learning-algorithms-you-should-know-953a08248861" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/types-of-machine-learning-algorithms-you-should-know-953a08248861</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.analyticsvidhya.com/blog/2015/08/comprehensive-guide-regression/" }} style={{textDecoration:"none"}}> https://www.analyticsvidhya.com/blog/2015/08/comprehensive-guide-regression/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.geeksforgeeks.org/regression-classification-supervised-machine-learning/" }} style={{textDecoration:"none"}}> https://www.geeksforgeeks.org/regression-classification-supervised-machine-learning/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Linear Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=E5RjzSK0fvY" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=E5RjzSK0fvY</NavLink> ( 30 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/introduction-to-machine-learning-algorithms-linear-regression-14c4e325882a" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/introduction-to-machine-learning-algorithms-linear-regression-14c4e325882a</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/linear-regression-for-machine-learning/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/linear-regression-for-machine-learning/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/understanding-the-ols-method-for-simple-linear-regression-e0a4e8f692cc" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/understanding-the-ols-method-for-simple-linear-regression-e0a4e8f692cc</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Bias and Variance</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=EuBBz3bI-aA" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=EuBBz3bI-aA</NavLink> ( 7 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/understanding-the-bias-variance-tradeoff-165e6942b229" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/understanding-the-bias-variance-tradeoff-165e6942b229</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/gentle-introduction-to-the-bias-variance-trade-off-in-machine-learning/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/gentle-introduction-to-the-bias-variance-trade-off-in-machine-learning/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Overfitting and Underfitting</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">MSE,MAE, R-Square</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://medium.com/@george.drakos62/how-to-select-the-right-evaluation-metric-for-machine-learning-models-part-1-regrression-metrics-3606e25beae0" }} style={{textDecoration:"none"}}> https://medium.com/@george.drakos62/how-to-select-the-right-evaluation-metric-for-machine-learning-models-part-1-regrression-metrics-3606e25beae0</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-danger">Day: 11</div>
  <div className="card-body">
    <h5 className="card-title">Polynomial Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=Qnt2vBRW8Io" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=Qnt2vBRW8Io</NavLink> ( 6 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/polynomial-regression-bbe8b9d97491" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/polynomial-regression-bbe8b9d97491</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Ridge Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=Q81RR3yKn30" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=Q81RR3yKn30</NavLink> ( 30 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/ridge-regression-for-better-usage-2f19b3a202db" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/ridge-regression-for-better-usage-2f19b3a202db</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Lasso Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=NGf0voTMlcs" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=NGf0voTMlcs</NavLink> ( 9 Mins)<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/ridge-and-lasso-regression-a-complete-guide-with-python-scikit-learn-e20e34bcbf0b" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/ridge-and-lasso-regression-a-complete-guide-with-python-scikit-learn-e20e34bcbf0b</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Elastic Net Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=1dKRdX9bfIo" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=1dKRdX9bfIo</NavLink> ( 6 Mins)<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://hackernoon.com/an-introduction-to-ridge-lasso-and-elastic-net-regression-cca60b4b934f" }} style={{textDecoration:"none"}}> https://hackernoon.com/an-introduction-to-ridge-lasso-and-elastic-net-regression-cca60b4b934f</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.datacamp.com/community/tutorials/tutorial-ridge-lasso-elastic-net" }} style={{textDecoration:"none"}}> https://www.datacamp.com/community/tutorials/tutorial-ridge-lasso-elastic-net</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header text-white bg-warning">Day: 12</div>
  <div className="card-body">
    <h5 className="card-title">Support Vector Regression(SVR)</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=Fq_mwvdzzjI" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=Fq_mwvdzzjI</NavLink> ( 10 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/an-introduction-to-support-vector-regression-svr-a3ebc1672c2" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/an-introduction-to-support-vector-regression-svr-a3ebc1672c2</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Decision Tree Regression </h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=g9c66TUylZ4" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=g9c66TUylZ4</NavLink> ( 23 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/decision-tree-algorithm-explained-83beb6e78ef4" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/decision-tree-algorithm-explained-83beb6e78ef4</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://medium.com/pursuitnotes/decision-tree-regression-in-6-steps-with-python-1a1c5aa2ee16" }} style={{textDecoration:"none"}}> https://medium.com/pursuitnotes/decision-tree-regression-in-6-steps-with-python-1a1c5aa2ee16</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header text-white bg-primary">Day: 13</div>
  <div className="card-body">
    <h5 className="card-title">Random Forest Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=D_2LkhMJcfY" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=D_2LkhMJcfY</NavLink> ( 8 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.geeksforgeeks.org/random-forest-regression-in-python/" }} style={{textDecoration:"none"}}> https://www.geeksforgeeks.org/random-forest-regression-in-python/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/random-forest-and-its-implementation-71824ced454f" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/random-forest-and-its-implementation-71824ced454f</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Ensemble Method </h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/ensemble-methods-in-machine-learning-what-are-they-and-why-use-them-68ec3f9fef5f" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/ensemble-methods-in-machine-learning-what-are-they-and-why-use-them-68ec3f9fef5f</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://blog.statsbot.co/ensemble-learning-d1dcd548e936" }} style={{textDecoration:"none"}}> https://blog.statsbot.co/ensemble-learning-d1dcd548e936</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Bagging and Boosting</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/ensemble-methods-bagging-boosting-and-stacking-c9214a10a205" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/ensemble-methods-bagging-boosting-and-stacking-c9214a10a205</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Bootstrap</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/a-gentle-introduction-to-the-bootstrap-method/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/a-gentle-introduction-to-the-bootstrap-method/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/an-introduction-to-the-bootstrap-method-58bcb51b4d60" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/an-introduction-to-the-bootstrap-method-58bcb51b4d60</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header text-white bg-success">Day: 14</div>
  <div className="card-body">
    <h5 className="card-title">Classification</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=pXdum128xww" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=pXdum128xww</NavLink> ( 34 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://medium.com/datadriveninvestor/classification-algorithms-in-machine-learning-85c0ab65ff4" }} style={{textDecoration:"none"}}> https://medium.com/datadriveninvestor/classification-algorithms-in-machine-learning-85c0ab65ff4</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://medium.com/@Mandysidana/machine-learning-types-of-classification-9497bd4f2e14" }} style={{textDecoration:"none"}}> https://medium.com/@Mandysidana/machine-learning-types-of-classification-9497bd4f2e14</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Logistic Regression</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=VCJdg7YBbAQ" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=VCJdg7YBbAQ</NavLink> ( 1 Hrs )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/logistic-regression-detailed-overview-46c4da4303bc" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/logistic-regression-detailed-overview-46c4da4303bc</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/logistic-regression-for-machine-learning/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/logistic-regression-for-machine-learning/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">K-Nearest Neighbors (K-NN)</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=HVXime0nQeI" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=HVXime0nQeI</NavLink> ( 6 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/machine-learning-basics-with-the-k-nearest-neighbors-algorithm-6a6e71d01761" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/machine-learning-basics-with-the-k-nearest-neighbors-algorithm-6a6e71d01761</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.geeksforgeeks.org/k-nearest-neighbours/" }} style={{textDecoration:"none"}}> https://www.geeksforgeeks.org/k-nearest-neighbours/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/" }} style={{textDecoration:"none"}}> https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Precision and Recall</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/beyond-accuracy-precision-and-recall-3da06bea9f6c" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/beyond-accuracy-precision-and-recall-3da06bea9f6c</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/precision-vs-recall-386cf9f89488" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/precision-vs-recall-386cf9f89488</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/precision-recall-and-f-measure-for-imbalanced-classification/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/precision-recall-and-f-measure-for-imbalanced-classification/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">F-Score</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/accuracy-recall-precision-f-score-specificity-which-to-optimize-on-867d3f11124" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/accuracy-recall-precision-f-score-specificity-which-to-optimize-on-867d3f11124</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">AUC  & ROC</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-classification-in-python/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-classification-in-python/</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-secondary">Day: 15</div>
  <div className="card-body">
    <h5 className="card-title">Support Vector Machine (SVM)</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=efR1C6CvhmE&t=897s" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=efR1C6CvhmE&t=897s</NavLink> ( 21 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Naive Bayes</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=l3dZ6ZNFjo0" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=l3dZ6ZNFjo0</NavLink> ( 45 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/naive-bayes-classifier-81d512f50a7c" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/naive-bayes-classifier-81d512f50a7c</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Principal Component Analysis (PCA)</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=FgakZw6K1QQ" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=FgakZw6K1QQ</NavLink> ( 22 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/a-one-stop-shop-for-principal-component-analysis-5582fb7e0a9c" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/a-one-stop-shop-for-principal-component-analysis-5582fb7e0a9c</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Cross Validation</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=7062skdX05Y" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=7062skdX05Y</NavLink> ( 17 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/cross-validation-in-machine-learning-72924a69872f" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/cross-validation-in-machine-learning-72924a69872f</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/k-fold-cross-validation/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/k-fold-cross-validation/</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Grid Search</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=HdlDYng8g9s" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=HdlDYng8g9s</NavLink> ( 17 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=Ah4wsTXghwI" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=Ah4wsTXghwI</NavLink> ( 8 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/grid-search-for-model-tuning-3319b259367e" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/grid-search-for-model-tuning-3319b259367e</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.datacamp.com/community/tutorials/parameter-optimization-machine-learning-models" }} style={{textDecoration:"none"}}> https://www.datacamp.com/community/tutorials/parameter-optimization-machine-learning-models</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">UnderSampling and OverSampling</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/random-oversampling-and-undersampling-for-imbalanced-classification/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/random-oversampling-and-undersampling-for-imbalanced-classification/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/combine-oversampling-and-undersampling-for-imbalanced-classification/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/combine-oversampling-and-undersampling-for-imbalanced-classification/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.kaggle.com/residentmario/undersampling-and-oversampling-imbalanced-data" }} style={{textDecoration:"none"}}> https://www.kaggle.com/residentmario/undersampling-and-oversampling-imbalanced-data</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Balanced and InBalanced Data</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://medium.com/analytics-vidhya/what-is-balance-and-imbalance-dataset-89e8d7f46bc5" }} style={{textDecoration:"none"}}> https://medium.com/analytics-vidhya/what-is-balance-and-imbalance-dataset-89e8d7f46bc5</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.analyticsvidhya.com/blog/2017/03/imbalanced-data-classification/" }} style={{textDecoration:"none"}}> https://www.analyticsvidhya.com/blog/2017/03/imbalanced-data-classification/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.kdnuggets.com/2017/06/7-techniques-handle-imbalanced-data.html" }} style={{textDecoration:"none"}}> https://www.kdnuggets.com/2017/06/7-techniques-handle-imbalanced-data.html</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header">Day: 16</div>
  <div className="card-body">
    <h5 className="card-title">Decision Tree Classification</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=7VeUPuFGJHk" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=7VeUPuFGJHk</NavLink> ( 20 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/decision-tree-classification-de64fc4d5aac" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/decision-tree-classification-de64fc4d5aac</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.datacamp.com/community/tutorials/decision-tree-classification-python" }} style={{textDecoration:"none"}}> https://www.datacamp.com/community/tutorials/decision-tree-classification-python</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Random Forest Classification</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=D_2LkhMJcfY" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=D_2LkhMJcfY</NavLink> ( 8 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/random-forest-classification-and-its-implementation-d5d840dbead0" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/random-forest-classification-and-its-implementation-d5d840dbead0</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/understanding-random-forest-58381e0602d2" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/understanding-random-forest-58381e0602d2</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Out of Bag (OOB)</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/what-is-out-of-bag-oob-score-in-random-forest-a7fa23d710" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/what-is-out-of-bag-oob-score-in-random-forest-a7fa23d710</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Confusion Matrix</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=8Oog7TXHvFY" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=8Oog7TXHvFY</NavLink> ( 36 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/understanding-confusion-matrix-a9ad42dcfd62" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/understanding-confusion-matrix-a9ad42dcfd62</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-info">Day: 17</div>
  <div className="card-body">
    <h5 className="card-title">Clustering</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=UhVn2WrzMnI" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=UhVn2WrzMnI</NavLink> ( 24 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/" }} style={{textDecoration:"none"}}> https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/the-5-clustering-algorithms-data-scientists-need-to-know-a36d136ef68" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/the-5-clustering-algorithms-data-scientists-need-to-know-a36d136ef68</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">K-Means Clustering</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=4b5d3muPQmA" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=4b5d3muPQmA</NavLink> ( 8 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/k-means-clustering-algorithm-applications-evaluation-methods-and-drawbacks-aa03e644b48a" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/k-means-clustering-algorithm-applications-evaluation-methods-and-drawbacks-aa03e644b48a</NavLink> ( Blog )<br></br>
    </p>
    <h5 className="card-title">Hierarchical Clustering</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=7xHsRkOdVwo" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=7xHsRkOdVwo</NavLink> ( 12 Mins )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/understanding-the-concept-of-hierarchical-clustering-technique-c6e8243758ec" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/understanding-the-concept-of-hierarchical-clustering-technique-c6e8243758ec</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header text-white bg-dark">Day: 18</div>
  <div className="card-body">
    <h5 className="card-title">NLP</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=FLZvOKSCkxY&list=PLQVvvaa0QuDf2JswnfiGkliBInZnIC4HL" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=FLZvOKSCkxY&list=PLQVvvaa0QuDf2JswnfiGkliBInZnIC4HL</NavLink> ( 3 Hrs ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/your-guide-to-natural-language-processing-nlp-48ea2511f6e1" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/your-guide-to-natural-language-processing-nlp-48ea2511f6e1</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-primary">Day: 19</div>
  <div className="card-body">
    <h5 className="card-title">XGBoost</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=kho6oANGu_A" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=kho6oANGu_A</NavLink> ( 22 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://machinelearningmastery.com/gentle-introduction-xgboost-applied-machine-learning/" }} style={{textDecoration:"none"}}> https://machinelearningmastery.com/gentle-introduction-xgboost-applied-machine-learning/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/https-medium-com-vishalmorde-xgboost-algorithm-long-she-may-rein-edd9f99be63d" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/https-medium-com-vishalmorde-xgboost-algorithm-long-she-may-rein-edd9f99be63d</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header text-white bg-warning">Day: 20</div>
  <div className="card-body">
    <h5 className="card-title">Deploy Model</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=-UYyyeYJAoQ" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=-UYyyeYJAoQ</NavLink> ( 36 Mins ) <br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/simple-way-to-deploy-machine-learning-models-to-cloud-fd58b771fdcf" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/simple-way-to-deploy-machine-learning-models-to-cloud-fd58b771fdcf</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://towardsdatascience.com/a-simple-way-to-deploy-any-machine-learning-model-106d463e9a4b" }} style={{textDecoration:"none"}}> https://towardsdatascience.com/a-simple-way-to-deploy-any-machine-learning-model-106d463e9a4b</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.kdnuggets.com/2019/06/approaches-deploying-machine-learning-production.html" }} style={{textDecoration:"none"}}> https://www.kdnuggets.com/2019/06/approaches-deploying-machine-learning-production.html</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.analyticsvidhya.com/blog/2017/09/machine-learning-models-as-apis-using-flask/" }} style={{textDecoration:"none"}}> https://www.analyticsvidhya.com/blog/2017/09/machine-learning-models-as-apis-using-flask/</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>


<div className="card shadow mb-3">
  <div className="card-header text-white bg-success">Day: 21</div>
  <div className="card-body">
    <h5 className="card-title">Projects</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://elitedatascience.com/machine-learning-projects-for-beginners" }} style={{textDecoration:"none"}}> https://elitedatascience.com/machine-learning-projects-for-beginners</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://data-flair.training/blogs/machine-learning-project-ideas/" }} style={{textDecoration:"none"}}> https://data-flair.training/blogs/machine-learning-project-ideas/</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.dezyre.com/article/top-10-machine-learning-projects-for-beginners/397" }} style={{textDecoration:"none"}}> https://www.dezyre.com/article/top-10-machine-learning-projects-for-beginners/397</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.ubuntupit.com/top-20-best-machine-learning-projects-for-beginner-to-professional/" }} style={{textDecoration:"none"}}> https://www.ubuntupit.com/top-20-best-machine-learning-projects-for-beginner-to-professional/</NavLink><br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.simplilearn.com/machine-learning-projects-for-beginners-article" }} style={{textDecoration:"none"}}> https://www.simplilearn.com/machine-learning-projects-for-beginners-article</NavLink><br></br>
    </p>
    <h5 className="card-title">Interview Preparation</h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://github.com/iNeuronai/interview-question-data-science-" }} style={{textDecoration:"none"}}> https://github.com/iNeuronai/interview-question-data-science-</NavLink><br></br>
    </p>
  </div>
</div>

<div className="col-sm-6 center">
  <div className="card shadow mb-3 mt-3">
  <div className="card-header text-danger">Video</div>
  <div className="card-body text-danger embed-responsive embed-responsive-16by9">
<iframe className="embed-responsive-item center"  src="https://www.youtube.com/embed/F0gD68MJoTY?controls=0"  title='Google Interview' controls="0" style={{borderRadius: "15px"}}></iframe>
  </div>
</div>
  </div>

<div className="card shadow mb-3">
  <div className="card-header text-white bg-dark">Learn More</div>
  <div className="card-body">
    <h5 className="card-title">Deep Learning <br></br>Tableau <br></br>Flask </h5>
    <p className="card-text">
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.youtube.com/watch?v=MwZwr5Tvyxo&list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH" }} style={{textDecoration:"none"}}> https://www.youtube.com/watch?v=MwZwr5Tvyxo&list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH</NavLink> ( 10 Hrs )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://palletsprojects.com/p/flask/" }} style={{textDecoration:"none"}}> https://palletsprojects.com/p/flask/</NavLink> ( Blog )<br></br>
    <ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'skyblue'}} /><NavLink target="blank" exact to={{ pathname: "https://www.fullstackpython.com/flask.html" }} style={{textDecoration:"none"}}> https://www.fullstackpython.com/flask.html</NavLink> ( Blog )<br></br>
    </p>
  </div>
</div>







                <div className=" col-12 mx-auto mt-5 mb-3">
                  <div className="row">
                    <div className="col-lg-1 mhide">
                      <AccountCircleIcon style={{ fontSize: "3.5rem", color: "gray" }} />
                    </div>
                    <div className="col-lg-11 pt-2">
                      <h3 style={{ fontSize: "1rem", wordSpacing: "5px", paddingBottom: "15px", color: "#000", }} > Auther: <span style={{ color: "gray" }}> @ceoankityadav</span> <br></br>Post on: <span style={{ color: "gray" }}> 20/12/20 </span> </h3>
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
export default Machinedays;
