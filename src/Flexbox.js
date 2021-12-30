import React from "react";
import Imgcarosal from "./Imgcarosal";

function Flexbox() {
  return (
    <div>
      <section className="section-1" id="flexbox">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="pray row"></div>
            </div>
            <div className="col-md-8" data-aos="zoom-in">
              <div className="panel text-left">
                <h2>Web Designing Service</h2>
                <p className="pt-4">
                  Your website looks and designs determine whether someone stays
                  on it or leaves. We build responsive and mobile-friendly
                  websites, which help you in engaging more customers. Our main
                  concern is to provide less coding, well-optimized, and seo
                  friendly website without affecting the back-end functionality.
                </p>
                <p>
                  As a top web development company, we provide you the
                  functionality of the latest technology and we follow the
                  latest trends running in the market to develop your website.
                  We provide you clean code website with a control management
                  system which helps you in updating your data on the web very
                  easily. We provide you all round services as
                  <b> Front End, Back End, and Full Stack Web Development</b> as
                  per your need. You can select the appropriate services, in
                  case if you are not able to find the best service you can get
                  in touch with our team, our experts will guide you in
                  understanding all the technical aspects.
                </p>
                <Imgcarosal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Flexbox;
