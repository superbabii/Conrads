import React from 'react';
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

const Imprint = () => {

    return (
        <Layout>
            <Breadcrumb
                pageName="Imprint"
                heading="Imprint"
                description="Conrads Consult & Engineering is a company working in the field of consulting for sales and management support. Our company has a team of expert for the mechanical design of test instrument and equipment."
                backgroundImageUrl="/images/Breadcrumb/contact.png"
                backgroundSMImageUrl="/images/Breadcrumb/contact_sm.png"
            />
            <div className='mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12'>
                
            </div>
        </Layout>
    );
};

export default Imprint;

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
