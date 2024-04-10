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
                pageName="imprint"
                heading="Imprint"
                description=""
                backgroundImageUrl="/images/Breadcrumb/imprint.png"
                backgroundSMImageUrl="/images/Breadcrumb/contactt_sm.png"
                height="200px"
            />
            <div className='mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 text-maingray text-center'>
                <p><strong className='text-white'>Name:</strong> Conrads Consult & Engineering</p>
                <p><strong className='text-white'>Address:</strong> Münderhäuser Straße 31, 36199 <br /> Rotenburg an der Fulda, <br /> Germany </p>
                <p><strong className='text-white'>Email:</strong> info@conrads-engineering.com</p>
                <p><strong className='text-white'>Phone:</strong> +49 (66) 234 3645 10</p>
                <p><strong className='text-white'>Register Court:</strong> Amtsgericht Berlin</p>
                <p><strong className='text-white'>Register Number:</strong> HRB 123456</p>
                <p><strong className='text-white'>VAT Number:</strong> DE123456789</p>
                <p><strong className='text-white'>Managing Director:</strong> Werner Conrads</p>
                <p><strong className='text-white'>Regulatory Authority:</strong> Bezirksamt Berlin-Mitte</p>
                <p><strong className='text-white'>Disclaimer:</strong> Despite careful content control, we assume no liability for the content of external links. <br />
                The operators of the linked pages are solely responsible for their content.</p>
                <p><strong className='text-white'>Copyright:</strong> © {new Date().getFullYear()} Conrads Consult & Engineering. All rights reserved.</p>
                <h2 className='text-lg text-white'>Professional Liability Insurance:</h2>
                <p>Provider: XYZ Insurance Company</p>
                <p>Policy Number: 123456789</p>
                <p>Scope: Germany</p>
                <h2 className='text-lg text-white'>EU Dispute Resolution</h2>
                <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>. <br />
                Our email address can be found above in the Impressum.</p>
                <h2 className='text-lg text-white'>Consumer Dispute Resolution</h2>
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
