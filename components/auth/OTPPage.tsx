import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@nextui-org/button"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input"

import { useRouter } from 'next/navigation';


const OtpPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [timer, setTimer] = useState(60);
  const [lastDigitEntered, setLastDigitEntered] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index === 5 && value !== '') {
      setLastDigitEntered(true);
    } else {
      setLastDigitEntered(false);
    }

    // Check if all OTP fields are filled to show "Submit OTP" button
    setShowSubmitButton(newOtp.every((digit) => digit !== ''));

    if (index < 5 && value !== '') {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    } else if (index > 0 && value === '') {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }

    if (index === 5 && value !== '') {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }
  };

  const handleResend = () => {
    setTimer(60);
    // Add your logic for resending OTP here
  };

  const router = useRouter();


  const handleLogin = () => {
    // Perform login logic here
    // Once login is successful, navigate to the dashboard
    router.push('/dashboard');
  };

  const handleSubmit = () => {
    // Add your logic to validate the OTP
    // const isCorrect = validateOtp(otp.join('')); // Replace with your OTP validation logic
    // if (!isCorrect) {
    //   // Handle incorrect OTP
    //   return;
    // }

    // OTP is correct, proceed with further actions
  };

  return (
    <div>
      <p className='pb-4'>Please paste the OTP sent to you into the boxes below</p>
      <div className="otp-input-container flex gap-2 border-collapse">
        {otp.map((value, index) => (
          <Input
            key={index}
            id={`otp-input-${index}`}
            value={value}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            maxLength={1}
            autoFocus={index === 0}
          />
        ))}
      </div>

      {timer > 0 ? (
        <p className='py-4'>OTP will expire in {timer} seconds</p>
      ) : (
        <p className='py-4'>Click the "Resend OTP" button to resend OTP</p>
      )}

      <div className='flex justify-between'>
        <Button
          ref={buttonRef}
          onClick={handleResend}
          color="primary"
          className=' bg-transparent text-[skyblue] text-xl'
        >
          Resend OTP
        </Button>

        {showSubmitButton && (
          <Button onClick={handleLogin}
            // onClick={handleSubmit}
            color="primary"
            disabled={!lastDigitEntered}
          >
            Submit OTP
          </Button>
        )}
      </div>

    </div>
  );
};

export default OtpPage;
