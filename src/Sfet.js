import React from "react";

const Course = () => {
  const [state] = React.useState([
    {
      id: "4",
      imgsrc: "https://img.icons8.com/color/96/000000/small-business.png",
      title: " Business Website Development",
      text:
        "You want to scale your business by making it online and thinking about having a website for your business, then this is the right decision you can make to grow up faster. It will help you in engaging more customers of your need. Here we will design a custom website for your business. Having a website is not enough, to gain retention of users it is always necessary to display things of their need in proper order, so users can find easily what they are searching for.",
    },
    {
      id: "3",
      imgsrc: "https://img.icons8.com/color/96/000000/launched-rocket.png",
      title: " Website For Startup",
      text:
        "Are you looking a website for your startup? Startups are growing very fast by gaining user attention in such you need to make smart decisions. Having a website for your startup will provide you an edge over your competitors. There you can express who you are and what services you are offering so users can find affordable service of their need. As you are new in the market you need to build the trust of customers in you. A well-designed website helps you in building trust.",
    },
    {
      id: "2",
      imgsrc: "https://img.icons8.com/color/96/000000/checkout.png",
      title: " eCommerce Website Design",
      text:
        "As an eCommerce, you are selling things and goods to the consumer. By creating an online e-commerce store you can convert your buyers into your online loyal customers. We will create an online store for your business by creating a responsive website design using the latest trend and technology frameworks. Our professional web development team will customize your online store as per your requirement. We also help you in increasing your online market place by providing our best SEO services for your store.",
    },
    {
      id: "1",
      imgsrc: "https://img.icons8.com/color/96/000000/web-design.png",
      title: " Portfolio Website Development",
      text:
        "A portfolio website is the best way to show your work to peoples. They want to get inspired by the work you have done. Here you can simply tell visitors who you are and what's your profession, you can share professional information about an individual or a company. You can provide information like a logo with tagline, call to action, images, testimonials, services, contact information and projects you have done.  It helps you in reaching more clients as a freelancer or an agency.",
    },
  ]);
  return (
    <>
      <div className="my-5" id="ourservice" data-aos="slide-up">
        <h2 className=" service ">Web Development Service</h2>
      </div>
      <div className="container-fluid col-lg-10 ">
        {state.map((info) => (
          <div
            className="col-md-6 serviceblock"
            key={info.id}
            style={{ display: "inline-block", padding: "17px" }}
          >
            <div className="card mt-3" id="homecard" data-aos="slide-up">
              <div className="card-body" style={{ borderTop: "none" }}>
                <h5 className="card-title font-weight-bold">
                  <img
                    src={info.imgsrc}
                    alt={info.imgsrc}
                    style={{ width: "70px" }}
                  />
                  {info.title}
                </h5>
                <p className="card-text ">{info.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Course;
