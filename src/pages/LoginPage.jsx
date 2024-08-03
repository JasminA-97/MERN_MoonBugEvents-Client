// src/components/LoginPage.jsx

import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css'; // Import your custom styles for the login page
import LogoHeader from '../components/LogoHeader';

const LoginPage = () => {
    return (
        <div className="login-page">   
            <LoginForm />
        </div>
    );
};

export default LoginPage;
