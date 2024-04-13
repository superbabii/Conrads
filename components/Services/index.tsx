"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from 'next-i18next';
import { TypingText, TitleText } from '../Effect/typing';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

interface servicedata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const servicedata: servicedata[] = [
    {
        imgSrc: '/images/Services/modernization.png',
        heading: 'Instrument Modernization Solutions',
        subheading: "Upgrade instruments for peak performance with our modernization services",
    },
    {
        imgSrc: '/images/Services/decision.png',
        heading: 'Decision Support Simulation Services',
        subheading: 'Harness simulations for informed decisions in design, electronics, and mathematics',
    },
    {
        imgSrc: '/images/Services/pcb.png',
        heading: 'Rapid PCB Development & Simulation Services',
        subheading: 'Efficient PCB development and simulation for optimal performance',
    },
    {
        imgSrc: '/images/Services/cam.png',
        heading: 'Collaborative CAD/CAM Design Solutions',
        subheading: 'Expert design support for products, from small to complex',
    },
    {
        imgSrc: '/images/Services/programming.png',
        heading: 'Tailored Programming Solutions',
        subheading: 'From firmware to GUI, we solve software challenges across platforms',
    },
    {
        imgSrc: '/images/Services/consult.svg',
        heading: 'Strategic Business Consulting Solutions',
        subheading: 'Expert support for project, sales, and general management',
    },
]

const Services = () => {
    const router = useRouter();
    const { t } = useTranslation('service');
    return (
        <div className='mx-auto max-w-7xl mb-20 lg:mb-32 mt-12 lg:mt-20 px-10 lg:px-6 relative'>
            {/* <div className="radial-bgone hidden lg:block" /> */}
            <div className='mb-16'>
                <motion.div
                    variants={staggerContainer(0.25, 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="innerWidth mx-auto flexCenter flex-col"
                >
                    <h1 className='text-white text-3xl md:text-5xl mb-3 font-thin'>
                        <TypingText title="Our Services" />
                        <div className='bg-primary mt-1 w-[40px] md:w-[70px] h-[3px] md:h-[5px]' />
                    </h1>
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className='text-maingray text-md'
                    >
                        Explore our range of premium services, backed by years of experience and a passion for perfection.
                    </motion.p>
                </motion.div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-y-12 mt-16'>
                {servicedata.map((items, index) => (
                    <Link
                        className="flex flex-col justify-between p-5 transition bg-transparent rounded-lg service-card"
                        href={`/services#service-${index}`}
                        key={index}
                    >
                        <div className='rounded-full flex justify-center p-2'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={80} height={80} />
                        </div>
                        <h3 className="text-xl font-semibold text-white text-center">
                            {items.heading}
                        </h3>
                        <p className='text-sm text-maingray text-center pt-2'>
                            {items.subheading}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Services;
