import { Metadata } from "next";
import Image from 'next/image';
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "Services | Conrads Consult & Engineering",
    description: "This is Services Page for Conrads Consult & Engineering",
};

const servicedata = [
    {
        imgSrc: '/images/Services/modernization.png',
        heading: 'Instrument Modernization Solutions',
        subheading: "Upgrade instruments for peak performance with our modernization services",
        description: (
            <>
                Unlock the full potential of your existing instruments with Conrads Consult & Engineering&apos;s modernization and retrofit services.
                <br />
                Our expert team will thoroughly assess your equipment, providing a detailed overview of upgrade possibilities to align with today&apos;s standards.
                <br />
                Trust us to revitalize your instruments or production/testing capabilities, ensuring they are primed for future success.
            </>
        ),
    },
    {
        imgSrc: '/images/Services/decision.png',
        heading: 'Decision Support Simulation Services',
        subheading: 'Harness simulations for informed decisions in design, electronics, and mathematics',
        description: ""
    },
    {
        imgSrc: '/images/Services/pcb.png',
        heading: 'Rapid PCB Development & Simulation Services',
        subheading: 'Efficient PCB development and simulation for optimal performance',
        description: ""
    },
    {
        imgSrc: '/images/Services/cam.png',
        heading: 'Collaborative CAD/CAM Design Solutions',
        subheading: 'Expert design support for products, from small to complex',
        description: ""
    },
    {
        imgSrc: '/images/Services/programming.png',
        heading: 'Tailored Programming Solutions',
        subheading: 'From firmware to GUI, we solve software challenges across platforms',
        description: ""
    },
    {
        imgSrc: '/images/Services/consult.svg',
        heading: 'Strategic Business Consulting Solutions',
        subheading: 'Expert support for project, sales, and general management',
        description: ""
    },
]

const Services = () => {

    const router = useRouter();

    const section = router.asPath.split('#')[1]?.split('-')[1];

    useEffect(() => {
        if (section) {
            scrollToSection(section);
        }
    }, [section]);

    const scrollToSection = (index: string) => {
        const element = document.getElementById(`service-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Layout>
            <Breadcrumb
                pageName="Services"
                heading="Efficient, Friendly, Expert Solutions Delivered."
                description="We are dedicated to providing fast, high-quality service to ensure your satisfaction."
                backgroundImageUrl="/images/Breadcrumb/service.png"
                backgroundSMImageUrl="/images/Breadcrumb/service.png"
            />
            <div className="mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12">
                {servicedata.map((items, index) => (
                    <section id={`service-${index}`} className="mx-auto max-w-7xl mb-4 md:mb-8 px-4 sm:pb-4 lg:px-8" key={index}>
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className={`col-span-1 md:col-span-2 flex flex-col justify-center text-container md:order-${index % 2 === 0 ? '2' : '1'}`}>
                                <p className="text-lg text-center text-maingray">
                                    {items.description}
                                </p>
                            </div >
                            <div className={`col-span-1 flex flex-col justify-center items-center p-5 work-card rounded-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className='rounded-full flex justify-center p-3'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={120} height={120} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white text-center py-3">
                                    {items.heading}
                                </h3>
                                {/* <p className='text-maingray text-center'>
                                    {items.subheading}
                                </p> */}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
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
