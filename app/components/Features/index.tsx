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
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Consulting',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Simulation',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Electronics Design and Manufacturing CAE',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Mechanical Engineering CAD/CAM',
        subheading: 'Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Features</h3>
                    <p className='text-white md:text-lg font-normal leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 mt-32'>

                    {/* {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))} */}
                    {workdata.map((items, i) => (
                        <div className="flex shadow-lg hover:shadow-[#a21229] flex-col justify-between p-5 transition duration-400 bg-cardbg rounded-xl card-hover group space-y-5" key={i}>
                            <div className='rounded-full flex justify-center p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={80} height={80} />
                            </div>
                            <h3 className="text-xl font-semibold text-white text-center">
                                {items.heading}
                            </h3>
                            <p className='text-base font-normal text-white text-center mt-2'>{items.subheading}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Work;
