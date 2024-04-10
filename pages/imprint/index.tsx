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
                backgroundImageUrl=""
                backgroundSMImageUrl=""
                height="150px"
            />
            <div className='mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 text-maingray text-lg my-12'>
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>Owner:</span>
                    <span>Conrads Consult & Engineering</span>
                </div>
                <br />
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>Address:</span>
                    <span>Münderhäuser Straße 31, <br />36199 Rotenburg an der Fulda, <br /> Germany</span>
                </div>
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>Email:</span>
                    <span>info@conrads-engineering.com</span>
                </div>
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>Phone:</span>
                    <span>+49 (66) 234 3645 10</span>
                </div>
                <br />
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>Register Court:</span>
                    <span>Amtgericht Bad Hersfeld</span>
                </div>
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>Register Number:</span>
                    <span>HRB 22634154</span>
                </div>
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>VAT Number:</span>
                    <span>DE 275478059</span>
                </div>
                <br />
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>CEO:</span>
                    <span>Werner Conrads</span>
                </div>
                <br />
                <div className='flex gap-x-4'>
                    <span className='text-white inline-block'>Regulatory Authority:</span>
                    <span>Bad Hersfeld - Rotenburg</span>
                </div>
                <br />

                <div className='inline-block'>
                    <span>Website developed with Next.js by Nazar Babii and Conrads Consult & Engineering.</span>
                </div>
                <br />
                <div className='inline-block'>
                    <span>Images designed by Nazar Babii and freepik.com</span>
                </div>
                <br />
                <br />

                <h2 className='text-white text-2xl lg:text-4xl mb-3'>Disclaimer</h2>
                <div className='text-lg'>
                    Despite careful content control, we assume no liability for the content of external links. <br />
                    The operators of the linked pages are solely responsible for their content.
                </div>
                <br />
                <h2 className='text-white text-2xl lg:text-4xl mb-3'>Copyright</h2>
                <div className='text-lg'>
                    Copyright © {new Date().getFullYear()} Conrads Consult & Engineering. All rights reserved.
                </div>
                <br />
                <h2 className='text-white text-2xl lg:text-4xl mb-3'>Professional Liability Insurance</h2>
                <div className='text-lg'>Provider: Taunussparkasse (Bad Homburg)</div>
                <div className='text-lg'>Policy Number: 123456789</div>
                <div className='text-lg'>Scope: Europe</div>
                <br />
                <h2 className='text-white text-2xl lg:text-4xl mb-3'>EU Dispute Resolution</h2>
                <div className='text-lg'>The European Commission provides a platform for online dispute resolution (ODR): <a className='text-primary' href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>. <br />
                    Our email address can be found above in the Impressum.</div>
                <br />
                <h2 className='text-white text-2xl lg:text-4xl mb-3'>Consumer Dispute Resolution</h2>
                <div className='text-lg'>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</div>
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
