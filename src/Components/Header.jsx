// import React from 'react';
// import { FcSearch } from "react-icons/fc";
// import { PiDotsNineBold } from "react-icons/pi";
// import { IoMdNotifications } from "react-icons/io";

// const Header = () => {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light  "style={{height:"25px"}} >
    
//     <FcSearch />
//     <PiDotsNineBold  />
//     <IoMdNotifications style={{ color: 'gold', fontSize: '24px',justifyContent:"end" }}/>
   
    
  
// </nav>
   
//   )
// }

// export default Header


// import React from 'react';
// import { FcSearch } from "react-icons/fc";
// import { PiDotsNineBold } from "react-icons/pi";
// import { IoMdNotifications } from "react-icons/io";

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <FcSearch style={{ fontSize: '24px', marginRight: '10px' }} />
//         <PiDotsNineBold style={{ fontSize: '24px', marginRight: '10px' }} />
//         <IoMdNotifications style={{ fontSize: '24px' }} />
//       </div>
//     </nav>
//   );
// };

// export default Header;


import React from 'react';
import { FcSearch } from "react-icons/fc";
import { PiDotsNineBold } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
  <div className="container-fluid px-0"> {/* Adjust container class as needed */}
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
     {/* Nested container for the navbar content */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <FcSearch style={{fontSize:"35px",paddingLeft:"10px"}} />
          </li>
          <li className="nav-item">
            <PiDotsNineBold  style={{fontSize:"35px",paddingLeft:"10px"}}/>
          </li>
          <li className="nav-item">
            <IoMdNotifications style={{fontSize:"35px",paddingLeft:"10px",color: 'gold'}}/>
          </li>
        </ul>
        <form class="form-inline d-flex  ml-2">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{paddingLeft:"20px"}}/>
      <button class="btn btn-outline-success my-2 my-sm-0 " type="submit" >Search</button>
    </form>
      </div>
     */}
     {/* <a class="navbar-brand" href="#">Navbar</a> */}
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/templates" class="nav-link" style={{color:"yellow"}} > Home </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"red"}}>Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"orange"}}>
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" style={{color:"pink"}}>Disabled</a>
      </li>
    </ul>
    <ul className="navbar-nav" >
          <li className="nav-item">
            <FcSearch style={{fontSize:"35px",paddingLeft:"10px"}} />
          </li>
          <li className="nav-item">
            <PiDotsNineBold  style={{fontSize:"35px",paddingLeft:"10px",color:"white"}}/>
          </li>
          <li className="nav-item">
            <IoMdNotifications style={{fontSize:"35px",paddingLeft:"10px",color: 'gold'}}/>
          </li>
        </ul>
    <form class="form-inline d-flex">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
 
 </div>



  );
};
export default Header;
