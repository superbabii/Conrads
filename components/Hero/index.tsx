import Image from 'next/image';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

interface SlideProps {
    image: string;
    title: string;
    description: string;
}

const CarouselSlide: React.FC<SlideProps> = ({ image, title, description }) => (
    <div className='mx-auto max-w-7xl h-screen flex flex-col justify-center items-center p-4' style={{ height: 'calc(100vh - 120px)' }}>
        <div className='grid grid-cols-1 lg:grid-cols-12 mt-8'>
            <div className='col-span-5 lg:-m-48 sm:order-2'>
                <Image src={image} alt="nothing" width={1013} height={760} />
            </div>
            <div className='hero-text col-span-7 sm:order-1'>
                <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                    {title}
                </h1>
                <p className='text-offwhite md:text-lg font-normal mb-10 md:text-start text-center'>
                    {description}
                </p>
                <div className='flex items-center justify-center md:justify-start space-x-4 mb-24 lg:mb-32'>
                    <Link href={"/contact"} className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                        CONTACT US
                    </Link>
                    <Link href={"/about-us"} className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                        ABOUT US
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const Hero: React.FC = () => {
    const slides = [
        {
            image: "/images/Hero/hero1.png",
            title: "Business Coaching and Consulting",
            description: "With over 10 years of experience helping companies to find comprehensive solution"
        },
        {
            image: "/images/Hero/hero2.png",
            title: "Your Growth is Our Target",
            description: "With over 10 years of experience helping companies to find comprehensive solution"
        },
        {
            image: "/images/Hero/hero3.png",
            title: "Best Grow Your Business",
            description: "Precision Engineering for Reliable, High-Performance Printed Circuit Boards"
        }
    ];

    return (
        <div className='bg-image relative' id="home-section">
            <div className='dance-text text-primary'>==== WE&apos;RE THE BEST ====</div>
            <div className='radial-hero hidden lg:block'></div>
            <Carousel
                autoPlay={true}
                interval={5000}
                useKeyboardArrows={true}
                showStatus={false}
                infiniteLoop={true}
                stopOnHover={true}
                emulateTouch={true}
                showArrows={false}
                showThumbs={false}
            >
                {slides.map((slide, index) => (
                    <CarouselSlide key={index} {...slide} />
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
