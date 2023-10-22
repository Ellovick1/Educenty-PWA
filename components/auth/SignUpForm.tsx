"use client"

import React, { useState } from 'react';
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import Image from 'next/image';
import GoogleImg from "@/public/assets/google-img.png"
// import Link from "next/link"
// import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation';

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/dropdown";

import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
} from "@nextui-org/card";

// import { Checkbox } from "@nextui-org/react";
import OtpPage from './OTPPage';
import AuthLayout from './shared/AuthLayout';

interface StepProps {
    onNext: () => void;
    onPrev: () => void;
}

function StepOne({ onPrev, onNext }: StepProps) {
    return (
        <div>
            <Card className="border-none shadow-none bg-transparent">
                <div className="mb-3 mx-6 flex justify-center items-center border rounded-2xl ">
                    <Image src={GoogleImg} alt='google img' className=' w-10' />
                    Sign up with Google
                </div>
                <CardBody className="grid gap-4">

                    <div className="grid gap-2">
                        <Input id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="grid gap-2">
                        <Input id="email" type="email" placeholder="Email" />
                    </div>

                    <div className="grid gap-2">
                        <div className='flex gap-2'>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button className='w-[20px] min-w-unit-10'
                                        variant="bordered"
                                    >
                                        NGN
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">GHA</DropdownItem>
                                    <DropdownItem key="copy">ARG</DropdownItem>
                                    <DropdownItem key="edit">IVR</DropdownItem>                        
                                </DropdownMenu>
                            </Dropdown>

                            <Input id="text" type="phonenumber" placeholder="Phone number" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between space-x-2">
                        <Button onClick={onPrev} disabled>Previous</Button>
                        <Button onClick={onNext}>Next</Button>

                    </div>
                </CardBody>

                <CardFooter className="flex flex-col items-start">

                </CardFooter>
            </Card>

        </div>
    );
}

function StepTwo({ onPrev, onNext }: StepProps) {
    return (
        <div>
            <Card className="border-none shadow-none bg-transparent">
                <div className="mb-3 mx-6 flex justify-center items-center text-sm border rounded-2xl">
                    <Image src={GoogleImg} alt='google img' className=' w-10' />
                    Sign up with Google
                </div>
                <CardBody className="grid gap-4">

                    <div className="grid gap-2">
                        <Input id="password" type="password" placeholder="Password" />
                    </div>

                    <div className="grid gap-2">
                        <Input id="password" type="password" placeholder="Password" />
                    </div>

                    <div className="flex items-center justify-between space-x-2">
                        <Button onClick={onPrev}>Previous</Button>
                        <Button onClick={onNext}>Next</Button>

                    </div>
                </CardBody>

                <CardFooter className="flex flex-col items-start">


                </CardFooter>
            </Card>

        </div>
    );
}


function StepThree({ }: StepProps) {
    return (
        <div>
            <OtpPage /> 

        </div>
    );
}


function SignupForm() {
    const router = useRouter();

    const handleLogin = () => {
        // Perform login logic here
        // Once login is successful, navigate to the dashboard
        router.push('/defaultEnv');
    };

    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => setCurrentStep(currentStep + 1);
    const handlePrev = () => setCurrentStep(currentStep - 1);

    return (
        <AuthLayout>

            <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-sm">

                {currentStep === 1 && <StepOne onNext={handleNext} onPrev={function (): void {
                    throw new Error('Function not implemented.');
                }} />
                }

                {currentStep === 2 && (
                    <StepTwo onPrev={handlePrev} onNext={handleNext} />
                )}

                {currentStep === 3 && (
                    <StepThree onPrev={handlePrev} onNext={handleNext} />
                )}

            </div>

        </AuthLayout>

    );
}

export default SignupForm;
