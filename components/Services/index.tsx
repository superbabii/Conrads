"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { TypingText, TitleText } from "../Effect/typing";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const servicedata = [
  {
    imgSrc: "/images/Services/modernization.png",
    heading: "heading-1",
    subheading: "subheading-1",
  },
  {
    imgSrc: "/images/Services/decision.png",
    heading: "heading-2",
    subheading: "subheading-2",
  },
  {
    imgSrc: "/images/Services/pcb.png",
    heading: "heading-3",
    subheading: "subheading-3",
  },
  {
    imgSrc: "/images/Services/cam.png",
    heading: "heading-4",
    subheading: "subheading-4",
  },
  {
    imgSrc: "/images/Services/programming.png",
    heading: "heading-5",
    subheading: "subheading-5",
  },
  {
    imgSrc: "/images/Services/consult.svg",
    heading: "heading-6",
    subheading: "subheading-6",
  },
];

const Services = () => {
  const { t } = useTranslation("service");
  return (
    <div className="mx-auto max-w-[1360px] mb-20 lg:mb-32 mt-12 lg:mt-20 px-10 lg:px-6 relative">
      {/* <div className="radial-bgone hidden lg:block" /> */}
      <div className="mb-16">
        <motion.div
          variants={staggerContainer(0.25, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="innerWidth mx-auto flexCenter flex-col"
        >
          <h1 className="text-white text-3xl md:text-5xl mb-3 font-thin">
            <TypingText title={t("Our Services")} />
            <div className="bg-primary mt-1 w-[40px] md:w-[70px] h-[3px] md:h-[5px]" />
          </h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-maingray text-md"
          >
            {t("description")}
          </motion.p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-y-12 mt-16 lg:mt-24">
        {servicedata.map((items, index) => (
          <Link
            className="flex flex-col justify-between p-5 transition bg-transparent rounded-lg service-card"
            href={`/services#service-${index}`}
            key={index}
          >
            <div className="rounded-full flex justify-center p-2">
              <Image
                src={items.imgSrc}
                alt={items.imgSrc}
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-2xl font-semibold text-white text-center">
              {t(items.heading)}
            </h3>
            <p className="text-sm text-maingray text-center pt-3">
              {t(items.subheading)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
