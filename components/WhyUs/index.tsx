"use client"
import Typing from './Typing';

const WhyUs = () => {
    return (
        <div className="why-bg mt-32">
            <div className="mx-auto max-w-5xl py-36 px-6">
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
                    Why <Typing /> Us
                </h3>
                <p className="text-center text-offwhite text-lg font-normal mb-8">
                    Choose us for our exclusive Rapid Prototyping Program, ensuring swift development and top-notch quality, giving you the competitive edge.
                </p>
                <div className="flex justify-center ">
                    <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton'>
                        Know more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;
