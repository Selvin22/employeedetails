// import React from 'react'


// const Templates = () => {
//   return (
//     <div className='container'>
    
    
    
//         <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//         </div>
        
//     </div>
   
    
//   )
// }

// export default Templates



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TfiBarChartAlt } from "react-icons/tfi";

// import './Templates.css';
// import Header from './Header';



// const Templates = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   const handleGetEmployees = () => {
//     navigate('/EmployeeList')
//   };

//   const handleGetIdSubmit = () => {
//     navigate('/Getid')
//   };

//   const handleUpdateClick = () => {
//     navigate('/Update')
//   };

//   const handleDeleteClick = () => {
//     navigate('/Delete')
//   };

//   return (
    
//     <div className='register-container'>
//      <Header/>
//       <div className=" left-panel ">
//         <button className="btn  " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button><br></br>
//         <button className="btn  " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//         {/* Add other buttons and functionality here */}
//       </div>
//       <div className='navbar navbar-expand-lg'>
//              <div className='box1'>
//              <p>hi how are you</p>
             
//             <span>all earning</span><TfiBarChartAlt style={{marginLeft:"110px",fontSize:"30px"}} />
             
//              <hr></hr>
//                 <span>update</span>
//              </div>
//              <div className='box2'>
//              <p>hi how are you</p>
//              <span>all earning</span><TfiBarChartAlt style={{marginLeft:"110px",fontSize:"30px"}} />
             
//              <hr></hr>
//                 <p>update</p>
//              </div>
//              <div className='box3'>
//              <p>hi how are you</p>
//              <span>all earning</span><TfiBarChartAlt style={{marginLeft:"110px",fontSize:"30px"}} />
             
//              <hr></hr>
//                 <p>update</p>
//              </div>
//              <div className='box4'>
//              <p>$25000</p>
//              <span>all earning</span><TfiBarChartAlt style={{marginLeft:"110px",fontSize:"30px"}} />
             
             
//              <hr></hr>
//                 <p>update</p>
//              </div>
//       </div>
//     </div>
//   );
// };

// export default Templates;




// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Chart from 'chart.js/auto'; // import Chart from 'chart.js' for older versions

// import './Templates.css';
// import Header from './Header';

// const Templates = () => {
//   const navigate = useNavigate();

//   // Initialize the chart when the component mounts
//   useEffect(() => {
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         datasets: [
//           {
//             label: 'work load',
//             data: [2, 9, 3, 17, 6, 3, 7],
//             backgroundColor: 'rgba(153, 205, 1, 0.6)',
//           },
//           {
//             label: 'free hours',
//             data: [2, 2, 5, 5, 2, 1, 10],
//             backgroundColor: 'rgba(155, 153, 10, 0.6)',
//           },
//         ],
//       },
//     });

//     // Clean up function to destroy the chart when the component unmounts
//     return () => {
//       myChart.destroy();
//     };
//   }, []); // Run this effect only once when the component mounts

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   const handleGetEmployees = () => {
//     navigate('/EmployeeList');
//   };

//   const handleGetIdSubmit = () => {
//     navigate('/Getid');
//   };

//   const handleUpdateClick = () => {
//     navigate('/Update');
//   };

//   const handleDeleteClick = () => {
//     navigate('/Delete');
//   };

//   return (
//     <div className='register-container'>
//       <Header />
//       <div className=' left-panel '>
//         <button className='btn  ' onClick={handleRegisterClick}>
//           Register
//         </button>
//         <br></br>
//         <button className='btn  ' onClick={handleGetEmployees}>
//           GET All Employees
//         </button>
//         <br></br>
//         <button className='btn ' onClick={handleGetIdSubmit}>
//           GetId
//         </button>
//         <br></br>
//         <button className='btn ' onClick={handleUpdateClick}>
//           Update
//         </button>
//         <br></br>
//         <button className='btn ' onClick={handleDeleteClick}>
//           Delete
//         </button>
//         <br></br>
//         {/* Add other buttons and functionality here */}
//       </div>
//       <div className='navbar navbar-expand-lg'>
//         <div className='box1'>
//           <p>hi how are you</p>

//           <span>all earning</span>
//           <hr></hr>
//           <span>update</span>
//         </div>
//         <div className='box2'>
//           <p>hi how are you</p>
//           <span>all earning</span>
//           <hr></hr>
//           <p>update</p>
//         </div>
//         <div className='box3'>
//           <p>hi how are you</p>
//           <span>all earning</span>
//           <hr></hr>
//           <p>update</p>
//         </div>
//         <div className='box4'>
//           <p>$25000</p>
//           <span>all earning</span>

//           <hr></hr>
//           <p>update</p>
//         </div>
//       </div>

//       {/* Add the canvas for the chart */}
//       <div className='container'>
//         <h2>Line Chart</h2>
//         <div>
//           <canvas id='myChart' style={{width:"10px"}} ></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Templates;

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Chart from 'chart.js/auto'; // import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import Header from './Header';

// const Templates = () => {
//   const navigate = useNavigate();

//   // Initialize the chart when the component mounts
//   useEffect(() => {
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         datasets: [
//           {
//             label: 'work load',
//             data: [2, 9, 3, 17, 6, 3, 7],
//             backgroundColor: 'rgba(153, 205, 1, 0.6)',
//           },
//           {
//             label: 'free hours',
//             data: [2, 2, 5, 5, 2, 1, 10],
//             backgroundColor: 'rgba(155, 153, 10, 0.6)',
//           },
//         ],
//       },
//     });

//     // Clean up function to destroy the chart when the component unmounts
//     return () => {
//       myChart.destroy();
//     };
//   }, []); // Run this effect only once when the component mounts

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   const handleGetEmployees = () => {
//     navigate('/EmployeeList');
//   };

//   const handleGetIdSubmit = () => {
//     navigate('/GetId');
//   };

//   const handleUpdateClick = () => {
//     navigate('/Update');
//   };

//   const handleDeleteClick = () => {
//     navigate('/Delete');
//   };

//   return (
//     <div className='register-container'>
//       <Header />
//       <div className=' left-panel '>
//         <button className='btn  ' onClick={handleRegisterClick}>
//           Register
//         </button>
//         <br></br>
//         <button className='btn  ' onClick={handleGetEmployees}>
//           GET All Employees
//         </button>
//         <br></br>
//         <button className='btn ' onClick={handleGetIdSubmit}>
//           GetId
//         </button>
//         <br></br>
//         <button className='btn ' onClick={handleUpdateClick}>
//           Update
//         </button>
//         <br></br>
//         <button className='btn ' onClick={handleDeleteClick}>
//           Delete
//         </button>
//         <br></br>
//         {/* Add other buttons and functionality here */}
//       </div>
//       <div className='navbar navbar-expand-lg'>
//         <div className='box1'>
//           <p>hi how are you</p>
//           <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//           <hr></hr>
          
//         </div>
//         <div className='box2'>
//           <p>hi how are you</p>
//           <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//           <hr></hr>
          
//         </div>
//         <div className='box3'>
//           <p>hi how are you</p>
//           <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//           <hr></hr>
         
//         </div>
//         <div className='box4'>
//           <p>$25000</p>
//           <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />

//           <hr></hr>
         
//         </div>
//       </div>

//       {/* Add the canvas for the chart with CSS styles */}
//       <div className='container'>
//         <h2>Line Chart</h2>
//         <div>
//           <canvas id='myChart' className='chart-canvas'></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Templates;





//  import React, { useEffect } from 'react';
//  import { useNavigate } from 'react-router-dom';
//  import Chart from 'chart.js/auto'; // import Chart from 'chart.js' for older versions
//  import { TfiBarChartAlt } from "react-icons/tfi";
//  import './Templates.css';
//  import Header from './Header';
//  import Sidebar from './Sidebar';

//  const Templates = () => {
//    const navigate = useNavigate();

// //  Initialize the chart when the component mounts
//    useEffect(() => {
//     const ctx = document.getElementById('myChart').getContext('2d');
//      const myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         datasets: [
//            {
//              label: 'work load',
//              data: [2, 9, 3, 17, 6, 3, 7],
//              backgroundColor: 'rgba(153, 205, 1, 0.6)',
//            },
//            {
//              label: 'free hours',
//              data: [2, 2, 5, 5, 2, 1, 10],
//              backgroundColor: 'rgba(155, 153, 10, 0.6)',
//            },
//          ],
//        },
//      });

//     // Clean up function to destroy the chart when the component unmounts
//      return () => {
//        myChart.destroy();
//      };
//    }, []); // Run this effect only once when the component mounts

  

//   return (
//     <div className='register-container'>
//           <Header />
//        <Sidebar/>
       
//        <div className='navbar navbar-expand-lg'>
//          <div className='box1'>
//            <p>hi how are you</p>
//            <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//            <hr></hr>
          
//          </div>
//          <div className='box2'>
//            <p>hi how are you</p>
//           <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//            <hr></hr>
          
//          </div>
//          <div className='box3'>
//            <p>hi how are you</p>
//            <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//            <hr></hr>
         
//         </div>
//         <div className='box4'>
//            <p>$25000</p>
//            <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />

//            <hr></hr>
         
//          </div>
//        </div>

//        {/* Add the canvas for the chart with CSS styles */}
//        <div className='container'>
         
//          <div>
//            <canvas id='myChart' className='chart-canvas'></canvas>
//          </div>
//        </div>
//      </div>
//    );
//  };

//  export default Templates;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { TfiBarChartAlt } from "react-icons/tfi";
import './Templates.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Register from './Register'; // Import the Register component

const Templates = () => {
  const navigate = useNavigate();
  const [showRegisterForm, setShowRegisterForm] = useState(false); // State to control the visibility of the registration form

  // Function to handle the register button click
  // const handleRegisterClick = () => {
  //   setShowRegisterForm(true); // Show the registration form
  // };

  // Other event handlers for navigation buttons
  // const handleGetEmployees = () => {
  //   navigate('/EmployeeList');
  // };

  // const handleGetIdSubmit = () => {
  //   navigate('/GetId');
  // };

  // const handleUpdateClick = () => {
  //   navigate('/Update');
  // };

  // const handleDeleteClick = () => {
  //   navigate('/Delete');
  // };

  // Initialize the chart when the component mounts
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'work load',
            data: [2, 9, 3, 17, 6, 3, 7],
            backgroundColor: 'rgba(153, 205, 1, 0.6)',
          },
          {
            label: 'free hours',
            data: [2, 2, 5, 5, 2, 1, 10],
            backgroundColor: 'rgba(155, 153, 10, 0.6)',
          },
        ],
      },
    });

    // Clean up function to destroy the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <div >
      <Header/>
      <div className="container-fluid ">
            <div className="row ">
   <div className="col-6 col-sm-2">
      <Sidebar/>
      </div>
      
      
      <div className='navbar align-items-start  col-lg-10    offset-md-0 '>
        <div className='box1 '>
          <p>hi how are you</p>
          <span>all earning</span><TfiBarChartAlt style={{marginLeft:"50px",fontSize:"45px"}} />
          <hr></hr>
          
        </div>
        <div className='box2'>
          <p>hi how are you</p>
          <span>all earning</span><TfiBarChartAlt style={{marginLeft:"50px",fontSize:"45px"}} />
          <hr></hr>
          
        </div>
        <div className='box3'>
          <p>hi how are you</p>
          <span>all earning</span><TfiBarChartAlt style={{marginLeft:"50px",fontSize:"45px"}} />
          <hr></hr>
         
        </div>
        <div className='box4'>
          <p>$25000</p>
          <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />

          <hr></hr>
         
        </div>
      

      {/* Add the canvas for the chart with CSS styles */}
      {/* <div className='container'> */}
        
        <div>
        
          <canvas id='myChart' className='chart-canvas ' style={{ width: '920px', height: '120px', marginTop: '5px' }}></canvas>
          <div id="header">
                         <center>
                           <span>
                            {' '}
                            <img
                              src={'employee graph.png'}
                               alt="no image"
                               style={{ width: '235px', height: '225px', border: '1px solid black' }}
                             />
                           </span>
                         </center>
                         
                     </div>
                   </div>
                   <br />
                   <div>
                     <img src={'bargraph.jpg'} alt="no image" style={{ width: '900px', height: '150px', marginLeft: '0px' }} />
                     <span>
                       <img
                         src={'red bargraph.jpg'}
                         alt="no image"
                         style={{ width: '280px', height: '150px', marginLeft: '50px' }}
                       />
                     </span>
                   </div>
                   </div>


      

      {/* Conditionally render the Register component */}
      {showRegisterForm && <Register />}
    </div>
    </div>
    </div>
    
    
  );
};

export default Templates;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Chart from 'chart.js/auto';
// import { TfiBarChartAlt } from "react-icons/tfi";

// import Header from './Header';
// import Sidebar from './Sidebar';
// import Register from './Register'; // Import the Register component

// const Templates = () => {
//   const navigate = useNavigate();
//   const [showRegisterForm, setShowRegisterForm] = useState(false); // State to control the visibility of the registration form

//   // Initialize the chart when the component mounts
//   useEffect(() => {
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         datasets: [
//           {
//             label: 'work load',
//             data: [2, 9, 3, 17, 6, 3, 7],
//             backgroundColor: 'rgba(153, 205, 1, 0.6)',
//           },
//           {
//             label: 'free hours',
//             data: [2, 2, 5, 5, 2, 1, 10],
//             backgroundColor: 'rgba(155, 153, 10, 0.6)',
//           },
//         ],
//       },
//     });

//     // Clean up function to destroy the chart when the component unmounts
//     return () => {
//       myChart.destroy();
//     };
//   }, []); // Run this effect only once when the component mounts

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-3">
//           <Sidebar />
//         </div>
//         <div className="col-md-9" style={{ marginLeft: 0 }}>
//           <Header />
//           <div className="row">
//             <div className="col-md-3">
//               <p>hi how are you</p>
//               <span>all earning</span><TfiBarChartAlt />
//               <hr />
//             </div>
//             <div className="col-md-3">
//               <p>hi how are you</p>
//               <span>all earning</span><TfiBarChartAlt />
//               <hr />
//             </div>
//             <div className="col-md-3">
//               <p>hi how are you</p>
//               <span>all earning</span><TfiBarChartAlt />
//               <hr />
//             </div>
//             <div className="col-md-3">
//               <p>$25000</p>
//               <span>all earning</span><TfiBarChartAlt />
//               <hr />
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-8">
//               <canvas id="myChart"></canvas>
//               <center>
//                 <span>
//                   <img src={'employee graph.png'} alt="no image" />
//                 </span>
//               </center>
//             </div>
//             <div className="col-md-4">
//               <img src={'bargraph.jpg'} alt="no image" />
//               <img src={" bargraph.jpg"} alt="no image" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the Register component */}
//       {showRegisterForm && <Register />}
//     </div>
//   );
// };


// export default Templates;




