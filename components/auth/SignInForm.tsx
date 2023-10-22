"use client"

import { Metadata } from "next"
// import Image from "next/image"
import Link from "next/link"

// import { cn } from "@/lib/utils"
import { Button } from "@nextui-org/button"
import {
  Card,
  CardFooter, CardBody,
  CardHeader
} from "@nextui-org/card"
import { Checkbox } from "@nextui-org/checkbox"
import { Input } from "@nextui-org/input"
import AuthLayout from "./shared/AuthLayout"
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: "SignIn",
  description: "SignIn page.",
}

export default function SignInForm() {
  const router = useRouter();

  const handleLogin = () => {
    // Perform login logic here
    // Once login is successful, navigate to the dashboard
    router.push('/defaultEnv');
  };

  return (
    <AuthLayout>
        <Card className="border-none shadow-none bg-transparent">
          <CardBody className="grid gap-4">
            <CardHeader className="text-xl text-left">
              Sign in
            </CardHeader>
            <div className="grid gap-x-2">
              <Input id="email" type="email" placeholder="User name, email, or phone number" />
            </div>
            <div className="grid gap-2">
              <Input id="password" type="password" placeholder="Password" />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <Button className="w-1/3" onClick={handleLogin}>Signup</Button>
              <div>
                <Checkbox id="terms" className=" rounded-none"/>
                <label
                  htmlFor="terms"
                  className="pl-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Stay Signed in
                </label>
              </div>
            </div>
          </CardBody>

          <CardFooter className="flex flex-col items-start">

            <p className="mt-2 text-xs pl-3">
              {" "}
              Trouble Signing in?{" "}
              <span className=" hover:underline">
                {/* Sign up */}
              </span>
            </p>
          </CardFooter>
        </Card>


    </AuthLayout>
  )
}
