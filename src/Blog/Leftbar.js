import React from 'react';
import { NavLink } from 'react-router-dom';


function Leftbar() {
    return (
        <div className="col-md-2 pr-lg-4  mt-5 order-2 order-lg-1 " >
          <NavLink exact to={{ pathname:"https://youtu.be/nY7qedxuGcQ"}} target="_blank" ><img src="https://1.bp.blogspot.com/-s1cO_5f_O08/X8YuZDeihgI/AAAAAAAACpQ/43Yw7nfTuOk96xVGyHezWSgaUMhUJrQFACLcBGAsYHQ/s16000/How%2Bto%2Bget%2BInterview%2Bat%2BGoogle.webp" className="img-fluid" alt="Android Development" style={{borderRadius:"3px"}}></img></NavLink>
        </div>
    );
};

export default Leftbar;
