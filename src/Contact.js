import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_yc41gtg",
        e.target,
        "user_3CNmLKAR4b7b2udvLsD0E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div>
        <Helmet>
          <title>Contact us ~ Workforwin</title>
          <meta name="title" content="Contact us ~ Workforwin" />
    <meta name="description" content="Contact at workforwin for your web development projects and for any king of query you can contact us at teamworkforwin@gmail.com " />
    <meta name="keywords" content="Web Development company,contact, workforwin contact, Web Designing projects, web designing, web development, final year project idea, computer science project, project idea, website template, complete website design,eCommerce Website,Corporate Website, startup website, Small Business Website, SEO friendly website, Mobile Responsive website, Responsive website design" />
    <meta id="meta-description" name="description" content="Contact at workforwin for your web development projects and for any king of query you can contact us at teamworkforwin@gmail.com " />
      <meta id="og-title" property="og:title" content="Contact us ~ Workforwin" />
        </Helmet>
        <div className=" contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" required />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea
              id=""
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            {/* <div className='g-recaptcha' data-sitekey="6Lfp2d0ZAAAAADZjKVtmZ0AeoWos2Z4LMgsZWbBw"></div> */}
            <input
              type="submit"
              className="form-btn"
              value="Send Message"
            ></input>
            <div className="message"></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
