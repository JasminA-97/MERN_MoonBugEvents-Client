import React, { useState } from 'react';
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../Services/allAPI';

const LoginForm = ({ toggleForm }) => {
  const navigate = useNavigate()
  const [ isLoggedIn, setIsLoggedIn] = useState(false)
  const [ userData,setUserData]=useState({email:"", password:""})
  console.log(userData);

  const handleLogin = async(e) => {
    e.preventDefault();
    // Add login logic here
    if(userData.email && userData.password){
      try{
        const result = await loginAPI(userData)
        console.log('login result:',result);
        if(result.status == 200){
          setIsLoggedIn(true);
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
         
          // Check user role and navigate accordingly
          const userRole = result.data.user.role;
          console.log('userRole-------',userRole);
          setTimeout(() => {
            setUserData({ email: "", password: "" });
            setIsLoggedIn(false);
            if (userRole === "admin") {
              navigate('/admindashboard/adminhome');
            } else {
              navigate('/userdashboard/userHome');
            }
          }, 2000);

        }else{
          if(result.response.status == 404){
            alert(result.response.data)
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert('please fill the form completely!!!')
    }
  };

  return (
    <div>
      <h2 style={{color:'#004683'}} className="text-center mb-4">Login</h2>
      <form>
        <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
          <Form.Control  value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="name@example.com" required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
          <Form.Control  value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Password" required />
        </FloatingLabel>
        <button onClick={handleLogin} type="submit" className="btn btn-primary w-100">Login
          {
            isLoggedIn&&
            <Spinner animation="grow" size="sm" />
          }
        </button>
      </form>
      <div className="text-center mt-3">
        <span>New user? </span>
        <button className="btn btn-link" onClick={toggleForm}>Register here</button>
      </div>
    </div>
  );
};

export default LoginForm;
