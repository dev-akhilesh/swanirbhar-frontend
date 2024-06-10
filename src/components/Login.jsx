// LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import '../assets/styles/AuthForm.css'; // Import CSS for styling

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.email === email && userData.password === password) {
            login(userData);
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="auth-form">
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
