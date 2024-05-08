"use client";
import React from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { TypingText } from "../Effect/typing";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const companydata = [
  {
    imgSrc: "/images/Companies/SpaceX-Logo.svg",
  },
  {
    imgSrc: "/images/Companies/SpaceX-Logo.svg",
  },
  {
    imgSrc: "/images/Companies/SpaceX-Logo.svg",
  },
  {
    imgSrc: "/images/Companies/SpaceX-Logo.svg",
  },
  {
    imgSrc: "/images/Companies/SpaceX-Logo.svg",
  },
  {
    imgSrc: "/images/Companies/SpaceX-Logo.svg",
  },
];

const Trusted = () => {
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
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const router = useRouter();
  const { t } = useTranslation("trusted");
  return (
    <div className="mx-auto my-20 lg:my-32 relative">
      <div className="mx-auto max-w-[1360px] px-10 lg:px-6 mb-16 ">
        <motion.div
          variants={staggerContainer(0.25, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="innerWidth mx-auto flexCenter flex-col"
        >
          <h1 className="text-white text-3xl md:text-5xl mb-3 font-thin">
            <TypingText title={t("Trusted by")} />
            <div className="bg-primary mt-1 w-[40px] md:w-[70px] h-[3px] md:h-[5px]" />
          </h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-maingray text-md"
          >
            Conrads Consult & Engineering is your trusted partner for innovative
            solutions, relied upon by companies worldwide for our unwavering
            commitment to quality, expertise, and reliability.
          </motion.p>
        </motion.div>
      </div>
      <div className="mx-auto px-4 sm:px-6 mt-16 lg:mt-24">
        <div>
          <Slider {...settings}>
            {companydata.map((item, i) => (
              <div key={i} className="px-5">
                <img src={item.imgSrc} alt={item.imgSrc} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
