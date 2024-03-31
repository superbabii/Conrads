"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const [isOpen, setOpen] = useState(false)
    const images = [
        "/images/Banner/banner1.png",
        "/images/Banner/banner5.png",
        "/images/Banner/banner4.png"
    ];
    const texts = [
        {
            title: "Unlock Innovation with Conrads Consult & Engineering!",
            description: "Your Trusted Partner for Mechanical Design, PCB Development, and Software Integration"
        },
        {
            title: "Revolutionize Your Business with Our AI Technology!",
            description: "Unlock the Power of Artificial Intelligence for Enhanced Efficiency and Innovation"
        },
        {
            title: "Elevate Your Electronics with Our PCB Solutions!",
            description: "Precision Engineering for Reliable, High-Performance Printed Circuit Boards"
        }
    ];

    return (
        <div className='bg-image relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <Carousel autoPlay={true} interval={3000} useKeyboardArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} emulateTouch={true} showArrows={false} showThumbs={false}>
                <div className='mx-auto max-w-7xl pt-8 lg:pt-40 sm:pb-24 px-6'>
                    <div className='height-work'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                            <div className='arrowTwo'></div>
                            <div className='banner-text col-span-6'>
                                <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                                    {texts[0].title}
                                </h1>
                                <p className='text-offwhite md:text-lg font-normal mb-10 md:text-start text-center'>
                                    {texts[0].description}
                                </p>
                            </div>
                            <div className='col-span-5 lg:-m-48'>
                                <div className='arrowThree'></div>
                                <div className='arrowFour'></div>
                                <div className='arrowFive'></div>
                                <Image src={images[0]} alt="nothing" width={1013} height={760} />
                                <div className='arrowSix'></div>
                                <div className='arrowSeven'></div>
                                <div className='arrowEight'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto max-w-7xl pt-8 lg:pt-40 sm:pb-24 px-6'>
                    <div className='height-work'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                            <div className='arrowTwo'></div>
                            <div className='banner-text col-span-7'>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                                    {texts[1].title}
                                </h1>
                                <p className='text-offwhite md:text-lg font-normal mb-10 md:text-start text-center'>
                                    {texts[1].description}
                                </p>
                            </div>
                            <div className='col-span-5 lg:-m-48'>
                                <div className='arrowThree'></div>
                                <div className='arrowFour'></div>
                                <div className='arrowFive'></div>
                                <Image src={images[1]} alt="nothing" width={1013} height={760} />
                                <div className='arrowSix'></div>
                                <div className='arrowSeven'></div>
                                <div className='arrowEight'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto max-w-7xl pt-8 lg:pt-40 sm:pb-24 px-6'>
                    <div className='height-work'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                            <div className='arrowTwo'></div>
                            <div className='banner-text col-span-7'>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                                    {texts[2].title}
                                </h1>
                                <p className='text-offwhite md:text-lg font-normal mb-10 md:text-start text-center'>
                                    {texts[2].description}
                                </p>
                            </div>
                            <div className='col-span-5 lg:-m-48'>
                                <div className='arrowThree'></div>
                                <div className='arrowFour'></div>
                                <div className='arrowFive'></div>
                                <Image src={images[2]} alt="nothing" width={1013} height={760} />
                                <div className='arrowSix'></div>
                                <div className='arrowSeven'></div>
                                <div className='arrowEight'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

            {/* <div className='flex align-middle justify-center md:justify-start'>
                                <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>
                                    Get Started
                                </button>
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'>
                                    <Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />
                                    How it work
                                </button>
                            </div> */}
        </div>
    )
}

export default Banner;
