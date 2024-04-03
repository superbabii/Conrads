import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NewsLatterBox from "./NewsLatterBox";

type Props = {
    // Define the props here
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
]

export const metadata: Metadata = {
    title: "Contact | Conrads Consult & Engineering",
    description: "This is Contact Page for Startup Nextjs Template",
};

const Contact = () => {
    return (
        <Layout>
            <Breadcrumb
                pageName="Contact"
                heading = "Reach Out, We're Here!"
                description="Don&apos;t hesitate to connect with us. Our team is readily available and eager to assist you with any inquiries or assistance you may need. Reach out to us today; we&apos;re here to help!"
                backgroundImageUrl="/images/Breadcrumb/background.png"
            />
            <div className="mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mb-12'>
                    {servicedata.map((items, index) => (
                        <div
                            className="flex shadow-lg hover:shadow-[#c4243e] flex-col justify-between p-5 transition duration-400 bg-primary rounded-lg card-hover"
                            key={index}
                        >
                            <div className='rounded-full flex justify-center p-3'>
                                <img src={items.imgSrc} alt={items.imgSrc} width={120} height={120} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white text-center">
                                {items.heading}
                            </h3>
                            <p className='text-base font-normal text-white text-center'>
                                {items.subheading}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div
                            className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                            data-wow-delay=".15s
              "
                        >
                            <h2 className="mb-3 text-2xl font-bold text-black  sm:text-3xl lg:text-2xl xl:text-3xl">
                                Need Help? Open a Ticket
                            </h2>
                            <p className="mb-12 text-base font-medium text-body-color">
                                Our support team will get back to you ASAP via email.
                            </p>
                            <form>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="name"
                                                className="mb-3 block text-sm font-medium text-maingray "
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-sm font-medium text-maingray "
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="message"
                                                className="mb-3 block text-sm font-medium text-maingray "
                                            >
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Enter your Message"
                                                className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90">
                                            Submit Ticket
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                        <NewsLatterBox />
                    </div> */}
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

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
