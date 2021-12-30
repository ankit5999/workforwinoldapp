import React, { useEffect } from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Helmet } from 'react-helmet';
import Rightbar from './Rightbar';
import Leftbar from './Leftbar';
import Bootombar from './Bootombar';



const DevelopersMovie = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <Helmet>
        <title>Top 10 Movies for Web Developers ~ Workforwin</title>
        <meta name="title" content="Top 10 Movies for Web Developers ~ Workforwin" />
    <meta name="description" content="Top 10 must-watch movies for web developers if you want to know more about what goes on behind the scenes in terms of coding and programming." canonical="https://workforwin.com/top-10-movies-web-developers"/>
    <meta name="keywords" content="Top 10 movies, filems, Movies for web developers, movies for web designers, movies for programmers, top movies of the year"/>
    <meta id="meta-description" name="description" content="Top 10 must-watch movies for web developers if you want to know more about what goes on behind the scenes in terms of coding and programming." canonical="https://workforwin.com/top-10-movies-web-developers" />
        <meta id="og-title" property="og:title" content="Top 10 Movies for Web Developers ~ Workforwin" />
      </Helmet>
       
        <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto ">
          <div className="row">
          {/* ******** Left Side Bar ********* */}
          <Leftbar />
          {/* ******** Left Side Bar ********* */}
          <div className="col-lg-7 order-1 shadow-lg " style={{paddingRight:"20px", paddingBottom:"5px"}}>
          <h1 style={{fontSize:"1.7rem", wordSpacing:"5px", paddingTop:"2%", paddingBottom:"15px", borderBottom:"1px solid #ff4a57", color:'#ff4a57'}}><MenuBookIcon style={{fontSize:"2.1rem", marginTop:"-5px", color:'#ff4a57'}} /> Top 10 Movies for Web Developers - Workforwin </h1>
           <p>Top 10 must-watch movies for web developers these are the once personally I enjoyed watching and also the ones I would recommend other people to watch if you want to know more about what goes on behind the scenes in terms of coding and programming.</p>
           <h4 style={{color:"#302424"}}>1. Jobs: The inspiring true story of Apple Founder Steve Jobs</h4>
          <img src="https://1.bp.blogspot.com/-92RsJ1ZRWpY/X6Y9ci201jI/AAAAAAAACh8/ipAV-Qf9bHcn3pWmxi_s--EogUapl5LFwCLcBGAsYHQ/s16000/Jobs.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>A movie about steve jobs who as we know created apple. It's a biography that shows how someone in technology uses their own mind, their own skills to build something from their own home, form their own garage into a fully fledge business that scalable and one of the biggest in the world. it's a great inspiration because it shows the whole journey that it was not easy, there was a struggle, some problems along the way. 
         <br></br>From a developer point of view lots of things that I can emphasize to you that when I was in college I start building my own websites and start providing services to local businesses. I try to build my own startup that can be converted into a scalable business. I learned from steve that never give up, give your 100% to your work. And steve had a team so without a team we alone cant achieve more as much we can with a team. </p>
          
          <h4 style={{color:"#302424"}}>2. silicon Valley: Changing the way things change</h4>
          <img src="https://1.bp.blogspot.com/-sLACgijQMTo/X6Y_VYOzFoI/AAAAAAAACiI/GaELDvim7QUNlmnoQGMWFC--g3ZYsE0eQCLcBGAsYHQ/s16000/Silicon%2BVally.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>It's an American television series that shows a programmer who finds a startup company, Pied Piper, and the struggles he faces while competing with big firms. It's all six seasons are full of comedy, you will enjoy a lot. There is a character called Richard Hendricks and he is a tech guy with no real social skills is thrown into a situation like trying to get an investor and creating his company from his backyard. There are some jokes I really enjoy like what is cloud computing and how it is in the cloud.</p>

          <h4 style={{color:"#302424"}}>3. The social Network: You Don't get to 500 million friends without making a few enemies</h4>
          <img src="https://1.bp.blogspot.com/-Wnpno6pVUlM/X6d0EA-1RUI/AAAAAAAACic/-theVukxqT8EHCjVjNJSTrVAkFnv20gLACLcBGAsYHQ/s16000/3.%2BThe%2Bsocial%2BNetwork.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>This is a movie released in 2010 and its talk about how Facebook was created by Mark Zuckerberg. It gives you a feeling about what it's like to create a startup. It shows how Mark Zuckerberg start creating at university and his idea about Facebook. We know nothing is easy Mark also faces difficulties people try to shove his ownership of his company. It taught me when you think about making something successful you protect yourself because you never know who is going to come trying to catch you.</p>

          <h4 style={{color:"#302424"}}>4. The social Dilemma </h4>
          <img src="https://1.bp.blogspot.com/-L-GzH3vRRRs/X6d0EPpmEfI/AAAAAAAACiU/9IIoGMEGW0wKWVES26bw5TTmEngYKnoQACLcBGAsYHQ/s16000/4.%2BThe%2Bsocial%2BDilemma.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>This is a new movie just released this year in 2020 and it talks about the social impacts that social media is having on us. This is actually a scary thing to really be concerned about because these try to grab our attention as much as possible. You are using Tik Tok, Instagram, Twitter, Linkedin, Facebook even YouTube these platforms trying to make sure that you staying on them as long as you can.
          <br></br>This shows me that we have less attention to our own life we are trying to showoff and interesting in knowing what's happening in other's life by burning our life. As your attention decreases your ability of thinking, learning, and doing work is also decreases. These platforms have their algorithms who trying to find out who you are and what are things you are interested in. This movie is an eye-opening movie for us.</p>

          <h4 style={{color:"#302424"}}>5. The Internship</h4>
          <img src="https://1.bp.blogspot.com/-XhPw_Q7Jfwo/X6d0FO73l_I/AAAAAAAACig/zqDKByp78yIhSB6S_VY6ymiuaO4Jk9WnQCLcBGAsYHQ/s16000/5.%2BThe%2BInternship.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>The Internship is an American comedy film and one of my favorite movies. It releases in 2013. Two characters Vince Vaughn and Owen Wilson who try to compete with more technically skilled applicants for a job at Google. Personally, it becomes more interesting for me because I also try to get into google without getting much knowledge about technology. I just learn the basics of a few programming languages and considered myself a master of technology that was the most fun part of my journey. Well as a developer or software engineer you will love this movie a lot.</p>

          <h4 style={{color:"#302424"}}>6. Mr. Robot</h4>
          <img src="https://1.bp.blogspot.com/-p4MGJIIqVho/X6d0FXwAAxI/AAAAAAAACik/561THVaVeqQcO7jAWjIzQKuh7Mz5LHy1wCLcBGAsYHQ/s16000/6.%2BMr.%2BRobot.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>This is tv series having some drama thriller. It's about a guy Elliot Alderson whos technically working inside cybersecurity he is also a bit of a hacker. I enjoyed it because it gives a personal view of the person rather than the technology. Most of us are working in front of computers it means something we might have some issues like depression and anxiety. There are other cool aspects this show has as well, things like whether a corporation, businesses, and the military are using technology for the right purposes. It shows something we need to take care of as a society.
          <br></br>You heard Elon Musk talking about the dangers of AI and sometimes we don't listen to these kinds of stuff. The fact I understood that traps are going on here things like Ip Addresses, Networking, Security but in journal term, this is more to enjoy the drama here rather than learning more about technology.</p>

          <h4 style={{color:"#302424"}}>7. The IT crowd</h4>
          <img src="https://1.bp.blogspot.com/-wFbiTz0D5Hk/X6d0FecrB3I/AAAAAAAACio/dWiX4RzcldQdZzWvQrE26sjkeGWA-ewmwCLcBGAsYHQ/s16000/7.%2BThe%2BIT%2Bcrowd.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>This series I recommend to everyone in the tech industry developers who work in IT. This is really enjoyable because this is a comedy series about technology. You will see What is like working in an office and working with technology? It shows on the working table that how the firewall works and how things going on inside a company. Being a computer science engineer I love this movie. It's fresh up my memory of working days in an It firm.</p>

          <h4 style={{color:"#302424"}}>8. The Pursuit of Happyness </h4>
          <img src="https://1.bp.blogspot.com/-cty4GzLEfkI/X6d0F7SqEZI/AAAAAAAACis/0lwUoYxp7oYIuJzuMWQNdkgg9wtQRjIDgCLcBGAsYHQ/s16000/8.%2BThe%2BPursuit%2Bof%2BHappyness.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>Will Smith's movie released in 2006 based on Gardner's nearly one-year struggle being homeless. This movie shows the struggle in life and how your attitude toward success pushes you to achieve unexpectable in life. I learn from this movie that nature tests you before giving something that you are capable of getting it or not which he wants to give you. The bigger challenge you face the success will 10times more than that. Nothing is free if you want to be successful, you have to pay the price, and you have to think different. Rember today is very tough, tomorrow is tougher, the day after tomorrow is beautiful. </p>

          <h4 style={{color:"#302424"}}>9. Hackers </h4>
          <img src="https://1.bp.blogspot.com/--45_VMhguRw/X6d0GVfeanI/AAAAAAAACiw/1V7UXkcs51wg-yfmr3BZ8ghPPvif3SCwwCLcBGAsYHQ/s16000/9%2BHackers.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>It's a movie based on a crime about teenage hackers who break into a major corporation’s computer network, discover evidence of an embezzlement scheme, and must save themselves before they’re captured by police. If you are interested in networking and security, firewalls and data then this is an enjoyable movie for you contains lots of information that can be learned. I love this movie since I was in college, I was curious in knowing about how data transfer and store. How can we manipulate data in terms of security?</p>

          <h4 style={{color:"#302424"}}>10 Joy </h4>
          <img src="https://1.bp.blogspot.com/-fMrtE5VgQwI/X6d0EDVfedI/AAAAAAAACiY/JRIf61Gb7pUTJN-8MGZcO4iQ2mCKRWr-ACLcBGAsYHQ/s16000/10%2BJoy.webp" className="img-fluid center" alt="" style={{width:'50%', borderRadius:'15px'}}></img>
          <p>Joy is a 2015 American biographical comedy-drama film. This film is based on Joy Mangano an American investor and entrepreneur. It shows a self-made millionaire who created her own business empire. I love this movie because I also want to become an entrepreneur who can contribute something from his life to the survival of our species. I will suggest this movie if you have dreamed of becoming an entrepreneur. Especially woman will learn a lot from this movie. It gives a closed view of their abnormal life and their struggle of doing something unliveable and unachievable for normal peoples.</p>

          <div className=" col-12 mx-auto mt-5 mb-3">
          <div className="row">
          <div className="col-lg-1 mhide">
          <AccountCircleIcon style={{fontSize:"3.5rem",color:'gray'}} />
            </div>
            <div className="col-lg-11 pt-2">
          <h3 style={{fontSize:"1rem", wordSpacing:"5px", paddingBottom:"15px", color:'#000'}}>Auther:<span  style={{color:'gray'}}> @ceoankityadav</span><br></br>Post on:<span style={{color:'gray'}}> 16/11/20 </span></h3>
           </div>
            </div>
          


        {/* <h2 style={{borderTop:'1px solid #ff4a57',fontSize:'1.7rem', color:'#ff4a57'}}>Follow On Social</h2> */}
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
export default DevelopersMovie;