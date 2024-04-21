import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Work from "@/components/Work";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { RepeatingText } from "../../components/Effect/typing";

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "About | Conrads Consult & Engineering",
    description: "This is About Page for Conrads Consult & Engineering",
};

const successdata = [
    {
        imgSrc: '/images/About/project.png',
        heading: 'Successful Project',
        subheading: '5620+',
    },
    {
        imgSrc: '/images/About/expert.png',
        heading: 'Expert Engineer',
        subheading: '150+',
    },
    {
        imgSrc: '/images/About/cup.png',
        heading: 'Cup Of Cofee',
        subheading: '96+',
    },
    {
        imgSrc: '/images/About/satification.png',
        heading: 'Client Satisfaction',
        subheading: '3225+',
    },
]

const AboutUs = () => {
    return (
        <Layout>
            <Breadcrumb
                pageName="About Us"
                heading="Versatile Experts - Solutions for All."
                description="We pride ourselves on being versatile experts, ready to tackle any challenge and provide tailored solutions to meet the unique needs of our clients."
                backgroundImageUrl="/images/Breadcrumb/about.png"
                backgroundSMImageUrl="/images/Breadcrumb/about.png"
                height="320px"
            />
            
            <motion.div
                variants={staggerContainer(0.25, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='mx-auto max-w-[1360px] px-6 grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-y-12 my-12 lg:my-24'
            >
                {successdata.map((items, index) => (
                    <motion.div
                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        className="relative flex flex-col justify-between items-center bg-transparent transition-[flex] duration-[0.7s] ease-out-flex"
                        key={index}
                    >
                        <div className='work-card rounded-md flex'>
                            <div className='rounded-md bg-primary opacity-95 p-4'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={75} height={75} />
                            </div>
                            <div className='flex flex-col justify-center items-center w-[200px]'>
                                <h3 className='text-3xl font-semibold text-primary'>
                                    {items.subheading}
                                </h3>
                                <div className="w-full h-[1px] opacity-50 bg-maingray mb-2"></div>
                                <p className="text-md text-maingray text-center">
                                    {items.heading}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <div className='mx-auto max-w-[1360px] px-6 sm:py-4 lg:px-8 my-12'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="relative text-container">
                        <h2 className="text-3xl lg:text-5xl pt-4 font-bold sm:leading-tight mt-5 text-center text-white">
                            Our team belives you deserve <br /> only the best.
                        </h2>
                        <p className="text-lg font-medium text-center text-maingray pt-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor.
                        </p>
                    </div >
                    <div className='relative'>
                        <Image src="/images/About/team.png" alt="office-image" height={684} width={1296} className="mt-4 lg:mt-0 rounded-2xl" />
                    </div>
                </div>
            </div>
            <Work />
            <div className="about-wide-bg mt-16 lg:mt-32">
                <div className="mx-auto max-w-5xl py-36 px-6">
                    <h3 className="text-center text-white text-3xl lg:text-5xl font-semibold mb-6">
                        Endless <RepeatingText title1='Possibilities' title2='Opportunities' />
                    </h3>
                    <p className="text-center text-white text-lg font-normal mb-8">
                        Anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances
                        occur in which toil and pain can procure him some great pleasure.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-16">
                        <Link href="/services" className='text-lg text-white mainbutton rounded-full' style={{ width: '200px' }}>
                            OUR SERVICES
                        </Link>
                        <Link href="/products" className='text-lg text-white mainbutton rounded-full' style={{ width: '200px' }}>
                            OUR PRODUCTS
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;

export const getStaticProps: GetStaticProps<Props> = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
            'header',
            'footer',
            'work',
            'breadcrumb'
        ])),
    },
})
