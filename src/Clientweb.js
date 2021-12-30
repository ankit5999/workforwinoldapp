import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Clientweb() {
  return (
    <div className="col-md-9 col-11 mx-auto mt-5 ">
      <div className="row">
        <div className="col-md-6 col-12" data-aos="slide-right">
          <h2 className="mt-lg-5">Get Your Own Website</h2>
          <p style={{ fontWeight: "100" }}>
            Here we are to provide you our{" "}
            <b>best web designing and web development services</b>. We are very
            excited to build your website. By just connecting with our experts
            you can have your own website control in your hand.
          </p>
          <h4>Why you should have a website?</h4>
          <p style={{ fontWeight: "100" }}>
            Today's world is completely digital, every business firm moving
            towards it. In such it is very difficult to sell your product. To
            get customers it is most important to have your online identity,
            which helps you in increasing your marketplace. To make a digital
            identity having your own website is the right choice for you. Using
            the website you can directly connect with your visitors or customers
            and it creates trust between buyers and sellers. You can control
            your whole brand through your website homepage.
            <Link to="/blog" style={{ textDecoration: "none" }}>
              {" "}
              read more <ArrowRightAltIcon />
            </Link>
          </p>
          <button className="button mb-5 mb-lg-0">
            <Link className="a" to="/contact">
              <span> Get Now </span>
            </Link>
          </button>
        </div>
        <div className="col-md-6 col-12" data-aos="zoom-in">
          <div className="clientcard c1"></div>
          <div className="clientcard c2"></div>
          <div className="clientcard c3"></div>
        </div>
      </div>
    </div>
  );
}

export default Clientweb;
