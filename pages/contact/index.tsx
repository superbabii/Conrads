import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "Contact | Conrads Consult & Engineering",
    description: "This is Contact Page for Conrads Consult & Engineering",
};

const contacts = [
    {
        icon: <HomeIcon style={{ color: '#710010', width: 80, height: 80 }} />,
        title: 'Our Address',
        content: 'Münderhäuser Straße 31, 36199 Rotenburg an der Fulda, Germany',
    },
    {
        icon: <EmailIcon style={{ color: '#710010', width: 80, height: 80 }} />,
        title: 'Email Address',
        content: <a className="text-white font-normal text-center transition-colors duration-300 hover:text-[#710010]" href="mailto:info@conrads-engineering.com">info@conrads-engineering.com</a>,
    },
    {
        icon: <CallIcon style={{ color: '#710010', width: 80, height: 80 }} />,
        title: 'Phone Numbers',
        content: <a className="text-white font-normal text-center transition-colors duration-300 hover:text-[#710010]" href="tel:+49-662-343-645-10">+49 (66) 234 3645 10</a>,
    },
    {
        icon: <AccessTimeFilledIcon style={{ color: '#710010', width: 80, height: 80 }} />,
        title: 'Office Hours',
        content: (
            <>
                Mon to Sat: 09.00am to 18.00pm.
                <br />
                Sunday: Closed
            </>
        ),
    },
];

const Contact = () => {
    return (
        <Layout>
            <Breadcrumb
                pageName="Contact"
                heading="Reach Out, We're Here!"
                description="Don&apos;t hesitate to connect with us. Our team is readily available and eager to assist you with any inquiries or assistance you may need. Reach out to us today; we&apos;re here to help!"
                backgroundImageUrl="/images/Breadcrumb/contact.png"
                backgroundSMImageUrl="/images/Breadcrumb/contact_sm.png"
                height="320px"
            />
            <motion.div
                variants={staggerContainer(0.25, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='mx-auto max-w-[1360px] px-6 sm:py-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 my-12'
            >
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-6 rounded-lg justify-between contact-card"
                    >
                        <div className='flex justify-center p-3'>
                            {contact.icon}
                        </div>
                        <h3 className="text-2xl font-semibold text-white text-center pb-3">
                            {contact.title}
                        </h3>
                        <div className='text-sm text-white text-center'>
                            {contact.content}
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className="h-px mb-20 py-[1px] w-full opacity-40 bg-gradient-to-r from-transparent via-[#710010] to-transparent" />
            <div className="red-band"></div>
            <div className="contact-logo rounded-lg bg-[#121212] shadow-lg p-4 hidden lg:block">
                <img
                    className="h-auto w-480px"
                    src={'/images/Logo/logo.svg'}
                    alt="conrads-engineering-Logo"
                />
            </div>
            <div className="mx-auto max-w-[1360px] p-4 lg:px-8">
                <div className="py-4 lg:w-5/12">
                    <div className="rounded-lg bg-transparent form-board px-16 py-12">
                        <h2 className="mb-8 text-3xl font-bold text-white opacity-80">
                            Free Consultation
                        </h2>
                        <form>
                            <div className="-mx-4">
                                <div className="w-full px-4">
                                    <div className="mb-8">
                                        <input
                                            type="text"
                                            placeholder="Enter your name *"
                                            className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="mb-8">
                                        <input
                                            type="email"
                                            placeholder="Enter your email *"
                                            className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="mb-8">
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="mb-8">
                                        <select
                                            name="subject"
                                            className="w-full rounded-md border border-transparent bg-white opacity-80 text-black px-6 py-3 outline-none focus:border-primary"
                                        >
                                            <option value="" className="text-graywhite">Select a subject</option>
                                            <option value="General Inquiry" className="text-graywhite">General Inquiry</option>
                                            <option value="Technical Support" className="text-graywhite">Technical Support</option>
                                            <option value="Feedback" className="text-graywhite">Feedback</option>
                                            <option value="Product Inquiry" className="text-graywhite">Product Inquiry</option>
                                            <option value="Partnership Opportunities" className="text-graywhite">Partnership Opportunities</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="mb-8">
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Enter your Message"
                                            className="w-full rounded-md border border-transparent bg-white opacity-80 px-6 py-3 outline-none focus:border-primary"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <button className='text-lg text-white mainbutton rounded-md'>
                                        Free Consultant <KeyboardDoubleArrowRightIcon />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
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
