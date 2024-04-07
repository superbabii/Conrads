import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { fadeIn, textVariant, zoomIn } from '../../utils/motion';
import { TitleText } from '../Effect/typing';

interface SlideProps {
    image: string;
    title: string;
    description: string;
}

const CarouselSlide: React.FC<SlideProps> = ({ image, title, description }) => (
    <div className='mx-auto max-w-7xl h-screen flex flex-col justify-center items-center p-6' style={{ height: 'calc(100vh - 120px)' }}>
        <motion.div
            variants={staggerContainer(0.25, 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='grid grid-cols-1 lg:grid-cols-12 mt-8'
        >
            <div className="col-span-5 lg:-m-48 sm:order-2">
                <Image src={image} alt="nothing" width={1000} height={750} />
            </div>

            <div className='hero-text col-span-7 sm:order-1'>
                <motion.h1 variants={textVariant(1)} className="text-4xl lg:text-6xl font-bold mb-5 text-offwhite md:4px md:text-start text-center">
                    {title}
                </motion.h1>
                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="text-offwhite md:text-lg font-normal mb-10 md:text-start text-center"
                >
                    {description}
                </motion.p>
                <div className='flex items-center justify-center md:justify-start space-x-4 mb-24 lg:mb-32'>
                    <motion.div
                        variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
                        className="relative flex flex-col justify-between items-center bg-transparent transition-[flex] duration-[0.7s] ease-out-flex"
                    >
                        <Link href={"/contact"} className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                            CONTACT US
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                        className="relative flex flex-col justify-between items-center bg-transparent transition-[flex] duration-[0.7s] ease-out-flex"
                    >
                        <Link href={"/about-us"} className='text-lg text-white mainbutton' style={{ width: '180px' }}>
                            ABOUT US
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
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
            <div className="dance-text text-primary text-[12px] md:text-lg">
                ==== WE&apos;RE THE BEST ====
            </div>
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
