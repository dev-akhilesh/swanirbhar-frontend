// auth.js

import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const signup = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return { user, login, signup, logout };
};
