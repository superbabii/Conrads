"use client"
import Image from 'next/image';

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
        <div className='mx-auto max-w-7xl my-20 px-6 relative'>
            <div className="radial-bgone hidden lg:block" />
            <div className='text-center mb-14'>
                <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>
                    Work Process
                </h3>
                <p className='text-white md:text-lg font-normal leading-8'>
                    At Conrads Consult & Engineering, we provide tailored outsourcing solutions in mechanical design, PCB development, and software integration, leveraging advanced simulations to optimize business operations.
                </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 md:gap-20 lg:gap-12 gap-y-20 mt-32'>
                {workdata.map((items, index) => (
                    <div
                        className="relative flex flex-col justify-between items-center bg-transparent"
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;
