import React, { useEffect } from 'react';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Helmet } from 'react-helmet';



function CompetitiveCoding2() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
  const [tabledata] = React.useState([
    { 
        rank:151,
        icon:<LockIcon/>,
        title:'Average Salary Excluding the Minimum and Maximum Salary',
        defficulty:'Easy',
        link:'/twosum',
    },
    { 
        rank:152,
        icon:<LockIcon/>,
        title:'Running Sum of 1d Array',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:153,
        icon:<LockIcon/>,
        title:'XOR Operation in an Array',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:154,
        icon:<LockIcon/>,
        title:'Can Make Arithmetic Progression From Sequence',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:155,
        icon:<LockIcon/>,
        title:'Count Odd Numbers in an Interval Range',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:156,
        icon:<LockIcon/>,
        title:'Number of Good Pairs',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:157,
        icon:<LockIcon/>,
        title:'Water Bottles',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:158,
        icon:<LockIcon/>,
        title:'Kth Missing Positive Number',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:159,
        icon:<LockIcon/>,
        title:'Shuffle String',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:160,
        icon:<LockIcon/>,
        title:'Count Good Triplets',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:161,
        icon:<LockIcon/>,
        title:'Thousand Separator',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:162,
        icon:<LockIcon/>,
        title:'Make The String Great',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:163,
        icon:<LockIcon/>,
        title:'Matrix Diagonal Sum',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:164,
        icon:<LockIcon/>,
        title:'Most Visited Sector in a Circular Track',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:165,
        icon:<LockIcon/>,
        title:'Sum of All Odd Length Subarrays',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:166,
        icon:<LockIcon/>,
        title:`Replace All ?'s to Avoid Consecutive Repeating Characters`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:167,
        icon:<LockIcon/>,
        title:'Rearrange Spaces Between Words',
        defficulty:'Easy',
        link:'#',
    },
       ]);


       const [tabledata2] = React.useState([
        { 
            rank:151,
            icon:<LockIcon/>,
            title:'Merge Intervals',
            defficulty:'Medium',
            link:'/twosum',
        },
        { 
            rank:152,
            icon:<LockIcon/>,
            title:'Minesweeper ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:153,
            icon:<LockIcon/>,
            title:'Minimum Cost For Tickets',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:154,
            icon:<LockIcon/>,
            title:'Minimum Deletion Cost to Avoid Repeating Letters',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:155,
            icon:<LockIcon/>,
            title:'Minimum Path Sum',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:156,
            icon:<LockIcon/>,
            title:'Minimum Remove to Make Valid Parentheses',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:157,
            icon:<LockIcon/>,
            title:'Most Frequent Subtree Sum',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:158,
            icon:<LockIcon/>,
            title:'N-ary Tree Level Order Traversal',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:159,
            icon:<LockIcon/>,
            title:'Next Greater Element III ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:160,
            icon:<LockIcon/>,
            title:'Next Greater Node In Linked List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:161,
            icon:<LockIcon/>,
            title:'Non-overlapping Intervals',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:162,
            icon:<LockIcon/>,
            title:'Number of Good Ways to Split a String',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:163,
            icon:<LockIcon/>,
            title:'Number of Islands',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:164,
            icon:<LockIcon/>,
            title:'Number of Sub-arrays With Odd Sum ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:165,
            icon:<LockIcon/>,
            title:'Number of Substrings With Only 1s ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:166,
            icon:<LockIcon/>,
            title:`Numbers With Same Consecutive Differences`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:167,
            icon:<LockIcon/>,
            title:'Odd Even Linked List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:168,
            icon:<LockIcon/>,
            title:'Online Stock Span',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:169,
            icon:<LockIcon/>,
            title:'Pancake Sorting',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:170,
            icon:<LockIcon/>,
            title:'Partition Equal Subset Sum',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:171,
            icon:<LockIcon/>,
            title:'Partition Labels',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:172,
            icon:<LockIcon/>,
            title:'Path Sum II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:173,
            icon:<LockIcon/>,
            title:'Path Sum III',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:174,
            icon:<LockIcon/>,
            title:'Perfect Squares',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:175,
            icon:<LockIcon/>,
            title:'Permutation in String',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:176,
            icon:<LockIcon/>,
            title:'Populating Next Right Pointers in Each Node',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:177,
            icon:<LockIcon/>,
            title:'Populating Next Right Pointers in Each Node II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:178,
            icon:<LockIcon/>,
            title:'Possible Bipartition',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:179,
            icon:<LockIcon/>,
            title:'Pow(x, n)',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:180,
            icon:<LockIcon/>,
            title:'Prison Cells After N Days',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:181,
            icon:<LockIcon/>,
            title:'Product of Array Except Self',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:182,
            icon:<LockIcon/>,
            title:'Pseudo-Palindromic Paths in a Binary Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:183,
            icon:<LockIcon/>,
            title:'Queue Reconstruction by Height',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:184,
            icon:<LockIcon/>,
            title:'RLE Iterator',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:185,
            icon:<LockIcon/>,
            title:'Random Pick with Weight',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:186,
            icon:<LockIcon/>,
            title:'Random Point in Non-overlapping Rectangles',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:187,
            icon:<LockIcon/>,
            title:'Range Sum of Sorted Subarray Sums',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:188,
            icon:<LockIcon/>,
            title:'Reconstruct Itinerary',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:189,
            icon:<LockIcon/>,
            title:'Remove Duplicates from Sorted Array II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:190,
            icon:<LockIcon/>,
            title:'Remove Duplicates from Sorted List II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:191,
            icon:<LockIcon/>,
            title:'Remove K Digits',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:192,
            icon:<LockIcon/>,
            title:'Remove Nth Node From End of List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:193,
            icon:<LockIcon/>,
            title:'Remove Zero Sum Consecutive Nodes from Linked List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:194,
            icon:<LockIcon/>,
            title:'Reorder List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:195,
            icon:<LockIcon/>,
            title:'Repeated DNA Sequences',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:196,
            icon:<LockIcon/>,
            title:'Reverse Linked List II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:197,
            icon:<LockIcon/>,
            title:'Reverse Words in a String',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:198,
            icon:<LockIcon/>,
            title:'Rotate List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:199,
            icon:<LockIcon/>,
            title:'Rotting Oranges',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:200,
            icon:<LockIcon/>,
            title:'Satisfiability of Equality Equations',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:201,
            icon:<LockIcon/>,
            title:'Score of Parentheses',
            defficulty:'Medium',
            link:'/twosum',
        },
        { 
            rank:202,
            icon:<LockIcon/>,
            title:'Search a 2D Matrix II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:203,
            icon:<LockIcon/>,
            title:'Search in Rotated Sorted Array',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:204,
            icon:<LockIcon/>,
            title:'Shortest Path in Binary Matrix ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:205,
            icon:<LockIcon/>,
            title:'Simplified Fractions',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:206,
            icon:<LockIcon/>,
            title:'Single Element in a Sorted Array',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:207,
            icon:<LockIcon/>,
            title:'Single Number II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:208,
            icon:<LockIcon/>,
            title:'Single Number III',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:209,
            icon:<LockIcon/>,
            title:'Sort Characters By Frequency',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:210,
            icon:<LockIcon/>,
            title:'Sort Colors',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:211,
            icon:<LockIcon/>,
            title:'JSort Integers by The Power Value',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:212,
            icon:<LockIcon/>,
            title:'Stone Game',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:213,
            icon:<LockIcon/>,
            title:'Subarray Product Less Than K',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:214,
            icon:<LockIcon/>,
            title:'Subarray Sum Equals K',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:215,
            icon:<LockIcon/>,
            title:'Subsets',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:216,
            icon:<LockIcon/>,
            title:'Sum Root to Leaf Numbers ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:217,
            icon:<LockIcon/>,
            title:'Sum of Nodes with Even-Valued Grandparent',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:218,
            icon:<LockIcon/>,
            title:'Surrounded Regions',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:219,
            icon:<LockIcon/>,
            title:'Swap Nodes in Pairs',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:220,
            icon:<LockIcon/>,
            title:'Task Scheduler',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:221,
            icon:<LockIcon/>,
            title:'The k Strongest Values in an Array',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:222,
            icon:<LockIcon/>,
            title:'The kth Factor of n',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:223,
            icon:<LockIcon/>,
            title:'Top K Frequent Elements',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:224,
            icon:<LockIcon/>,
            title:'Top K Frequent Words',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:225,
            icon:<LockIcon/>,
            title:'Total Hamming Distance',
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
        <h2 style={{fontSize:"1.7rem", wordSpacing:"5px", paddingBottom:"15px", color:'gray'}}><FitnessCenterIcon style={{fontSize:"2rem", marginTop:"-5px", color:'gray'}} /> Find Your Strength</h2>
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
    <li className="page-item active"><NavLink className="page-link" to="#">3</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="/competitive-coding3">4</NavLink></li>
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

export default CompetitiveCoding2;
