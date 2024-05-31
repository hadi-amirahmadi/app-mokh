import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const validateMobileNumber = (number) => {
    const mobileNumberPattern = /^[0-9]{11}$/;
    return mobileNumberPattern.test(number);
};
const MobileNumberInput = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const { sendOtp } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateMobileNumber(mobileNumber)) {
            setError('');
            sendOtp(mobileNumber)
                .then(() => {
                    console.log('OTP sent successfully');
                })
                .catch((error) => {
                    console.error('Failed to send OTP', error);
                });
        } else {
            setError('Please enter a valid mobile number');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center p-4">
            <label className="mb-2 text-lg">
                Mobile Number:
                <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="border rounded p-2 mt-2"
                />
            </label>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                Send OTP
            </button>
        </form>
    );
};

export default MobileNumberInput;
