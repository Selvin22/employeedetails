// import React, { useState } from 'react';
// import axios from 'axios';
// import './update.css'

// const Update = () => {
//   const [customerId, setCustomerId] = useState('');
//   const [customerData, setCustomerData] = useState(null);

//   const handleRetrieveData = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${customerId}`);
//       setCustomerData(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error retrieving customer data. Please try again.');
//     }
//   };

//   const handleSaveChanges = async () => {
//     try {
//       await axios.put(`http://localhost:8080/emp/${customerId}`, customerData);
//       alert('Employee data updated successfully!');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error updating employee data. Please try again.');
//     }
//   };

//   return (
//     <div class="background">
//     <div className="update-container  ">
//       <div className="update-form ">
//         <div className="update-header ">
//           <h1 style={{textAlign: "center"}}>Update Employee</h1>
//         </div>
//         <center>
        
        
//         <form onSubmit={handleRetrieveData}><br></br><br></br><br></br>
//           <label >Enter Customer ID:</label>
//           <input
//             type="text"
//             value={customerId}
//             onChange={(e) => setCustomerId(e.target.value)}
//           />
//           <button type="submit">Retrieve Data</button>
//         </form>
//         {customerData && (
//           <form onSubmit={handleSaveChanges}><br></br>
//             {/* <label>Customer ID:</label><br></br>
//             <span>{customerData.id}</span> */}
//             <label>First Name:</label>
//             <input
//               type="text"
//               value={customerData.firstName}
//               onChange={(e) => setCustomerData({ ...customerData, firstName: e.target.value })}
//             /><br></br><br></br>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               value={customerData.lastName}
//               onChange={(e) => setCustomerData({ ...customerData, lastName: e.target.value })}
//             /><br></br><br></br>
//             <label style={{paddingRight:"30px"}}>Salary: </label>
//             <input
//               type="text"
//               value={customerData.salary}
//               onChange={(e) => setCustomerData({ ...customerData, salary: e.target.value })}
//             /><br></br><br></br>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={customerData.username}
//               onChange={(e) => setCustomerData({ ...customerData, username: e.target.value })}
//             /><br></br><br></br>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={customerData.password}
//               onChange={(e) => setCustomerData({ ...customerData, password: e.target.value })}
//             /><br></br><br></br>
//             <button style={{background:"orange"}} type="submit">Save Changes</button>
//           </form>
          
//         )}
        
//         </center>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Update;


// // update.js

import React, { useState } from 'react';
import axios from 'axios';

import Header from './Header';
import Sidebar from './Sidebar';

const Update = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRetrieveData = async (e) => {
    e.preventDefault();

    if (!customerId.trim()) {
      setErrorMessage('Please enter a valid Employee ID');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/emp/getemp/${customerId}`);
      
      if (!response.data) {
        setErrorMessage('Employee ID not found');
        setCustomerData(null);
      } else {
        setCustomerData(response.data);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error retrieving employee data. Please try again.');
    }
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8080/emp/${customerId}`, customerData);
      setSuccessMessage('Employee data updated successfully!');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error updating employee data. Please try again.');
    }
  };

  return (
    <div className=" ">
      <Header/>
      <div className="container-fluid bg-info ">
            <div className="row">
   <div className="col-6 col-sm-2">
        <Sidebar/>
        </div>
        <div className="register-form col-lg-5   offset-md-2 justify-content-center bg-warning">
              <h1 style={{textAlign: "center",marginTop:"100px",paddingLeft:"30px"}}>Update Employee</h1>
            
            
              <center>
                <form onSubmit={handleRetrieveData}>
                  <br/><br/>
                  <label>Enter Employee ID:</label>
                  <input
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                  />
                  <button type="submit">Retrieve Data</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                {customerData && (
                  <form onSubmit={handleSaveChanges}>
                    <br/><br/>
                    <label>First Name:</label>
                    <input
                      type="text"
                      value={customerData.firstName}
                      onChange={(e) => setCustomerData({ ...customerData, firstName: e.target.value })}
                    /><br/><br/>
                    <label>Last Name:</label>
                    <input
                      type="text"
                      value={customerData.lastName}
                      onChange={(e) => setCustomerData({ ...customerData, lastName: e.target.value })}
                    /><br/><br/>
                    <label style={{paddingRight:"30px"}}>Salary:</label>
                    <input
                      type="text"
                      value={customerData.salary}
                      onChange={(e) => setCustomerData({ ...customerData, salary: e.target.value })}
                    /><br/><br/>
                    <label>Username:</label>
                    <input
                      type="text"
                      value={customerData.username}
                      onChange={(e) => setCustomerData({ ...customerData, username: e.target.value })}
                    /><br/><br/>
                    <label>Password:</label>
                    <input
                      type="password"
                      value={customerData.password}
                      onChange={(e) => setCustomerData({ ...customerData, password: e.target.value })}
                    /><br/><br/>
                    <button style={{background:"green"}} type="submit">Save Changes</button>
                  </form>
                )}
              </center>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Update;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Update = () => {
//   const [customerId, setCustomerId] = useState('');
//   const [customerData, setCustomerData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleRetrieveData = async (e) => {
//     e.preventDefault();

//     if (!customerId.trim()) {
//       setErrorMessage('Please enter a valid Employee ID');
//       return;
//     }

//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${customerId}`);
      
//       if (!response.data) {
//         setErrorMessage('Employee ID not found');
//         setCustomerData(null);
//       } else {
//         setCustomerData(response.data);
//         setErrorMessage('');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Error retrieving employee data. Please try again.');
//     }
//   };

//   const handleSaveChanges = async () => {
//     try {
//       await axios.put(`http://localhost:8080/emp/${customerId}`, customerData);
//       setSuccessMessage('Employee data updated successfully!');
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Error updating employee data. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
  
//       <div className="row">
      
//         <div className="col-md-12">
//         <Header/>
//         <Sidebar/>
         
//         </div>
//         <div className="col-md-9">
//           <div className="update-container">
//             <div className="update-header">
//               <h1 className="text-center">Update Employee</h1>
//             </div>
//             <div className="update-form">
//               <form onSubmit={handleRetrieveData}>
//                 <div className="form-group">
//                   <label>Enter Employee ID:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={customerId}
//                     onChange={(e) => setCustomerId(e.target.value)}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Retrieve Data</button>
//               </form>
//               {errorMessage && <p className="error-message">{errorMessage}</p>}
//               {successMessage && <p className="success-message">{successMessage}</p>}
//               {customerData && (
//                 <form onSubmit={handleSaveChanges}>
//                   <div className="form-group">
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={customerData.firstName}
//                       onChange={(e) => setCustomerData({ ...customerData, firstName: e.target.value })}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={customerData.lastName}
//                       onChange={(e) => setCustomerData({ ...customerData, lastName: e.target.value })}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Salary:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={customerData.salary}
//                       onChange={(e) => setCustomerData({ ...customerData, salary: e.target.value })}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={customerData.username}
//                       onChange={(e) => setCustomerData({ ...customerData, username: e.target.value })}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       value={customerData.password}
//                       onChange={(e) => setCustomerData({ ...customerData, password: e.target.value })}
//                     />
//                   </div>
//                   <button type="submit" className="btn btn-warning">Save Changes</button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Update;
