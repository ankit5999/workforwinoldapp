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
import {PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';


const Integrategit = () => {

    const codeString = ` // Git Bash
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"  `;

const [command] = React.useState([
    {
        rank: 1,
        title1: `1) Change Drive or folder: cd "drive name/folder name"`,
        title2: `Ex: cd C or cd Downloads`,
    },
    {
        rank: 2,
        title1: `2) print working directory:`,
        title2: `pwd ( it gives you the location of your working folder )`,
    },
    {
        rank: 3,
        title1: `3) List: `,
        title2: `ls ( it show all the files present in the folder or directory )`,
    },
    {
        rank: 4,
        title1: `4) To clear screen:`,
        title2: `clear`,
    },
    {
        rank: 5,
        title1: `5) Create folder: mkdir "folder name"`,
        title2: `EX: mkdir "Workforwin folder"`,
    },
    {
        rank: 6,
        title1: `6) Create a file: touch "filename"`,
        title2: `Ex: touch "helloworld.py"`,
    },
    {
        rank: 7,
        title1: `7) Delete a file: rm "filename"`,
        title2: `Ex: rm "helloworld.py"`,
    },
    {
        rank: 8,
        title1: `8) Remove Folder: rm -rf "folder name"`,
        title2: `Ex: rm -rf "Workforwin folder"`,
    },
    {
        rank: 9,
        title1: `9) Back directory: `,
        title2: `cd ..`,
    },
    {
        rank: 10,
        title1: `10) Code file: code "filename"`,
        title2: `Ex: code hello.py`,
    },
]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Integrate Git Bash with VSCode ~ Workforwin</title>
        <meta name="title" content="How to Integrate Git Bash with VSCode ~ Workforwin"/>
        <meta name="description" content="Git provides a command-line experience to users. It is a terminal application used to interact with an operating system by written commands we use it at the place of the window shell." canonical="https://workforwin.com/integrate-git-bash-with-vscode"/>
        <meta name="keywords" content="python, how to integrate git bash with vs code, git bash, Fix: git problem, vs code, Integrate Git Bash with VSCode,visual studio code bash integrated terminal, visual studio code terminal not working, include git bash in visual studio code, Workforwin" />
        <meta id="meta-description" name="description" content="Git provides a command-line experience to users. It is a terminal application used to interact with an operating system by written commands we use it at the place of the window shell." canonical="https://workforwin.com/integrate-git-bash-with-vscode" />
        <meta id="og-title" property="og:title" content="How to Integrate Git Bash with VSCode ~ Workforwin" />
        </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
            <div className="row">
              {/* ******** Left Side Bar ********* */}
              <Leftbar />
              {/* ******** Left Side Bar ********* */}
              <div className="col-lg-7 order-1 shadow-lg " style={{ paddingRight: "20px", paddingBottom: "5px" }} >
                <h1 style={{ fontSize: "1.7rem", wordSpacing: "5px", paddingTop: "2%", paddingBottom: "15px", borderBottom: "1px solid #ff4a57", color: "#ff4a57", }} >
                  <MenuBookIcon style={{ fontSize: "2.1rem", marginTop: "-5px", color: "#ff4a57", }} /> Integrate Git Bash with VSCode ~ Workforwin</h1>
                <p>To Integrate Git Bash with VSCode python should be pre-installed in your system with its latest updated version and along with python vs code and git should be installed. Here we will solve the problem of integrating git bash with visual studio code.</p>


<h4 style={{ color: "#302424" }}>How to Setup Python In System</h4>
<p>For working on python we need a python shell or IDE ( Integrated Development Environment ), where we can write our code. For a better experience, we will use python3, it's an updated version that comes with more library functionality. You can use any version of python3, it always better that you use updated versions like python3.7, python3.8.
<br></br>To download python visit the python official website <NavLink exact to={{ pathname: "https://www.python.org/" }} target="_blank" >https://www.python.org/</NavLink> now click on download and select your operating system windows, mac, and Linux. Now select the 64bit or 32bit version of the system and click on download. Once you have downloaded python in your localhost double click to install it. Here click on add to the path while installing it.</p>

<div className="col-sm-6 center">
  <div className="shadow mb-3 mt-3" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
  <div className="card-header text-success ">Image</div>
  <div className="card-body text-success">
<img src="https://1.bp.blogspot.com/-zgCiRPxJ8CA/X8ImqNmarvI/AAAAAAAACoQ/Dn4U4btX8zQFzYTNls6kH_WTERKWxnV2ACLcBGAsYHQ/s16000/integrate%2Bgit%2Bbash%2Bwith%2Bvscode.webp" className="img-fluid center" alt="" style={{ borderRadius: "10px", padding:"0"}} ></img>
  </div>
</div>
  </div>

<h4 style={{ color: "#302424" }}>Visual Studio Code</h4>
<p>Visual studio code is software that provides you an effective way of writing your code. Now the only python you can use this software for any programming language. One of the biggest advantages is the autocompletion of syntax. Also, it suggests the highlighted code.</p>
<h4 style={{ color: "#302424" }}>Steps to install the VS Code :</h4>
<p>1) To download visit the official website of Microsoft visual studio code, or visit the link <NavLink exact to={{ pathname: "https://code.visualstudio.com/download/" }} target="_blank" >https://code.visualstudio.com/download/</NavLink>
<br></br>2) Select os and click on download.<br></br>3) After download click to install and accept the agreement and enter.<br></br>4) Now click on add "open with code" action to the windows explorer file context menu and also on the directory context menu.
<br></br>5) Install now and finish.</p>
<h4 style={{ color: "#302424" }}>Git Bash</h4>
<p>Git provides a command-line experience to users. It is a terminal application used to interact with an operating system by written commands we use it at the place of the window shell. By writing commands you can connect with hardware more easily, by using git we do work faster it saves a programmer time. Git provides a Linux-based environment to Windows users.</p>
<h4 style={{ color: "#302424" }}>Steps to install Git Bash :</h4>
<p>1) Visit the website <NavLink exact to={{ pathname: "https://gitforwindows.org/" }} target="_blank" >https://gitforwindows.org/</NavLink>
<br></br>2) Click on download and install it.</p>
<h4 style={{ color: "#302424" }}>Integrate Git Bash with VS Code</h4>
<p>1) Open vs Code to integrate and click on extensions on the left side or press <span style={{ color:'gray' }}>Ctrl + Shift + X</span>.
<br></br>2) Search for python, click on the first extension and install it restart vs code.
<br></br>3) click on files then move to preferences, setting, on the top right side click open setting (JSON).<br></br>Copy :
<SyntaxHighlighter language={js} style={prism}>
          {codeString}
</SyntaxHighlighter>
4) Paste the code in the setting.json file and save changes.<br></br>
5) Restart Visual studio code.</p>

<h4 style={{ color: "#302424" }}>Important commands of git:</h4>
{command.map((info) => (
<div key={info.rank}>
<p>{info.title1} <br></br>{info.title2}</p>
</div>
))}






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
                        <span style={{ color: "gray" }}> 1/12/20 </span>
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
export default Integrategit;
