"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/birdseye.svg"
    },
    {
        imgSrc: "/images/Companies/break.svg"
    },
    {
        imgSrc: "/images/Companies/keddar.svg"
    },
    {
        imgSrc: "/images/Companies/shield.svg"
    },
    {
        imgSrc: "/images/Companies/tandov.svg"
    },
    {
        imgSrc: "/images/Companies/tree.svg"
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

            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>
                        Trusted by
                    </h3>
                    <p className='text-offwhite md:text-lg font-normal leading-8'>
                        Trusted by leading businesses worldwide, including Fortune 500 companies and innovative startups, Conrads Consult & Engineering delivers expert consulting services in mechanical design, PCB development, and software integration, ensuring unparalleled quality and reliability.
                    </p>
                </div>
                <div className="mx-auto max-w-2xl py-16 px-4s pt-0 sm:px-6 lg:max-w-7xl lg:pt-0">
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
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
