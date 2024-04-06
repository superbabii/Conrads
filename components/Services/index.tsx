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
        imgSrc: '/images/Services/consult.svg',
        heading: 'Business Consulting',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Services/simulation.png',
        heading: 'Simulation',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Services/Edesign.png',
        heading: 'Electronics Design and Manufacturing CAE',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Services/cam.png',
        heading: 'Mechanical Engineering CAD/CAM',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Services/software.png',
        heading: 'Software',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Services/blockchain.svg',
        heading: 'Mechanical Engineering CAD/CAM',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
]

const Services = () => {
    return (
        <div className='mx-auto max-w-7xl my-20 px-10 lg:px-6 relative'>
            <div className="radial-bgone hidden lg:block" />
            <div className='text-center mb-14'>
                <motion.div
                    variants={staggerContainer(0.25, 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="innerWidth mx-auto flexCenter flex-col"
                >
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>
                        <TypingText title="Services" textStyles="text-center" />
                    </h3>
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className='text-offwhite md:text-lg font-normal leading-8'
                    >
                        At Conrads Consult & Engineering, we provide tailored outsourcing solutions in mechanical design, PCB development, and software integration, leveraging advanced simulations to optimize business operations.
                    </motion.p>
                </motion.div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-y-12 mt-16 lg:mt-32'>
                {servicedata.map((items, index) => (
                    <Link
                        className="flex flex-col justify-between p-5 transition bg-primary rounded-lg service-card"
                        href={`/services#service-${index}`}
                        key={index}
                    >
                        <div className='rounded-full flex justify-center p-3'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={120} height={120} />
                        </div>
                        <h3 className="text-2xl font-semibold text-white text-center">
                            {items.heading}
                        </h3>
                        <p className='text-base font-normal text-white text-center'>
                            {items.subheading}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Services;
