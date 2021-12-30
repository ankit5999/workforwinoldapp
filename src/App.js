import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Contact";
import Blog from "./Blog/Blog";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Privacy from "./Privacy";
import Projects from "./Project/Projects";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import DevelopersMovie from "./Blog/Top-10-movies-web-developers";
import Coding from "./Coding/Competitive-Coding";
import Codinglink from "./Coding/Codinglink";
import Freejobalert from "./Jobs/Freejobalert";
import Intern from "./Intern";
import Course from "./Courses/Course";




function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch, user]);



  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/top-10-movies-web-developers" component={DevelopersMovie} />
        <Route exact path="/competitive-coding" component={Coding} />
        <Route exact path="/free-job-alert" component={Freejobalert} />
        <Route exact path="/internship-2021" component={Intern} />
        <Route exact path="/course" component={Course} />
        <Codinglink />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
