import React, { useEffect } from 'react';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import WarningIcon from '@material-ui/icons/Warning';
import { Helmet } from 'react-helmet';


function CompetitiveCoding() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
  const [tabledata] = React.useState([
    { 
        rank:1,
        icon:<LockOpenIcon/>,
        title:'Two Sum ',
        defficulty:'Easy',
        link:'/twosum',
    },
    { 
        rank:2,
        icon:<LockIcon/>,
        title:'Reverse Integer',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:3,
        icon:<LockIcon/>,
        title:'Palindrome Number',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:4,
        icon:<LockIcon/>,
        title:'Roman to Integer',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:5,
        icon:<LockIcon/>,
        title:'Longest Common Prefix',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:6,
        icon:<LockIcon/>,
        title:'Valid Parentheses',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:7,
        icon:<LockIcon/>,
        title:'Merge Two Sorted Lists',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:8,
        icon:<LockIcon/>,
        title:'Remove Duplicates from Sorted Array',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:9,
        icon:<LockIcon/>,
        title:'Remove Element',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:10,
        icon:<LockIcon/>,
        title:'Implement strStr()',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:11,
        icon:<LockIcon/>,
        title:'Search Insert Position',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:12,
        icon:<LockIcon/>,
        title:'Count and Say',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:13,
        icon:<LockIcon/>,
        title:'Maximum Subarray',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:14,
        icon:<LockIcon/>,
        title:'Length of Last Word',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:15,
        icon:<LockIcon/>,
        title:'Plus One',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:16,
        icon:<LockIcon/>,
        title:'Add Binary',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:17,
        icon:<LockIcon/>,
        title:'Sqrt(x)',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:18,
        icon:<LockIcon/>,
        title:'Climbing Stairs',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:19,
        icon:<LockIcon/>,
        title:'Remove Duplicates from Sorted List',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:20,
        icon:<LockIcon/>,
        title:'Merge Sorted Array',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:21,
        icon:<LockIcon/>,
        title:'Same Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:22,
        icon:<LockIcon/>,
        title:'Symmetric Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:23,
        icon:<LockIcon/>,
        title:'Maximum Depth of Binary Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:24,
        icon:<LockIcon/>,
        title:'Binary Tree Level Order Traversal II',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:25,
        icon:<LockIcon/>,
        title:'Balanced Binary Tree ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:26,
        icon:<LockIcon/>,
        title:'Minimum Depth of Binary Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:27,
        icon:<LockIcon/>,
        title:`Pascal's Triangle II`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:28,
        icon:<LockIcon/>,
        title:'Best Time to Buy and Sell Stock',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:29,
        icon:<LockIcon/>,
        title:`Best Time to Buy and Sell Stock II`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:30,
        icon:<LockIcon/>,
        title:'Valid Palindrome',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:31,
        icon:<LockIcon/>,
        title:'Single Number',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:32,
        icon:<LockIcon/>,
        title:'Linked List Cycle',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:33,
        icon:<LockIcon/>,
        title:'Min Stack',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:34,
        icon:<LockIcon/>,
        title:'Intersection of Two Linked Lists',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:35,
        icon:<LockIcon/>,
        title:`Two Sum II - Input array is sorted`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:36,
        icon:<LockIcon/>,
        title:'Majority Element',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:37,
        icon:<LockIcon/>,
        title:`Excel Sheet Column Number`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:38,
        icon:<LockIcon/>,
        title:'Factorial Trailing Zeroes',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:39,
        icon:<LockIcon/>,
        title:`Reverse Bits`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:40,
        icon:<LockIcon/>,
        title:'House Robber',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:41,
        icon:<LockIcon/>,
        title:'Happy Number',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:42,
        icon:<LockIcon/>,
        title:'Remove Linked List Elements',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:43,
        icon:<LockIcon/>,
        title:'Count Primes',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:44,
        icon:<LockIcon/>,
        title:'Isomorphic Strings',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:45,
        icon:<LockIcon/>,
        title:`Reverse Linked List`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:46,
        icon:<LockIcon/>,
        title:'Contains Duplicate',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:47,
        icon:<LockIcon/>,
        title:`Contains Duplicate II`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:48,
        icon:<LockIcon/>,
        title:'Implement Stack using Queues ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:49,
        icon:<LockIcon/>,
        title:`Invert Binary Tree`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:50,
        icon:<LockIcon/>,
        title:'Summary Ranges',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:51,
        icon:<LockIcon/>,
        title:'Power of Two  ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:52,
        icon:<LockIcon/>,
        title:'Palindrome Linked List ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:53,
        icon:<LockIcon/>,
        title:'Lowest Common Ancestor of a Binary Search Tree ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:54,
        icon:<LockIcon/>,
        title:'Delete Node in a Linked List ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:55,
        icon:<LockIcon/>,
        title:'Binary Tree Paths',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:56,
        icon:<LockIcon/>,
        title:'Add Digits',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:57,
        icon:<LockIcon/>,
        title:'Missing Number ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:58,
        icon:<LockIcon/>,
        title:'First Bad Version ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:59,
        icon:<LockIcon/>,
        title:'Move Zeroes   ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:60,
        icon:<LockIcon/>,
        title:'Word Pattern',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:61,
        icon:<LockIcon/>,
        title:'Nim Game ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:62,
        icon:<LockIcon/>,
        title:'Range Sum Query - Immutable ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:63,
        icon:<LockIcon/>,
        title:'Power of Four',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:64,
        icon:<LockIcon/>,
        title:'Reverse String ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:65,
        icon:<LockIcon/>,
        title:'Valid Perfect Square ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:66,
        icon:<LockIcon/>,
        title:'Ransom Note',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:67,
        icon:<LockIcon/>,
        title:'First Unique Character in a String  ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:68,
        icon:<LockIcon/>,
        title:'Is Subsequence',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:69,
        icon:<LockIcon/>,
        title:'Sum of Left Leaves ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:70,
        icon:<LockIcon/>,
        title:'Longest Palindrome',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:71,
        icon:<LockIcon/>,
        title:'Fizz Buzz ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:72,
        icon:<LockIcon/>,
        title:'Third Maximum Number',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:73,
        icon:<LockIcon/>,
        title:'Arranging Coins',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:74,
        icon:<LockIcon/>,
        title:'Find All Numbers Disappeared in an Array ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:75,
        icon:<LockIcon/>,
        title:'Repeated Substring Pattern ',
        defficulty:'Easy',
        link:'#',
    },
       ]);


       const [tabledata2] = React.useState([
        { 
            rank:1,
            icon:<LockIcon/>,
            title:'01 Matrix',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:2,
            icon:<LockIcon/>,
            title:'132 Pattern',
            defficulty:'Medium',
            link:'#',
        },
        {
            rank:3,
            icon:<LockIcon />,
            title:'2 Keys Keyboard',
            defficulty:'Medium',
            link:'#',
        },
        {
            rank:4,
            icon:<LockIcon />,
            title:'3Sum',
            defficulty:'Medium',
            link:'#',
        },
        {
            rank:5,
            icon:<LockIcon />,
            title:'3Sum Closest ',
            defficulty:'Medium',
            link:'#',
        },
        {
            rank:6,
            icon:<LockIcon />,
            title:'Add One Row to Tree ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:7,
            icon:<LockIcon/>,
            title:'Airplane Seat Assignment Probability',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:8,
            icon:<LockIcon/>,
            title:'All Elements in Two Binary Search Trees',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:9,
            icon:<LockIcon/>,
            title:'All Paths From Source to Target',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:10,
            icon:<LockIcon/>,
            title:'Angle Between Hands of a Clock',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:11,
            icon:<LockIcon/>,
            title:'Arithmetic Slices',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:12,
            icon:<LockIcon/>,
            title:'Array of Doubled Pairs',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:13,
            icon:<LockIcon/>,
            title:'As Far from Land as Possible ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:14,
            icon:<LockIcon/>,
            title:'Asteroid Collision',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:15,
            icon:<LockIcon/>,
            title:'Bag of Tokens ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:16,
            icon:<LockIcon/>,
            title:'Balance a Binary Search Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:17,
            icon:<LockIcon/>,
            title:'Basic Calculator II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:18,
            icon:<LockIcon/>,
            title:'Best Time to Buy and Sell Stock with Cooldown',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:19,
            icon:<LockIcon/>,
            title:'Best Time to Buy and Sell Stock with Transaction Fee',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:20,
            icon:<LockIcon/>,
            title:'Binary Search Tree Iterator',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:21,
            icon:<LockIcon/>,
            title:'Binary Search Tree to Greater Sum Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:22,
            icon:<LockIcon/>,
            title:'Binary Subarrays With Sum',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:23,
            icon:<LockIcon/>,
            title:'Binary Tree Inorder Traversal',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:24,
            icon:<LockIcon/>,
            title:'Binary Tree Level Order Traversal',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:25,
            icon:<LockIcon/>,
            title:'Binary Tree Postorder Traversal ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:26,
            icon:<LockIcon/>,
            title:'Binary Tree Preorder Traversal ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:27,
            icon:<LockIcon/>,
            title:`Binary Tree Pruning`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:28,
            icon:<LockIcon/>,
            title:'Binary Tree Right Side View',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:29,
            icon:<LockIcon/>,
            title:`Binary Tree Zigzag Level Order Traversal`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:30,
            icon:<LockIcon/>,
            title:'Bitwise AND of Numbers Range',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:31,
            icon:<LockIcon/>,
            title:'Boats to Save People ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:32,
            icon:<LockIcon/>,
            title:'Bulb Switcher IV',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:33,
            icon:<LockIcon/>,
            title:'Bulls and Cows',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:34,
            icon:<LockIcon/>,
            title:'Camelcase Matching',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:35,
            icon:<LockIcon/>,
            title:`Cheapest Flights Within K Stops`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:36,
            icon:<LockIcon/>,
            title:'Check Completeness of a Binary Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:37,
            icon:<LockIcon/>,
            title:`Check If All 1's Are at Least Length K Places Away`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:38,
            icon:<LockIcon/>,
            title:'Check If Array Pairs Are Divisible by k',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:39,
            icon:<LockIcon/>,
            title:`Check If Word Is Valid After Substitutions`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:40,
            icon:<LockIcon/>,
            title:'Check If a String Can Break Another String',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:41,
            icon:<LockIcon/>,
            title:'Circle and Rectangle Overlapping ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:42,
            icon:<LockIcon/>,
            title:'Coin Change',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:43,
            icon:<LockIcon/>,
            title:'Coin Change 2',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:44,
            icon:<LockIcon/>,
            title:'Combination Sum',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:45,
            icon:<LockIcon/>,
            title:`Combination Sum III`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:46,
            icon:<LockIcon/>,
            title:'Combination Sum IV',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:47,
            icon:<LockIcon/>,
            title:`Compare Version Numbers`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:48,
            icon:<LockIcon/>,
            title:'Construct Binary Search Tree from Preorder Traversal ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:49,
            icon:<LockIcon/>,
            title:`Construct Binary Tree from Inorder and Postorder Traversal `,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:50,
            icon:<LockIcon/>,
            title:'Container With Most Water',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:51,
            icon:<LockIcon/>,
            title:'Contains Duplicate III',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:52,
            icon:<LockIcon/>,
            title:'Contiguous Array',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:53,
            icon:<LockIcon/>,
            title:'Continuous Subarray Sum',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:54,
            icon:<LockIcon/>,
            title:'Convert BST to Greater Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:55,
            icon:<LockIcon/>,
            title:'Copy List with Random Pointer',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:56,
            icon:<LockIcon/>,
            title:'Count Complete Tree Nodes',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:57,
            icon:<LockIcon/>,
            title:'Count Good Nodes in Binary Tree ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:58,
            icon:<LockIcon/>,
            title:'Count Number of Teams ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:59,
            icon:<LockIcon/>,
            title:'Count Servers that Communicate',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:60,
            icon:<LockIcon/>,
            title:'Count Square Submatrices with All Ones',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:61,
            icon:<LockIcon/>,
            title:'Counting Bits',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:62,
            icon:<LockIcon/>,
            title:'Course Schedule',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:63,
            icon:<LockIcon/>,
            title:'Course Schedule II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:64,
            icon:<LockIcon/>,
            title:'Decode Ways ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:65,
            icon:<LockIcon/>,
            title:'Delete Node in a BST',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:66,
            icon:<LockIcon/>,
            title:'Ransom Note',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:67,
            icon:<LockIcon/>,
            title:'Delete and Earn ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:68,
            icon:<LockIcon/>,
            title:'Design Add and Search Words Data Structure',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:69,
            icon:<LockIcon/>,
            title:'Design Linked List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:70,
            icon:<LockIcon/>,
            title:'Divide Array in Sets of K Consecutive Numbers',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:71,
            icon:<LockIcon/>,
            title:'Divide Two Integers',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:72,
            icon:<LockIcon/>,
            title:'Encode and Decode TinyURL',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:73,
            icon:<LockIcon/>,
            title:'Evaluate Reverse Polish Notation',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:74,
            icon:<LockIcon/>,
            title:'Exclusive Time of Functions',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:75,
            icon:<LockIcon/>,
            title:'Find All Anagrams in a String',
            defficulty:'Medium',
            link:'#',
        },
      ]);

    const [blogcard] = React.useState([
      { 
          id: 1,
          imgsrc:"https://1.bp.blogspot.com/-64enUb7lHCw/X6ohP_nozeI/AAAAAAAACjo/H3a79OF9MqQzIpgMsWMCSz_vyVCse5OSQCLcBGAsYHQ/s16000/Algorithm%2BDesigning.webp",
      },
      { 
          id: 2,
          imgsrc:"https://1.bp.blogspot.com/-l0_bQbM3Kn0/X6ojdnoCwNI/AAAAAAAACj0/78YrZ3ww0FwtmVaxkwPABHWWzDycAGIFQCLcBGAsYHQ/s16000/Programming.webp",
      },
      { 
        id: 3,
        imgsrc:"https://1.bp.blogspot.com/-CpD7R1oAMeE/X6omqZTWnYI/AAAAAAAACkA/TcYt-IQwd5k7KTykvaK-h6Hyh-Vq3FaoACLcBGAsYHQ/s16000/Data%2BStructure.webp",
    },
         ]);


    return (
        <div className='container-fluid'>
        <Helmet>
        <title>Competitive Coding ~ Workforwin</title>
        <meta name="title" content="Competitive Coding ~ Workforwin" />
    <meta name="description" content="Test your coding knowledge at workforwin. Solve coding problem and get solution of coding problems to get into product based companies." canonical="https://workforwin.com/competitive-coding" />
    <meta name="keywords" content="Competitive Coding, coding, java, javascript, python, programming, computer coding, computer science" />
    <meta id="meta-description" name="description" content="Test your coding knowledge at workforwin. Solve coding problem and get solution of coding problems to get into product based companies." canonical="https://workforwin.com/competitive-coding" />
      <meta id="og-title" property="og:title" content="Competitive Coding ~ Workforwin" />
      </Helmet>
      
          <h1 className='ml-lg-5 mr-lg-5' style={{fontSize:"1.7rem", wordSpacing:"5px", paddingTop:"2%", paddingBottom:"15px", borderBottom:"1px solid #ff4a57", color:'#ff4a57'}}><CodeIcon style={{fontSize:"2rem", marginTop:"-5px", color:'#ff4a57'}} /> Competitive Coding</h1>
          <div className="alert alert-warning alert-dismissible fade show ml-md-5 mr-md-5" role="alert">
          <WarningIcon className="mr-3" style={{fontSize:"2rem"}} />
          <strong>Alert!</strong>  We solve Problems available on many online EdTech platforms and provide solutions to learners at Workforwin only for Education Purpose. Our Intention is not to stole anyone's work. Before taking any action please <NavLink to="/contact" target="_blank" className="alert-link">contact us</NavLink>.
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>
          
          <div className="col-lg-7 mx-auto mt-lg-5 order-1 order-lg-2">
            {blogcard.map((info) => (
            <div className='blogcard col-lg-4 mx-auto' key={info.id} style={{display:'inline-block', padding:'10px'}}>
            <div className="mb-2 mb-lg-5 shadow" style={{ borderRadius:'10px'}}>
            <img src={info.imgsrc} className="img-fluid " alt='' style={{width:'100%', borderRadius:'10px'}} />
            </div>
            </div>
            ))}
            </div>
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
      <td><NavLink to={info.link} target='blank' style={{textDecoration:'none'}}>{info.title}</NavLink></td>
      <td className='mhide'>{info.defficulty}</td>
      <td className='mhide' style={{fontSize:"1.7rem",padding:'0', color:'gray'}}>{info.icon}</td>
    </tr>
    ))}
  </tbody>
</table>
        </div>
        <div className='col-md-6 pr-lg-5 mhide'>
        <h2 style={{fontSize:"1.7rem", wordSpacing:"5px", paddingBottom:"15px", color:'gray'}}><FitnessCenterIcon style={{fontSize:"2rem", marginTop:"-5px", color:'gray'}} /> Test Some More Knowledge</h2>
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
    <li className="page-item active"><NavLink className="page-link" to="#">1</NavLink></li>
    <li className="page-item"><NavLink className="page-link"  exact to="/competitive-coding1">2</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="/competitive-coding2">3</NavLink></li>
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

export default CompetitiveCoding;
