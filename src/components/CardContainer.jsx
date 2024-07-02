import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardContainer.css';

const CardContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (location.pathname === '/register') {
      setIsFlipped(true);
    } else if (location.pathname === '/login') {
      setIsFlipped(false);
    }
  }, [location]);

  const toggleForm = () => {
    if (isFlipped) {
      navigate('/login');
    } else {
      navigate('/register');
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-face front-face">
          <LoginForm toggleForm={toggleForm} />
        </div>
        <div className="card-face back-face">
          <RegisterForm toggleForm={toggleForm} />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
