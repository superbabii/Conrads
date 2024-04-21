import React, { useState } from 'react';
import Link from "next/link";
import GoogleIcon from '@mui/icons-material/Google';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page | Conrads Consult & Engineering",
  description: "This is Sign Up Page for Conrads Consult & Engineering",
};

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false); // State to track password mismatch

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    // Reset password mismatch error when user types in either password field
    setPasswordMismatch(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate passwords before submission
    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true); // Set password mismatch error
      return;
    }
    // Passwords match, proceed with form submission
    console.log(formData);
  };

  return (
    <>
      <div className='radial-center hidden lg:block'></div>
      <div className='mx-auto max-w-[1360px] h-screen flex flex-col justify-center items-center p-4'>
        <div className="max-w-[500px] rounded-lg bg-transparent shadow-lg form-board px-12 py-8">
          <h2 className="mb-4 text-3xl font-bold text-white opacity-80 text-center">
            Create your account
          </h2>
          <p className="mb-11 text-center text-maingray">
            It&apos;s totally free and super easy
          </p>
          <button className="flex w-full text-lg text-white justify-center mainbutton rounded-md mb-4">
            <GoogleIcon className='mt-1 mr-3' />
            Sign up with Google
          </button>
          <div className="mb-4 flex items-center justify-center">
            <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
            <p className="w-full text-center text-white opacity-80">
              Or, register with your email
            </p>
            <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="font-medium text-lg text-maingray">
                Full Name:
              </label>
              <input type="text" id="name" value={formData.name} onChange={handleChange}
                placeholder="Enter your name *"
                className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="font-medium text-lg text-maingray">
                Work Email:
              </label>
              <input type="email" id="email" value={formData.email} onChange={handleChange}
                placeholder="Enter your email *"
                className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-medium text-lg text-maingray">
                Password:
              </label>
              <input type="password" id="password" value={formData.password} onChange={handleChange}
                placeholder="Enter your password *"
                className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="confirmPassword" className="font-medium text-lg text-maingray">
                Confirm Password:
              </label>
              <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                placeholder="Confirm your password *"
                className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                required
              />
            </div>
            {passwordMismatch && (
              <p className="text-yellow mb-4 text-center">Passwords do not match</p>
            )}
            <div className="mb-6">
              <button type="submit" className="flex w-full text-lg text-white justify-center mainbutton rounded-md">
                Sign up
              </button>
            </div>
          </form>
          <p className="mb-6 text-center text-maingray">
            Already using Startup?{" "}
            <Link href="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
          <p className="text-center text-maingray">
            <Link href="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
