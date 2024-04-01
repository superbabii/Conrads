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
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar3.svg',
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
        slidesToShow: 5,
        // centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 4000,
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

            <div className="relative">

                <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

                <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                        {/* COLUMN-1 */}
                        <div>
                            <Image src="/images/dedicated/man.svg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                        </div>

                        {/* COLUMN-2 */}
                        <div className="relative">
                            <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-white">Dedicated to help peoples needs.</h2>
                            <p className="font-medium text-offwhite text-2xl mt-5 text-center lg:text-white">Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis</p>
                            <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-white"> Werner Conrads, CEO</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-16'>
                <h2 className="text-4xl sm:text-6xl font-bold text-white">Our team belives you deserve <br /> only the best.</h2>
                <h3 className="text-2xl font-medium text-maingray pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor.</h3>
                <div className='grid grid-cols-1 my-16'>
                    <Image src="/images/team/teamimg.png" alt="office-image" height={684} width={1296} />
                </div>
            </div>

            <div className="bg-wework py-16">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">We work in several verticals.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white opacity-50 lg:mr-48 my-2">We work in several verticals.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white opacity-25 lg:-mr-32 my-2">We work in several verticals.</h3>
                    </div>

                </div>

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

            <div className="mx-2">
                <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                        {/* COLUMN-1 */}

                        <div className="pt-24 lg:pl-24 ">
                            <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-offwhite">WHO WE ARE</h3>
                            <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-offwhite">We are a Consult <br /> engineering that builds <br /> amazing products.</h4>
                            <div className="text-center lg:text-offwhite">
                                <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Get started</button>
                            </div>
                        </div>

                        {/* COLUMN-2 */}

                        <div>
                            <div className="lg:absolute girldoodle">
                                <Image src="/images/digital/girldoodle.svg" alt="girldoodle" width={815} height={691} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;
