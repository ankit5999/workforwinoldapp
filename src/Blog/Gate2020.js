import React, { useEffect } from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Helmet } from "react-helmet";
import Rightbar from "./Rightbar";
import Leftbar from "./Leftbar";
import Bootombar from "./Bootombar";

const Gate2020 = () => {
  const [tabledata] = React.useState([
    {
      rank: 1,
      title: "Discrete Mathematics",
      text: `Propositional and first order logic. Sets, relations, functions, partial
            orders and lattices. Groups. Graphs: connectivity, matching, coloring. Combinatorics:
            counting, recurrence relations, generating functions.`,
    },
    {
      rank: 2,
      title: "Linear Algebra ",
      text: `Matrices, determinants, system of linear equations, eigenvalues and
            eigenvectors, LU decomposition.`,
    },
    {
      rank: 3,
      title: "Calculus",
      text: `Limits, continuity and differentiability. Maxima and minima. Mean value
            theorem. Integration. `,
    },
    {
      rank: 4,
      title: "Probability",
      text: `Random variables. Uniform, normal, exponential, poisson and binomial
            distributions. Mean, median, mode and standard deviation. Conditional probability and
            Bayes theorem.`,
    },
    {
      rank: 5,
      title: " Digital Logic",
      text: `Boolean algebra. Combinational and sequential circuits. Minimization. Number
            representations and computer arithmetic (fixed and floating point).`,
    },
    {
      rank: 6,
      title: "Computer Organization and Architecture",
      text: `Machine instructions and addressing modes. ALU, data‐path and control unit. Instruction
            pipelining. Memory hierarchy: cache, main memory and secondary storage; I/O
            interface (interrupt and DMA mode).`,
    },
    {
      rank: 7,
      title: " Programming and Data Structures",
      text: `Programming in C. Recursion. Arrays, stacks, queues, linked lists, trees, binary search
            trees, binary heaps, graphs.`,
    },
    {
      rank: 8,
      title: "Algorithms",
      text: `Searching, sorting, hashing. Asymptotic worst case time and space complexity.
            Algorithm design techniques: greedy, dynamic programming and divide‐and‐conquer.
            Graph search, minimum spanning trees, shortest paths`,
    },
    {
      rank: 9,
      title: "Theory of Computation",
      text: `Regular expressions and finite automata. Context-free grammars and push-down
            automata. Regular and contex-free languages, pumping lemma. Turing machines and
            undecidability.`,
    },
    {
      rank: 10,
      title: " Compiler Design",
      text: `Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate
            code generation. `,
    },
    {
      rank: 11,
      title: " Operating System",
      text: `Processes, threads, inter‐process communication, concurrency and synchronization.
            Deadlock. CPU scheduling. Memory management and virtual memory. File systems.`,
    },
    {
      rank: 12,
      title: "Databases",
      text: `ER‐model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints,
            normal forms. File organization, indexing (e.g., B and B+ trees). Transactions and
            concurrency control. `,
    },
    {
      rank: 13,
      title: " Computer Networks",
      text: `Concept of layering. LAN technologies (Ethernet). Flow and error control techniques,
            switching. IPv4/IPv6, routers and routing algorithms (distance vector, link state). TCP/UDP
            and sockets, congestion control. Application layer protocols (DNS, SMTP, POP, FTP, HTTP).
            Basics of Wi-Fi. Network security: authentication, basics of public key and private key
            cryptography, digital signatures and certificates, firewalls`,
    },
  ]);

  const [bookdata] = React.useState([
    {
      rank: 1,
      title: "Theory of Computation",
      text: `Ullman`,
    },
    {
      rank: 2,
      title: "Compiler",
      text: `Dragon`,
    },
    {
      rank: 3,
      title: "Digital Logic Design",
      text: `R.P Jain`,
    },
    {
      rank: 4,
      title: "Computer Network",
      text: `Tanenbaum`,
    },
    {
      rank: 5,
      title: "Operating System",
      text: `Galvin`,
    },
    {
      rank: 6,
      title: "DBMS",
      text: `Navathe`,
    },
    {
      rank: 7,
      title: "Algorithm",
      text: `Coleman`,
    },
    {
      rank: 8,
      title: "DS and Programming",
      text: `Patterson`,
    },
    {
      rank: 9,
      title: "Web Technology",
      text: `Pressman`,
    },
  ]);

  const [notesdata] = React.useState([
    {
      rank: 1,
      title: "Web Technology",
      link:
        "https://drive.google.com/file/d/1m4-sgAaJNIzH2DHuQRaKuVDn6LFCFa7h/view?usp=sharing",
    },
    {
      rank: 2,
      title: "TOC",
      link:
        "https://drive.google.com/file/d/1z-Vjic5IAh9rgyU2GK37ULKlNr4FPebz/view?usp=sharing",
    },
    {
      rank: 3,
      title: "Software Engineering",
      link: `https://drive.google.com/file/d/1ri6u2TbP28hA9Jd5BY09dLA-bwUIDv1J/view?usp=sharing`,
    },
    {
      rank: 4,
      title: "Programming",
      link: `https://drive.google.com/file/d/1hEE5rMlmpP75QsK8pBI1Hw2ffxrTAlVr/view?usp=sharing`,
    },
    {
      rank: 5,
      title: "Operating System:",
      link: `https://drive.google.com/file/d/1iyefVIs6MMaDbtjW90NUQQhdBNnaBKXx/view?usp=sharing`,
    },
    {
      rank: 6,
      title: "DBMS",
      link: `https://drive.google.com/file/d/1453AZVpQqKiEAmiwORJRZGPPzA7rLlAB/view?usp=sharing`,
    },
    {
      rank: 7,
      title: "Algorithm",
      link: `https://drive.google.com/file/d/16vBprpfi3cukBrWo7ztd9-qCizMxvNLz/view?usp=sharing`,
    },
    {
      rank: 8,
      title: "DS and Programming",
      link: `https://drive.google.com/file/d/1ukkNey7-BC-UhusyGoq5_IACyrkgpAwi/view?usp=sharing`,
    },
    {
      rank: 9,
      title: "Compiler",
      link: `https://drive.google.com/file/d/1-cIZJQ-DkhMZLb1O_3WfDK6GucTclVn0/view?usp=sharing`,
    },
    {
      rank: 10,
      title: "Computer Network",
      link: `https://drive.google.com/file/d/1Sbyv3fEX07NlpgWtdYehgi6Ar-tLhl_Z/view?usp=sharing`,
    },
    {
      rank: 11,
      title: "COA",
      link: `https://drive.google.com/file/d/1KgVR7O4uFLGpKYWR5H2P7neMuRk1OSdz/view?usp=sharing`,
    },
    {
      rank: 12,
      title: "English",
      link: `https://drive.google.com/file/d/1Q6lIKHRNAkWXvOJUAqFxAuOFe5exDzev/view?usp=sharing`,
    },
    {
      rank: 13,
      title: "Linear Algebra",
      link: `https://drive.google.com/file/d/19_vcfLYC4WiLqIOzWBJzOLH5mZfEcfKN/view?usp=sharing`,
    },
    {
      rank: 14,
      title: "Graph Theory",
      link: `https://drive.google.com/file/d/1ihX_oMrr2-b1QvElWXnu9rnmPKzp_614/view?usp=sharing`,
    },
    {
      rank: 15,
      title: "Discrete Math",
      link: `https://drive.google.com/file/d/1UdNZdUfb4MCjEsZJxzRDZATHUU0rQEE9/view?usp=sharing`,
    },
  ]);

  const [pyq] = React.useState([
    {
      rank: 1,
      title: "Gate 2020",
      link: `https://pyq.ravindrababuravula.com/gate-2020/`,
    },
    {
      rank: 2,
      title: "Gate 2019",
      link: `https://pyq.ravindrababuravula.com/gate-2019/`,
    },
    {
      rank: 3,
      title: "Gate 2018",
      link: `https://pyq.ravindrababuravula.com/gate-2018/`,
    },
    {
      rank: 4,
      title: "Gate 2017",
      link: `https://pyq.ravindrababuravula.com/gate-2017-set-1/`,
    },
    {
      rank: 5,
      title: "Gate 2016",
      link: `https://pyq.ravindrababuravula.com/gate-2016-set-1/`,
    },
    {
      rank: 6,
      title: "Gate 2015",
      link: `https://pyq.ravindrababuravula.com/gate-2015-set-1/`,
    },
    {
      rank: 7,
      title: "Gate 2014",
      link: `https://pyq.ravindrababuravula.com/gate-2014-set-1/`,
    },
    {
      rank: 8,
      title: "Gate 2013",
      link: `https://pyq.ravindrababuravula.com/gate-2013/`,
    },
    {
      rank: 9,
      title: "Gate 2012",
      link: `https://pyq.ravindrababuravula.com/gate-2012/`,
    },
    {
      rank: 10,
      title: "Gate 2011",
      link: `https://pyq.ravindrababuravula.com/gate-2011/`,
    },
  ]);

  const [institute] = React.useState([
    {
      rank: 1,
      title: "Indian Institute of Science",
      text: `1984, 1990, 1996, 2002, 2008, 2016.`,
      link: "https://en.wikipedia.org/wiki/Indian_Institute_of_Science",
    },
    {
      rank: 2,
      title: "Indian Institute of Technology, Madras",
      text: `1985, 1991, 1997, 2003, 2011, 2019.`,
      link: "https://en.wikipedia.org/wiki/IIT_Madras",
    },
    {
      rank: 3,
      title: "Indian Institute of Technology, Delhi",
      text: `1986, 1992, 1998, 2004, 2012, 2020.`,
      link: "https://en.wikipedia.org/wiki/IIT_Delhi",
    },
    {
      rank: 4,
      title: "Indian Institute of Technology, Bombay",
      text: `1987, 1993, 1999, 2005, 2013, 2021.`,
      link: "https://en.wikipedia.org/wiki/IIT_Bombay",
    },
    {
      rank: 5,
      title: "Indian Institute of Technology, Kharagpur",
      text: `1988, 1994, 2000, 2006, 2014, 2022.`,
      link: "https://en.wikipedia.org/wiki/IIT_Kharagpur",
    },
    {
      rank: 6,
      title: "Indian Institute of Technology, Kanpur",
      text: `1989, 1995, 2001, 2007, 2015.`,
      link: "https://en.wikipedia.org/wiki/IIT_Kanpur",
    },
    {
      rank: 7,
      title: "Indian Institute of Technology, Roorkee",
      text: `2009, 2017.`,
      link: "https://en.wikipedia.org/wiki/IIT_Roorkee",
    },
    {
      rank: 8,
      title: "Indian Institute of Technology, Guwahati	",
      text: `2010, 2018.`,
      link: "https://en.wikipedia.org/wiki/IIT_Guwahati",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>How to prepare for gate cse without coaching ~ Workforwin</title>
        <meta
          name="title"
          content="How to prepare for gate cse without coaching ~ Workforwin"
        />
        <meta
          name="description"
          content="Gate (Graduate Aptitude Test in Engineering) is one of the toughest exams in India. Every year more than 858,890 engineering students appear in it." canonical="https://workforwin.com/how-to-prepare-for-gate-cse-without-coaching"
        />
        <meta
          name="keywords"
          content="Gate 2021, gate cse, gate notes, hand written notes for gate pdf, gate pyq, gate coaching, gate study material, gate cse books, workforwin"
        />
      
      <meta
        id="meta-description"
        name="description"
        content="Gate (Graduate Aptitude Test in Engineering) is one of the toughest exams in India. Every year more than 858,890 engineering students appear in it." canonical="https://workforwin.com/how-to-prepare-for-gate-cse-without-coaching"
      />
      <meta
        id="og-title"
        property="og:title"
        content="How to prepare for gate cse without coaching ~ Workforwin"
      />
      </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
              {/* ******** Left Side Bar ********* */}
              <Leftbar />
              {/* ******** Left Side Bar ********* */}
              <div
                className="col-lg-7 order-1 shadow-lg "
                style={{ paddingRight: "20px", paddingBottom: "5px" }}
              >
                <h1
                  style={{
                    fontSize: "1.7rem",
                    wordSpacing: "5px",
                    paddingTop: "2%",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #ff4a57",
                    color: "#ff4a57",
                  }}
                >
                  <MenuBookIcon
                    style={{
                      fontSize: "2.1rem",
                      marginTop: "-5px",
                      color: "#ff4a57",
                    }}
                  />
                  How to prepare for gate cse without coaching
                </h1>
                <p>
                  Gate (Graduate Aptitude Test in Engineering) is one of the
                  toughest exams in India. Every year more than 858,890
                  engineering students appear in it. In this blog, you will know
                  about -
                </p>
                <p>
                  1) gate cse syllabus<br></br>
                  2) how to prepare for gate cse without coaching<br></br>
                  3) gate cse preparation material<br></br>
                  4) gate cse books<br></br>
                  5) gate cse notes<br></br>
                  6) gate cse question paper<br></br>
                  7) organizing institutions
                </p>

                <h4 style={{ color: "#302424" }}>1) Gate cse syllabus</h4>
                <div>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th className="mhide">Rank</th>
                        <th>Subject</th>
                        <th>Syllabus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabledata.map((info) => (
                        <tr key={info.rank}>
                          <td className="mhide">{info.rank}</td>
                          <td style={{ color: "blue" }}>{info.title}</td>
                          <td>{info.text}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h4 style={{ color: "#302424" }}>
                  2) How to prepare for gate cse without coaching
                </h4>
                <p>
                  When someone engineering student thinks about preparing for
                  the gate exam. A problem comes in front of them that is how to
                  prepare for gate cse without coaching. Gate coaching
                  institutions are charging a very high amount of fee. Most
                  students are not able to pay the fee. Now it comes that how
                  can you prepare for it without joining any coaching
                  institutions.
                  <br></br>First of all, there should not be doubt in your mind
                  that can you prepare for the gate without coaching. Yes, you
                  can clear the gate even you can come up with a good rank in
                  the exam. You just need good resources to prepare for your
                  exam. Once you got resources then there should be consistency
                  in your preparation.
                </p>

                <h4 style={{ color: "#302424" }}>
                  3) Gate cse preparation material
                </h4>
                <p>
                  If you are searching for free resources for your gate
                  preparation there are some YouTube channels from where you can
                  excess all resource<br></br>
                  1){" "}
                  <NavLink
                    to={{ pathname: "https://youtube.com/workforwin/" }}
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    Workforwin{" "}
                  </NavLink>
                  <br></br>
                  2){" "}
                  <NavLink
                    to={{
                      pathname:
                        "https://www.youtube.com/channel/UCJjC1hn78yZqTf0vdTC6wAQ",
                    }}
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    Gate Lectures By Ravinderbabu Ravula
                  </NavLink>
                  <br></br>
                  3){" "}
                  <NavLink
                    to={{
                      pathname:
                        "https://www.youtube.com/channel/UCQA9tK0nRK1e_Bqg0uETs8A",
                    }}
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    Well Academy
                  </NavLink>
                  <br></br>
                  4){" "}
                  <NavLink
                    to={{
                      pathname:
                        "https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw",
                    }}
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    Gate smashers
                  </NavLink>
                  <br></br>
                  5){" "}
                  <NavLink
                    to={{
                      pathname: "https://www.youtube.com/user/nesoacademy",
                    }}
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    Neso Academy
                  </NavLink>
                </p>

                <h4 style={{ color: "#302424" }}>4) gate cse books</h4>
                <div>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Subject</th>
                        <th>Author / Writer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookdata.map((info) => (
                        <tr key={info.rank}>
                          <td>{info.rank}</td>
                          <td style={{ color: "blue" }}>{info.title}</td>
                          <td>{info.text}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6 center">
  <div className="shadow mb-3 mt-3" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
  <div className="card-header text-success ">Image</div>
  <div className="card-body text-success">
<img src="https://1.bp.blogspot.com/-icp9CgktEtw/X7x8wC3-P7I/AAAAAAAACns/IDSXzH2FfAw6Msp52b6vD2jI724kB9Q1ACLcBGAsYHQ/s16000/Gate%2Bcse%2Bhand%2Bwritten%2Bnotes%2Bpdf.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
  </div>
</div>
  </div>


                <h4 style={{ color: "#302424" }}>
                  5) Gate cse notes (Get handwritten notes for gate cse pdf)
                </h4>
                <div>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {notesdata.map((info) => (
                        <tr key={info.rank}>
                          <td>{info.rank}</td>
                          <td>
                            <NavLink
                              to={{ pathname: info.link }}
                              target="blank"
                              style={{ textDecoration: "none" }}
                            >
                              {info.title}
                            </NavLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 style={{ color: "#302424" }}>6) Gate cse question paper</h4>
                <p>
                  Solving previous year question improve your rank in the final
                  exam. Before giving the test series you should solve all gate
                  PYQ.
                </p>
                <div>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pyq.map((info) => (
                        <tr key={info.rank}>
                          <td>{info.rank}</td>
                          <td>
                            <NavLink
                              to={{ pathname: info.link }}
                              target="blank"
                              style={{ textDecoration: "none" }}
                            >
                              {info.title}
                            </NavLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 style={{ color: "#302424" }}>7) Organizing Institutions</h4>
                <div>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Institute</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {institute.map((info) => (
                        <tr key={info.rank}>
                          <td>{info.rank}</td>
                          <td>
                            <NavLink
                              to={{ pathname: info.link }}
                              target="blank"
                              style={{ textDecoration: "none" }}
                            >
                              {info.title}
                            </NavLink>
                          </td>
                          <td>{info.text}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className=" col-12 mx-auto mt-5 mb-3">
                  <div className="row">
                    <div className="col-lg-1 mhide">
                      <AccountCircleIcon
                        style={{ fontSize: "3.5rem", color: "gray" }}
                      />
                    </div>
                    <div className="col-lg-11 pt-2">
                      <h3
                        style={{
                          fontSize: "1rem",
                          wordSpacing: "5px",
                          paddingBottom: "15px",
                          color: "#000",
                        }}
                      >
                        Auther:
                        <span style={{ color: "gray" }}> @ceoankityadav</span>
                        <br></br>Post on:
                        <span style={{ color: "gray" }}> 27/11/20 </span>
                      </h3>
                    </div>
                    </div>

                <NavLink exact to={{ pathname: "https://youtube.com/workforwin/" }} target="_blank" className="aboutsocial"><YouTubeIcon className="yout" style={{fontSize:"2rem"}} /></NavLink>
        <NavLink exact to={{ pathname: "https://www.linkedin.com/in/ceoankityadav/" }} target="_blank" className="aboutsocial"><LinkedInIcon className="linked" style={{fontSize:"2rem"}} /></NavLink>
        <NavLink exact to={{ pathname: "https://twitter.com/ceoankityadav/" }} target="_blank" className="aboutsocial"><TwitterIcon className="twit" style={{fontSize:"2rem"}} /></NavLink>
        <NavLink exact to={{ pathname: "/contact" }} target="_blank" className="aboutsocial"><MailIcon className="twit" style={{fontSize:"2rem"}} /></NavLink>
        <Bootombar />
        
                </div>
              </div>

              {/* ******* Right Side Bar Start******** */}
              <Rightbar />
              {/* ******* Right Side Bar End ******** */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gate2020;
