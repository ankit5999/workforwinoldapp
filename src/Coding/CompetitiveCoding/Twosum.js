import React, { useEffect } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Helmet } from 'react-helmet';
import HelpIcon from '@material-ui/icons/Help';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import WarningIcon from '@material-ui/icons/Warning';
import GradeIcon from '@material-ui/icons/Grade';
import {PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import { NavLink } from 'react-router-dom';



const Twosum = () => {

    const codeString = ` 
    class Solution {
        public int[] twoSum(int[] nums, int target) {
            int arr[] = new int[2];
            HashMap<Integer,Integer> map = new HashMap<>();
            for(int i=0;i<nums.length;i++){
                
                if(map.containsKey(target-nums[i])){
                    arr[0]=map.get(target-nums[i]);
                    arr[1]=i;
                    return arr;
                }
                map.put(nums[i],i);
            }
            return arr;
        }
    }
    `;
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
        <>
        <Helmet>
        <title>Two Sum ~ Workforwin</title>
        <meta name="title" content="Top 10 Movies for Web Developers ~ Workforwin" />
    <meta name="description" content="Top 10 must-watch movies for web developers if you want to know more about what goes on behind the scenes in terms of coding and programming."/>
    <meta name="keywords" content="Top 10 movies, filems, Movies for web developers, movies for web designers, movies for programmers, top movies of the year"/>
      </Helmet>
        <meta id="meta-description" name="description" content="Install Python in window 10, mac, linux. Setup Python in Visual Studio Code for python programming." />
        <meta id="og-title" property="og:title" content="How To Install Python For Python Programming" />
        <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
          <div className="row">
          {/* ******** Left Side Bar ********* */}
          <div className="col-md-2 pr-lg-4  mt-5 order-2 order-lg-1 " >
          {/* <NavLink exact to={{ pathname:"https://workforwin.com/"}} target="_blank" style={{color:"blue"}}><img src="https://lh3.googleusercontent.com/qAWQetgeCuT2rsQXLSbLKvObBf-d3kdP02suSKTaQvO-z2WvMCb6Eux4gb_OynEh7NmDr70VknHYeUIF2ywWogfXmf5ckGzP-oDp0MvCclUSbk0MzVsDVSo7WbZIHSq05he7nRc2qQ=w2400" className="img-fluid" alt="Data Sceicnce"></img></NavLink> */}
            </div>
          {/* ******** Left Side Bar ********* */}
          <div className="col-lg-8 order-1 shadow-lg " style={{paddingRight:"20px", paddingBottom:"5px"}}>
          <h1 style={{fontSize:"1.7rem", wordSpacing:"5px", paddingTop:"2%", paddingBottom:"15px", borderBottom:"1px solid #ff4a57", color:'#ff4a57'}}><HelpIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'#ff4a57'}} /> Two sum Problem </h1>
          

          <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <WarningIcon className="mr-3" style={{fontSize:"2rem"}} />
          <strong>Warning!</strong>  We solve Problems available on many online EdTech platforms and provide solutions to learners at Workforwin only for Education Purpose. Our Intention is not to stole anyone's work. Before taking any action please <NavLink to="/contact" target="_blank" className="alert-link">contact us</NavLink>.
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>
          

           <h4 style={{color:"rgba(79,172,254,.8)"}}><ArrowRightAltIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'rgba(79,172,254,.8)'}} /> Problem:</h4>
          <p className="ml-lg-5"> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
<br></br>You may assume that each input would have exactly one solution, and you may not use the same element twice.
<br></br>You can return the answer in any order.</p>
          <h4 style={{color:"#a64eee"}}><GradeIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'#a64eee'}} /> Solution :  <span style={{color:'gray'}}>[ Java ]</span></h4>
          
          <SyntaxHighlighter language={js} style={prism}>
          {codeString}
          </SyntaxHighlighter>


          <div className=" col-12 mx-auto mt-5 mb-3">
          <div className="row">
          <div className="col-lg-1 mhide">
          <AccountCircleIcon style={{fontSize:"3.5rem",color:'gray'}} />
            </div>
            <div className="col-lg-11 pt-2">
          <h3 style={{fontSize:"1rem", wordSpacing:"5px", paddingBottom:"15px", color:'#000'}}>Contributor: <span  style={{color:'gray'}}> <NavLink exact to={{ pathname: "https://www.linkedin.com/in/manish-sharma-191884193/" }} target="_blank" className="alert-light alert-link">@manishsharma</NavLink></span><br></br>Post on:<span style={{color:'gray'}}> 16/11/20 </span></h3>
           </div>
            </div>
          </div>

          
         
            </div>


            {/* ******* Right Side Bar Start******** */}
            <div className="col-md-2   pt-lg-0 order-2 order-lg-1 " style={{paddingLeft:"1%"}}>
                {/* <NavLink exact to={{ pathname:"https://workforwin.com/"}} target="_blank" style={{color:"blue"}}><img src="https://lh3.googleusercontent.com/FYFfLo2IKOZQEw6bRouaUtZynpKnmj3uLbw5rto5bsUuteSxT_eIRd6lR45KVXir7wZaOTCRmANgSDyIhkRgfl3WTlpsVtS0BfE8yH6IP4TfdLBH41gxy22_muC-8GK32ex1wVcrdA=w2400" className="img-fluid shadow mt-5" alt="webcourse" ></img></NavLink> */}
            </div>
            {/* ******* Right Side Bar End ******** */}

            </div>
          </div>
        </div>
        </div>
        </>
    );
};
export default Twosum;