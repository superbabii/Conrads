import Link from "next/link";
import { TypingText, TitleText } from '../Effect/typing';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Breadcrumb = ({
    pageName,
    heading,
    description,
    backgroundImageUrl
}: {
    pageName: string;
    heading: string;
    description: string;
    backgroundImageUrl: string
}) => {
    return (
        <div className="relative overflow-hidden h-[320px]">
            <div className="absolute inset-0 z-0">
                <img
                    className="absolute inset-0 w-full h-full object-cover object-bottom"
                    src={backgroundImageUrl}
                    alt="Background"
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
                    }}
                />
            </div>
            <div className='mx-auto max-w-7xl mt-16 px-6 relative'>
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 md:w-8/12 lg:w-8/12">
                        <div className="mb-8 max-w-5xl md:mb-0 lg:mb-12">
                            <motion.div
                                variants={staggerContainer(0.25, 0.25)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }}
                                className="innerWidth mx-auto flexCenter flex-col"
                            >
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">
                                    <TitleText title={heading}/>
                                </h1>
                                <p className="text-md lg:text-lg leading-relaxed text-white opacity-80">
                                    {description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-4/12 lg:w-4/12">
                        <ul className="flex items-center md:justify-end">
                            <li className="flex items-center">
                                <Link
                                    href="/"
                                    className="pr-1 font-medium text-white hover:text-primary"
                                >
                                    Home
                                </Link>
                                <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white"></span>
                            </li>
                            <li className="font-medium text-primary">
                                {pageName}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Breadcrumb;
