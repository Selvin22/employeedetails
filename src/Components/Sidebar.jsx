// import React from 'react';
// import './sidebar.css'; // Import the CSS file for additional styling
// import Header from './Header';
// import { Link } from 'react-router-dom';


// const Sidebar = () => {
//   return (
    
//     <div className="sidebar ">
    
//       <Link  to="/register">Register</Link><br></br>
//       <Link to="/employeelist">GET All Employees</Link><br></br>
//       <Link to="/getid">GetId</Link><br></br>
//       <Link to="/update">Update</Link><br></br>
//       <Link to="/delete" >Delete</Link>
//     </div>
//   );
// };.......................................

// export default Sidebar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="container-fluid bg-black">
//       <div className="row">
//         <div className="col">
//         <div className="d-flex  h-100 bg-black">
//           <div className="list-group">
//             <Link to="/register" >Register</Link>
//             <Link to="/employeelist" >GET All Employees</Link>
//             <Link to="/getid" >GetId</Link>
//             <Link to="/update" >Update</Link>
//             <Link to="/delete" >Delete</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Sidebar = () => {
  return (
    <div className="container-fluid px-0" style={{ maxWidth: "100vw" }}> {/* Set maxWidth to prevent horizontal scrolling */}
    {/* <Header /> */}
    <div className="row">
      <div className="col-6 col-sm-8 bg-dark px-0" style={{ minHeight: "92vh" }}> {/* Adjust the column width for different screen sizes */}
          <div className="list-group px-1">
            <Link to="/register" >Register</Link>
            <Link to="/employeelist"> GET All Employees</Link>
            <Link to="/getid" >GetId</Link>
            <Link to="/update" >Update</Link>
            <Link to="/delete" >Delete</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Sidebar;




