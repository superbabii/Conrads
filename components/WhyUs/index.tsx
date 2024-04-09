"use client"
import { RepeatingText } from '../Effect/typing';
import Link from 'next/link';

const WhyUs = () => {
    return (
        <div className="why-bg mt-16 lg:mt-32">
            <div className="mx-auto max-w-5xl py-36 px-6">
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
                    Why <RepeatingText title1='Choose' title2='Need' /> Us
                </h3>
                <p className="text-center text-offwhite text-lg font-normal mb-8">
                    Choose Conrads Consult & Engineering for unparalleled expertise, rapid prototyping capabilities, 
                    and innovative solutions tailored to elevate your instruments and operations to the forefront of industry standards.
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-16">
                    <Link href="/services">
                        <button className='text-lg text-white mainbutton' style={{ width: '200px' }}>
                            Our Service
                        </button>
                    </Link>
                    <Link href="/about-us">
                        <button className='text-lg text-white mainbutton' style={{ width: '200px' }}>
                            Our Company
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;
