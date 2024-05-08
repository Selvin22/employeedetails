
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Delete = ({ onDelete }) => {
//   const [id, setId] = useState('');
//   const navigate = useNavigate(); // Initialize navigate

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       alert('Employee deleted successfully!');
//       onDelete(); // Call the onDelete callback to update the employee list
//       navigate('/employee-list'); // Navigate to employee list page
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error deleting employee. Please try again.');
//     }
//   };

//   return (
//     <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
//       <h2 style={{textAlign:"center"}}>Delete Employee</h2>
//       <center><br></br><br></br><br></br>
//       <label className=''>Enter Employee ID: </label>
//       <input
//         type="text"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       <button onClick={handleDelete}>Delete</button>
//       </center>
//     </div>
//   );
// };

// export default Delete;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Header from './Header';
// import './Delete.css'

// const Delete = ({ onDelete }) => {
//   const [id, setId] = useState('');
//   const [confirmDelete, setConfirmDelete] = useState(false); // State to control the confirmation message
//   const navigate = useNavigate(); // Initialize navigate

//   const handleDelete = async () => {
//     // If confirmation is not yet received, prompt for confirmation
//     if (!confirmDelete) {
//       setConfirmDelete(true);
//       return;
//     }
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       alert('Employee deleted successfully!');
//       onDelete(); // Call the onDelete callback to update the employee list
//       navigate('/employeelist'); // Navigate to employee list page
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error deleting employee. Please try again.');
//     }
//   };

//   return (
//     <div className='background'><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  
       
//       <h2 style={{textAlign:"center"}}>Delete Employee</h2>
//       <center><br></br><br></br><br></br>
//       <label className=''>Enter Employee ID: </label>
//       <input
//         type="text"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       {!confirmDelete && <button onClick={handleDelete}>Delete</button>} {/* Show delete button if confirmation is not received */}
//       {confirmDelete && (
        
//         <div><br></br>
//           <p style={{color:'red'}}>Are you sure you want to delete permanently?</p>
//           <button onClick={handleDelete}>Yes</button>
          
//           <button onClick={() => setConfirmDelete(false)}>No</button>
//         </div>
//       )}
//       </center>
//     </div>
    
//   );
// };

// export default Delete;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';

import Sidebar from './Sidebar';

const Delete = ({ onDelete }) => {
  const [id, setId] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false); // State to control the confirmation message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate(); // Initialize navigate

  const handleDelete = async () => {
    // Check if the ID field is empty or contains only whitespace characters
    if (!id.trim()) {
      setErrorMessage('Please enter a valid Employee ID');
      return;
    }

    // If confirmation is not yet received, prompt for confirmation
    if (!confirmDelete) {
      setConfirmDelete(true);
      setErrorMessage('');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
      console.log('Response:', response.data);
      alert('Employee deleted successfully!');
      onDelete(); // Call the onDelete callback to update the employee list
      navigate('/employeelist'); // Navigate to employee list page
    } catch (error) {
      console.error('Error:', error);
      alert('Error deleting employee. Please try again.');
    }
  };

  return (
    <div>
    <Header/>
    
    <div className="container-fluid bg-secondary ">
            <div className="row">
   <div className="col-6 col-sm-2">
       <Sidebar/>
       </div>
       <div className="register-form col-lg-4  offset-md-3 justify-content-center bg-primary">
      <h2 style={{textAlign:"center",marginTop:"200px",paddingLeft:"40px"}}>Delete Employee</h2>
      <center><br/><br/>
        <label className=''>Enter Employee ID: </label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>} {/* Display error message */}
        {!confirmDelete && <button onClick={handleDelete}>Delete</button>} {/* Show delete button if confirmation is not received */}
        {confirmDelete && (
          <div><br/><br/>
            <p style={{color:'white'}}>Are you sure you want to delete permanently?</p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setConfirmDelete(false)}>No</button>
          </div>
        )}
      </center>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Delete;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import './Delete.css';
// import Sidebar from './Sidebar';

// const Delete = ({ onDelete }) => {
//   const [id, setId] = useState('');
//   const [confirmDelete, setConfirmDelete] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     if (!id.trim()) {
//       setErrorMessage('Please enter a valid Employee ID');
//       return;
//     }

//     if (!confirmDelete) {
//       setConfirmDelete(true);
//       setErrorMessage('');
//       return;
//     }
    
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       alert('Employee deleted successfully!');
//       onDelete();
//       navigate('/employeelist');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error deleting employee. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className='wrapper'>
//         <Sidebar/> {/* Sidebar placed outside the content area */}
//         <div className='content'>
//           <h2 style={{textAlign:"center"}}>Delete Employee</h2>
//           <center>
//             <br/><br/>
//             <label className=''>Enter Employee ID: </label>
//             <input
//               type="text"
//               value={id}
//               onChange={(e) => setId(e.target.value)}
//             />
//             {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
//             {!confirmDelete && <button onClick={handleDelete}>Delete</button>}
//             {confirmDelete && (
//               <div>
//                 <br/><br/>
//                 <p style={{color:'red'}}>Are you sure you want to delete permanently?</p>
//                 <button onClick={handleDelete}>Yes</button>
//                 <button onClick={() => setConfirmDelete(false)}>No</button>
//               </div>
//             )}
//           </center>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Delete;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';

// import Sidebar from './Sidebar';

// const Delete = ({ onDelete }) => {
//   const [id, setId] = useState('');
//   const [confirmDelete, setConfirmDelete] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     if (!id.trim()) {
//       setErrorMessage('Please enter a valid Employee ID');
//       return;
//     }

//     if (!confirmDelete) {
//       setConfirmDelete(true);
//       setErrorMessage('');
//       return;
//     }
    
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       alert('Employee deleted successfully!');
//       onDelete();
//       navigate('/employeelist');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error deleting employee. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className='wrapper'>
//         <Sidebar/>
//         <div className='content'>
//           <div className='delete-container'>
//             <h2 style={{ textAlign: "center" }}>Delete Employee</h2>
//             <center>
//               <br /><br />
//               <label className=''>Enter Employee ID: </label>
//               <input
//                 type="text"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//               />
//               {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//               {!confirmDelete && <button onClick={handleDelete}>Delete</button>}
//               {confirmDelete && (
//                 <div>
//                   <br /><br />
//                   <p style={{ color: 'red' }}>Are you sure you want to delete permanently?</p>
//                   <button onClick={handleDelete}>Yes</button>
//                   <button onClick={() => setConfirmDelete(false)}>No</button>
//                 </div>
//               )}
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Delete;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';

// import Sidebar from './Sidebar';

// const Delete = ({ onDelete }) => {
//   const [id, setId] = useState('');
//   const [confirmDelete, setConfirmDelete] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     if (!id.trim()) {
//       setErrorMessage('Please enter a valid Employee ID');
//       return;
//     }

//     if (!confirmDelete) {
//       setConfirmDelete(true);
//       setErrorMessage('');
//       return;
//     }
    
//     try {
//       const response = await axios.delete(`http://localhost:8080/emp/delete/${id}`);
//       console.log('Response:', response.data);
//       alert('Employee deleted successfully!');
//       onDelete();
//       navigate('/employeelist');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error deleting employee. Please try again.');
//     }
//   };

//   return (
//     <div className="container-fluid">
//   <Header />
//   <div className="row">
//     <div className="col-lg-3">
//       <Sidebar />
//     </div>
//     <div className="col-lg-9">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <h2 className="text-center">Delete Employee</h2>
//             <div className="text-center">
//               <br /><br />
//               <label htmlFor="employeeId" className="form-label">Enter Employee ID: </label>
//               <input
//                 type="text"
//                 id="employeeId"
//                 className="form-control"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//               />
//               {errorMessage && <p className="text-danger">{errorMessage}</p>}
//               {!confirmDelete && <button className="btn btn-danger" onClick={handleDelete}>Delete</button>}
//               {confirmDelete && (
//                 <div>
//                   <br /><br />
//                   <p className="text-danger">Are you sure you want to delete permanently?</p>
//                   <button className="btn btn-danger" onClick={handleDelete}>Yes</button>
//                   <button className="btn btn-secondary" onClick={() => setConfirmDelete(false)}>No</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default Delete;




