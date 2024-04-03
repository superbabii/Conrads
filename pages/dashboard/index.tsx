import React, { useState } from 'react';
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import Link from "next/link";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "About | Conrads Consult & Engineering",
    description: "This is About Page for Conrads Consult & Engineering",
};

const Dashboard = () => {

    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        company: 'XYZ Corporation',
        country: 'United States',
        city: 'New York',
        balance: '$1000',
        email: 'john@example.com',
        phoneNumber: '+1 (123) 456-7890'
    });

    const [isChanged, setIsChanged] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setProfileData({ ...profileData, [id]: value });
        setIsChanged(true);
    };

    const handleSave = () => {
        console.log('Saving profile:', profileData);
        setIsChanged(false);
    };

    return (
        <Layout>
            <Breadcrumb
                pageName="My Account"
                heading = "Profile"
                description="Conrads Consult & Engineering is a company working in the field of consulting for sales and management support. Our company has a team of expert for the mechanical design of test instrument and equipment."
                backgroundImageUrl="/images/Breadcrumb/background.png"
            />
            {/* <div className="radial-bgone hidden lg:block"></div> */}
            <div className='mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='relative'>
                        <div className='flex justify-center items-center h-120 bg-gray-200 overflow-hidden'>
                            <label htmlFor='userPhoto' className='cursor-pointer'>
                                <img id='userPhotoPreview' src='/images/UserDashboard/sample.png' alt='User Photo' className='w-full h-full object-cover rounded-2xl' />
                                <input type='file' id='userPhoto' name='userPhoto' accept='image/*' className='hidden' />
                            </label>
                        </div>
                    </div>
                    <div className='relative text-container'>
                        {/* <h2 className='text-3xl lg:text-5xl pt-4 font-bold sm:leading-tight mt-5 text-center text-white'>
                            Profile
                        </h2> */}
                        <div className='mt-0'>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='name' className='font-medium text-lg text-maingray'>
                                    Name:
                                </label>
                                <input type='text' id='name' value={profileData.name} onChange={handleChange} className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='company' className='font-medium text-lg text-maingray'>
                                    Company:
                                </label>
                                <input type='text' id='company' value={profileData.company} onChange={handleChange} className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='country' className='font-medium text-lg text-maingray'>
                                    Country:
                                </label>
                                <input type='text' id='country' value={profileData.country} onChange={handleChange} className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='city' className='font-medium text-lg text-maingray'>
                                    City:
                                </label>
                                <input type='text' id='city' value={profileData.city} onChange={handleChange} className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='balance' className='font-medium text-lg text-maingray'>
                                    Balance:
                                </label>
                                <input type='text' id='balance' value={profileData.balance} onChange={handleChange} className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='email' className='font-medium text-lg text-maingray'>
                                    Email:
                                </label>
                                <input type='email' id='email' value={profileData.email} onChange={handleChange} className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='phoneNumber' className='font-medium text-lg text-maingray'>
                                    Phone Number:
                                </label>
                                <input type='tel' id='phoneNumber' value={profileData.phoneNumber} onChange={handleChange} className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500' />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                onClick={handleSave}
                                disabled={!isChanged}
                                className={`mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isChanged ? '' : 'opacity-50 cursor-not-allowed'}`}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;

export const getStaticProps: GetStaticProps<Props> = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
            'header',
            'footer',
        ])),
    },
})
