import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Work from "@/components/Work";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { RepeatingText } from "../../components/Effect/typing"

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "About | Conrads Consult & Engineering",
    description: "This is About Page for Conrads Consult & Engineering",
};

// CAROUSEL DATA

interface DataType {
    role: string;
    name: string;
    imageUrl: string;
    socialLinks: { name: string; url: string; }[];
}

const teamMembers: DataType[] = [
    {
        role: 'Co-founder',
        name: 'John Doe',
        imageUrl: '/images/wework/avatar.svg',
        socialLinks: [
            { name: 'Twitter', url: 'https://twitter.com/johndoe' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe/' },
        ],
    },
    {
        role: 'Electronic Engineer',
        name: 'John Doe',
        imageUrl: '/images/wework/avatar3.svg',
        socialLinks: [
            { name: 'Twitter', url: 'https://twitter.com/johndoe' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe/' },
        ],
    },
    {
        role: 'FPGA Programmer',
        name: 'John Doe',
        imageUrl: '/images/wework/avatar4.svg',
        socialLinks: [
            { name: 'Twitter', url: 'https://twitter.com/johndoe' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe/' },
        ],
    },
    {
        role: 'Software Developer',
        name: 'John Doe',
        imageUrl: '/images/wework/avatar.svg',
        socialLinks: [
            { name: 'Twitter', url: 'https://twitter.com/johndoe' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe/' },
        ],
    },
    {
        role: 'Accountant',
        name: 'John Doe',
        imageUrl: '/images/wework/avatar3.svg',
        socialLinks: [
            { name: 'Twitter', url: 'https://twitter.com/johndoe' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe/' },
        ],
    },
]

interface successdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const successdata: successdata[] = [
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
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        rtl: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <Layout>
            <Breadcrumb
                pageName="About Us"
                heading="Versatile Experts - Solutions for All."
                description="We pride ourselves on being versatile experts, ready to tackle any challenge and provide tailored solutions to meet the unique needs of our clients."
                backgroundImageUrl="/images/Breadcrumb/background.png"
            />
            {/* <div className="radial-bgone hidden lg:block"></div> */}
            <div className='mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='relative'>
                        <img src="/images/About/ceo.jpg" alt="CEO-image" className="rounded-2xl sm:w-64 sm:h-auto lg:w-96 lg:h-auto mx-auto" />
                    </div>
                    <div className="relative text-container">
                        <h2 className="text-3xl lg:text-5xl pt-4 font-bold sm:leading-tight mt-5 text-center text-white">
                            Dedicated to help people&apos;s needs.
                        </h2>
                        <p className="font-medium text-lg mt-5 text-center text-maingray">
                            Dedicated to fulfilling people&apos;s needs, our mission is to provide innovative solutions that address challenges and enhance lives. With a commitment to customer satisfaction and social responsibility, we strive to make a positive impact in communities and empower individuals to thrive.
                        </p>
                        <p className="text-lg font-semibold mt-12 lg:ml-32 preline text-center text-offwhite handwritten">
                            Werner Conrads, CEO
                        </p>
                    </div>
                </div>
            </div>
            <motion.div
                variants={staggerContainer(0.25, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-y-12 my-24'
            >
                {successdata.map((items, index) => (
                    <motion.div
                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        className="relative flex flex-col justify-between items-center bg-transparent transition-[flex] duration-[0.7s] ease-out-flex"
                        key={index}
                    >
                        <div className='work-card rounded-md flex'>
                            <div className='rounded-md bg-primary opacity-95 p-4 w-1/3'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={200} height={200} />
                            </div>
                            <div className='flex flex-col justify-center items-center w-2/3'>
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
            <div className='mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12'>
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

            <div className="bg-wework py-4">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-5xl font-bold text-white my-2">Meet our team members</h3>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl">
                    <Slider {...settings}>
                        {teamMembers.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white mx-8 py-4 my-10 text-center shadow-xl rounded-3xl'>
                                    <img className="w-full h-auto p-12 pb-4" src={items.imageUrl} alt={`${items.name}'s profile`} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-3xl mb-2">{items.name}</div>
                                        <p className="text-gray-700 text-base">{items.role}</p>
                                    </div>
                                    <div className="px-6 pt-2 pb-4 overflow-hidden">
                                        <div className="flex justify-center space-x-2 overflow-x-hidden">
                                            {items.socialLinks.map((link, index) => (
                                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 transition duration-300 ease-in-out transform hover:translate-x-2 hover:bg-gray-300 hover:text-gray-900">
                                                    {link.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Work />
            <div className="about-wide-bg mt-16 lg:mt-32">
                <div className="mx-auto max-w-5xl py-36 px-6">
                    <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
                        Endless <RepeatingText title1 ='Possibilities' title2= 'Opportunities'/>
                    </h3>
                    <p className="text-center text-offwhite text-lg font-normal mb-8">
                        Anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances
                        occur in which toil and pain can procure him some great pleasure.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-16">
                        <Link href="/services" className='text-lg text-white mainbutton' style={{ width: '200px' }}>
                            OUR SERVICES
                        </Link>
                        <Link href="/products" className='text-lg text-white mainbutton' style={{ width: '200px' }}>
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
        ])),
    },
})
