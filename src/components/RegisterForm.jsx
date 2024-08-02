import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { registerAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';


const RegisterForm = ({ toggleForm }) => {
  const navigate = useNavigate()
  const [ userData,setUserData]=useState({username:"", email:"", password:"", phone:""})
  // console.log(userData);

  const handleRegister = async(e)=>{
    e.preventDefault()
    if(userData.username && userData.email && userData.password && userData.phone){
      //apicall
      try{
        const result = await registerAPI(userData);
        // console.log(result);
        if(result.status == 200){
          alert(`Welcome ${userData.username}, Please Login`);
          setUserData({username:"", email:"", password:"", phone:""})
          navigate('/login');
        }else{
          if(result.response.status == 406){
            alert(result.response.data)
            setUserData({username:"", email:"", password:"", phone:""})
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert('pls fill the form')
    }
  }
  return (
    <div className='registerForm'>
      <h2 className="text-center mb-4">Register</h2>
      <form>
        <FloatingLabel controlId="floatingInputUname" label="Username" className="mb-3">
          <Form.Control value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="Username" required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3">
          <Form.Control  value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="name@example.com" required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputPassword" label="Password" className='mb-3'>
          <Form.Control  value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Password" required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputPhone" label="Phone Number" className='mb-3'>
          <Form.Control  value={userData.phone} onChange={e=>setUserData({...userData,phone:e.target.value})} type="text" placeholder="Phone Number" required />
        </FloatingLabel>
        <button onClick={handleRegister} type="submit" className="registerButton text-light fw-bolder btn w-100">Register</button>
      </form>
      <div className="text-center mt-3">
        <span>Already have an account? </span>
        <button className="btn btn-link" onClick={toggleForm}>Login here</button>
      </div>
    </div>
  );
};

export default RegisterForm;
