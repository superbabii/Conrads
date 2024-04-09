"use client"
import Image from 'next/image';
import Link from 'next/link';
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
    return (
        <div className='mx-auto max-w-7xl my-20 px-10 lg:px-6 relative'>
            {/* <div className="radial-bgone hidden lg:block" /> */}
            <div className='mb-16'>
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
                        <TypingText title="Our Services" />
                        <div className='bg-primary mt-1 w-[40px] md:w-[70px] h-[3px] md:h-[5px]' />
                    </h1>
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className='text-maingray md:text-lg font-normal leading-8'
                    >
                        At Conrads Consult & Engineering, we provide tailored outsourcing solutions in mechanical design, PCB development, and software integration, leveraging advanced simulations to optimize business operations.
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
                        <div className='rounded-full flex justify-center p-3'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={120} height={120} />
                        </div>
                        <h3 className="text-2xl font-semibold text-white text-center">
                            {items.heading}
                        </h3>
                        <p className='text-maingray text-center'>
                            {items.subheading}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Services;
