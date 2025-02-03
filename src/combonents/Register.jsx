import React, { useState } from 'react';

import { Link, useNavigate} from 'react-router-dom';
import { registerUser } from '../api/api';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' ,first_name: "", last_name: ""});
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      
      alert(response.data.message);
      navigate('/login')

    } catch (err) {
      console.error(err);
    }
  };

  return (
   
    <div className='sign' style={{height:"700px",width:"700px",marginLeft:"10px",marginTop:"100px",fontSize:"20px"}}>
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: 'column', gap: "15px" }}>
    <h1 className="h3 mb-3 fw-normal">Sign up</h1>

    <div className="form-floating">
      <input 
      type="email" 
      className="form-control" 
      id="floatingInput" 
      placeholder="name@example.com"
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input 
      type="password" 
      className="form-control" 
      id="floatingPassword" 
      placeholder="Password"
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input 
      type="text" 
      className="form-control" 
      id="floatingFirstName" 
      placeholder="first_name"
      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}/>
      <label htmlFor="floatingFirstName">First Name</label>
    </div>
    <div className="form-floating">
      <input 
      type="text" 
      className="form-control" 
      id="floatingLastName" 
      placeholder="last_name"
      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}/>
      <label htmlFor="floatingLastName">Last Name</label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
  </form>
  <Link to='/login'>sign in</Link>

  </div>
  );
};

export default Register;