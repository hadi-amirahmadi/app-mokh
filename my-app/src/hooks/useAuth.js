import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
    const { setStep, setMobileNumber, setOtp, setIsAuthenticated } = useContext(AuthContext);

    const sendOtp = async (mobileNumber) => {
        try {
            // Replace with actual API call
            await axios.post('/api/send-otp', { mobileNumber });
            setMobileNumber(mobileNumber);
            setStep(2);
        } catch (error) {
            console.error('Failed to send OTP', error);
        }
    };

    const verifyOtp = async (otp) => {
        try {
            // Replace with actual API call
            const response = await axios.post('/api/verify-otp', { otp });
            if (response.data.success) {
                setOtp(otp);
                setIsAuthenticated(true);
                setStep(3);
            } else {
                alert('Invalid OTP');
            }
        } catch (error) {
            console.error('Failed to verify OTP', error);
        }
    };

    return { sendOtp, verifyOtp };
};
