import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';

import Sidebar from './Components/Sidebar';
import Templates from './Components/Templates';
import Register from './Components/Register';
import EmployeeList from './Components/EmployeeList';
import GetId from './Components/GetId';
import Delete from './Components/Delete';
import Update from './Components/Update'
import Deleteval from './Components/Deleteval';
import Updatebu from './Components/Updatebu';







function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
      
          

          <Route path='/templates' element={<Templates/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          

          <Route path="/getid" element={<GetId />} />
          
          <Route path="update" element={<Update />} />
          <Route path="update/:id" element={<Updatebu />} />

          <Route path="delete" element={<Delete />} />
          <Route path="delete/:id" element={<Deleteval />} />
          
          
         
          
        </Routes> 
      </Router>
    </div>

  );
}

export default App;
