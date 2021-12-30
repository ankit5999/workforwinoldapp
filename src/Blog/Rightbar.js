import React from 'react';
import { NavLink } from 'react-router-dom';

function Rightbar() {

    const [blogsidebar] = React.useState([
        { 
            id: 1,
            imgsrc: "https://1.bp.blogspot.com/-zgCiRPxJ8CA/X8ImqNmarvI/AAAAAAAACoQ/Dn4U4btX8zQFzYTNls6kH_WTERKWxnV2ACLcBGAsYHQ/s16000/integrate%2Bgit%2Bbash%2Bwith%2Bvscode.webp",
            title: "Integrate Git Bash with VS Code",
            text:"To Integrate Git Bash with VSCode python should be pre-installed in your system....",
            visit: "/integrate-git-bash-with-vscode",
        },
        { 
            id: 2,
            imgsrc:"https://1.bp.blogspot.com/-vRdHubZo7MY/X6VKA28kdII/AAAAAAAACfI/A3m7mjULa7sCOvkmToUdBbI0jjdnhWI2QCLcBGAsYHQ/s16000/Final-Year-Projects-Idea.webp",
            title:"Projects For Final Year Students",
            text:"If you are in the final year of your engineering and looking for a web....",
            visit:"/Projects",
        },
           ]);

    return (
        <div className="col-md-3 pr-lg-5 pl-lg-5 pt-lg-0 order-2 ">
             <h2 className='text-center mt-2' style={{fontSize:"1.7rem", wordSpacing:"5px"}}>Popular Post</h2>
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
             <div className='card shadow'>
             <img src="https://1.bp.blogspot.com/-x6n_UoAdty0/X9GeBZiJTnI/AAAAAAAACsY/ySurMG1UV5EMVnjdABdocTSR-V3SGHjewCLcBGAsYHQ/s16000/python%2Bgame.gif"  className="img-fluid " alt="" style={{borderRadius:'3px', cursor:"pointer"}}></img>
             </div>
             </div>
    );
};

export default Rightbar;
