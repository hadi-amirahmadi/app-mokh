import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const OTPInput = () => {
    const [otp, setOtp] = useState('');
    const { verifyOtp } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyOtp(otp)
            .then(() => {
                console.log('verify OTP successfully');
            })
            .catch((error) => {
                console.error('Failed to verify OTP', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center p-4">
            <label className="mb-2 text-lg">
                OTP:
                <input
                    type="number"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border rounded p-2 mt-2"
                />
            </label>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded mt-4">
                Verify OTP
            </button>
        </form>
    );
};

export default OTPInput;
