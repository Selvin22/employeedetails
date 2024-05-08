// import React, { useState } from 'react';
// import axios from 'axios';
// import './GetId.css'; // Import the CSS file
// import Header from './Header';
// import Sidebar from './Sidebar';

// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`); // Assuming this is the endpoint to fetch employee details
//       setEmployeeData(response.data);
//       onGetId(); // Notify parent component about successful ID retrieval
//       setId('');
//     } catch (error) {
//       console.error('Error:', error);
//       // alert('Error fetching employee. Please try again.');
//     }
//   };

  
  

//   return (
//     <div className="bg-light-blue    ">
//     <Header/>
//     {/* <div className="get-id-container "> */}
//       <div className="get-id-form">
//       <Sidebar/>
//         <form onSubmit={handleSubmit}><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
//           <label htmlFor="employee-id">Enter Employee ID:  </label>
//           <input
//             id="employee-id"
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             placeholder="Employee ID"
//           />
//           <button type="submit">Get ID</button>
//         </form>
//         {employeeData && (
//           <div className="employee-details"><br></br><br></br>
//             <p><strong>First Name:</strong> {employeeData.firstName}</p>
//             <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//             <p><strong>Salary:</strong> {employeeData.salary}</p>
//             <p><strong>Username:</strong> {employeeData.username}</p>
//             <p><strong>Password:</strong> {employeeData.password}</p>
//           </div>
//         )}
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default GetId;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './GetId.css'; // Import the CSS file

// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data
//   const [error, setError] = useState(false); // State to track if there was an error

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       setEmployeeData(response.data);
//       onGetId();
//       setId('');
//       setError(false); // Reset error state
//     } catch (error) {
//       console.error('Error:', error);
//       setError(true); // Set error state to true
//       setEmployeeData(null); // Reset employee data
//     }
//   };

//   return (
//     <div className="bg-light-blue">
//       <div className="get-id-form">
//         <form onSubmit={handleSubmit}>
//           <br /><br /><br /><br /><br /><br /><br /><br /><br />
//           <label htmlFor="employee-id">Enter Employee ID: </label>
//           <input
//             id="employee-id"
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             placeholder="Employee ID"
//           />
//           <button type="submit">Get ID</button>
//         </form>
//         {employeeData && !error && (
//           <div className="employee-details">
//             <br /><br />
//             <p><strong>First Name:</strong> {employeeData.firstName}</p>
//             <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//             <p><strong>Salary:</strong> {employeeData.salary}</p>
//             <p><strong>Username:</strong> {employeeData.username}</p>
//             <p><strong>Password:</strong> {employeeData.password}</p>
//           </div>
//         )}
//         {error && (
//           <p className="error-message">ID not found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GetId;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './GetId.css'; // Import the CSS file

// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data
//   const [error, setError] = useState(false); // State to track if there was an error

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       setEmployeeData(response.data);
//       onGetId();
//       setId('');
//       setError(false); // Reset error state
//     } catch (error) {
//       console.error('Error:', error);
//       setError(true); // Set error state to true
//       setEmployeeData(null); // Clear employee data
//     }
//   };

//   return (
//     <div className="bg-light-blue">
//       <div className="get-id-form">
//         <form onSubmit={handleSubmit}>
//           <br /><br /><br /><br /><br /><br /><br /><br /><br />
//           <label htmlFor="employee-id">Enter Employee ID: </label>
//           <input
//             id="employee-id"
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             placeholder="Employee ID"
//           />
//           <button type="submit">Get ID</button>
//         </form>
//         {employeeData && (
//           <div className="employee-details">
//             <br /><br />
//             <p><strong>First Name:</strong> {employeeData.firstName}</p>
//             <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//             <p><strong>Salary:</strong> {employeeData.salary}</p>
//             <p><strong>Username:</strong> {employeeData.username}</p>
//             <p><strong>Password:</strong> {employeeData.password}</p>
//           </div>
//         )}
//         {error && (
//           <p className="error-message">ID not found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GetId;




// import React, { useState } from 'react';
// import axios from 'axios';
// import './GetId.css'; // Import the CSS file
// import Header from './Header';
// import Sidebar from './Sidebar';

// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data
//   const [error, setError] = useState(false); // State to track if there was an error

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!id.trim()) { // Check if ID is empty or contains only whitespace
//       setError(true);
//       setEmployeeData(null);
//       return;
//     }
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       console.log('API Response:', response.data); // Log the response data
//       console.log('Employee ID:', id); // Log the employee ID
//       if (!response.data) {
//         setError(true); // If response is empty, set error state to true
//         setEmployeeData(null);
//         return;
//       }
//       setEmployeeData(response.data);
//       onGetId();
//       setId('');
//       setError(false); // Reset error state
//     } catch (error) {
//       console.error('Error:', error);
//       setError(true); // Set error state to true
//       setEmployeeData(null); // Clear employee data
//     }
//   };
  
  
//   return (
//     <div className="bg-light-blue">
//       <Header />
//       <div className="wrapper">
//         <Sidebar />
//         <div className="content">
//           <div className="get-id-form">
//             <form onSubmit={handleSubmit}>
//               <br /><br /><br /><br /><br /><br /><br /><br /><br />
//               <label htmlFor="employee-id">Enter Employee ID: </label>
//               <input
//                 id="employee-id"
//                 type="text"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 placeholder="Employee ID"
//               />
//               <button type="submit">Get ID</button>
//             </form>
//             {employeeData && (
//               <div className="employee-details">
//                 <br /><br />
//                 <p><strong>First Name:</strong> {employeeData.firstName}</p>
//                 <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//                 <p><strong>Salary:</strong> {employeeData.salary}</p>
//                 <p><strong>Username:</strong> {employeeData.username}</p>
//                 <p><strong>Password:</strong> {employeeData.password}</p>
//               </div>
//             )}
//             {error && (
//               <p className="error-message">ID not found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetId;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './GetId.css'; // Import the CSS file
// import Header from './Header';
// import Sidebar from './Sidebar';

// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data
//   const [error, setError] = useState(false); // State to track if there was an error

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!id.trim()) { // Check if ID is empty or contains only whitespace
//       // setError(true);
//       setEmployeeData(null);
//       return;
//     }
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       console.log('Response:', response); // Log the response from the backend
//       if (!response.data) {
//         setError(true); // If response is empty, set error state to true
//         setEmployeeData(null);
//         return;
//       }
//       setEmployeeData(response.data);
//       onGetId();
//       setId('');
//       setError(false); // Reset error state
//     } catch (error) {
//       console.error('Error:', error);
//       setError(true); // Set error state to true
//       setEmployeeData(null); // Clear employee data
//     }
//   };

//   return (
//     <div className="bg-light-blue">
//       <Header />
//       <div className="wrapper">
//         <Sidebar />
//         <div className="content">
//           <div className="get-id-form">
//             <form onSubmit={handleSubmit}>
//               <br /><br /><br /><br /><br /><br /><br /><br /><br />
//               <label htmlFor="employee-id">Enter Employee ID: </label>
//               <input
//                 id="employee-id"
//                 type="text"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 placeholder="Employee ID"
//               />
//               <button type="submit">Get ID</button>
//             </form>
//             {employeeData && (
//               <div className="employee-details">
//                 <br /><br />
//                 <p><strong>First Name:</strong> {employeeData.firstName}</p>
//                 <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//                 <p><strong>Salary:</strong> {employeeData.salary}</p>
//                 <p><strong>Username:</strong> {employeeData.username}</p>
//                 <p><strong>Password:</strong> {employeeData.password}</p>
//               </div>
//             )}
//             {error && (
//               <p className="error-message">ID not found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetId;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './GetId.css'; // Import the CSS file
// import Header from './Header';



// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`); // Assuming this is the endpoint to fetch employee details
//       if (response.data) {
//         setEmployeeData(response.data);
//         setErrorMessage('');
//         onGetId(); // Notify parent component about successful ID retrieval
//       } else {
//         setEmployeeData(null);
//         setErrorMessage('ID not found');
//       }
//       setId('');
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Error fetching employee. Please try again.');
//     }
//   };

//   return (
//     <div className="get-id-container">
//     <Header/>
//       <div className="get-id-form">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="employee-id">Enter Employee ID:  </label>
//           <input
//             id="employee-id"
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             placeholder="Employee ID"
//           />
//           <button type="submit">Get ID</button>
//         </form>
//         {employeeData && (
//           <div className="employee-details">
//             <p><strong>First Name:</strong> {employeeData.firstName}</p>
//             <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//             <p><strong>Salary:</strong> {employeeData.salary}</p>
//             <p><strong>Username:</strong> {employeeData.username}</p>
//             <p><strong>Password:</strong> {employeeData.password}</p>
//           </div>
//         )}
//         {errorMessage && <p>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default GetId;



import React, { useState } from 'react';
import axios from 'axios';
import './GetId.css'; // Import the CSS file
import Header from './Header';
import Sidebar from './Sidebar';

const GetId = ({ onGetId }) => {
  const [id, setId] = useState('');
  const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
      if (response.data) {
        setEmployeeData(response.data);
        setErrorMessage('');
        onGetId(); // Notify parent component about successful ID retrieval
      } else {
        setEmployeeData(null);
        setErrorMessage('ID not found');
      }
      setId('');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error fetching employee. Please try again.');
    }
  };

  return (
   
    <div >
    <Header/>
      <div className="container-fluid bg-success">
      <div className='row'>
      <div className="col-6 col-sm-2">        
    <Sidebar />
       </div>
       <div className="register-form col-lg-5 justify-content-center   offset-md-3 bg-warning ">
    
        <form onSubmit={handleSubmit}>
          <label htmlFor="employee-id" style={{marginTop:"250px",paddingLeft:"100px"}}>Enter Employee ID:  </label>
          <input
            id="employee-id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Employee ID"
          />
          <button type="submit">Get ID</button>
        </form>
        {employeeData && (
          <div className="employee-details" style={{paddingLeft:"150px"}}>
            <p><strong>First Name:</strong> {employeeData.firstName}</p>
            <p><strong>Last Name:</strong> {employeeData.lastName}</p>
            <p><strong>Salary:</strong> {employeeData.salary}</p>
            <p><strong>Username:</strong> {employeeData.username}</p>
            {/* <p><strong > Password:</strong> {employeeData.password}</p> */}
            <p><strong>Password:</strong> <input type="password" value="{employeeData.password}" /></p>

          </div>
        )}
        {!employeeData && errorMessage && <p style={{paddingLeft:"250px",color:"red",paddingTop:"30px"}}>{errorMessage}</p>}
      </div>
    </div>
    </div>
    </div>
  );
};

export default GetId;



// import React, { useState } from 'react';
// import axios from 'axios';

// import Header from './Header';
// import Sidebar from './Sidebar';

// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null); // State to store fetched employee data

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`); // Assuming this is the endpoint to fetch employee details
//       setEmployeeData(response.data);
//       onGetId(); // Notify parent component about successful ID retrieval
//       setId('');
//     } catch (error) {
//       console.error('Error:', error);
//       // alert('Error fetching employee. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container-fluid bg-success " >
//             <div className="row">
//    <div className="col-6 col-sm-2">        
//    <Sidebar />
//    </div>
//    <div className="register-form col-lg-5 justify-content-center   offset-md-3 bg-warning ">
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="employee-id"  style={{marginTop:"250px",paddingLeft:"100px"}}>Enter Employee ID:</label>
//               <input
//                 id="employee-id"
//                 type="text"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 placeholder="Employee ID"
//               />
//               <button type="submit">Get ID</button>
//             </form>
//             {employeeData && (
//               <div className="employee-details" style={{paddingLeft:"150px"}}>
//                 <p><strong>First Name:</strong> {employeeData.firstName}</p>
//                 <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//                 <p><strong>Salary:</strong> {employeeData.salary}</p>
//                 <p><strong>Username:</strong> {employeeData.username}</p>
//                 <p><strong>Password:</strong> {employeeData.password}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetId;
// import React, { useState } from 'react';
// import axios from 'axios';

// import Header from './Header';
// import Sidebar from './Sidebar';

// const GetId = ({ onGetId }) => {
//   const [id, setId] = useState('');
//   const [employeeData, setEmployeeData] = useState(null);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!id.trim()) {
//       setError('Please enter an Employee ID.');
//       setEmployeeData(null);
//       return;
//     }
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       if (!response.data) {
//         setError(`Employee not found with ID: ${id}`);
//         setEmployeeData(null);
//         return;
//       }
//       setEmployeeData(response.data);
//       onGetId();
//       setId('');
//       setError('');
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Something went wrong. Please try again.');
//       setEmployeeData(null);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container-fluid bg-success">
//         <div className="row">
//           <div className="col-6 col-sm-2">
//             <Sidebar />
//           </div>
//           <div className="register-form col-lg-5 justify-content-center offset-md-3 bg-warning">
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="employee-id" style={{ marginTop: "250px", paddingLeft: "100px" }}>Enter Employee ID:</label>
//               <input
//                 id="employee-id"
//                 type="text"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 placeholder="Employee ID"
//               />
//               <button type="submit">Get ID</button>
//               {error && (
//                 <p className="error-message">{error}</p>
//               )}
//             </form>
//             {employeeData && (
//               <div className="employee-details" style={{ paddingLeft: "150px" }}>
//                 <p><strong>First Name:</strong> {employeeData.firstName}</p>
//                 <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//                 <p><strong>Salary:</strong> {employeeData.salary}</p>
//                 <p><strong>Username:</strong> {employeeData.username}</p>
//                 <p><strong>Password:</strong> {employeeData.password}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetId;



