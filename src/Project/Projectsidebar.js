import React from "react";
import { NavLink } from "react-router-dom";





function Projectsidebar() {
  const [blogsidebar] = React.useState([
    {
      id: 1,
      imgsrc:"https://1.bp.blogspot.com/-CGt8bBibt_Y/X-xGM-0z1fI/AAAAAAAACwc/iXkpM1O08y4W4W9s1Uv2JH8o055NpujNQCLcBGAsYHQ/s16000/email%2Bclassification.webp",
      title:"Email Classification",
      text:"Email classification project using machine learning.....",
      visit:"https://github.com/Manish0510/Email-Classification-Model/blob/main/email-classification-model.ipynb",
    },
    {
      id: 2,
      imgsrc: "https://1.bp.blogspot.com/-DVKdSPC28Ug/X-xLl2S6RaI/AAAAAAAACws/FpJoGPUtDIYZritjaWn4tUWYlitMLzzNQCLcBGAsYHQ/s16000/Digit%2BRecognition.webp",
      title: "Digit Recognition",
      text: "Digit Recognition project using machine learning.....",
      visit:"https://github.com/Manish0510/HandWrittenDifitsClassifier/blob/main/HandWrittenDigitClassificationModel.ipynb",
    },
  ]);



  
  return (
    <div className="col-md-3   pt-lg-0 order-2 order-lg-2 ">
      <h2 className="text-center mt-2">ML Projects</h2>
      {blogsidebar.map((info) => (
        <div key={info.id}>
          <div className="card mb-5 shadow">
            <img src={info.imgsrc} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{info.title}</h5>
              <p className="card-text">{info.text}</p>
              <NavLink exact to={{pathname:info.visit}} target="_blank" className="btn btn-outline-danger  border rounded-pill my-2 " >
                <span>Read More</span>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
      <div className="card ">
      


    {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-2704444085018423"
     data-ad-slot="6821203220"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */}
      {/* <img src="https://1.bp.blogspot.com/-3-kWcmp198c/X8sKtlPsPGI/AAAAAAAACqA/1ZGaP6GWBpIHwhfvTTflLeVdXaKGuVlJQCLcBGAsYHQ/s16000/python%2BSoftware.gif"   className="img-fluid " alt="" style={{borderRadius:'3px', cursor:"pointer"}}></img> */}
      </div>
    </div>
  );
}

export default Projectsidebar;
