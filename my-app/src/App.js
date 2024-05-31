import React, { useContext } from 'react';
import MobileNumberInput from './components/MobileNumberInput';
import OTPInput from './components/OTPInput';
import WebsiteContent from './pages/WebsiteContent';
import { AuthContext, AuthProvider } from './context/AuthContext';

const App = () => {
    const { step } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {step === 1 && <MobileNumberInput />}
            {step === 2 && <OTPInput />}
            {step === 3 && <WebsiteContent />}
        </div>
    );
};

const Root = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

export default Root;
