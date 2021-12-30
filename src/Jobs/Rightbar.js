import React from 'react';
import { NavLink } from 'react-router-dom';

function Rightbar() {

  const [blogsidebar] = React.useState([
    { 
        id: 1,
        imgsrc:"https://1.bp.blogspot.com/-e7n8LQz3XMQ/X8DjIgMR_mI/AAAAAAAACoE/elglLVcV_cAqC_6y7XtCb3XNPIYXvxNvQCLcBGAsYHQ/s16000/GoogleInterview.webp",
        title:"How to get Interview at Google?",
        text:"Google is one of the most top multinational companies.....",
        visit:"/how-to-get-interview-at-google",
    },
       ]);

       const [textbar] = React.useState([
        { 
            id: 1,
            title:"Software Engineer, University Graduate, 2021",
            time:"2 days ago",
            visit:"https://careers.google.com/jobs/results/140314437895496390/",
        },
        { 
            id: 2,
            title:"Software Engineer, PayPal, Bangalore",
            time:"1 day ago",
            visit:"https://wd1.myworkdaysite.com/recruiting/paypal/jobs/job/Bangalore-IN/Software-Engineer_R0061915?Codes=W-LINKEDIN",
        },
        { 
            id: 3,
            title:"Software Dev Engineer I- Backend Dev, Swiggy, Bangalore",
            time:"1 day ago",
            visit:"https://jobs.lever.co/swiggy/fb091ce5-e05c-4967-9a9c-7af73c402350",
        },
        { 
          id: 4,
          title:"Software Development Engineer II, Flipkart, Bangalore",
          time:"1 day ago",
          visit:"https://www.flipkartcareers.com/#!/job-view/software-development-engineer-ii-bangalore-karnataka-2020101512283331?source=linkedin",
      },
        { 
          id: 5,
          title:"Software Engineering, JPMorgan Chase & Co, Hyderabad",
          time:"1 day ago",
          visit:"https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210052331/?utm_medium=jobshare&src=LinkedIn_Slots",
      },
      { 
          id: 6,
          title:"Software Development Engineer, Amazon, Bangalore ",
          time:"1 day ago",
          visit:"https://www.amazon.jobs/en/jobs/1354706/software-development-engineer?cmpid=SPLICX0248M&utm_source=linkedin.com&utm_campaign=cxro&utm_medium=social_media&utm_content=job_posting&ss=paid",
      },
           ]);

      
    

    return (
        <div className="col-md-3 pl-lg-4  order-2 ">
             <h2 className='text-center mt-2' style={{fontSize:"1.7rem", wordSpacing:"5px"}}>Latest Job</h2>

             <div className="list-group">
          {textbar.map((info) => (
             <div key={info.id}>
             <NavLink target="blank" exact to={{ pathname: info.visit }} className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h6 className="mb-1">{info.title}</h6>
      <small className="text-success">{info.time}</small>
    </div>
  </NavLink>
             </div>
             ))}
             </div>

 


  {/* <div className='card  mt-lg-5 mb-lg-5 col-md-10 center'>
             <img src="https://1.bp.blogspot.com/-3-kWcmp198c/X8sKtlPsPGI/AAAAAAAACqA/1ZGaP6GWBpIHwhfvTTflLeVdXaKGuVlJQCLcBGAsYHQ/s16000/python%2BSoftware.gif" data-toggle="modal" data-target="#myModal" className="img-fluid " alt="" style={{borderRadius:'3px', cursor:"pointer"}}></img>
             </div> */}
             <div>
             </div>
             
             <div className="col-md-11 pl-lg-4">
             {blogsidebar.map((info) => (
             <div key={info.id}>
             <div className="card mb-5 shadow">
             <img src={info.imgsrc} className="card-img-top" alt=''  />
             <div className="card-body">
             <h5 className="card-title font-weight-bold">{info.title}</h5>
             <p className="card-text">{info.text}</p>
             <NavLink to={info.visit} className="btn btn-outline-danger  border rounded-pill my-2 "><span>Read More</span></NavLink>
             </div>
             </div>
             </div>
             ))}
             </div>
            
             {/* <div className="list-group">
          {textbar.map((info) => (
             <div key={info.id}>
             <NavLink target="blank" exact to={{ pathname: info.visit }} className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h6 className="mb-1">{info.title}</h6>
      <small className="text-success">{info.time}</small>
    </div>
  </NavLink>
             </div>
             ))}
             </div> */}


</div>
    );
};

export default Rightbar;
