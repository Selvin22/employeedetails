// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
    
//     <div className="register-container">
//    <Header/>
//     <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//         </div> 
        
//         <div className="right-panel">
//         <div className="form-container">
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//               <form onSubmit={handleSubmit}><br></br>
//               <h4>Register for free</h4>
//                 <div><br></br>
//                   <label>First Name:</label>
//                   <input
//                     type="text"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                   <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                 </div>
//                 <div><br></br>
//                   <label>Last Name:</label>
//                   <input
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                   <div className="error-message">{lastNameError}</div>
//                 </div>
//                 <div><br></br>
//                 <label style={{ paddingRight: '25px' }}>Salary:</label>
//                   <input
//                     type="text"
//                     value={salary}
                    
//                     onChange={(e) => setSalary(e.target.value)}
//                   />
//                   <div className="error-message">{salaryError}</div>
//                 </div>
//                 <div><br></br>
//                   <label>Username:</label>
//                   <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                   <div className="error-message">{usernameError}</div>
//                 </div>
//                 <div><br></br>
//                   <label>Password:</label>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <div className="error-message">{passwordError}</div>
//                 </div><br></br>
//                 {/* <button type="submit" class="btn btn-danger">Register</button> */}
//                 <button type="submit" class="btn btn-danger btn-sm">Register</button>
                
//               </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
    
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
    
//     <div className="register-container">
//    <Header/>
//     <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//         </div> 
        
//         <div className="right-panel">
//         <div className="form-container">
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//               <form onSubmit={handleSubmit}><br></br>
//               <h4>Register for free</h4>
//                 <div><br></br>
//                   <label>First Name:</label>
//                   <input
//                     type="text"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                   <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                 </div>
//                 <div><br></br>
//                   <label>Last Name:</label>
//                   <input
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                   <div className="error-message">{lastNameError}</div>
//                 </div>
//                 <div><br></br>
//                 <label style={{ paddingRight: '25px' }}>Salary:</label>
//                   <input
//                     type="text"
//                     value={salary}
                    
//                     onChange={(e) => setSalary(e.target.value)}
//                   />
//                   <div className="error-message">{salaryError}</div>
//                 </div>
//                 <div><br></br>
//                   <label>Username:</label>
//                   <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                   <div className="error-message">{usernameError}</div>
//                 </div>
//                 <div><br></br>
//                   <label>Password:</label>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <div className="error-message">{passwordError}</div>
//                 </div><br></br>
//                 {/* <button type="submit" class="btn btn-danger">Register</button> */}
//                 <button type="submit" class="btn btn-danger btn-sm">Register</button>
                
//               </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
    
//   );
// };

// export default Register;


// import Chart from 'chart.js/auto'; // import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className="right-panel">
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               <div className='navbar navbar-expand-lg'>
//                 <div className='box1'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box2'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box3'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box4'>
//                   <p>$25000</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//               </div>
//               {/* Add the canvas for the chart with CSS styles */}
//               <div className='container'>
//                 <h2>Line Chart</h2>
//                 <div>
//                   <canvas id='myChart' className='chart-canvas'></canvas>
//                 </div>
//               </div>
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;



// import Chart from 'chart.js/auto'; // import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList
//   const [showRightPanel, setShowRightPanel] = useState(true); // New state to control rendering of the right panel

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false); // Hide the right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//       setShowRightPanel(true); // Show right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       {showRightPanel && (
//         <div className="right-panel">
//           <div className="form-container">
//             {showForm ? null : (
//               <div className='register-container'>
//                 <div className='navbar navbar-expand-lg'>
//                   <div className='box1'>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className='box2'>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className='box3'>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className='box4'>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//                 {/* Add the canvas for the chart with CSS styles */}
//                 <div className='container'>
//                   <h2>Line Chart</h2>
//                   <div>
//                     <canvas id='myChart' className='chart-canvas'></canvas>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {showForm && (
//               <div className="register-form">
//                 <div className="employee-header">
//                   <h1 >Add Employee</h1>
//                 </div>
//                 <center>
//                 <div className='form-adjust'>
//                   <form onSubmit={handleSubmit}><br></br>
//                     <h4>Register for free</h4>
//                     <div><br></br>
//                       <label>First Name:</label>
//                       <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Last Name:</label>
//                       <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input
//                         type="text"
//                         value={salary}
//                         onChange={(e) => setSalary(e.target.value)}
//                       />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Username:</label>
//                       <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Password:</label>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div className="error-message">{passwordError}</div>
//                     </div><br></br>
//                     <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                   </form>
//                 </div>
//                 </center>
//               </div>
//             )}
//           </div>
//           {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//           {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//           {getIdVisible && (
//             <GetId onGetId={handleGetIdSubmit} />
//           )}
//           {showEmployeeList && <EmployeeList />}
//           {showAlert && (
//             <div className="alert-box">
//               {alertMessage}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;


// import Chart from 'chart.js/auto'; // import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList
//   const [showRightPanel, setShowRightPanel] = useState(true); // New state to control rendering of the right panel

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false); // Hide the right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setShowRightPanel(true); // Show right panel
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//       setShowRightPanel(true); // Show right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       {showRightPanel && (
//         <div className="right-panel">
//           <div className="form-container">
//             {showForm ? null : (
//               <div className='register-container'>
//                 <div className='navbar navbar-expand-lg'>
//                   <div className='box1'>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className='box2'>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className='box3'>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className='box4'>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//                 {/* Add the canvas for the chart with CSS styles */}
//                 <div className='container'>
//                   <h2>Line Chart</h2>
//                   <div>
//                     <canvas id='myChart' className='chart-canvas'></canvas>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {showForm && (
//               <div className="register-form">
//                 <div className="employee-header">
//                   <h1 >Add Employee</h1>
//                 </div>
//                 <center>
//                 <div className='form-adjust'>
//                   <form onSubmit={handleSubmit}><br></br>
//                     <h4>Register for free</h4>
//                     <div><br></br>
//                       <label>First Name:</label>
//                       <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Last Name:</label>
//                       <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input
//                         type="text"
//                         value={salary}
//                         onChange={(e) => setSalary(e.target.value)}
//                       />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Username:</label>
//                       <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Password:</label>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div className="error-message">{passwordError}</div>
//                     </div><br></br>
//                     <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                   </form>
//                 </div>
//                 </center>
//               </div>
//             )}
//           </div>
//           {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//           {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//           {getIdVisible && (
//             <GetId onGetId={handleGetIdSubmit} />
//           )}
//           {showEmployeeList && <EmployeeList />}
//           {showAlert && (
//             <div className="alert-box">
//               {alertMessage}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;


// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header'; // Import the Header component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList
//   const [showRightPanel, setShowRightPanel] = useState(true); // New state to control rendering of the right panel

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

//   const handleGetEmployees = async () => {
//     try {
//       // Fetch employees
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       // Update state to show EmployeeList
//       setShowEmployeeList(true);
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         {/* Conditional rendering of buttons */}
//         <button className="btn" onClick={handleGetEmployees}>GET All Employees</button>
//       </div>
//       {/* Conditional rendering of EmployeeList */}
//       {showEmployeeList && <EmployeeList />}
//     </div>
//   );
// };

// export default Register;


// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className="right-panel">
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               <div className='navbar navbar-expand-lg'>
//                 <div className='box1'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box2'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box3'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box4'>
//                   <p>$25000</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//               </div>
//               {/* Add the canvas for the chart with CSS styles */}
//               <div className='container'>
//                 <h2>Line Chart</h2>
//                 <div>
//                   <canvas id='myChart' className='chart-canvas'></canvas>
//                 </div>
//               </div>
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;



// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList
//   const [showRightPanel, setShowRightPanel] = useState(false); // New state to control rendering of right-panel

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(false);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(true); // Show right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setShowRightPanel(false);
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//       setShowRightPanel(true); // Show right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               <div className='navbar navbar-expand-lg'>
//                 <div className='box1'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box2'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box3'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box4'>
//                   <p>$25000</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//               </div>
//               {/* Add the canvas for the chart with CSS styles */}
//               <div className='container'>
//                 <h2>Line Chart</h2>
//                 <div>
//                   <canvas id='myChart' className='chart-canvas'></canvas>
//                 </div>
//               </div>
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;



// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList
//   const [showRightPanel, setShowRightPanel] = useState(false); // New state to control rendering of right-panel

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(false);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false); // Hide right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setShowRightPanel(false);
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//       setShowRightPanel(true); // Show right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               <div className='navbar navbar-expand-lg'>
//                 <div className='box1'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box2'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box3'>
//                   <p>hi how are you</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//                 <div className='box4'>
//                   <p>$25000</p>
//                   <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                   <hr></hr>
//                 </div>
//               </div>
//               {/* Add the canvas for the chart with CSS styles */}
//               <div className='container'>
//                 <h2>Line Chart</h2>
//                 <div>
//                   <canvas id='myChart' className='chart-canvas'></canvas>
//                 </div>
//               </div>
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;




// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList
//   const [showRightPanel, setShowRightPanel] = useState(false); // New state to control rendering of right-panel

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(false);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false); // Hide right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setShowRightPanel(false);
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//       setShowRightPanel(true); // Show right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               <div className='navbar navbar-expand-lg'>
//                 {showRightPanel && (
//                   <>
//                     <div className='box1'>
//                       <p>hi how are you</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                     <div className='box2'>
//                       <p>hi how are you</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                     <div className='box3'>
//                       <p>hi how are you</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                     <div className='box4'>
//                       <p>$25000</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                   </>
//                 )}
//               </div>
//               {/* Add the canvas for the chart with CSS styles */}
//               <div className='container'>
//                 <h2>Line Chart</h2>
//                 <div>
//                   <canvas id='myChart' className='chart-canvas'></canvas>
//                 </div>
//               </div>
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;


// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js' for older versions
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList'; // Import the EmployeeList component

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false); // New state to control rendering of EmployeeList
//   const [showRightPanel, setShowRightPanel] = useState(true); // Initial state for right panel visibility

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState(''); // State for alert message
//   const [showAlert, setShowAlert] = useState(false); // State to control alert display

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    

//     // Check for empty fields
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     // If any field is empty, return without submitting
//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true); // Show EmployeeList
//       setActiveButton('get');
//       setShowForm(false); // Hide the registration form
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false); // Hide right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(true);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(true);
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false); // Hide EmployeeList
//     setShowRightPanel(true);
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!'); // Set alert message
//       setShowAlert(true); // Show alert
//       handleGetEmployees(); // Refresh employee list
//       setUpdateVisible(false); // Hide the update form
//       setShowEmployeeList(true); // Show EmployeeList after update
//       setShowRightPanel(true); // Show right panel
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.'); // Set alert message
//       setShowAlert(true); // Show alert
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               <div className='navbar navbar-expand-lg'>
//                 {showRightPanel && (
//                   <>
//                     <div className={`box1 ${activeButton === 'get' ? 'hidden' : ''}`}>
//                       <p>hi how are you</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                     <div className={`box2 ${activeButton === 'get' ? 'hidden' : ''}`}>
//                       <p>hi how are you</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                     <div className={`box3 ${activeButton === 'get' ? 'hidden' : ''}`}>
//                       <p>hi how are you</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                     <div className={`box4 ${activeButton === 'get' ? 'hidden' : ''}`}>
//                       <p>$25000</p>
//                       <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                       <hr></hr>
//                     </div>
//                   </>
//                 )}
//               </div>
//               {/* Add the canvas for the chart with CSS styles */}
//               <div className='container'>
//                 <h2>Line Chart</h2>
//                 <div>
//                   <canvas id='myChart' className='chart-canvas'></canvas>
//                 </div>
//               </div>
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;

// import Chart from 'chart.js/auto';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className='container'>
//                   <h2>Line Chart</h2>
//                   <div>
//                     <canvas id='myChart' className='chart-canvas'></canvas>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;

// import Chart from 'chart.js/auto';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false); // Hide the container
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className='container'>
//                   <h2>Line Chart</h2>
//                   <div>
//                     <canvas id='myChart' className='chart-canvas'></canvas>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;

// import Chart from 'chart.js/auto';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false); // Hide the right panel
//     setShowContainer(false); // Hide the container
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false); // Hide the container
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className='container'>
//                   <h2>Line Chart</h2>
//                   <div>
//                     <canvas id='myChart' className='chart-canvas'></canvas>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;


// import Chart from 'chart.js/auto';


// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import { color } from 'chart.js/helpers';

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       navigate('/employeelist');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };
  

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false); // Hide the right panel
//     setShowContainer(false); // Hide the container
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false); // Hide the right panel
//     setShowContainer(false); // Hide the container
//   };

//   const handleDeleteSubmit = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = () => {
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false); // Hide the container
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
                 
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//      <div className="graph-container" >
//        {/* <h2 id='head'>Line Chart</h2> */}
//        <div>
//       <canvas id='myChart' className='chart-canvas' ></canvas>
//       <div id='header'>
//       <center>
//       <span> <img src={'employee graph.png'} alt='no image' style={{width:"260px",height:"267px", border: "1px solid black"}}/></span>

//       </center>
//       </div>
//     </div>
//        </div>
//        <br></br>
//        <div>
//        <img src={'bargraph.jpg'} alt="no image" style={{width:"971px",height:"175px",marginLeft:"33px"}}/>
//       <span><img src='red bargraph.jpg'  alt="no image"  style={{width:"331px",height:"179px",marginLeft:"1px",marginBottom:"3px"}}/></span>
       
//        </div>
       
       
  
//         </div>

//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;



// import Chart from 'chart.js/auto';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);
//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent page refresh
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       navigate('/employeelist');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (id) => {
//     e.preventDefault(); // Prevent page refresh
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = () => {
//     e.preventDefault(); // Prevent page refresh
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (id, data) => {
//     e.preventDefault(); // Prevent page refresh
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
                 
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//      <div className="graph-container" >
//        {/* <h2 id='head'>Line Chart</h2> */}
//        <div>
//       <canvas id='myChart' className='chart-canvas' ></canvas>
//       <div id='header'>
//       <center>
//       <span> <img src={'employee graph.png'} alt='no image' style={{width:"260px",height:"267px", border: "1px solid black"}}/></span>

//       </center>
//       </div>
//     </div>
//        </div>
//        <br></br>
//        <div>
//        <img src={'bargraph.jpg'} alt="no image" style={{width:"971px",height:"175px",marginLeft:"33px"}}/>
//       <span><img src='red bargraph.jpg'  alt="no image"  style={{width:"331px",height:"179px",marginLeft:"1px",marginBottom:"3px"}}/></span>
       
//        </div>
       
       
  
//         </div>

//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//               <div className='form-adjust'>
//                 <form onSubmit={handleSubmit}><br></br>
//                   <h4>Register for free</h4>
//                   <div><br></br>
//                     <label>First Name:</label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Last Name:</label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input
//                       type="text"
//                       value={salary}
//                       onChange={(e) => setSalary(e.target.value)}
//                     />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div><br></br>
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="error-message">{passwordError}</div>
//                   </div><br></br>
//                   <button type="submit" className="btn btn-danger btn-sm">Register</button>
//                 </form>
//               </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={handleUpdateSubmit} />}
//         {deleteVisible && <Delete onDelete={handleDeleteSubmit} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;


// import Chart from 'chart.js/auto';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import './Templates.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';

// const Register = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false); 
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');
    
//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       navigate('/employeelist');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false); // Hide the right panel
//     setShowContainer(false); // Hide the container
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false); // Hide the right panel
//     setShowContainer(false); // Hide the container
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false); // Hide the container
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
                 
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container" >
//                     <div>
//                       <canvas id='myChart' className='chart-canvas' ></canvas>
//                       <div id='header'>
//                         <center>
//                           <span> <img src={'employee graph.png'} alt='no image' style={{width:"260px",height:"267px", border: "1px solid black"}}/></span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{width:"971px",height:"175px",marginLeft:"33px"}}/>
//                     <span><img src='red bargraph.jpg'  alt="no image"  style={{width:"331px",height:"179px",marginLeft:"1px",marginBottom:"3px"}}/></span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//                 <div className='form-adjust'>
//                   <form onSubmit={handleSubmit}><br></br>
//                     <h4>Register for free</h4>
//                     <div><br></br>
//                       <label>First Name:</label>
//                       <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Last Name:</label>
//                       <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input
//                         type="text"
//                         value={salary}
//                         onChange={(e) => setSalary(e.target.value)}
//                       />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Username:</label>
//                       <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Password:</label>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div className="error-message">{passwordError}</div>
//                     </div><br></br>
//                     <button type="submit" class="btn btn-danger btn-sm">Register</button>
//                   </form>
//                 </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import Chart from 'chart.js/auto';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import './Templates.css';
// import './Register.css';

// const Register = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     const path = location.pathname;
//     if (path.includes('register')) {
//       setActiveButton('register');
//     } else if (path.includes('employeelist')) {
//       setActiveButton('get');
//     } else if (path.includes('update')) {
//       setActiveButton('update');
//     } else if (path.includes('delete')) {
//       setActiveButton('delete');
//     } else if (path.includes('getid')) {
//       setActiveButton('getid');
//     }
//   }, [location.pathname]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       navigate('/employeelist');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container" >
//                     <div>
//                       <canvas id='myChart' className='chart-canvas' ></canvas>
//                       <div id='header'>
//                         <center>
//                           <span> <img src={'employee graph.png'} alt='no image' style={{width:"260px",height:"267px", border: "1px solid black"}}/></span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{width:"971px",height:"175px",marginLeft:"33px"}}/>
//                     <span><img src='red bargraph.jpg'  alt="no image"  style={{width:"331px",height:"179px",marginLeft:"1px",marginBottom:"3px"}}/></span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//                 <div className='form-adjust'>
//                   <form onSubmit={handleSubmit}><br></br>
//                     <h4>Register for free</h4>
//                     <div><br></br>
//                       <label>First Name:</label>
//                       <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Last Name:</label>
//                       <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input
//                         type="text"
//                         value={salary}
//                         onChange={(e) => setSalary(e.target.value)}
//                       />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Username:</label>
//                       <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Password:</label>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div className="error-message">{passwordError}</div>
//                     </div><br></br>
//                     <button type="submit" className="btn btn-danger btn-sm">Register</button>
//                   </form>
//                 </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import Chart from 'chart.js/auto';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import './Templates.css';
// import './Register.css';

// const Register = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container" >
//                     <div>
//                       <canvas id='myChart' className='chart-canvas' ></canvas>
//                       <div id='header'>
//                         <center>
//                           <span> <img src={'employee graph.png'} alt='no image' style={{width:"260px",height:"267px", border: "1px solid black"}}/></span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{width:"971px",height:"175px",marginLeft:"33px"}}/>
//                     <span><img src='red bargraph.jpg'  alt="no image"  style={{width:"331px",height:"179px",marginLeft:"1px",marginBottom:"3px"}}/></span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//                 <div className='form-adjust'>
//                   <form onSubmit={handleSubmit}><br></br>
//                     <h4>Register for free</h4>
//                     <div><br></br>
//                       <label>First Name:</label>
//                       <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Last Name:</label>
//                       <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input
//                         type="text"
//                         value={salary}
//                         onChange={(e) => setSalary(e.target.value)}
//                       />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Username:</label>
//                       <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Password:</label>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div className="error-message">{passwordError}</div>
//                     </div><br></br>
//                     <button type="submit" className="btn btn-danger btn-sm">Register</button>
//                   </form>
//                 </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TfiBarChartAlt } from "react-icons/tfi";
// import Chart from 'chart.js/auto';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import './Templates.css';
// import './Register.css';

// const Register = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="left-panel">
//         <button className="btn " onClick={handleRegisterClick} disabled={activeButton === 'register'}>Register</button>
//         <button className="btn " onClick={handleGetEmployees} disabled={activeButton === 'get'}>GET All Employees</button><br></br>
//         <button className="btn " onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>GetId</button><br></br>
//         <button className="btn " onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>Update</button><br></br>
//         <button className="btn " onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>Delete</button><br></br>
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className='register-container'>
//               {showContainer && (
//                 <div className='navbar navbar-expand-lg'>
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span><TfiBarChartAlt style={{marginLeft:"90px",fontSize:"45px"}} />
//                     <hr></hr>
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container" >
//                     <div>
//                       <canvas id='myChart' className='chart-canvas' ></canvas>
//                       <div id='header'>
//                         <center>
//                           <span> <img src={'employee graph.png'} alt='no image' style={{width:"260px",height:"267px", border: "1px solid black"}}/></span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{width:"971px",height:"175px",marginLeft:"33px"}}/>
//                     <span><img src='red bargraph.jpg'  alt="no image"  style={{width:"331px",height:"179px",marginLeft:"1px",marginBottom:"3px"}}/></span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1 >Add Employee</h1>
//               </div>
//               <center>
//                 <div className='form-adjust'>
//                   <form onSubmit={handleSubmit}><br></br>
//                     <h4>Register for free</h4>
//                     <div><br></br>
//                       <label>First Name:</label>
//                       <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Last Name:</label>
//                       <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input
//                         type="text"
//                         value={salary}
//                         onChange={(e) => setSalary(e.target.value)}
//                       />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Username:</label>
//                       <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div><br></br>
//                       <label>Password:</label>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div className="error-message">{passwordError}</div>
//                     </div><br></br>
//                     <button type="submit" className="btn btn-danger btn-sm">Register</button>
//                   </form>
//                 </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && (
//           <GetId onGetId={handleGetIdSubmit} />
//         )}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && (
//           <div className="alert-box">
//             {alertMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TfiBarChartAlt } from 'react-icons/tfi';
// import Chart from 'chart.js/auto';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import './Templates.css';
// import './Register.css';

// const Register = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="left-panel">
//         {/* Use Link from React Router instead of button */}
//         <Link to="#" className="btn" onClick={handleRegisterClick} disabled={activeButton === 'register'}>
//           Register
//         </Link>
//         <button className="btn" onClick={handleGetEmployees} disabled={activeButton === 'get'}>
//           GET All Employees
//         </button>
//         <br />
//         <button className="btn" onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>
//           GetId
//         </button>
//         <br />
//         <button className="btn" onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>
//           Update
//         </button>
//         <br />
//         <button className="btn" onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>
//           Delete
//         </button>
//         <br />
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className="register-container">
//               {showContainer && (
//                 <div className="navbar navbar-expand-lg">
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container">
//                     <div>
//                       <canvas id="myChart" className="chart-canvas"></canvas>
//                       <div id="header">
//                         <center>
//                           <span>
//                             {' '}
//                             <img
//                               src={'employee graph.png'}
//                               alt="no image"
//                               style={{ width: '260px', height: '267px', border: '1px solid black' }}
//                             />
//                           </span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{ width: '971px', height: '175px', marginLeft: '33px' }} />
//                     <span>
//                       <img
//                         src="red bargraph.jpg"
//                         alt="no image"
//                         style={{ width: '331px', height: '179px', marginLeft: '1px', marginBottom: '3px' }}
//                       />
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1>Add Employee</h1>
//               </div>
//               <center>
//                 <div className="form-adjust">
//                   <form onSubmit={handleSubmit}>
//                     <br />
//                     <h4>Register for free</h4>
//                     <div>
//                       <br />
//                       <label>First Name:</label>
//                       <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                       <div className="error-message" style={{ color: 'red' }}>
//                         {firstNameError}
//                       </div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Last Name:</label>
//                       <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Username:</label>
//                       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Password:</label>
//                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                       <div className="error-message">{passwordError}</div>
//                     </div>
//                     <br />
//                     <button type="submit" className="btn btn-danger btn-sm">
//                       Register
//                     </button>
//                   </form>
//                 </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && <GetId onGetId={handleGetIdSubmit} />}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && <div className="alert-box">{alertMessage}</div>}
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TfiBarChartAlt } from 'react-icons/tfi';
// import Chart from 'chart.js/auto';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import './Templates.css';
// import './Register.css';

// const Register = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = (e) => {
//     e.preventDefault();
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="left-panel">
//         <Link to="#" className="btn" onClick={handleRegisterClick} disabled={activeButton === 'register'}>
//           Register
//         </Link>
//         <br />
//         <button className="btn" onClick={handleGetEmployees} disabled={activeButton === 'get'}>
//           GET All Employees
//         </button>
//         <br />
//         <button className="btn" onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>
//           GetId
//         </button>
//         <br />
//         <button className="btn" onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>
//           Update
//         </button>
//         <br />
//         <button className="btn" onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>
//           Delete
//         </button>
//         <br />
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? null : (
//             <div className="register-container">
//               {showContainer && (
//                 <div className="navbar navbar-expand-lg">
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container">
//                     <div>
//                       <canvas id="myChart" className="chart-canvas"></canvas>
//                       <div id="header">
//                         <center>
//                           <span>
//                             {' '}
//                             <img
//                               src={'employee graph.png'}
//                               alt="no image"
//                               style={{ width: '260px', height: '267px', border: '1px solid black' }}
//                             />
//                           </span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{ width: '971px', height: '175px', marginLeft: '33px' }} />
//                     <span>
//                       <img
//                         src="red bargraph.jpg"
//                         alt="no image"
//                         style={{ width: '331px', height: '179px', marginLeft: '1px', marginBottom: '3px' }}
//                       />
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {showForm && (
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1>Add Employee</h1>
//               </div>
//               <center>
//                 <div className="form-adjust">
//                   <form onSubmit={handleSubmit}>
//                     <br />
//                     <h4>Register for free</h4>
//                     <div>
//                       <br />
//                       <label>First Name:</label>
//                       <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                       <div className="error-message" style={{ color: 'red' }}>
//                         {firstNameError}
//                       </div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Last Name:</label>
//                       <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                       <div className="error-message">{lastNameError}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                       <div className="error-message">{salaryError}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Username:</label>
//                       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                       <div className="error-message">{usernameError}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Password:</label>
//                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                       <div className="error-message">{passwordError}</div>
//                     </div>
//                     <br />
//                     <button type="submit" className="btn btn-danger btn-sm">
//                       Register
//                     </button>
//                   </form>
//                 </div>
//               </center>
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && <GetId onGetId={handleGetIdSubmit} />}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && <div className="alert-box">{alertMessage}</div>}
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TfiBarChartAlt } from 'react-icons/tfi';
// import Chart from 'chart.js/auto';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import './Templates.css';
// import './Register.css';

// const Register = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="left-panel">
//         <Link to="#" className="btn" onClick={handleRegisterClick} disabled={activeButton === 'register'}>
//           Register
//         </Link>
//         <br />
//         <button className="btn" onClick={handleGetEmployees} disabled={activeButton === 'get'}>
//           GET All Employees
//         </button>
//         <br />
//         <button className="btn" onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>
//           GetId
//         </button>
//         <br />
//         <button className="btn" onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>
//           Update
//         </button>
//         <br />
//         <button className="btn" onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>
//           Delete
//         </button>
//         <br />
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? (
//             <div className="register-container">
//               <div className="register-form">
//                 <div className="employee-header">
//                   <h1>Add Employee</h1>
//                 </div>
//                 <center>
//                   <div className="form-adjust">
//                     <form onSubmit={handleSubmit}>
//                       <br />
//                       <h4>Register for free</h4>
//                       <div>
//                         <br />
//                         <label>First Name:</label>
//                         <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                         <div className="error-message" style={{ color: 'red' }}>
//                           {firstNameError}
//                         </div>
//                       </div>
//                       <div>
//                         <br />
//                         <label>Last Name:</label>
//                         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                         <div className="error-message">{lastNameError}</div>
//                       </div>
//                       <div>
//                         <br />
//                         <label style={{ paddingRight: '25px' }}>Salary:</label>
//                         <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                         <div className="error-message">{salaryError}</div>
//                       </div>
//                       <div>
//                         <br />
//                         <label>Username:</label>
//                         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                         <div className="error-message">{usernameError}</div>
//                       </div>
//                       <div>
//                         <br />
//                         <label>Password:</label>
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <div className="error-message">{passwordError}</div>
//                       </div>
//                       <br />
//                       <button type="submit" className="btn btn-danger btn-sm">
//                         Register
//                       </button>
//                     </form>
//                   </div>
//                 </center>
//               </div>
//             </div>
//           ) : null}
//           {!showForm && (
//             <div className="register-container">
//               {showContainer && (
//                 <div className="navbar navbar-expand-lg">
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container">
//                     <div>
//                       <canvas id="myChart" className="chart-canvas"></canvas>
//                       <div id="header">
//                         <center>
//                           <span>
//                             {' '}
//                             <img
//                               src={'employee graph.png'}
//                               alt="no image"
//                               style={{ width: '260px', height: '267px', border: '1px solid black' }}
//                             />
//                           </span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{ width: '971px', height: '175px', marginLeft: '33px' }} />
//                     <span>
//                       <img
//                         src="red bargraph.jpg"
//                         alt="no image"
//                         style={{ width: '331px', height: '179px', marginLeft: '1px', marginBottom: '3px' }}
//                       />
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && <GetId onGetId={handleGetIdSubmit} />}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && <div className="alert-box">{alertMessage}</div>}
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TfiBarChartAlt } from 'react-icons/tfi';
// import Chart from 'chart.js/auto';
// import Update from './Update';
// import Delete from './Delete';
// import Header from './Header';
// import GetId from './GetId';
// import EmployeeList from './EmployeeList';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import './Templates.css';
// import './Register.css';

// const Register = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [updateVisible, setUpdateVisible] = useState(false);
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [getIdVisible, setGetIdVisible] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [showRightPanel, setShowRightPanel] = useState(true);
//   const [showContainer, setShowContainer] = useState(true);

//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

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

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFirstNameError('');
//     setLastNameError('');
//     setSalaryError('');
//     setUsernameError('');
//     setPasswordError('');

//     if (!firstName) {
//       setFirstNameError('First name is required');
//     }
//     if (!lastName) {
//       setLastNameError('Last name is required');
//     }
//     if (!salary) {
//       setSalaryError('Salary is required');
//     }
//     if (!username) {
//       setUsernameError('Username is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }

//     if (!firstName || !lastName || !salary || !username || !password) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       setAlertMessage('Employee registered successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error registering employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleRegisterClick = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     setShowForm(true);
//     setShowEmployeeList(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('register');
//     setShowRightPanel(true);
//     setShowContainer(true);
//   };

//   const handleGetEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//       setShowEmployeeList(true);
//       setActiveButton('get');
//       setShowForm(false);
//       setUpdateVisible(false);
//       setDeleteVisible(false);
//       setGetIdVisible(false);
//       setShowRightPanel(false);
//       setShowContainer(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error fetching employees. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleUpdateClick = () => {
//     setUpdateVisible(true);
//     setShowForm(false);
//     setDeleteVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('update');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteClick = () => {
//     setDeleteVisible(true);
//     setShowForm(false);
//     setUpdateVisible(false);
//     setGetIdVisible(false);
//     setActiveButton('delete');
//     setShowRightPanel(false);
//     setShowContainer(false);
//   };

//   const handleDeleteSubmit = async (e, id) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee deleted successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setDeleteVisible(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error deleting employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   const handleGetIdSubmit = (e) => {
//     e.preventDefault();
//     setActiveButton('getid');
//     setShowForm(false);
//     setUpdateVisible(false);
//     setDeleteVisible(false);
//     setGetIdVisible(true);
//     setShowEmployeeList(false);
//     setShowRightPanel(true);
//     setShowContainer(false);
//   };

//   const handleUpdateSubmit = async (e, id, data) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/emp/update/${id}`, data);
//       console.log('Response:', response.data);
//       setAlertMessage('Employee updated successfully!');
//       setShowAlert(true);
//       handleGetEmployees();
//       setUpdateVisible(false);
//       setShowEmployeeList(true);
//       setShowRightPanel(true);
//       setShowContainer(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertMessage('Error updating employee. Please try again.');
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="left-panel">
//         <Link to="#" className="btn" onClick={handleRegisterClick} disabled={activeButton === 'register'}>
//           Register
//         </Link>
//         <br />
//         <button className="btn" onClick={handleGetEmployees} disabled={activeButton === 'get'}>
//           GET All Employees
//         </button>
//         <br />
//         <button className="btn" onClick={handleGetIdSubmit} disabled={activeButton === 'getid' || showForm}>
//           GetId
//         </button>
//         <br />
//         <button className="btn" onClick={handleUpdateClick} disabled={activeButton === 'update' || showForm}>
//           Update
//         </button>
//         <br />
//         <button className="btn" onClick={handleDeleteClick} disabled={activeButton === 'delete' || showForm}>
//           Delete
//         </button>
//         <br />
//       </div>
//       <div className={`right-panel ${showRightPanel ? 'show' : ''}`}>
//         <div className="form-container">
//           {showForm ? (
//             <div className="register-container">
//               <div className="register-form">
//                 <div className="employee-header">
//                   <h1>Add Employee</h1>
//                 </div>
//                 <center>
//                   <div className="form-adjust">
//                     <form onSubmit={handleSubmit}>
//                       <br />
//                       <h4>Register for free</h4>
//                       <div>
//                         <br />
//                         <label>First Name:</label>
//                         <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                         <div className="error-message" style={{ color: 'red' }}>
//                           {firstNameError}
//                         </div>
//                       </div>
//                       <div>
//                         <br />
//                         <label>Last Name:</label>
//                         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                         <div className="error-message">{lastNameError}</div>
//                       </div>
//                       <div>
//                         <br />
//                         <label style={{ paddingRight: '25px' }}>Salary:</label>
//                         <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                         <div className="error-message">{salaryError}</div>
//                       </div>
//                       <div>
//                         <br />
//                         <label>Username:</label>
//                         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                         <div className="error-message">{usernameError}</div>
//                       </div>
//                       <div>
//                         <br />
//                         <label>Password:</label>
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <div className="error-message">{passwordError}</div>
//                       </div>
//                       <br />
//                       <button type="submit" className="btn btn-danger btn-sm">
//                         Register
//                       </button>
//                     </form>
//                   </div>
//                 </center>
//               </div>
//             </div>
//           ) : null}
//           {!showForm && (
//             <div className="register-container">
//               {showContainer && (
//                 <div className="navbar navbar-expand-lg">
//                   <div className={`box1 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box2 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box3 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>hi how are you</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                   <div className={`box4 ${activeButton === 'getid' ? '' : 'hidden'}`}>
//                     <p>$25000</p>
//                     <span>all earning</span>
//                     <TfiBarChartAlt style={{ marginLeft: '90px', fontSize: '45px' }} />
//                     <hr />
//                   </div>
//                 </div>
//               )}
//               {showContainer && (
//                 <div className="register-container">
//                   <div className="graph-container">
//                     <div>
//                       <canvas id="myChart" className="chart-canvas"></canvas>
//                       <div id="header">
//                         <center>
//                           <span>
//                             {' '}
//                             <img
//                               src={'employee graph.png'}
//                               alt="no image"
//                               style={{ width: '260px', height: '267px', border: '1px solid black' }}
//                             />
//                           </span>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div>
//                     <img src={'bargraph.jpg'} alt="no image" style={{ width: '971px', height: '175px', marginLeft: '33px' }} />
//                     <span>
//                       <img
//                         src="red bargraph.jpg"
//                         alt="no image"
//                         style={{ width: '331px', height: '179px', marginLeft: '1px', marginBottom: '3px' }}
//                       />
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         {updateVisible && <Update onSubmit={(e, id, data) => handleUpdateSubmit(e, id, data)} />}
//         {deleteVisible && <Delete onDelete={(e, id) => handleDeleteSubmit(e, id)} />}
//         {getIdVisible && <GetId onGetId={handleGetIdSubmit} />}
//         {showEmployeeList && <EmployeeList />}
//         {showAlert && <div className="alert-box">{alertMessage}</div>}
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header'; // Import Header component
// import Sidebar from './Sidebar';

// import './Register.css';

// const Register = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [salaryError, setSalaryError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showRightPanel, setShowRightPanel] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation
//     let isValid = true;

//     if (!firstName) {
//       setFirstNameError('First name is required');
//       isValid = false;
//     } else {
//       setFirstNameError('');
//     }

//     if (!lastName) {
//       setLastNameError('Last name is required');
//       isValid = false;
//     } else {
//       setLastNameError('');
//     }

//     if (!salary) {
//       setSalaryError('Salary is required');
//       isValid = false;
//     } else {
//       setSalaryError('');
//     }

//     if (!username) {
//       setUsernameError('Username is required');
//       isValid = false;
//     } else {
//       setUsernameError('');
//     }

//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (!isValid) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       // Handle success
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowForm(true);
//     // Other logic for handleRegisterClick
//   };

//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       {showForm && (
//         <div className="register-container">
//           <div className="register-form">
//             <div className="employee-header">
//               <h1>Add Employee</h1>
//             </div>
//             <center>
//               <div className="form-adjust">
//                 <form onSubmit={handleSubmit}>
//                   <br />
//                   <h4>Register for free</h4>
//                   <div>
//                     <br />
//                     <label>First Name:</label>
//                     <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                     <div className="error-message" style={{ color: 'red' }}>
//                       {firstNameError}
//                     </div>
//                   </div>
//                   <div>
//                     <br />
//                     <label>Last Name:</label>
//                     <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                     <div className="error-message">{lastNameError}</div>
//                   </div>
//                   <div>
//                     <br />
//                     <label style={{ paddingRight: '25px' }}>Salary:</label>
//                     <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                     <div className="error-message">{salaryError}</div>
//                   </div>
//                   <div>
//                     <br />
//                     <label>Username:</label>
//                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                     <div className="error-message">{usernameError}</div>
//                   </div>
//                   <div>
//                     <br />
//                     <label>Password:</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     <div className="error-message">{passwordError}</div>
//                   </div>
//                   <br />
//                   <button type="submit" className="btn btn-danger btn-sm">
//                     Register
//                   </button>
//                 </form>
//               </div>
//             </center>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header'; // Import Header component
// import Sidebar from './Sidebar';
// import './Register.css';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }
//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!salary.trim()) {
//       errors.salary = 'Salary is required';
//     }
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       // Handle success - You can clear the form fields or display a success message here
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <Header />
     
//       <div className="register-container">
//       <Sidebar />
//         <div className="register-form">
       
//           <div className="employee-header">
         
//             <h1>Add Employee</h1>
//           </div>
//           <center>
//             <div className="form-adjust">
//               <form onSubmit={handleSubmit}>
//                 <br />
//                 <h4>Register for free</h4>
//                 <div>
//                   <br />
//                   <label>First Name:</label>
//                   <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                   <div className="error-message" style={{ color: 'red' }}>
//                     {errors.firstName}
//                   </div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Last Name:</label>
//                   <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                   <div className="error-message">{errors.lastName}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label style={{ paddingRight: '25px' }}>Salary:</label>
//                   <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                   <div className="error-message">{errors.salary}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Username:</label>
//                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                   <div className="error-message">{errors.username}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Password:</label>
//                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                   <div className="error-message">{errors.password}</div>
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-danger btn-sm">
//                   Register
//                 </button>
//               </form>
//             </div>
//           </center>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './Register.css';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }
//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!salary.trim()) {
//       errors.salary = 'Salary is required';
//     }
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       // Handle success - You can clear the form fields or display a success message here
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="register-container">
//         <Sidebar />
//         <div className="register-form">
//           <div className="employee-header">
//             <h1>Add Employee</h1>
//           </div>
//           <center>
//             <div className="form-adjust">
//               <form onSubmit={handleSubmit}>
//                 <br />
//                 <h4>Register for free</h4>
//                 <div>
//                   <br />
//                   <label>First Name:</label>
//                   <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                   <div className="error-message" style={{ color: 'red' }}>
//                     {errors.firstName}
//                   </div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Last Name:</label>
//                   <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                   <div className="error-message">{errors.lastName}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label style={{ paddingRight: '25px' }}>Salary:</label>
//                   <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                   <div className="error-message">{errors.salary}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Username:</label>
//                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                   <div className="error-message">{errors.username}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Password:</label>
//                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                   <div className="error-message">{errors.password}</div>
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-danger btn-sm">
//                   Register
//                 </button>
//               </form>
//             </div>
//           </center>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './Register.css';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }
//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!salary.trim()) {
//       errors.salary = 'Salary is required';
//     }
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       // Handle success - You can clear the form fields or display a success message here
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="register-container">
//         <Sidebar />
//         <div className="register-form" > {/* Adjusted styling */}
//           <div className="employee-header">
//             <h1>Add Employee</h1>
//           </div>
//           <center>
//             <div className="form-adjust">
//               <form onSubmit={handleSubmit}>
//                 <br />
//                 <h4>Register for free</h4>
//                 <div>
//                   <br />
//                   <label>First Name:</label>
//                   <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                   <div className="error-message" style={{ color: 'red' }}>
//                     {errors.firstName}
//                   </div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Last Name:</label>
//                   <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                   <div className="error-message">{errors.lastName}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label style={{ paddingRight: '25px' }}>Salary:</label>
//                   <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                   <div className="error-message">{errors.salary}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Username:</label>
//                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                   <div className="error-message">{errors.username}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Password:</label>
//                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                   <div className="error-message">{errors.password}</div>
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-danger btn-sm">
//                   Register
//                 </button>
//               </form>
//             </div>
//           </center>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './Register.css';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }
//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!salary.trim()) {
//       errors.salary = 'Salary is required';
//     }
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       // Handle success - You can clear the form fields or display a success message here
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="register-container">
//         <Sidebar />
//         <div className="register-form">
//           <div className="employee-header">
//             <h1>Add Employee</h1>
//           </div>
//           <center>
//             <div className="form-adjust">
//               <form onSubmit={handleSubmit}>
//                 <br />
//                 <h4>Register for free</h4>
//                 <div>
//                   <br />
//                   <label>First Name:</label>
//                   <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                   <div className="error-message" style={{ color: 'red' }}>
//                     {errors.firstName}
//                   </div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Last Name:</label>
//                   <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                   <div className="error-message">{errors.lastName}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label style={{ paddingRight: '25px' }}>Salary:</label>
//                   <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                   <div className="error-message">{errors.salary}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Username:</label>
//                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                   <div className="error-message">{errors.username}</div>
//                 </div>
//                 <div>
//                   <br />
//                   <label>Password:</label>
//                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                   <div className="error-message">{errors.password}</div>
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-danger btn-sm">
//                   Register
//                 </button>
//               </form>
//             </div>
//           </center>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './Register.css';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }
//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!salary.trim()) {
//       errors.salary = 'Salary is required';
//     }
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       // Handle success - You can clear the form fields or display a success message here
//       setFirstName('');
//       setLastName('');
//       setSalary('');
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <Sidebar />
//           </div>
//           <div className="col-md-9">
//             <div className="register-form">
//               <div className="employee-header">
//                 <h1>Add Employee</h1>
//               </div>
//               <center>
//                 <div className="form-adjust">
//                   <form onSubmit={handleSubmit}>
//                     <br />
//                     <h4>Register for free</h4>
//                     <div>
//                       <br />
//                       <label>First Name:</label>
//                       <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                       <div className="error-message" style={{ color: 'red' }}>
//                         {errors.firstName}
//                       </div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Last Name:</label>
//                       <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                       <div className="error-message">{errors.lastName}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label style={{ paddingRight: '25px' }}>Salary:</label>
//                       <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                       <div className="error-message">{errors.salary}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Username:</label>
//                       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                       <div className="error-message">{errors.username}</div>
//                     </div>
//                     <div>
//                       <br />
//                       <label>Password:</label>
//                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                       <div className="error-message">{errors.password}</div>
//                     </div>
//                     <br />
//                     <button type="submit" className="btn btn-danger btn-sm">
//                       Register
//                     </button>
//                   </form>
//                 </div>
//               </center>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import './Register.css'
import {useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [salary, setSalary] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // use useNavigate hook


  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!salary.trim()) {
      errors.salary = 'Salary is required';
    }
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/emp/save', {
        firstName,
        lastName,
        salary,
        username,
        password,
      });
      console.log('Response:', response.data);
      
      navigate('/employeelist');
      
      // Handle success - You can clear the form fields or display a success message here
      setFirstName('');
      setLastName('');
      setSalary('');
      setUsername('');
      setPassword('');
      navigate('/employeelist');
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div >
    
    <Header />
  <div className="container-fluid bg-danger ">
            <div className="row  ">
   <div className=" col-6  col-sm-2">
      <Sidebar/>
      </div>
      
        <div className=" register-form col-lg-10 justify-content-center  ">
           
          
          
            <div className=" register-form col-md-4 offset-md-4 p-2 bg-light mt-2">
                <form onSubmit={handleSubmit}>
                  <br></br>
                  <h4>Register for free</h4>
                  <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <div className="error-message" style={{ color: 'red' }}>
                      {errors.firstName}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <div className="error-message" style={{ color: 'red' }}>{errors.lastName}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Salary:</label>
                    <input type="text" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    <div className="error-message" style={{ color: 'red' }}>{errors.salary}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div className="error-message" style={{ color: 'red' }}>{errors.username}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="error-message" style={{ color: 'red' }}>{errors.password}</div>
                  </div>
                  <button  type="submit" className="btn btn-danger btn-block " style={{textAlign:"center"}}>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
  
      
  );
};

export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';
// // import './Register.css';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); // Use useNavigate hook

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }
//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!salary.trim()) {
//       errors.salary = 'Salary is required';
//     }
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/emp/save', {
//         firstName,
//         lastName,
//         salary,
//         username,
//         password,
//       });
//       console.log('Response:', response.data);
//       // Handle success
//       navigate('/employeelist'); // Navigate to employee list
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
   
//     <div className="container-fluid px-0" style={{ maxWidth: "100vw", position: "relative" }}>
//   <Header />
//   <div className="row">
//     <div className="col-12">
//       <div className="position-relative">
//         <div className="position-absolute top-50 start-50 translate-middle">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-md-10 mt-1">
//                 <div className="card">
//                   <div className="card-header">Add Employee</div>
//                   <div className="card-body">
//                     <form onSubmit={handleSubmit}>
//                       <h4>Register for free</h4>
//                       <div className="form-group">
//                         <label>First Name:</label>
//                         <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                         <div className="error-message" style={{ color: 'red' }}>
//                           {errors.firstName}
//                         </div>
//                       </div>
//                       <div className="form-group">
//                         <label>Last Name:</label>
//                         <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                         <div className="error-message">{errors.lastName}</div>
//                       </div>
//                       <div className="form-group">
//                         <label>Salary:</label>
//                         <input type="text" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} />
//                         <div className="error-message">{errors.salary}</div>
//                       </div>
//                       <div className="form-group">
//                         <label>Username:</label>
//                         <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
//                         <div className="error-message">{errors.username}</div>
//                       </div>
//                       <div className="form-group">
//                         <label>Password:</label>
//                         <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <div className="error-message">{errors.password}</div>
//                       </div>
//                       <button type="submit" className="btn btn-danger btn-sm">
//                         Register
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-3">
//       <Sidebar />
//     </div>
//   </div>
// </div>



// );
// };

// export default Register;
