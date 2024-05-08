// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/emp/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         // Successful login
//         setErrorMessage('');
//         navigate('/register'); // Redirect to the desired route upon successful login
//       }
//     } catch (error) {
//       // Handle invalid credentials or other errors
//       if (error.response.status === 401) {
//         setErrorMessage('Invalid username or password');
//       } else {
//         console.error('Error:', error);
//         setErrorMessage('Error logging in. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
//       <div className='form_container p-5 rounded bg-white'>
//       <div>
//         <img src='logo192.png'/>
//       </div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <h1 className='text-center'>Login</h1>
//           <div className='mb-2'>
//             <label htmlFor='username'>Username</label>
//             <input 
//               type='text' 
//               placeholder='Enter username' 
//               className='form-control'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className='mb-2'>
//             <label htmlFor='password'>Password</label>
//             <input 
//               type='password' 
//               placeholder='Enter password' 
//               className='form-control'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className='d-grid'>
//             <button className='btn btn-primary mt-4' type='submit'>Login</button>
//           </div>

//           {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
//         </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;   



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/emp/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         // Successful login
//         setErrorMessage('');
//         navigate('/register'); // Redirect to the desired route upon successful login
//       }
//     } catch (error) {
//       // Handle invalid credentials or other errors
//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Invalid username or password');
//       } else {
//         console.error('Error:', error);
//         setErrorMessage('Error logging in. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
//       <div className='form_container p-5 rounded bg-white'>
//         <form onSubmit={handleSubmit}>
//           <h1 className='text-center'>Login</h1>
//           <div className='mb-2'>
//             <label htmlFor='username'>Username</label>
//             <input 
//               type='text' 
//               placeholder='Enter username' 
//               className='form-control'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className='mb-2'>
//             <label htmlFor='password'>Password</label>
//             <input 
//               type='password' 
//               placeholder='Enter password' 
//               className='form-control'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className='d-grid'>
//             <button className='btn btn-primary mt-4' type='submit'>Login</button>
//           </div>

//           {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>} 
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/emp/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         // Successful login
//         setErrorMessage('');
//         navigate('/register'); // Redirect to the desired route upon successful login
//       }
//     } catch (error) {
//       // Handle invalid credentials or other errors
//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Invalid username or password');
//       } else {
//         console.error('Error:', error);
//         setErrorMessage('Error logging in. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary' >
//       <div className='row'>

//         <div className='image col-lg-6 col-sm-6' >
//           <h3 className='header'> welcome to react</h3>
//           <img src='logo192.png' alt='' />
//         </div>
//         <div className='value col-lg-6 col-sm-6'>
//           <h4 className='main'>Login here!</h4>
//           <div className='box-content'>

//             <form onSubmit={handleSubmit}>


//               <h3 className='text-center'>Login</h3>
//               <div className='mb-2'>
//                 <label htmlFor='username'>Username :</label>
//                 <input
//                   type='text'
//                   placeholder='Enter username'
//                   className='form-control'
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>

//               <div className='mb-2'>
//                 <label htmlFor='password'>Password :</label>
//                 <input
//                   type='password'
//                   placeholder='Enter password'
//                   className='form-control'
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <div className='d-grid'>
//                 <button className='btn btn-primary mt-4' type='submit'>Login</button>
//               </div>

//               {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

    /* <form onSubmit={handleSubmit}>
   
      <h1 className='text-center'>Login</h1>
      <div className='mb-2'>
        <label htmlFor='username'>Username</label>
        <input 
          type='text' 
          placeholder='Enter username' 
          className='form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className='mb-2'>
        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          placeholder='Enter password' 
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='d-grid'>
        <button className='btn btn-primary mt-4' type='submit'>Login</button>
      </div>

      {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>} 
    </form>
  */

//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import Register from './Register';
import EmployeeList from './EmployeeList';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/emp/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Successful login
        setErrorMessage('');
        navigate('/templates'); // Redirect to the "Templates" page upon successful login
      }
    } catch (error) {
      // Handle invalid credentials or other errors
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid username or password');
      } else {
        console.error('Error:', error);
        setErrorMessage('Error logging in. Please try again.');
      }
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary' >
      <div className='row'>
        <div className='image col-lg-6 col-sm-6' >
          <h3 className='header'> welcome to react</h3>
          <img src='logo192.png' alt='' />
        </div>
        <div className='value col-lg-6 col-sm-6'>
          <h4 className='main'>Login here!</h4>
          <div className='box-content'>
            <form onSubmit={handleSubmit}>
              <h3 className='text-center'>Login</h3>
              <div className='mb-2'>
                <label htmlFor='username'>Username :</label>
                <input
                  type='text'
                  placeholder='Enter username'
                  className='form-control'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='password'>Password :</label>
                <input
                  type='password'
                  placeholder='Enter password'
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='d-grid'>
                <button className='btn btn-primary mt-4' type='submit' style={{textAlign:"center"}}>Login</button>
              </div>
              {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
