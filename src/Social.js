import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { NavLink } from "react-router-dom";

const Social = () => {
  return (
    <>
      <div>
        <NavLink
          exact
          to={{ pathname: "https://youtube.com/workforwin/" }}
          target="_blank"
          className="shover"
        >
          <YouTubeIcon className="yout" style={{ fontSize: "2rem" }} />
        </NavLink>
        <NavLink
          exact
          to={{ pathname: "https://www.linkedin.com/in/ceoankityadav/" }}
          target="_blank"
          className="shover"
        >
          <LinkedInIcon className="linked" style={{ fontSize: "2rem" }} />
        </NavLink>
        <NavLink
          exact
          to={{ pathname: "https://www.facebook.com/workforwin/" }}
          target="_blank"
          className="shover"
        >
          <FacebookIcon className="face" style={{ fontSize: "2rem" }} />
        </NavLink>
        <NavLink
          exact
          to={{ pathname: "https://twitter.com/ceoankityadav/" }}
          target="_blank"
          className="shover"
        >
          <TwitterIcon className="twit" style={{ fontSize: "2rem" }} />
        </NavLink>
      </div>
    </>
  );
};
export default Social;
