import React from "react";

function Imgcarosal() {
  const [blogsidebar] = React.useState([
    {
      id: 1,
      imgsrc:
        "https://1.bp.blogspot.com/-QXps8r8U0lU/X6VKGenIC7I/AAAAAAAACgA/4mIEqR275N4ptpswKAn6qzo-Mjy75kWbwCLcBGAsYHQ/s16000/html.webp",
    },
    {
      id: 2,
      imgsrc:
        "https://1.bp.blogspot.com/-yYoJ0PBK6kQ/X6VKEVGLUOI/AAAAAAAACfs/vpASnjTVFMMFDH8JV6prIDbgIeKZ8njlQCLcBGAsYHQ/s16000/css.webp",
    },
    {
      id: 3,
      imgsrc:
        "https://1.bp.blogspot.com/-a749vryjGCk/X6VKGoO4ATI/AAAAAAAACgE/6gvbQNFQDOsku7eWXqcynne8R3BaKvOawCLcBGAsYHQ/s16000/javascript.webp",
    },
    {
      id: 4,
      imgsrc:
        "https://1.bp.blogspot.com/-naACUakGe4E/X6VKD9lEvVI/AAAAAAAACfk/cQUzVzOViYsOFPm5L5yx1JjUQ_BUSwNRgCLcBGAsYHQ/s16000/bootstraplogo.webp",
    },
    {
      id: 5,
      imgsrc:
        "https://1.bp.blogspot.com/-xG2b7aPkuok/X6VKH5munuI/AAAAAAAACgQ/BXzYl2lnTJcCk7Y_0N_d6kjQirsTNRRfQCLcBGAsYHQ/s16000/reactfirebase.webp",
    },
    {
      id: 6,
      imgsrc:
        "https://1.bp.blogspot.com/-vjVwUXk0_rc/X6VKG11up4I/AAAAAAAACgI/FECB4YUg9NoXvJG-MmpGG_09UdWlvbZ7ACLcBGAsYHQ/s16000/mongodb.webp",
    },
    {
      id: 7,
      imgsrc:
        "https://1.bp.blogspot.com/-e53H3fRzRrU/X6VKHnbxvhI/AAAAAAAACgM/hvzuru5v0PQ1MBcV1mGwQ4Ta4_I8XFRJgCLcBGAsYHQ/s16000/python.webp",
    },
    {
      id: 8,
      imgsrc:
        "https://1.bp.blogspot.com/-IBlWwnfEKuI/X6VKFc2jJCI/AAAAAAAACf4/0t6A3ij09CAsUREYHAZoxDm4xkWAPHwaQCLcBGAsYHQ/s16000/firebaselogo.webp",
    },
    {
      id: 9,
      imgsrc:
        "https://1.bp.blogspot.com/-ktWqwJSfHtY/X6VKIUv1RRI/AAAAAAAACgY/08_wI8yqEjYWKlSYs-vGaAtpvXpqpy-7wCLcBGAsYHQ/s16000/wordpress.webp",
    },
  ]);
  return (
    <div className="slider">
      <div className="slide">
        {blogsidebar.map((info) => (
          <div key={info.id}>
            <img src={info.imgsrc} alt=""></img>
          </div>
        ))}
      </div>
      <div className="slide">
        {blogsidebar.map((info) => (
          <div key={info.id}>
            <img src={info.imgsrc} alt=""></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imgcarosal;
