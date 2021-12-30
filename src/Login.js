import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import icon from "./images/icon.png";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) =>
        alert("Please Create Account or Apply Correct Email & Password")
      );
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message))
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
    <Helmet>
        <title>SignIn ~ Workforwin</title>
        <meta name="title" content="SignIn ~ Workforwin" />
        <meta name="description" content="By signin you agree to term and condition of using our services. Please see our privacy policy notice, and our cookies notes." canonical="http://localhost:3000/login"  />
        <meta name="keywords" content="signin,login, account, workforwin account, workforwin, web development, web designing, account page workforwin" />
        <meta id="meta-description" name="description" content="By signin you agree to term and condition of using our services. Please see our privacy policy notice, and our cookies notes."  canonical="http://localhost:3000/login" />
        <meta id="og-title" property="og:title" content="SignIn ~ Workforwin" />
      </Helmet>
    <div className="login">
      <Link to="/" className="login-text">
        <img className="login__logo mb-4" src={icon} alt="" />
        <span className=" ml-2">Workforwin</span>
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>Pass</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signin you agree to term and condition of using our services.
          Please see our{" "}
          <Link to="/privacy" target="blank" style={{ textDecoration: "none" }}>
            {" "}
            privacy policy notice, and our cookies notes
          </Link>
          .
        </p>
        <button onClick={register} className="login__registrationButton">
          {" "}
          Create Your Workforwin Account
        </button>
      </div>
    </div>
    </>
  );
}

export default Login;
