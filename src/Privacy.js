import React, { useEffect } from "react";
import SecurityIcon from "@material-ui/icons/Security";
import InfoIcon from "@material-ui/icons/Info";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state] = React.useState([
    {
      id: 1,
      heading: "About Workforwin",
      text1:
        "workforwin is an online platform for computer science and engineering students. Here students can learn new technology by their choice at any time without any kind of restrictions. Workforwin organizes coding challenges across all over the world anyone can participate in these challenges. These challenges help students in building their technical skills. Workforwin provides a coding environment to IT industries, according to there requirements. If someone wants to organize their challenges here, then they can contact us.",
    },
    {
      id: 2,
      heading: " 1) Information we collect",
      text1: `Visitors are free to use our website without providing any personal information if they do not want to register with us. To gain access to some of the services, you need to provide your information such as your name, email address, and phone number. We do not collect information that is not necessary to allow your participation in coding challenges on our website and to excess this website post and articles we don't collect any personal information. We only collect and analyze information about which article you read and which course you take on our website.`,
    },
    {
      id: 3,
      heading: "2) How do we use your information?",
      text1: `We use Google Analytics to track your usage patterns to see what features of the website you commonly use, website traffic volume, frequency of visits, type and time of transactions, the device you used such as mobile phone, laptop, desktop, tab, IP address and operating system. We will never sell your personal information to anyone at any cost. The information which we collect from you will use it to improve our website services.`,
    },
    {
      id: 4,
      heading: " 3) How do we protect visitor information?",
      text1: `We use an SSL certificate. The information which we collect from you will store on our secure servers. If you found some unwanted activity with your account, you are advised to inform us immediately at contact@workforwin.com`,
    },
    {
      id: 5,
      heading: `4) Children's privacy (Children Online Privacy Protection Act)`,
      text1: `Our site and the services available through workforwin are not intended for children under the age of 13. Workforwin does not knowingly or specifically collect information about children under the age of 13. We encourage parents and guardians to observe the online activity of there child. We commit to protect children's online privacy.`,
    },
    {
      id: 6,
      heading: `5) Cookies Policy`,
      text1: `Like any other website, Workforwin uses 'cookies', but we don't use it for tracking purposes. You can turn off all cookies, through your browser settings if you want to turn them off. To modify your cookies look at your browser's Help menu.`,
    },
    {
      id: 7,
      heading: "6) Updates & Contact Info",
      text1: `We may update this policy time to time, if we do some changes, we’ll notify you by updating the policy on our site. If you have any questions about this privacy policy, please email us at contact@workforwin.com`,
    },
  ]);

  return (
    <>
    <Helmet>
        <title>Privacy Policy ~ Workforwin</title>
        <meta name="title" content="Privacy Policy ~ Workforwin" />
        <meta name="description" content="Visitors are free to use our website without providing any personal information if they do not want to register with us." canonical="https://workforwin.com/privacy"  />
        <meta name="keywords" content="privacy policy, workforwin, web development, web designing, google policy for website, privacy policy page" />
        <meta id="meta-description" name="description" content="Visitors are free to use our website without providing any personal information if they do not want to register with us."  canonical="https://workforwin.com/privacy" />
        <meta id="og-title" property="og:title" content="Privacy Policy ~ Workforwin" />
      </Helmet>
      <div className="container-fluid mt-lg-5 mt-1">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto">
            <div className="row">
              <div className="col-md-2 pr-lg-4  mt-lg-5 order-2 order-lg-1 "></div>
              <div
                className="col-lg-8 order-1  shadow-lg privacy"
                style={{
                  paddingRight: "20px",
                  paddingBottom: "5px",
                  // backgroundColor: "#23263a",
                  backgroundImage:` linear-gradient(#1f2235, rgba(0, 0, 0, 0.7)),url("https://1.bp.blogspot.com/-mFphMESAKgQ/X9S4VYgaoDI/AAAAAAAACtk/_PvyjhsDOEISzXQX-QmN1r187__qOtDeQCLcBGAsYHQ/s16000/signinImg.webp")`,
                  backgroundSize:"cover",
                  backgroundPosition: "center",
                  borderRadius:"5px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.7rem",
                    wordSpacing: "5px",
                    paddingTop: "2%",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #ff4a57",
                  }}
                >
                  <SecurityIcon style={{ fontSize: "2rem", marginTop: "-5px" }} />
                  Privacy Policy{" "}
                </h2>

                {state.map((info) => (
                  <div key={info.id}>
                    <h4 style={{ color: "#fff" }}>{info.heading} </h4>
                    <p style={{ color: "#fff" }}>{info.text1}</p>
                  </div>
                ))}

                <p style={{ borderTop: "1px solid white", color: "white" }}>
                  We last updated our Privacy Policy on: Friday, May 1st, 2020.
                </p>
                <h3
                  style={{
                    fontSize: "1rem",
                    wordSpacing: "5px",
                    paddingBottom: "15px",
                    color: "#fff",
                  }}
                >
                  <InfoIcon
                    style={{
                      fontSize: "2rem",
                      paddingRight: "5px",
                      marginBottom: "2px",
                    }}
                  />
                  Know About Workforwin :{" "}
                  <NavLink
                    exact
                    to="/about"
                    style={{ color: "#ff4a57", textDecoration: "none" }}
                  >
                    {" "}
                    Abous Us
                  </NavLink>{" "}
                </h3>
              </div>
              <div
                className="col-md-2   pt-lg-0 order-2 order-lg-1 "
                style={{ paddingLeft: "1%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Privacy;
