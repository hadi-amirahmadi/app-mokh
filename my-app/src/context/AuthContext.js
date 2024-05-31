import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider
            value={{ step, setStep, mobileNumber, setMobileNumber, otp, setOtp, isAuthenticated, setIsAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};
