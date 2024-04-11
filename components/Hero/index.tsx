import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { fadeIn, textVariant } from '../../utils/motion';

interface SlideProps {
    image: string;
    title: string;
    description: string;
}

const CarouselSlide: React.FC<SlideProps> = ({ image, title, description }) => (
    <div className='h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat hero-bg'>
        <style jsx>{`
        .hero-bg {
            background-image: url(${image});
            height: 100vh;
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
        }

        @media (max-width: 640px) {
          .hero-bg {
            height: 70vh;
          }
        }
      `}</style>
        <motion.div
            variants={staggerContainer(0.25, 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 p-6 mt-8 md:mt-20'
        >
            <div className='radial-hero hidden lg:block'></div>
            <div className='hero-text col-span-8 sm:order-1'>
                <motion.h1 variants={textVariant(1)} className="text-4xl md:text-7xl font-thin mb-5 text-offwhite md:4px md:text-start text-center">
                    {title}
                </motion.h1>
                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="text-offwhite md:text-xl font-normal mb-10 md:text-start text-center"
                >
                    {description}
                </motion.p>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 space-x-0 md:space-x-4 mb-6 md:mb-32'>
                    <motion.div
                        variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
                        className="relative flex flex-col justify-between items-center bg-transparent transition-[flex] duration-[0.7s] ease-out-flex"
                    >
                        <Link href={"/contact"} className='text-lg text-white mainbutton rounded-full' style={{ width: '180px' }}>
                            CONTACT US
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                        className="relative flex flex-col justify-between items-center bg-transparent transition-[flex] duration-[0.7s] ease-out-flex"
                    >
                        <Link href={"/about-us"} className='text-lg text-white mainbutton rounded-full' style={{ width: '180px' }}>
                            ABOUT US
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
);

const slides = [
    {
        image: "/images/Hero/1.png",
        title: "Business Coaching and Consulting",
        description: "With over 10 years of experience helping companies to find comprehensive solution"
    },
    {
        image: "/images/Hero/2.png",
        title: "Your Growth is Our Target",
        description: "With over 10 years of experience helping companies to find comprehensive solution"
    },
    {
        image: "/images/Hero/3.png",
        title: "Best Grow Your Business",
        description: "Precision Engineering for Reliable, High-Performance Printed Circuit Boards"
    },
    {
        image: "/images/Hero/4.png",
        title: "Your Growth is Our Target",
        description: "With over 10 years of experience helping companies to find comprehensive solution"
    },
    {
        image: "/images/Hero/5.png",
        title: "Your Growth is Our Target",
        description: "With over 10 years of experience helping companies to find comprehensive solution"
    },
];

const Hero: React.FC = () => {

    return (
        <div className='relative'>
            <div className="dance-text text-primary text-[12px] md:text-lg"
                style={{ fontFamily: 'Segoe Script, sans-serif', letterSpacing: '4px' }}
            >
                ==== WE&apos;RE THE BEST ====
            </div>
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
                dynamicHeight={true}
            >
                {slides.map((slide, index) => (
                    <CarouselSlide key={index} {...slide} />
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
