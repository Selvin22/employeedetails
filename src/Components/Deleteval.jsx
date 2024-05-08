import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Changed import to use useParams and useNavigate
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';

const Deleteval = () => {
  const { id } = useParams(); // Using useParams to get the ID parameter from the URL
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/emp/delete/${id}`);
      // If deletion is successful, you may want to navigate to another page or display a success message
      navigate('/employeelist'); // Navigating to employee list page after successful deletion
    } catch (error) {
      setError('Error deleting employee. Please try again.');
    }
  };

  const handleConfirm = () => {
    setDeleteConfirmed(true);
    handleDelete(); // This will initiate the deletion process
  };

  const handleCancel = () => {
    navigate('/employee-list'); // Navigating back to employee list page if deletion is canceled
  };

  return (
    <div>
    <Header/>
    <div className="container-fluid bg-warning ">
            <div className="row">
   <div className="col-6 col-sm-2">
       <Sidebar/>
       </div>
    <div className="container  col-lg-6 text-center offset-md-6 justify-content-center  " >
    <div className="text-center">
      <h2>Delete Employee with ID: {id}</h2>
      {error && <p className="text-danger">{error}</p>}
      {!deleteConfirmed && (
        <div>
          <p>Are you sure you want to delete this employee?</p>
          <button className="btn btn-danger me-2" onClick={handleConfirm}>Yes</button>
          <button className="btn btn-secondary" onClick={handleCancel}>No</button>
        </div>
      )}
    </div>
  </div>
  </div>
  </div>
  </div>
  
);
};
  

export default Deleteval;

