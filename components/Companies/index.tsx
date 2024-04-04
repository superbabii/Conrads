
"use client"
import React, { Component } from "react";
import Slider from "react-slick";

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
                <div className='mx-auto max-w-7xl text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>
                        Trusted by
                    </h3>
                    <p className='text-offwhite md:text-lg font-normal leading-8'>
                        Trusted by leading businesses worldwide, including Fortune 500 companies and innovative startups, Conrads Consult & Engineering delivers expert consulting services in mechanical design, PCB development, and software integration, ensuring unparalleled quality and reliability.
                    </p>
                </div>
                <div className="mx-auto px-4 sm:px-6 mt-32">
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
