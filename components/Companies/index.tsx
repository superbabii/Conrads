
"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import { TypingText, TitleText } from '../Effect/typing';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/SpaceX-Logo.svg"
    },
    {
        imgSrc: "/images/Companies/SpaceX-Logo.svg"
    },
    {
        imgSrc: "/images/Companies/SpaceX-Logo.svg"
    },
    {
        imgSrc: "/images/Companies/SpaceX-Logo.svg"
    },
    {
        imgSrc: "/images/Companies/SpaceX-Logo.svg"
    },
    {
        imgSrc: "/images/Companies/SpaceX-Logo.svg"
    },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
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
            <div className='mx-auto my-20 px-6 relative'>
                <div className='mx-auto max-w-7xl mb-16'>
                    <motion.div
                        variants={staggerContainer(0.25, 0.25)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className="innerWidth mx-auto flexCenter flex-col"
                    >
                        <h1 className='text-offwhite text-3xl md:text-5xl mb-3'
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <TypingText title="Trusted by" />
                            <div className='bg-primary mt-1 w-[40px] md:w-[70px] h-[3px] md:h-[5px]' />
                        </h1>
                        <motion.p
                            variants={fadeIn("up", "tween", 0.2, 1)}
                            className='text-maingray md:text-lg font-normal leading-8'
                        >
                            Trusted by leading businesses worldwide, including Fortune 500 companies and innovative startups, Conrads Consult & Engineering delivers expert consulting services in mechanical design, PCB development, and software integration, ensuring unparalleled quality and reliability.
                        </motion.p>
                    </motion.div>
                </div>
                <div className="mx-auto px-4 sm:px-6 mt-16 lg:mt-24">
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="px-5">
                                    <img src={item.imgSrc} alt={item.imgSrc} />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
