import React from "react";
import DevicesIcon from "@material-ui/icons/Devices";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import CodeIcon from "@material-ui/icons/Code";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import DoneAllIcon from "@material-ui/icons/DoneAll";

function Process() {
  const [state] = React.useState([
    {
      id: 1,
      icon: <AssignmentIcon />,
      heading: "Planning",
      text: `First, we understand client goals and requirements. Once we got what are the client's requirements we analyze the information that we have collected. After the analysis phase, our experienced web developers make an effective strategy and planning to start working on your dream project. These strategy helps the developer in finding relevant technology can be used in your project. In the last phase of our planning process, we discuss with you the final design.`,
    },
    {
      id: 2,
      icon: <ColorLensIcon />,
      heading: "Designing",
      text: `After finalizing we start developing your web projects. Our developers have height proficiency in designing and developing high-quality graphics ( UX / UI ), selecting an eye-catchy theme with the absolute color combination which makes your web unique. We take sufficient time in designing a layout of your website. After designing our experts again analyze it once it has done. Now it's time to move on to developing the customized design.`,
    },
    {
      id: 3,
      icon: <CodeIcon />,
      heading: "Coding",
      text: `After designing, customizing, and final deal with our clients our coding phase starts where we convert your customized design into a real web application (website). By keeping our client budget in mind we use the best and latest affordable technology in building websites. Adding new features to the web completely depends on your budget. We provide one more useful extra feature free to our clients just for using our web development service.`,
    },
    {
      id: 4,
      icon: <PermMediaIcon />,
      heading: "Developing",
      text: `Our websites are delivered with a content management system so you can maintain your complete website easily. To build a website we go with basic requirements like Html, CSS, javascript, Bootstrap, we also use frameworks or libraries like react according to client requirement. We have an extra WordPress option to build your responsive and user-friendly website. we write clean and less code to develop a website, so that website can be indexed in Google easily. `,
    },
    {
      id: 5,
      icon: <DevicesIcon />,
      heading: "Launching",
      text: `Once the developing part completed we test the website on many browsers. After checking its functionality website is ready for launch. Our SEO (search engine optimization) experts help in ranking your web page by applying on-page SEO and off-page SEO on it. By doing SEO you can easily be rank on Google at the top and get more clients for your business. In the whole process, we keep in touch with our clients.`,
    },
    {
      id: 6,
      icon: <DoneAllIcon />,
      heading: "Delivering",
      text: `For maintenance call the client and show the final product. We promise you to provide clean code, responsive design using the latest technologies. Our delivery process is very simple and secure. After delivering the project we keep connected to the client and takes their feedback for our work which helps us in improving our service so we can deliver more functionality to our clients. We always keep our client satisfaction at the top it keeps us ahead in the market by making a unique identity.`,
    },
  ]);

  return (
    <div className="col-md-9 col-11 mx-auto">
      <h2 className=" service">Our Web Development Process</h2>
      {state.map((info) => (
        <div
          className="blogcard col-md-4 col-12 mx-auto"
          key={info.id}
          style={{ display: "inline-flex", padding: "10px" }}
        >
          <div className="promain">
            <div className="proservice" data-aos="flip-left">
              <h4 className="pro4">
                <span style={{ fontSize: "2rem", marginTop: "-5px" }}>
                  {info.icon}
                </span>{" "}
                {info.heading}
              </h4>
              <p className="mt-3 prop">{info.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Process;
