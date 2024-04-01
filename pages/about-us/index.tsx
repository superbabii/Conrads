import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

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
        imgSrc: '/images/wework/avatar5.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar4.svg',
    },
]

// CAROUSEL SETTINGS

const AboutPage = () => {
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
                description="Conrads Consult & Engineering is a company working in the field of consulting for sales and management support. Our company has a team of expert for the mechanical design of test instrument and equipment."
            />
            <div className="radial-bgone hidden lg:block"></div>
            <div className='mx-auto max-w-7xl px-4 sm:py-10 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='relative'>
                        <img src="/images/About/ceo.jpg" alt="CEO-image" width="416" height="530" className="mx-auto md:mx-0 shadow-image rounded-2xl" />
                    </div>
                    <div className="relative text-container">
                        <h2 className="text-4xl lg:text-6xl pt-4 font-bold sm:leading-tight mt-5 text-center text-white">Dedicated to help people's needs.</h2>
                        <p className="font-medium text-2xl mt-5 text-center text-maingray">Dedicated to fulfilling people's needs, our mission is to provide innovative solutions that address challenges and enhance lives. With a commitment to customer satisfaction and social responsibility, we strive to make a positive impact in communities and empower individuals to thrive.</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center text-maingray handwritten">Werner Conrads, CEO</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-16'>
                <h2 className="text-4xl sm:text-6xl font-bold text-center text-white">Our team belives you deserve <br /> only the best.</h2>
                <h3 className="text-2xl font-medium text-center text-maingray pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor.</h3>
                <div className='grid grid-cols-1 my-16'>
                    <Image src="/images/team/teamimg.png" alt="office-image" height={684} width={1296} />
                </div>
            </div>

            <div className="bg-wework py-4">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">We work in several verticals.</h3>
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
                                    <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                    <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>


            </div>

            <div className="wide-bg mt-32">
                <div className="mx-auto max-w-5xl py-36 px-6">
                    <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
                        Endless possibilities & opportunities.
                    </h3>
                    <p className="text-center text-offwhite text-lg font-normal mb-8">
                        Anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances
                        occur in which toil and pain can procure him some great pleasure.
                    </p>
                    <div className="flex justify-center ">
                        <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton'>
                            Know more
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;
