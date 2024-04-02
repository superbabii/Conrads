import { Metadata } from "next";
import Image from 'next/image';
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "Feature | Conrads Consult & Engineering",
    description: "This is Feature Page for Conrads Consult & Engineering",
};

interface servicedata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const servicedata: servicedata[] = [
    {
        imgSrc: '/images/Services/consult.svg',
        heading: 'Consulting',
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
        <Layout>
            <Breadcrumb
                pageName="Services"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />
            {servicedata.map((items, i) => (
                <div className="mx-auto max-w-7xl my-4 md:my-8 px-4 sm:py-4 lg:px-8" key={i}>
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className={`col-span-1 md:col-span-2 flex flex-col justify-center text-container md:order-${i % 2 === 0 ? '2' : '1'}`}>
                            <h2 className="text-2xl lg:text-4xl font-bold sm:leading-tight text-center text-white">
                                Our team believes you deserve <br /> only the best.
                            </h2>
                            <p className="text-lg font-medium text-center text-maingray pt-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor.
                            </p>
                        </div >
                        <div className={`col-span-1 flex flex-col justify-center items-center p-5 transition duration-400 bg-primary rounded-lg opacity-40 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <div className='rounded-full flex justify-center p-3'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={120} height={120} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white text-center">
                                {items.heading}
                            </h3>
                            <p className='text-base font-normal text-white text-center'>
                                {items.subheading}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default Services;

export const getStaticProps: GetStaticProps<Props> = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
            'header',
            'footer',
        ])),
    },
})
