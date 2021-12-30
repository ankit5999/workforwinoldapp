import React from 'react'
import { NavLink } from 'react-router-dom';

function Bootombar() {
    const [blogcard] = React.useState([
        {
          id: 3,
          imgsrc:
            "https://1.bp.blogspot.com/-6YwJO3XZfho/X7JZYEY9BBI/AAAAAAAAClY/5hbE5bC4VB4FKObf4MS95QGZOiSLCJmNgCLcBGAsYHQ/s16000/Web%2BDeveloper%2Band%2BWeb%2BDesigner.webp",
          title: "Web Developer vs Web Designer",
          visit: "#",
        },
        {
          id: 2,
          imgsrc:
            "https://1.bp.blogspot.com/-Zqn3c_8L1qU/X7Jj-E-hLGI/AAAAAAAAClk/xycPNC1hzS8Qg-krc-46R_TAqnEQapUEwCLcBGAsYHQ/s16000/Full%2Bstack%2Bweb%2Bdeveloper%2Broadmap%2Bin%2B2020.webp",
          title: "Projects For Final Year Students",
          visit: "#",
        },
        {
          id: 1,
          imgsrc:
            "https://1.bp.blogspot.com/-AgAuGJgVGEA/X7IhvtGOTGI/AAAAAAAAClI/zYHbi_zj92M_xKIM8z1DDMgcvTetFSC_ACLcBGAsYHQ/s16000/Top%2B10%2BProgramming%2BLanguages%2BIn%2B2020.webp",
          title: "Top 10 Programming Languages In 2020",
          visit: "#",
        },
      ]);
      
    return (
        <div className="col-lg-12 mx-auto mt-5 order-1 order-lg-2">
        <h2 style={{borderTop: "1px solid #ff4a57", fontSize: "1.7rem", color: "#ff4a57"}}>Blog For You</h2>
                  {blogcard.map((info) => (
                    <div
                      className="blogcard col-lg-4 mx-auto"
                      key={info.id}
                      style={{ display: "inline-block", padding: "10px" }}
                    >
                      <div className="card mb-5 shadow">
                        <img
                          src={info.imgsrc}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">
                            {info.title}
                          </h5>
                          {/* <p className="card-text">{info.text}</p> */}
                          <NavLink target="blank"
                            to={info.visit}
                            className="btn btn-outline-danger  border rounded-pill my-2 "
                          >
                            <span>Read More</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    );
};

export default Bootombar;
