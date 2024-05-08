// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EmployeeList.css';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   return (
//     <div className='full'>
//     <Header />
//       <Sidebar />
//     <div className='container'>
    
    
//       <h2 className='text-center'>Employee Details</h2>
//       <div style={{ height: '500px', overflowY: 'scroll' }}>
//                 <table className='table table-bordered table-striped'>


      
//         <thead>
//           <tr>
//             <th>Employee ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Salary</th>
//             <th>Username</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.customerId}>
//               <td>{employee.customerId}</td>
//               <td>{employee.firstName}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.salary}</td>
//               <td>{employee.username}</td>
//               <td>{employee.password}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//      </div>
//   );
// };

// export default EmployeeList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EmployeeList.css';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   return (
//     <div className='full'>
//     <Header/>
//       {/* <div className="flex-container" > */}
   
//         <Sidebar />
//         <h2 className='text-center'>Employee Details</h2>
//         {/* <div className='container'> */}
          
//           <div style={{ height: '500px',width:"1200px",paddingLeft:"30px",marginTop:"50px", overflowY: 'scroll' }}>
//             <table className='table table-bordered table-striped'>
//               <thead>
//                 <tr>
//                   <th>Employee ID</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Salary</th>
//                   <th>Username</th>
//                   <th>Password</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((employee) => (
//                   <tr key={employee.customerId}>
//                     <td>{employee.customerId}</td>
//                     <td>{employee.firstName}</td>
//                     <td>{employee.lastName}</td>
//                     <td>{employee.salary}</td>
//                     <td>{employee.username}</td>
//                     <td>{employee.password}</td>
//                     <td>{employee.update}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       // </div>
//     // </div>
//   );
// };

// export default EmployeeList;....................................


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EmployeeList.css';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   return (
//     <div className='full'>
//     <Header/>
//       <div className="flex-container">
//         <Sidebar />
//         <div className='container'>
       
//           <h2 className='text-center'>Employee Details</h2>
//           <div style={{ height: '500px', overflowY: 'scroll' }}>
//             <table className='table table-bordered table-striped'>
//               <thead>
//                 <tr>
//                   <th>Employee ID</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Salary</th>
//                   <th>Username</th>
//                   <th>Password</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((employee) => (
//                   <tr key={employee.customerId}>
//                     <td>{employee.customerId}</td>
//                     <td>{employee.firstName}</td>
//                     <td>{employee.lastName}</td>
//                     <td>{employee.salary}</td>
//                     <td>{employee.username}</td>
//                     <td>{employee.password}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//      </div>
//   );
// };

// export default EmployeeList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import './EmployeeList.css';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleDelete = async (employeeId) => {
//     try {
//       // Perform delete operation using axios or your preferred method
//       // After successful deletion, you may want to refetch the employee list
//       // Example:
//       // await axios.delete(`http://localhost:8080/emp/delete/${employeeId}`);
//       // fetchEmployees();
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error deleting employee. Please try again.');
//     }
//   };

//   return (
//     <div className='full'>
//       <Header/>
    
//       <div className='flex-container'>
//       <Sidebar />
//         <h2 className='text-center'>Employee Details</h2>
//         <div className='container'>
//         <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//           <table className='table table-bordered table-striped'>
//             <thead>
//               <tr>
//                 <th>Employee ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Salary</th>
//                 <th>Username</th>
//                 <th>Password</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((employee) => (
//                 <tr key={employee.customerId}>
//                   <td>{employee.customerId}</td>
//                   <td>{employee.firstName}</td>
//                   <td>{employee.lastName}</td>
//                   <td>{employee.salary}</td>
//                   <td>{employee.username}</td>
//                   <td>{employee.password}</td>
//                   <td>
//                   <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>

//                     <Link to= {'/delete/${employee.customerId}'} className="btn btn-danger">Delete</Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
// </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// // import './EmployeeList.css';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleDelete = async (employeeId) => {
//     try {
//       // Perform delete operation using axios or your preferred method
//       // After successful deletion, you may want to refetch the employee list
//       // Example:
//       // await axios.delete(`http://localhost:8080/emp/delete/${employeeId}`);
//       // fetchEmployees();
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error deleting employee. Please try again.');
//     }
//   };

//   return (
//     <div className='full'>
//       <Header/>
//       {/* <div className='flex-container'> */}
//       <div className="container-fluid ">
//             <div className="row">
//    <div className="col-6 col-sm-2">
//         <Sidebar />
//         </div>
//         <div className="register-form col-lg-3 justify-content-center">
//         <h2 className='text-center'>Employee Details</h2>
//         {/* <div className='container'> */}
//           <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//             <table className='table table-bordered table-striped'>
//               <thead>
//                 <tr>
//                   <th>Employee ID</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Salary</th>
//                   <th>Username</th>
//                   <th>Password</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((employee) => (
//                   <tr key={employee.customerId}>
//                     <td>{employee.customerId}</td>
//                     <td>{employee.firstName}</td>
//                     <td>{employee.lastName}</td>
//                     <td>{employee.salary}</td>
//                     <td>{employee.username}</td>
//                     <td><input type="password" value="{employee.password}" /></td>

//                     <td>
//                       <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                       {/* Modify this line to include the Link for deleting */}
//                       <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                       <span>
//                       <button type="button" class="btn btn-link">Veiw</button>

//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//    </div>
//    </div>
//   );
// };

// export default EmployeeList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/emp/getemps');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching employees. Please try again.');
    }
  };

  const handleViewPassword = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='full'>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-2">
            <Sidebar />
          </div>
          <div className="register-form col-lg-3 justify-content-center">
            <h2 className='text-center'>Employee Details</h2>
            <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
              <table className='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Salary</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.customerId}>
                      <td>{employee.customerId}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.salary}</td>
                      <td>{employee.username}</td>
                      <td><strong> <input type="password" value="{employeeData.password}"/></strong></td>
                      <td>
                        <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
                        <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
                        <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div>
    <div className="modal-backdrop fade show"></div> {/* Add backdrop */}
    <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block', backgroundColor: 'rgba(-0.5, -0.7, -0.9, -0.9)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          {selectedEmployee && (
                 <div>
                   <p>Employee ID: {selectedEmployee.customerId}</p>
                   <p>First Name: {selectedEmployee.firstName}</p>
                   <p>Last Name: {selectedEmployee.lastName}</p>
                   <p>Salary: {selectedEmployee.salary}</p>
                   <p>Username: {selectedEmployee.username}</p>
                   {/* Add other employee details here */}
                 </div>
               )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default EmployeeList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Modal from './Modal';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-6 col-sm-2">
//             <Sidebar />
//           </div>
//           <div className="register-form col-lg-3 justify-content-center">
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={handleCloseModal} employee={selectedEmployee} />
//     </div>
//   );
// };

// export default EmployeeList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [modalContent, setModalContent] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       setModalContent('Error fetching employees. Please try again.');
//       setShowModal(true);
//     }
//   };

//   const handleDelete = async (employeeId) => {
//     try {
//       // Perform delete operation using axios or your preferred method
//       // After successful deletion, you may want to refetch the employee list
//       // Example:
//       // await axios.delete(`http://localhost:8080/emp/delete/${employeeId}`);
//       // fetchEmployees();
//     } catch (error) {
//       console.error('Error:', error);
//       setModalContent('Error deleting employee. Please try again.');
//       setShowModal(true);
//     }
//   };

//   const handleViewDetails = (employee) => {
//     const { firstName, lastName, salary, username, password } = employee;
//     const message = `First Name: ${firstName}\nLast Name: ${lastName}\nSalary: ${salary}\nUsername: ${username}\nPassword: ${password}`;
//     setModalContent(message);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className='full'>
//       <Header/>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-6 col-sm-2">
//             <Sidebar />
//           </div>
//           <div className="register-form col-lg-3 justify-content-center">
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>   
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td>{employee.password}</td>
//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewDetails(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <p>{modalContent}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [modalContent, setModalContent] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     const { customerId, firstName, lastName, salary, username, password } = employee;
//     const message = `Employee ID: ${customerId}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nSalary: ${salary}\nUsername: ${username}\nPassword: ${password}`;
//     alert(message);
//   };
  
  

//   return (
//     <div className='full'>
//       <Header/>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-6 col-sm-2">
//             <Sidebar />
//           </div>
//           <div className="register-form col-lg-3 justify-content-center">
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>   
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td>{employee.password}</td>
//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewDetails(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <p>{modalContent}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './EmployeeList.css'; // Import CSS file for styling

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isViewOpen, setIsViewOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//     setIsViewOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedEmployee(null);
//     setIsModalOpen(false);
//     setIsViewOpen(false);
//   };

//   return (
//     <div className={`full ${isModalOpen ? 'blur-background' : ''}`}>
//       <Header className={`${isModalOpen ? 'blur-background' : ''}`} />
//       <div className="container-fluid">
//         <div className="row">
//           <div className={`col-6 col-sm-2 ${isModalOpen ? 'blur-background' : ''}`}>
//             <Sidebar />
//           </div>
//           <div className={`register-form col-lg-3 justify-content-center ${isViewOpen ? 'clear-view' : 'blur-background'}`}>
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td>{employee.password}</td>
//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
//                 <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 {selectedEmployee && (
//                   <div>
//                     <p>Employee ID: {selectedEmployee.customerId}</p>
//                     <p>First Name: {selectedEmployee.firstName}</p>
//                     <p>Last Name: {selectedEmployee.lastName}</p>
//                     <p>Salary: {selectedEmployee.salary}</p>
//                     <p>Username: {selectedEmployee.username}</p>
//                     <p>Password: {selectedEmployee.password}</p>
//                   </div>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './EmployeeList.css'; // Import CSS file for styling

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isViewOpen, setIsViewOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//     setIsViewOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedEmployee(null);
//     setIsModalOpen(true);
//     setIsViewOpen(false);
//   };

//   return (
//     <div className={`full ${isModalOpen ? 'blur-background' : ''}`}>
//       <Header className={`${isModalOpen ? 'blur-background' : ''}`} />
//       <div className="container-fluid">
//         <div className="row">
//           <div className={`col-6 col-sm-2 ${isModalOpen || isViewOpen ? 'blur-background' : ''}`}>
//             <Sidebar />
//           </div>
//           <div className={`register-form col-lg-3 justify-content-center ${isViewOpen ? 'clear-view' : 'blur-background'}`}>
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <p><strong></strong> <input type="password" value="{employeeData.password}" /></p>

//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal fade show" style={{ display: 'block',filter:" blur(0px)" }} tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog" >
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
//                 <button type="button" className=" btn-close" onClick={handleCloseModal} aria-label="Close">
//                 </button>
//               </div>
//               <div className="modal-body">
//                 {selectedEmployee && (
//                   <div>
//                     <p>Employee ID: {selectedEmployee.customerId}</p>
//                     <p>First Name: {selectedEmployee.firstName}</p>
//                     <p>Last Name: {selectedEmployee.lastName}</p>
//                     <p>Salary: {selectedEmployee.salary}</p>
//                     <p>Username: {selectedEmployee.username}</p>
//                     <p><strong>Password:</strong> <input type="password" value="{employeeData.password}" /></p>

//                   </div>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './EmployeeList.css'; // Import CSS file for styling

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isViewOpen, setIsViewOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//     setIsViewOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedEmployee(null);
//     setIsModalOpen(false); // Change to false
//     setIsViewOpen(false);
//   };

//   return (
//     <div className={`full ${isModalOpen || isViewOpen ? 'blur-background' : ''}`}>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <div className={`col-6 col-sm-2 ${isModalOpen || isViewOpen ? 'blur-background' : ''}`}>
//             <Sidebar />
//           </div>
//           <div className={`register-form col-lg-3 justify-content-center ${isViewOpen ? 'clear-view' : 'blur-background'}`}>
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td><strong></strong> <input type="password" value="{employeeData.password}" /></td>
//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
//                 <button type="button" className=" btn-close" onClick={handleCloseModal} aria-label="Close">
//                 </button>
//               </div>
//               <div className="modal-body">
//                 {selectedEmployee && (
//                   <div>
//                     <p>Employee ID: {selectedEmployee.customerId}</p>
//                     <p>First Name: {selectedEmployee.firstName}</p>
//                     <p>Last Name: {selectedEmployee.lastName}</p>
//                     <p>Salary: {selectedEmployee.salary}</p>
//                     <p>Username: {selectedEmployee.username}</p>
//                     <p><strong>Password:</strong> {selectedEmployee.password}</p>
//                   </div>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './EmployeeList.css'; // Import CSS file for styling

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isViewOpen, setIsViewOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//     setIsViewOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedEmployee(null);
//     setIsModalOpen(false); // Change to false
//     setIsViewOpen(false);
//   };

//   return (
//     <div className={` ${isModalOpen || isViewOpen ? 'blur-background' : ''}`}>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <div className={`col-6 col-sm-2 ${isModalOpen || isViewOpen ? 'blur-background' : ''}`}>
//             <Sidebar />
//           </div>
//           <div className={`register-form col-lg-3 justify-content-center ${isViewOpen ? 'clear-view' : 'blur-background'}`}>
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td><strong></strong> <input type="password" value="{employeeData.password}" /></td>
//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
//                 <button type="button" className=" btn-close" onClick={handleCloseModal} aria-label="Close">
//                 </button>
//               </div>
//               <div className="modal-body">
//                 {selectedEmployee && (
//                   <div>
//                     <p>Employee ID: {selectedEmployee.customerId}</p>
//                     <p>First Name: {selectedEmployee.firstName}</p>
//                     <p>Last Name: {selectedEmployee.lastName}</p>
//                     <p>Salary: {selectedEmployee.salary}</p>
//                     <p>Username: {selectedEmployee.username}</p>
//                     <p><strong>Password:</strong> {selectedEmployee.password}</p>
//                   </div>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './EmployeeList.css'; // Import CSS file for styling

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedEmployee(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className={`${isModalOpen ? 'blur-background' : ''}`}>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <div className={`col-6 col-sm-2 ${isModalOpen ? 'blur-background' : ''}`}>
//             <Sidebar />
//           </div>
//           <div className="register-form col-lg-3 justify-content-center">
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>password</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td><strong></strong> <input type="password" value="{employeeData.password}" /></td>
//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
//                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 {selectedEmployee && (
//                   <div>
//                     <p>Employee ID: {selectedEmployee.customerId}</p>
//                     <p>First Name: {selectedEmployee.firstName}</p>
//                     <p>Last Name: {selectedEmployee.lastName}</p>
//                     <p>Salary: {selectedEmployee.salary}</p>
//                     <p>Username: {selectedEmployee.username}</p>
//                     <p><strong>Password:</strong> {selectedEmployee.password}</p>
//                   </div>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;




 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './EmployeeList.css'; // Import CSS file for styling

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/emp/getemps');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employees. Please try again.');
//     }
//   };

//   const handleViewPassword = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedEmployee(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-6 col-sm-2">
//             <Sidebar />
//           </div>
//           <div className="register-form col-lg-3 justify-content-center">
//             <h2 className='text-center'>Employee Details</h2>
//             <div style={{ height: '500px', width: "1200px", paddingLeft: "30px", marginTop: "50px", overflowY: 'scroll' }}>
//               <table className='table table-bordered table-striped'>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Salary</th>
//                     <th>Username</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((employee) => (
//                     <tr key={employee.customerId}>
//                       <td>{employee.customerId}</td>
//                       <td>{employee.firstName}</td>
//                       <td>{employee.lastName}</td>
//                       <td>{employee.salary}</td>
//                       <td>{employee.username}</td>
//                       <td>
//                         <Link to={`/update/${employee.customerId}`} className="btn btn-primary mr-2">Update</Link>
//                         <Link to={`/delete/${employee.customerId}`} className="btn btn-danger">Delete</Link>
//                         <button type="button" className="btn btn-link" onClick={() => handleViewPassword(employee)}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bootstrap Modal */}
//       <div className={`modal ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Employee Password</h5>
//               <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               {selectedEmployee && (
//                 <div>
//                   <p>Employee ID: {selectedEmployee.customerId}</p>
//                   <p>First Name: {selectedEmployee.firstName}</p>
//                   <p>Last Name: {selectedEmployee.lastName}</p>
//                   <p>Salary: {selectedEmployee.salary}</p>
//                   <p>Username: {selectedEmployee.username}</p>
//                   {/* Add other employee details here */}
//                 </div>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeList;

