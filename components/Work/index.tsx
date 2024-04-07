"use client"
import Image from 'next/image';
import { TypingText, TitleText } from '../Effect/typing';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";


interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/research.png',
        heading: 'Research Problem',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Work/identification.png',
        heading: 'Identify Problem',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Work/solution.png',
        heading: 'Solution Problem',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
    {
        imgSrc: '/images/Work/success.png',
        heading: 'Success Business',
        subheading: 'Lorem Ipsum has been the industry and this',
    },
]

const Work = () => {
    return (
        <div className='mx-auto max-w-7xl my-20 px-10 lg:px-6 relative'>
            <div className="radial-bgone hidden lg:block" />
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
                        <TypingText title="How we work" />
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
            <motion.div
                variants={staggerContainer(0.25, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='grid md:grid-cols-2 lg:grid-cols-4 md:gap-20 lg:gap-12 gap-y-20 mt-16 lg:mt-24'
            >
                {workdata.map((items, index) => (
                    <motion.div
                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        className="relative flex flex-col justify-between items-center bg-transparent transition-[flex] duration-[0.7s] ease-out-flex"
                        key={index}
                    >
                        <div
                            className='absolute rounded-md bg-primary opacity-95 z-10 p-6'
                            style={{ top: '-30px' }}
                        >
                            <Image src={items.imgSrc} alt={items.imgSrc} width={50} height={50} />
                        </div>
                        <div
                            className='absolute rounded-md text-black bg-white opacity-90 z-10 py-2 px-16'
                            style={{ bottom: '-20px' }}
                        >
                            STEP {index + 1}
                        </div>
                        <div className='work-card rounded-md p-3 pt-24 pb-12'>
                            <h3 className="text-xl font-semibold text-white text-center">
                                {items.heading}
                            </h3>
                            <p className='text-sm text-maingray text-center'>
                                {items.subheading}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Work;
