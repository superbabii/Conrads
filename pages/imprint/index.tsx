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
    title: "Imprint | Conrads Consult & Engineering",
    description: "This is the Impressum page for Conrads Consult & Engineering",
};

const Imprint = () => {
    return (
        <Layout>
            <Breadcrumb
                pageName="Imprint"
                heading="Imprint"
                description="This is the Impressum page for Conrads Consult & Engineering"
                backgroundImageUrl="/images/Breadcrumb/contact.png"
                backgroundSMImageUrl="/images/Breadcrumb/contact_sm.png"
            />
            <div className='mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12 text-maingray'>
                <h1>Impressum</h1>
                <p><strong>Name:</strong> Conrads Consult & Engineering</p>
                <p><strong>Address:</strong> 123 Main Street, Berlin, Germany</p>
                <p><strong>Email:</strong> info@conrads-consult.com</p>
                <p><strong>Phone:</strong> +49 123 456789</p>
                <p><strong>Register Court:</strong> Amtsgericht Berlin</p>
                <p><strong>Register Number:</strong> HRB 123456</p>
                <p><strong>VAT Number:</strong> DE123456789</p>
                <p><strong>Managing Director:</strong> John Smith</p>
                <p><strong>Regulatory Authority:</strong> Bezirksamt Berlin-Mitte</p>
                <p><strong>Disclaimer:</strong> Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>
                <p><strong>Copyright:</strong> © {new Date().getFullYear()} Conrads Consult & Engineering. All rights reserved.</p>
                <h2>Professional Liability Insurance:</h2>
                <p>Provider: XYZ Insurance Company</p>
                <p>Policy Number: 123456789</p>
                <p>Scope: Germany</p>
                <h2>EU Dispute Resolution</h2>
                <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>. Our email address can be found above in the Impressum.</p>
                <h2>Consumer Dispute Resolution</h2>
                <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
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
