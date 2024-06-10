// Signup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import '../assets/styles/AuthForm.css'; // Import CSS for styling


const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const user = { email, password };
            signup(user);
            navigate('/login');
        } else {
            setError('Passwords do not match');
        }
    };

    return (
        <div className="auth-form">
            <h2>Signup Page</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn">Signup</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Signup;

