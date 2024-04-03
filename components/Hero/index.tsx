"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const Hero = () => {
    const [isOpen, setOpen] = useState(false)
    const images = [
        "/images/Hero/hero1.png",
        "/images/Hero/hero2.png",
        "/images/Hero/hero3.png"
    ];
    const texts = [
        {
            title: "Business Coaching and Consulting",
            description: "With over 10 years of experience helping companies to find comprehensive solution"
        },
        {
            title: "Your Growth is Our Target",
            description: "With over 10 years of experience helping companies to find comprehensive solution"
        },
        {
            title: "Best Grow Your Business",
            description: "Precision Engineering for Reliable, High-Performance Printed Circuit Boards"
        }
    ];

    return (
        <div className='bg-image relative' id="home-section">
            <div className='dance-text text-primary'>==== WE&apos;RE THE BEST ====</div>

            <div className='radial-hero hidden lg:block'></div>
            <Carousel autoPlay={true} interval={5000} useKeyboardArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} emulateTouch={true} showArrows={false} showThumbs={false}>
                <div className='mx-auto max-w-7xl pt-8 lg:pt-40 sm:pb-24 px-6'>
                    <div className='height-work'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 mt-8'>
                            <div className='hero-text col-span-7'>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                                    {texts[0].title}
                                </h1>
                                <p className='text-offwhite md:text-lg font-normal mb-10 md:text-start text-center'>
                                    {texts[0].description}
                                </p>
                            </div>
                            <div className='col-span-5 lg:-m-48'>
                                <Image src={images[0]} alt="nothing" width={1013} height={760} />
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:justify-start space-x-4 mb-24'>
                            <Link href={"/contact"}>
                                <button className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                                    CONTACT US
                                </button>
                            </Link>
                            <Link href={"/about-us"}>
                                <button className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                                    ABOUT US
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mx-auto max-w-7xl pt-8 lg:pt-40 sm:pb-24 px-6'>
                    <div className='height-work'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 mt-8'>
                            <div className='hero-text col-span-7'>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                                    {texts[1].title}
                                </h1>
                                <p className='text-offwhite md:text-lg font-normal mb-10 md:text-start text-center'>
                                    {texts[1].description}
                                </p>
                            </div>
                            <div className='col-span-5 lg:-m-48'>
                                <Image src={images[1]} alt="nothing" width={1013} height={760} />
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:justify-start space-x-4 mb-24'>
                            <Link href={"/contact"}>
                                <button className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                                    CONTACT US
                                </button>
                            </Link>
                            <Link href={"/about-us"}>
                                <button className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                                    ABOUT US
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mx-auto max-w-7xl pt-8 lg:pt-40 sm:pb-24 px-6'>
                    <div className='height-work'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 mt-8'>
                            <div className='hero-text col-span-7'>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                                    {texts[2].title}
                                </h1>
                                <p className='text-offwhite md:text-lg font-normal mb-10 md:text-start text-center'>
                                    {texts[2].description}
                                </p>
                            </div>
                            <div className='col-span-5 lg:-m-48'>
                                <Image src={images[2]} alt="nothing" width={1013} height={760} />
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:justify-start space-x-4 mb-24'>
                            <Link href={"/contact"}>
                                <button className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                                    CONTACT US
                                </button>
                            </Link>
                            <Link href={"/about-us"}>
                                <button className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                                    ABOUT US
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Hero;
