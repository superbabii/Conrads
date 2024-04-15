import React, { useState } from 'react';
import Link from "next/link";
import GoogleIcon from '@mui/icons-material/Google';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In Page | Conrads Consult & Engineering",
  description: "This is Sign In Page for Conrads Consult & Engineering",
  // other metadata
};

const SigninPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here, e.g., validation, API call
    console.log(formData);
  };
  return (
    <>
      <div className='radial-center hidden lg:block'></div>
      <div className='mx-auto max-w-7xl h-screen flex flex-col justify-center items-center p-4'>
        <div className="max-w-[500px] rounded-lg bg-transparent shadow-lg form-board px-12 py-8">
          <h2 className="mb-4 text-3xl font-bold text-white opacity-80 text-center">
            Sign in to your account
          </h2>
          <p className="mb-11 text-center text-maingray">
            Login to your account for a faster checkout.
          </p>
          <button className="flex w-full text-lg text-white justify-center mainbutton rounded-md mb-4">
            <GoogleIcon className='mt-1 mr-3' />
            Sign in with Google
          </button>
          <div className="mb-4 flex items-center justify-center">
            <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
            <p className="w-full text-center text-white opacity-80">
              Or, sign in with your email
            </p>
            <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="font-medium text-lg text-maingray">
                Work Email:
              </label>
              <input type="email" id="email" value={formData.email} onChange={handleChange}
                placeholder="Enter your email *"
                className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="font-medium text-lg text-maingray">
                Password:
              </label>
              <input type="password" id="password" value={formData.password} onChange={handleChange}
                placeholder="Enter your password *"
                className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-6">
              <button type="submit" className="flex w-full text-lg text-white justify-center mainbutton rounded-md">
                Sign in
              </button>
            </div>
          </form>
          <p className="text-center text-maingray">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
