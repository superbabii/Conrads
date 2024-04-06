"use client"
import { RepeatingText } from '../Effect/typing';
import Link from 'next/link';

const WhyUs = () => {
    return (
        <div className="why-bg mt-32">
            <div className="mx-auto max-w-5xl py-36 px-6">
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
                    Why <RepeatingText /> Us
                </h3>
                <p className="text-center text-offwhite text-lg font-normal mb-8">
                    Choose us for our exclusive Rapid Prototyping Program, ensuring swift development and top-notch quality, giving you the competitive edge.
                </p>
                <div className="flex justify-center ">
                    <Link href="/about-us">
                        <button className='text-lg py-4 px-6 lg:px-12 mainbutton'>
                            Know more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;
