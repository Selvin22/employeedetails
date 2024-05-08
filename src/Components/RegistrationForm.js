import React from 'react';

const RegistrationForm = ({
  onSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  salary,
  setSalary,
  username,
  setUsername,
  password,
  setPassword,
  firstNameError,
  lastNameError,
  salaryError,
  usernameError,
  passwordError,
}) => {
  return (
    <div className="register-form">
      <div className="employee-header">
        <h1>Add Employee</h1>
      </div>
      <center>
        <div className='form-adjust'>
          <form onSubmit={onSubmit}><br></br>
            <h4>Register for free</h4>
            <div><br></br>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>
            </div>
            <div><br></br>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div className="error-message">{lastNameError}</div>
            </div>
            <div><br></br>
              <label style={{ paddingRight: '25px' }}>Salary:</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <div className="error-message">{salaryError}</div>
            </div>
            <div><br></br>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="error-message">{usernameError}</div>
            </div>
            <div><br></br>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="error-message">{passwordError}</div>
            </div><br></br>
            <button type="submit" className="btn btn-danger btn-sm">Register</button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default RegistrationForm;

