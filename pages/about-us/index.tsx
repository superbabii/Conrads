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

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "About | Conrads Consult & Engineering",
    description: "This is About Page for Conrads Consult & Engineering",
};

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Electronic Engineer',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'FPGA Programmer',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'Software Developer',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Accountant',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar4.svg',
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
        // centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
            <div className='mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-y-12 my-24'>
                {successdata.map((items, index) => (
                    <div
                        className="flex flex-col justify-between items-center bg-transparent"
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
                                <div className="w-full h-[0.5px] bg-maingray mb-2"></div> {/* Line */}
                                <p className="text-md text-maingray text-center">
                                    {items.heading}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                    <div className='relative'>
                                        <Image src={items.imgSrc} alt="gaby" width={182} height={182} className="inline-block m-auto" />
                                        <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" />
                                    </div>
                                    <h4 className='text-3xl font-bold pt-14'>{items.name}</h4>
                                    <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Work />
            <div className="about-wide-bg mt-32">
                <div className="mx-auto max-w-5xl py-36 px-6">
                    <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
                        Endless possibilities & opportunities.
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
