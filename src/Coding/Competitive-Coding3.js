import React, { useEffect } from 'react';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Helmet } from 'react-helmet';



function CompetitiveCoding3() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  const [tabledata] = React.useState([
    { 
        rank:1,
        icon:<LockIcon/>,
        title:'Best Time to Buy and Sell Stock III',
        defficulty:'Hard',
        link:'/twosum',
    },
    { 
        rank:2,
        icon:<LockIcon/>,
        title:'Binary Tree Maximum Path Sum ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:3,
        icon:<LockIcon/>,
        title:'Check If It Is a Good Array ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:4,
        icon:<LockIcon/>,
        title:'Dungeon Game',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:5,
        icon:<LockIcon/>,
        title:'Edit Distance',
        defficulty:'Hard',
        link:'#',
    },
    {
        rank:6,
        icon:<LockIcon />,
        title:'Find Minimum in Rotated Sorted Array II',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:7,
        icon:<LockIcon/>,
        title:'First Missing Positive ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:8,
        icon:<LockIcon/>,
        title:'Insert Delete GetRandom O(1) - Duplicates allowed ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:9,
        icon:<LockIcon/>,
        title:'Jump Game II',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:10,
        icon:<LockIcon/>,
        title:'Largest Component Size by Common Factor',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:11,
        icon:<LockIcon/>,
        title:'Longest Duplicate Substring',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:12,
        icon:<LockIcon/>,
        title:'Longest Valid Parentheses ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:13,
        icon:<LockIcon/>,
        title:'Maximum Sum BST in Binary Tree ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:14,
        icon:<LockIcon/>,
        title:'Median of Two Sorted Arrays',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:15,
        icon:<LockIcon/>,
        title:'Merge k Sorted Lists',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:16,
        icon:<LockIcon/>,
        title:'Minimum Insertion Steps to Make a String Palindrome ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:17,
        icon:<LockIcon/>,
        title:'Minimum Number of Increments on Subarrays to Form a Target Array',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:18,
        icon:<LockIcon/>,
        title:'Permutation Sequence',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:19,
        icon:<LockIcon/>,
        title:'Stream of Characters ',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:20,
        icon:<LockIcon/>,
        title:'Word Break II',
        defficulty:'Hard',
        link:'#',
    },
    { 
        rank:21,
        icon:<LockIcon/>,
        title:'Word Search II',
        defficulty:'Hard',
        link:'#',
    },
       ]);


       const [tabledata2] = React.useState([
        { 
            rank:226,
            icon:<LockIcon/>,
            title:'Triangle',
            defficulty:'Medium',
            link:'/twosum',
        },
        { 
            rank:227,
            icon:<LockIcon/>,
            title:'Two City Scheduling',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:228,
            icon:<LockIcon/>,
            title:'Ugly Number II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:229,
            icon:<LockIcon/>,
            title:'Uncrossed Lines',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:230,
            icon:<LockIcon/>,
            title:'Unique Binary Search Trees ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:231,
            icon:<LockIcon/>,
            title:'Unique Binary Search Trees  II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:232,
            icon:<LockIcon/>,
            title:'Unique Paths',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:233,
            icon:<LockIcon/>,
            title:'Unique Paths  II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:234,
            icon:<LockIcon/>,
            title:'Valid Parenthesis String',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:235,
            icon:<LockIcon/>,
            title:'Valid Sudoku',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:236,
            icon:<LockIcon/>,
            title:'Valid Tic-Tac-Toe State',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:237,
            icon:<LockIcon/>,
            title:'Valid Triangle Number',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:238,
            icon:<LockIcon/>,
            title:'Validate Binary Search Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:239,
            icon:<LockIcon/>,
            title:'Validate Binary Tree Nodes',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:240,
            icon:<LockIcon/>,
            title:'Validate IP Address ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:241,
            icon:<LockIcon/>,
            title:`Validate Stack Sequences`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:242,
            icon:<LockIcon/>,
            title:'Vertical Order Traversal of a Binary Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:243,
            icon:<LockIcon/>,
            title:'Video Stitching',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:244,
            icon:<LockIcon/>,
            title:'Vowel Spellchecker ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:245,
            icon:<LockIcon/>,
            title:'Water and Jug Problem',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:246,
            icon:<LockIcon/>,
            title:'Word Break',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:247,
            icon:<LockIcon/>,
            title:'Word Search',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:248,
            icon:<LockIcon/>,
            title:'XOR Queries of a Subarray ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:249,
            icon:<LockIcon/>,
            title:'ZigZag Conversion',
            defficulty:'Medium',
            link:'#',
        },
      ]);



    return (
        <div className='container-fluid'>
        <Helmet>
        <title>Competitive Coding ~ Workforwin</title>
      </Helmet>
          <h1 className='ml-lg-5 mr-lg-5' style={{fontSize:"1.7rem", wordSpacing:"5px", paddingTop:"2%", paddingBottom:"15px", borderBottom:"1px solid #ff4a57", color:'#ff4a57'}}><CodeIcon style={{fontSize:"2rem", marginTop:"-5px", color:'#ff4a57'}} /> Competitive Coding</h1>

        <div className='row'>
        <div className='col-md-6 pl-lg-5'>
        <h2 style={{fontSize:"1.7rem", wordSpacing:"5px", paddingBottom:"15px", color:'gray'}}><FitnessCenterIcon style={{fontSize:"2rem", marginTop:"-5px", color:'gray'}} /> Core Hard Problems</h2>
        <table className="content-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Title</th>
      <th className='mhide'>Difficulty</th>
      <th className='mhide'>Level</th>
    </tr>
  </thead>
  <tbody>
  {tabledata.map((info) => (
    <tr key={info.rank}>
      <td>{info.rank}</td>
      <td><NavLink exact to="#"  style={{textDecoration:'none'}}>{info.title}</NavLink></td>
      <td className='mhide'>{info.defficulty}</td>
      <td className='mhide' style={{fontSize:"1.7rem",padding:'0', color:'gray'}}>{info.icon}</td>
    </tr>
    ))}
  </tbody>
</table>
        </div>
        <div className='col-md-6 pr-lg-5 mhide'>
        <h2 style={{fontSize:"1.7rem", wordSpacing:"5px", paddingBottom:"15px", color:'gray'}}><FitnessCenterIcon style={{fontSize:"2rem", marginTop:"-5px", color:'gray'}} /> Become Pro In Coding</h2>
        <table className="content-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Title</th>
      <th className='mhide'>Difficulty</th>
      <th className='mhide'>Level</th>
    </tr>
  </thead>
  <tbody>
  {tabledata2.map((info) => (
    <tr key={info.rank}>
      <td>{info.rank}</td>
      <td><NavLink exact to="#"  style={{textDecoration:'none'}}>{info.title}</NavLink></td>
      <td className='mhide'>{info.defficulty}</td>
      <td className='mhide' style={{fontSize:"1.7rem",padding:'0', color:'gray'}}>{info.icon}</td>
    </tr>
    ))}
  </tbody>
</table>
        </div>
        <nav aria-label="Page navigation" className='container pb-0 mb-0'>
  <ul className="pagination">
    <li className="page-item">
      <NavLink className="page-link" to="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        {/* <span className="sr-only">Previous</span> */}
      </NavLink>
    </li>
    <li className="page-item"><NavLink className="page-link" to="/competitive-coding">1</NavLink></li>
    <li className="page-item "><NavLink className="page-link" to="competitive-coding1">2</NavLink></li>
    <li className="page-item "><NavLink className="page-link" to="/competitive-coding2">3</NavLink></li>
    <li className="page-item active"><NavLink className="page-link" to="#">4</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="#">5</NavLink></li>
    <li className="page-item">
      <NavLink className="page-link" to="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        {/* <span className="sr-only">Next</span> */}
      </NavLink>
    </li>
  </ul>
</nav>
        </div>
        </div>
        
    );
};

export default CompetitiveCoding3;
