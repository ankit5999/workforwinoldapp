import React, { useEffect } from 'react';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Helmet } from 'react-helmet';



function CompetitiveCoding1() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
  const [tabledata] = React.useState([
   
    { 
        rank:76,
        icon:<LockIcon/>,
        title:'Hamming Distance',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:77,
        icon:<LockIcon/>,
        title:`Island Perimeter`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:78,
        icon:<LockIcon/>,
        title:'Number Complement ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:79,
        icon:<LockIcon/>,
        title:`Max Consecutive Ones`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:80,
        icon:<LockIcon/>,
        title:'Next Greater Element I ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:81,
        icon:<LockIcon/>,
        title:'Find Mode in Binary Search Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:82,
        icon:<LockIcon/>,
        title:'Perfect Number',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:83,
        icon:<LockIcon/>,
        title:'Detect Capital',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:84,
        icon:<LockIcon/>,
        title:'Diameter of Binary Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:85,
        icon:<LockIcon/>,
        title:`Binary Tree Tilt`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:86,
        icon:<LockIcon/>,
        title:'Subtree of Another Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:87,
        icon:<LockIcon/>,
        title:`Merge Two Binary Trees`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:88,
        icon:<LockIcon/>,
        title:'Maximum Product of Three Numbers ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:89,
        icon:<LockIcon/>,
        title:`Average of Levels in Binary Tree `,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:90,
        icon:<LockIcon/>,
        title:'Two Sum IV - Input is a BST ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:91,
        icon:<LockIcon/>,
        title:'Second Minimum Node In a Binary Tree ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:92,
        icon:<LockIcon/>,
        title:'Longest Continuous Increasing Subsequence',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:93,
        icon:<LockIcon/>,
        title:'Flood Fill',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:94,
        icon:<LockIcon/>,
        title:'Min Cost Climbing Stairs',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:95,
        icon:<LockIcon/>,
        title:`Maximum Depth of N-ary Tree`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:96,
        icon:<LockIcon/>,
        title:'N-ary Tree Preorder Traversal ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:97,
        icon:<LockIcon/>,
        title:`Jewels and Stones`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:98,
        icon:<LockIcon/>,
        title:'Search in a Binary Search Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:99,
        icon:<LockIcon/>,
        title:`Kth Largest Element in a Stream `,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:100,
        icon:<LockIcon/>,
        title:'Binary Search',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:101,
        icon:<LockIcon/>,
        title:'Design HashSet ',
        defficulty:'Easy',
        link:'/twosum',
    },
    { 
        rank:102,
        icon:<LockIcon/>,
        title:'Design HashMap',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:103,
        icon:<LockIcon/>,
        title:'Most Common Word',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:104,
        icon:<LockIcon/>,
        title:'Goat Latin',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:105,
        icon:<LockIcon/>,
        title:'Peak Index in a Mountain Array ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:106,
        icon:<LockIcon/>,
        title:'Binary Gap',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:107,
        icon:<LockIcon/>,
        title:'Leaf-Similar Trees',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:108,
        icon:<LockIcon/>,
        title:'Middle of the Linked List ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:109,
        icon:<LockIcon/>,
        title:'Increasing Order Search Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:110,
        icon:<LockIcon/>,
        title:'Sort Array By Parity',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:111,
        icon:<LockIcon/>,
        title:'Unique Email Addresses',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:112,
        icon:<LockIcon/>,
        title:'Range Sum of BST',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:113,
        icon:<LockIcon/>,
        title:'Valid Mountain Array ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:114,
        icon:<LockIcon/>,
        title:'Verifying an Alien Dictionary',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:115,
        icon:<LockIcon/>,
        title:'Squares of a Sorted Array',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:116,
        icon:<LockIcon/>,
        title:'Cousins in Binary Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:117,
        icon:<LockIcon/>,
        title:'Find the Town Judge',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:118,
        icon:<LockIcon/>,
        title:'Pairs of Songs With Total Durations Divisible by 60',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:119,
        icon:<LockIcon/>,
        title:'Sum of Root To Leaf Binary Numbers',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:120,
        icon:<LockIcon/>,
        title:'Last Stone Weight',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:121,
        icon:<LockIcon/>,
        title:'Same Tree',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:122,
        icon:<LockIcon/>,
        title:'Height Checker',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:123,
        icon:<LockIcon/>,
        title:'Duplicate Zeros',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:124,
        icon:<LockIcon/>,
        title:'Distribute Candies to People',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:125,
        icon:<LockIcon/>,
        title:'Replace Elements with Greatest Element on Right Side',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:126,
        icon:<LockIcon/>,
        title:'Reformat Date ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:127,
        icon:<LockIcon/>,
        title:`Three Consecutive Odds `,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:128,
        icon:<LockIcon/>,
        title:`Check If It Is a Straight Line`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:129,
        icon:<LockIcon/>,
        title:'Convert Binary Number in a Linked List to Integer',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:130,
        icon:<LockIcon/>,
        title:'Find Numbers with Even Number of Digits',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:131,
        icon:<LockIcon/>,
        title:'Check If N and Its Double Exist',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:132,
        icon:<LockIcon/>,
        title:'Find the Distance Value Between Two Arrays ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:133,
        icon:<LockIcon/>,
        title:`Generate a String With Characters That Have Odd Counts`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:134,
        icon:<LockIcon/>,
        title:'Lucky Numbers in a Matrix',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:135,
        icon:<LockIcon/>,
        title:`Count Largest Group`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:136,
        icon:<LockIcon/>,
        title:'Create Target Array in the Given Order ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:137,
        icon:<LockIcon/>,
        title:`Find Lucky Integer in an Array`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:138,
        icon:<LockIcon/>,
        title:'Minimum Value to Get Positive Step by Step Sum',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:139,
        icon:<LockIcon/>,
        title:'String Matching in an Array',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:140,
        icon:<LockIcon/>,
        title:'Kids With the Greatest Number of Candies ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:141,
        icon:<LockIcon/>,
        title:'Reformat The String ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:142,
        icon:<LockIcon/>,
        title:'Maximum Score After Splitting a String',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:143,
        icon:<LockIcon/>,
        title:`Consecutive Characters`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:144,
        icon:<LockIcon/>,
        title:'Destination City',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:145,
        icon:<LockIcon/>,
        title:`Make Two Arrays Equal by Reversing Sub-arrays`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:146,
        icon:<LockIcon/>,
        title:'Number of Students Doing Homework at a Given Time',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:147,
        icon:<LockIcon/>,
        title:`Check If a Word Occurs As a Prefix of Any Word in a Sentence`,
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:148,
        icon:<LockIcon/>,
        title:'Final Prices With a Special Discount in a Shop ',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:149,
        icon:<LockIcon/>,
        title:'Maximum Product of Two Elements in an Array',
        defficulty:'Easy',
        link:'#',
    },
    { 
        rank:150,
        icon:<LockIcon/>,
        title:'Shuffle the Array',
        defficulty:'Easy',
        link:'#',
    },
       ]);


       const [tabledata2] = React.useState([
        { 
            rank:76,
            icon:<LockIcon/>,
            title:'Find All Duplicates in an Array ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:77,
            icon:<LockIcon/>,
            title:`Find Bottom Left Tree Value `,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:78,
            icon:<LockIcon/>,
            title:'Find Duplicate Subtrees',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:79,
            icon:<LockIcon/>,
            title:`Find Eventual Safe States`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:80,
            icon:<LockIcon/>,
            title:'Find First and Last Position of Element in Sorted Array',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:81,
            icon:<LockIcon/>,
            title:'Find Mode in Binary Search Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:82,
            icon:<LockIcon/>,
            title:'Find Kth Bit in Nth Binary String',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:83,
            icon:<LockIcon/>,
            title:'Find Largest Value in Each Tree Row ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:84,
            icon:<LockIcon/>,
            title:'Find Minimum in Rotated Sorted Array',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:85,
            icon:<LockIcon/>,
            title:`Find Peak Element`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:86,
            icon:<LockIcon/>,
            title:'Find Right Interval',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:87,
            icon:<LockIcon/>,
            title:`Find the Duplicate Number`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:88,
            icon:<LockIcon/>,
            title:'Find the Minimum Number of Fibonacci Numbers Whose Sum Is K',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:89,
            icon:<LockIcon/>,
            title:`Find the Winner of an Array Game `,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:90,
            icon:<LockIcon/>,
            title:'Flatten a Multilevel Doubly Linked List',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:91,
            icon:<LockIcon/>,
            title:'Four Divisors',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:92,
            icon:<LockIcon/>,
            title:'Game of Life ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:93,
            icon:<LockIcon/>,
            title:'Gas Station',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:94,
            icon:<LockIcon/>,
            title:'H-Index ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:95,
            icon:<LockIcon/>,
            title:`H-Index II`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:96,
            icon:<LockIcon/>,
            title:'House Robber II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:97,
            icon:<LockIcon/>,
            title:`House Robber III`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:98,
            icon:<LockIcon/>,
            title:'Image Overlap',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:99,
            icon:<LockIcon/>,
            title:`Implement Rand10() Using Rand7()`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:100,
            icon:<LockIcon/>,
            title:'Implement Trie (Prefix Tree)',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:101,
            icon:<LockIcon/>,
            title:'Increasing Triplet Subsequence',
            defficulty:'Medium',
            link:'/twosum',
        },
        { 
            rank:102,
            icon:<LockIcon/>,
            title:'Insert Delete GetRandom O(1)',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:103,
            icon:<LockIcon/>,
            title:'Insert Interval',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:104,
            icon:<LockIcon/>,
            title:'Insert into a Binary Search Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:105,
            icon:<LockIcon/>,
            title:'Integer Break',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:106,
            icon:<LockIcon/>,
            title:'Interval List Intersections',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:107,
            icon:<LockIcon/>,
            title:'Is Graph Bipartite?',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:108,
            icon:<LockIcon/>,
            title:'Iterator for Combination',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:109,
            icon:<LockIcon/>,
            title:'Increasing Order Search Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:110,
            icon:<LockIcon/>,
            title:'Jump Game',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:111,
            icon:<LockIcon/>,
            title:'Jump Game III',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:112,
            icon:<LockIcon/>,
            title:'Range Sum of BST',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:113,
            icon:<LockIcon/>,
            title:'K Closest Points to Origin',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:114,
            icon:<LockIcon/>,
            title:'Keys and Rooms',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:115,
            icon:<LockIcon/>,
            title:'Kth Largest Element in an Array',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:116,
            icon:<LockIcon/>,
            title:'Kth Smallest Element in a BST',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:117,
            icon:<LockIcon/>,
            title:'LRU Cache',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:118,
            icon:<LockIcon/>,
            title:'Largest Divisible Subset',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:119,
            icon:<LockIcon/>,
            title:'Largest Time for Given Digits',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:120,
            icon:<LockIcon/>,
            title:'Least Number of Unique Integers after K Removals',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:121,
            icon:<LockIcon/>,
            title:'Linked List Components',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:122,
            icon:<LockIcon/>,
            title:'Linked List Cycle II',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:123,
            icon:<LockIcon/>,
            title:'Linked List in Binary Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:124,
            icon:<LockIcon/>,
            title:'Longest Arithmetic Subsequence of Given Difference',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:125,
            icon:<LockIcon/>,
            title:'Longest Common Subsequence ',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:126,
            icon:<LockIcon/>,
            title:'Longest Happy String',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:127,
            icon:<LockIcon/>,
            title:`Longest Increasing Subsequence`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:128,
            icon:<LockIcon/>,
            title:`Longest Palindromic Subsequence`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:129,
            icon:<LockIcon/>,
            title:'Longest Palindromic Substring',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:130,
            icon:<LockIcon/>,
            title:'Find Numbers with Even Number of Digits',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:131,
            icon:<LockIcon/>,
            title:'Longest Substring Without Repeating Characters',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:132,
            icon:<LockIcon/>,
            title:'Longest Turbulent Subarray',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:133,
            icon:<LockIcon/>,
            title:`Longest Univalue Path`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:134,
            icon:<LockIcon/>,
            title:'Lowest Common Ancestor of a Binary Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:135,
            icon:<LockIcon/>,
            title:`Matrix Block Sum`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:136,
            icon:<LockIcon/>,
            title:'Max Area of Island',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:137,
            icon:<LockIcon/>,
            title:`Max Consecutive Ones III`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:138,
            icon:<LockIcon/>,
            title:'Max Difference You Can Get From Changing an Integer',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:139,
            icon:<LockIcon/>,
            title:'Maximal Square',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:140,
            icon:<LockIcon/>,
            title:'Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:141,
            icon:<LockIcon/>,
            title:'Maximum Difference Between Node and Ancestor',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:142,
            icon:<LockIcon/>,
            title:'Maximum Length of Pair Chain',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:143,
            icon:<LockIcon/>,
            title:`Maximum Length of Repeated Subarray`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:144,
            icon:<LockIcon/>,
            title:'Maximum Number of Coins You Can Get',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:145,
            icon:<LockIcon/>,
            title:`Maximum Number of Vowels in a Substring of Given Length`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:146,
            icon:<LockIcon/>,
            title:'Maximum Points You Can Obtain from Cards',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:147,
            icon:<LockIcon/>,
            title:`Maximum Product Subarray`,
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:148,
            icon:<LockIcon/>,
            title:'Maximum Product of Splitted Binary Tree',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:149,
            icon:<LockIcon/>,
            title:'Maximum Sum Circular Subarray',
            defficulty:'Medium',
            link:'#',
        },
        { 
            rank:150,
            icon:<LockIcon/>,
            title:'Maximum Width of Binary Tree ',
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
    <li className="page-item active"><NavLink className="page-link" to="#">2</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="competitive-coding2">3</NavLink></li>
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

export default CompetitiveCoding1;
