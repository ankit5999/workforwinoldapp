import React from "react";

function FAQ() {
  const [state] = React.useState([
    {
      id: "headingTwo",
      target: "#collapseTwo",
      collapse: "collapseTwo",
      heading: "How much does it cost to make a website?",
      text: `Cost to make a website varies based on the technology used in building it and its design. Features and functionality of a website may increase cost of the website along with that the number of pages may affect it. We assure you to provide the best and affordable website service for your business. We provide you customized designs so you will pay only for what you want. If you want to know the cost of your project you can discuss it with our developers at any time free of cost.`,
    },
    {
      id: "headingThree",
      target: "#collapseThree",
      collapse: "collapseThree",
      heading: "How to communicate with your web development firm?",
      text: `We closely work with our clients and stay in touch while working on their projects and ask them for their valuable feedback. You can communicate with our team manager working on your project or you can mail us and can call us. Before starting your project we will allocate you a username and password so you can see your live project work on our servers and can suggest ideas coming into your creative mind. Don't worry our servers are secure all information about your projects is safe none can excess without our permission.`,
    },
    {
      id: "headingFour",
      target: "#collapseFour",
      collapse: "collapseFour",
      heading: "Do you provide SEO friendly website templates?",
      text: `As we have mentioned we have a team of expert web developers and web designers. And we use trading technology with an effective approach. Our websites are 100% compatible with all devices and SEO-friendly. We avoid duplicate content on-site, create an XML Sitemap of the web, and use robots, create internal and external linking, and use an optimized image in your web application project. Our WordPress websites are also SEO friendly and available with full functionality. In our projects, we have shown some of our projects you can see them.`,
    },
    {
      id: "headingFive",
      target: "#collapseFive",
      collapse: "collapseFive",
      heading: "How long does it take to build a website?",
      text: `If your web development projects are under a professional web development company you will get your website as soon as possible. Mainly website designing and testing take time in the complete web development cycle. Once these phases over you can assume your website is ready to go live. Client future requirements can increase development time hence your project delivery time will increase. It batters you to discuss all of your requirements before our developers start working on your project. We have a highly experienced team, committed to complete your project on time.`,
    },
    {
      id: "headingSix",
      target: "#collapseSix",
      collapse: "collapseSix",
      heading:
        "What post services we offer after completing your website development project?",
      text: `As you are our valuable client and we have done your project. We help in maintaining your website. Complete code of the project is written by our developers and we have all of your requirements so we understand better your goals, you don't need to tell again your business planes and we don't need to read your complete code again that saves your time and investment. We follow NDA (Non-Disclosure Agreement) policy so your ideas and information are safe with us. We maintain data confidentiality during working and after completing your project.`,
    },
  ]);

  return (
    <div data-aos="slide-up">
      <h2 className=" service mb-5">Frequently Asked Questions (FAQ)</h2>
      <div className="col-lg-9 col-11 mx-auto">
        <div className="accordion" id="accordionExample">
          <div className="card1">
            <div className="card1-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link shadow-none shadow-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What are the most popular web development technologies?
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
              data-aos="slide-up"
            >
              <div className="faqcard-body">
                The basic language of the web used by us is HTML, CSS, and
                JavaScript. JavaScript is the most popular programming language
                and commonly used by web developers to create dynamic web
                applications. Most popular web development technologies we use
                are React JS, Node Js. For CSM and e-commerce projects we use
                WordPress. Based on client requirements we also use react js. If
                you are searching for the best technology for your dream web
                development project you can contact us. We will help you in
                finding relevant technology for your project to convert it into
                reality.
              </div>
            </div>
          </div>

          {state.map((info) => (
            <div className="card1" key={info.id}>
              <div className="card1-header" id={info.id}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link shadow-none collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target={info.target}
                    aria-expanded="false"
                    aria-controls={info.collapse}
                  >
                    {info.heading}
                  </button>
                </h2>
              </div>
              <div
                id={info.collapse}
                className="collapse"
                aria-labelledby={info.id}
                data-parent="#accordionExample"
              >
                <div className="faqcard-body">{info.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
