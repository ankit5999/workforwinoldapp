import React from 'react';
import { NavLink } from 'react-router-dom';


function Leftbar() {


    return (
        <div className="col-md-2 pr-lg-4  mt-5 order-2 order-lg-1 " >
          <NavLink exact to={{ pathname:"https://careers.google.com/jobs/results/?company=Google&company=Google%20Fiber&company=YouTube&employment_type=FULL_TIME&hl=en_US&jlo=en_US&q=software%20engineering&sort_by=relevance"}} target="_blank" >
          <img src="https://1.bp.blogspot.com/-wHnKvPFmi6M/X8x51rQCdII/AAAAAAAACq8/5tuAokwM4I4913-W3VDmhq7gHUEijDLmACLcBGAsYHQ/s16000/google.webp" className="img-fluid" alt="Android Development" style={{borderRadius:"3px"}}></img></NavLink>

        </div>
    );
};

export default Leftbar;
