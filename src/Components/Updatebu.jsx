// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const Updatebu = () => {
//   const { id } = useParams();
//   const [employeeData, setEmployeeData] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Using useNavigate for navigation

//   useEffect(() => {
//     fetchEmployeeData();
//   }, [id]);

//   const fetchEmployeeData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       setEmployeeData(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error fetching employee data. Please try again.');
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8080/emp/update/${id}`, employeeData);
//       // If update is successful, navigate to the component displaying all employees
//       navigate('/employeelist'); // Navigating to '/employee-list' after successful update
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Error updating employee data. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Update Employee</h2>
//       {employeeData && (
//         <form onSubmit={handleUpdate}>
//           <label>First Name:</label>
//           <input type="text" value={employeeData.firstName} onChange={(e) => setEmployeeData({ ...employeeData, firstName: e.target.value })} /><br />
//           <label>Last Name:</label>
//           <input type="text" value={employeeData.lastName} onChange={(e) => setEmployeeData({ ...employeeData, lastName: e.target.value })} /><br />
//           <label>Salary:</label>
//           <input type="text" value={employeeData.salary} onChange={(e) => setEmployeeData({ ...employeeData, salary: e.target.value })} /><br />
//           <label>Username:</label>
//           <input type="text" value={employeeData.username} onChange={(e) => setEmployeeData({ ...employeeData, username: e.target.value })} /><br />
//           <label>Password:</label>
//           <input type="password" value={employeeData.password} onChange={(e) => setEmployeeData({ ...employeeData, password: e.target.value })} /><br />
//           <button type="submit">Update Employee</button>
//           {error && <p>{error}</p>}
//         </form>
//       )}
//     </div>
//   );
// };

// export default Updatebu;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const Update = () => {
//   const { id } = useParams();
//   const [employeeData, setEmployeeData] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEmployeeData();
//   }, [id]);

//   const fetchEmployeeData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       setEmployeeData(response.data);
//     } catch (error) {
//       console.error('Error fetching employee data:', error.response?.data || error.message);
//       alert('Error fetching employee data. Please try again.');
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8080/emp/update/${id}`, employeeData);
//       navigate('/employee-list'); // Navigate to employee list page after successful update
//     } catch (error) {
//       console.error('Error updating employee data:', error.response?.data || error.message);
//       setError('Error updating employee data. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Update Employee</h2>
//       {employeeData && (
//         <form onSubmit={handleUpdate}>
//           <label>First Name:</label>
//           <input type="text" value={employeeData.firstName} onChange={(e) => setEmployeeData({ ...employeeData, firstName: e.target.value })} /><br />
//           <label>Last Name:</label>
//           <input type="text" value={employeeData.lastName} onChange={(e) => setEmployeeData({ ...employeeData, lastName: e.target.value })} /><br />
//           <label>Salary:</label>
//           <input type="text" value={employeeData.salary} onChange={(e) => setEmployeeData({ ...employeeData, salary: e.target.value })} /><br />
//           <label>Username:</label>
//           <input type="text" value={employeeData.username} onChange={(e) => setEmployeeData({ ...employeeData, username: e.target.value })} /><br />
//           <label>Password:</label>
//           <input type="password" value={employeeData.password} onChange={(e) => setEmployeeData({ ...employeeData, password: e.target.value })} /><br />
//           <button type="submit">Update Employee</button>
//           {error && <p>{error}</p>}
//         </form>
//       )}
//     </div>
//   );
// };

// export default Update;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const Updatebu = () => {
//   const { id } = useParams();
//   const [employeeData, setEmployeeData] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEmployeeData();
//   }, [id]);

//   const fetchEmployeeData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
//       setEmployeeData(response.data);
//     } catch (error) {
//       console.error('Error fetching employee data:', error.response?.data || error.message);
//       alert('Error fetching employee data. Please try again.');
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8080/emp/update/${id}`, employeeData);
//       navigate('/employee-list'); // Navigate to employee list page after successful update
//     } catch (error) {
//       console.error('Error updating employee data:', error.response?.data || error.message);
//       setError('Error updating employee data. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Update Employee</h2>
//       {employeeData && (
//         <form onSubmit={handleUpdate}>
//           <label>First Name:</label>
//           <input type="text" value={employeeData.firstName} onChange={(e) => setEmployeeData({ ...employeeData, firstName: e.target.value })} /><br />
//           <label>Last Name:</label>
//           <input type="text" value={employeeData.lastName} onChange={(e) => setEmployeeData({ ...employeeData, lastName: e.target.value })} /><br />
//           <label>Salary:</label>
//           <input type="text" value={employeeData.salary} onChange={(e) => setEmployeeData({ ...employeeData, salary: e.target.value })} /><br />
//           <label>Username:</label>
//           <input type="text" value={employeeData.username} onChange={(e) => setEmployeeData({ ...employeeData, username: e.target.value })} /><br />
//           <label>Password:</label>
//           <input type="password" value={employeeData.password} onChange={(e) => setEmployeeData({ ...employeeData, password: e.target.value })} /><br />
//           <button type="submit">Update Employee</button>
//           {error && <p>{error}</p>}
//         </form>
//       )}
//     </div>
//   );
// };

// export default Updatebu;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Updatebu = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    salary: '',
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeeData();
  }, [id]);

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/emp/getemp/${id}`);
      setEmployeeData(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error.response?.data || error.message);
      alert('Error fetching employee data. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/emp/update/${id}`, employeeData);
      navigate('/employee-list'); // Navigate to employee list page after successful update
    } catch (error) {
      console.error('Error updating employee data:', error.response?.data || error.message);
      setError('Error updating employee data. Please try again.');
    }
  };

  return (
    <div>
    <Header/>
    <div className="container-fluid bg-warning ">
            <div className="row">
   <div className="col-6 col-sm-2">
       <Sidebar/>
       </div>
    <div className="container col-lg-5  offset-md-12 justify-content-center" >
      <div className="col-md-6">
        <h2 className="text-center mb-4">Update Employee</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input type="text" className="form-control" name="firstName" value={employeeData.firstName} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input type="text" className="form-control" name="lastName" value={employeeData.lastName} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary:</label>
            <input type="text" className="form-control" name="salary" value={employeeData.salary} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input type="text" className="form-control" name="username" value={employeeData.username} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" name="password" value={employeeData.password} onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Update Employee</button>
          {error && <p className="text-danger mt-3">{error}</p>}
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Updatebu;
