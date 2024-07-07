import React, { useState } from 'react';
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../Services/allAPI';

const LoginForm = ({ toggleForm }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      setLoading(true);
      try {
        const result = await loginAPI(userData);
        console.log('login result:', result);
        if (result.status === 200) {
          setIsLoggedIn(true);
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);

          const userRole = result.data.user.role;
          console.log('userRole-------', userRole);
          setTimeout(() => {
            setUserData({ email: "", password: "" });
            setIsLoggedIn(false);
            setLoading(false);
            if (userRole === "admin") {
              navigate('/admindashboard/adminhome');
            } else {
              navigate('/userdashboard/userHome');
            }
          }, 2000);
        } else {
          if (result.response && result.response.status === 404) {
            alert(result.response.data);
          }
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        alert('An error occurred during login. Please try again.');
      }
    } else {
      alert('Please fill the form completely!');
    }
  };

  return (
    <div className='w-75'>
      <h2 style={{ color: '#004683' }} className="w-100 text-center mb-4">Login</h2>
      <form className='w-100' onSubmit={handleLogin}>
        <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
          <Form.Control value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" placeholder="name@example.com" required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
          <Form.Control value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" placeholder="Password" required />
        </FloatingLabel>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="text-center mt-3">
        <span>New user? </span>
        <button className="btn btn-link" onClick={toggleForm}>Register here</button>
      </div>
      {isLoggedIn &&
        <div className='text-center text-primary'>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      }
    </div>
  );
};

export default LoginForm;
