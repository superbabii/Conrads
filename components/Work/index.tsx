"use client"
import Image from 'next/image';
import { TypingText } from '../Effect/typing';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const workdata = [
    {
        imgSrc: '/images/Work/research.png',
        heading: 'Research Problem',
        subheading: 'Unveiling opportunities through meticulous research and analysis.',
    },
    {
        imgSrc: '/images/Work/identification.png',
        heading: 'Identify Problem',
        subheading: 'Pinpointing challenges with laser-sharp precision and insight.',
    },
    {
        imgSrc: '/images/Work/solution.png',
        heading: 'Solution Problem',
        subheading: 'Crafting innovative solutions tailored to your needs.',
    },
    {
        imgSrc: '/images/Work/success.png',
        heading: 'Success Business',
        subheading: 'Empowering your business to thrive and excel.',
    },
]

const Work = () => {
    return (
        <div className='mx-auto max-w-7xl my-20 lg:my-32 px-10 lg:px-6 relative'>
            <div className="radial-bgone hidden lg:block" />
            <div className='mb-16'>
                <motion.div
                    variants={staggerContainer(0.25, 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="innerWidth mx-auto flexCenter flex-col"
                >
                    <h1 className='text-white text-3xl md:text-5xl mb-3 font-thin'>
                        <TypingText title="How we work" />
                        <div className='bg-primary mt-1 w-[40px] md:w-[70px] h-[3px] md:h-[5px]' />
                    </h1>
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className='text-maingray text-md'
                    >
                        At Conrads Consult & Engineering, our workflow begins with thorough research to understand the problem,
                        followed by precise problem identification, comprehensive solution development, and ultimately, driving success for your business.
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
                            <h3 className="text-xl font-semibold text-white text-center pb-2">
                                {items.heading}
                            </h3>
                            <p className='text-sm text-maingray text-center px-1'>
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
