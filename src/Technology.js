import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import { NavLink } from "react-router-dom";

function Technology() {
  return (
    <>
      <div className=" col-11 col-md-10 mx-auto mt-md-5">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="img-fluid " data-aos="slide-right">
                  <img
                    className="img-fluid"
                    src="https://1.bp.blogspot.com/-JquacgREC5c/X6VKIMJbn-I/AAAAAAAACgU/ZjecDPDv7CoyiqwgusP8dds0r9axlqnFgCLcBGAsYHQ/s16000/whyus.webp"
                    alt=""
                    style={{ backgroundSize: "cover", borderRadius: "5px" }}
                  ></img>
                </div>
                <p className="my-3" data-aos="fade-in">
                  {" "}
                  You have got cleared all doubts till now about what we
                  offer's, and our working process. Believe me, dealing with us
                  is not a lossy deal for you. With us, you will get all
                  benefits of a <b>professional web development company</b>. We
                  make your website unique to encourage your visitors to take
                  your service. Our website designs are creative and user
                  friendly.
                </p>
              </div>
              <div className="col-md-6 pt-5 spl ml-lg-5 pt-lg-0 order-1 " data-aos="zoom-in">
                <h2 className="pt-lg-5">
                  Why Our Web Development Service Is Batter?
                </h2>
                <h6>
                  <CheckIcon style={{ fontSize: "1.7rem" }} /> Clean Coding With
                  Advance Technologies
                </h6>
                <h6>
                  <CheckIcon style={{ fontSize: "1.7rem" }} /> Responsive And
                  Completely SEO Optimized{" "}
                </h6>
                <h6>
                  <CheckIcon style={{ fontSize: "1.7rem" }} /> Great UI \ UX
                  Design By Experienced Team{" "}
                </h6>
                <h6>
                  <CheckIcon style={{ fontSize: "1.7rem" }} /> Rich Experience
                  In Affordable Prices
                </h6>
                <h6>
                  <CheckIcon style={{ fontSize: "1.7rem" }} /> Customized Design
                  With Less Maintenance Work
                </h6>
                <h6>
                  <CheckIcon style={{ fontSize: "1.7rem" }} /> Securely Deliver
                  On Time{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>




<div className="demo mt-md-5" data-aos="fade-in">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="pricingTable">
                    <div className="pricingTable-header">
                        <div className="price-value">
                            <span className="currency">$</span>
                            <span className="amount">19</span>
                            <span className="duration">2 Pages<br></br><span style={{color:"gray"}}>2 Day's</span></span>
                        </div>
                        <h3 className="title">Basic</h3>
                    </div>
                    <ul className="pricing-content">
                        <li>Design Customization</li>
                        <li>Responsive Design</li>
                        <li>Include Source Code</li>
                        <li className="disable">Web Maintenance</li>
                        <li className="disable">Unlimited Revisions</li>
                    </ul>
                    <div className="pricingTable-signup">
                        <NavLink to="/login" target="_blank" className="a">Sign Up</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="pricingTable pink">
                    <div className="pricingTable-header">
                        <div className="price-value">
                            <span className="currency">$</span>
                            <span className="amount">29</span>
                            <span className="duration">4 Pages<br></br><span style={{color:"lightgrey"}}>4 Day's</span></span>
                        </div>
                        <h3 className="title">Standard</h3>
                    </div>
                    <ul className="pricing-content">
                        <li>Design Customization</li>
                        <li>Responsive Design</li>
                        <li>Include Source Code</li>
                        <li>Web Maintenance</li>
                        <li className="disable">Unlimited Revisions</li>
                    </ul>
                    <div className="pricingTable-signup">
                        <NavLink to="/login" target="_blank" className="a">Sign Up</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="pricingTable blue">
                    <div className="pricingTable-header">
                        <div className="price-value">
                            <span className="currency">$</span>
                            <span className="amount">49</span>
                            <span className="duration">8 pages<br></br><span style={{color:"gray"}}>8 Day's</span></span>
                        </div>
                        <h3 className="title">Premium</h3>
                    </div>
                    <ul className="pricing-content">
                        <li>Design Customization</li>
                        <li>Responsive Design</li>
                        <li>Include Source Code</li>
                        <li className="disable">Web Maintenance</li>
                        <li className="disable">Unlimited Revisions</li>
                    </ul>
                    <div className="pricingTable-signup">
                        <NavLink to="/login" target="_blank" className="a">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default Technology;
