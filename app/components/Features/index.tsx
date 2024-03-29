"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Features/consult.svg',
        heading: 'Consulting',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Features/simulation.svg',
        heading: 'Simulation',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Features/Edesign.svg',
        heading: 'Electronics Design and Manufacturing CAE',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Features/cam.svg',
        heading: 'Mechanical Engineering CAD/CAM',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Features/software.svg',
        heading: 'Software',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Features/blockchain.svg',
        heading: 'Mechanical Engineering CAD/CAM',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },

]

const Features = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"/>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>
                        Features
                    </h3>
                    <p className='text-white md:text-lg font-normal leading-8'>
                        At Conrads Consult & Engineering, we provide tailored outsourcing solutions in mechanical design, PCB development, and software integration, leveraging advanced simulations to optimize business operations.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 mt-32'>
                    {workdata.map((items, i) => (
                        <div className="flex shadow-lg hover:shadow-[#c4243e] flex-col justify-between p-5 transition duration-400 bg-main rounded-lg card-hover group space-y-5" key={i}>
                            <div className='rounded-full flex justify-center p-4'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={160} height={160} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white text-center">
                                {items.heading}
                            </h3>
                            <p className='text-base font-normal text-white text-center mt-2'>
                                {items.subheading}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Features;
