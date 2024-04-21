import React, { useState } from 'react';
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
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
                heading="User Information"
                description="Manage your account details and preferences"
                backgroundImageUrl=""
                backgroundSMImageUrl=""
                height="120px"
            />
            <div className='mx-auto max-w-[1360px] px-4 sm:py-4 lg:px-8 my-12'>
                <div className="rounded-lg bg-transparent shadow-lg form-board px-8 md:px-16 py-12">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mx-4">
                            {Object.entries(profileData).map(([key, value]) => (
                                <div className="w-full px-4" key={key}>
                                    <label htmlFor={key} className="font-medium text-lg text-maingray capitalize">
                                        {key}:
                                    </label>
                                    <input
                                        type="text"
                                        id={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex justify-end">
                            <button
                                className='w-[50%] md:w-[25%] text-lg text-white mt-8 mainbutton rounded-md'
                                onClick={handleSave}
                                disabled={!isChanged} // Disable the button if no changes are made
                            >
                                Save
                            </button>
                        </div>
                    </form>
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
            'breadcrumb'
        ])),
    },
})
