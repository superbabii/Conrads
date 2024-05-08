import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";

type Props = {
  // Define the props here
};

export const metadata: Metadata = {
  title: "Services | Conrads Consult & Engineering",
  description: "This is Services Page for Conrads Consult & Engineering",
};

const servicedata = [
  {
    imgSrc: "/images/Services/modernization.png",
    heading: "heading-1",
    subheading:
      "Upgrade instruments for peak performance with our modernization services",
    description: (
      <>
        Unlock the full potential of your equipment with Conrads Consult &
        Engineering! If your instruments are falling behind, our expert team is
        here to revitalize them for peak performance in today&apos;s fast-paced
        world. From comprehensive assessments to tailored upgrade plans,
        we&apos;ve got you covered.
        <br />
        Elevate your operations and stay ahead of the curve with our
        cutting-edge solutions.
      </>
    ),
  },
  {
    imgSrc: "/images/Services/decision.png",
    heading: "heading-2",
    subheading:
      "Harness simulations for informed decisions in design, electronics, and mathematics",
    description: (
      <>
        At Conrads Consult & Engineering, we understand the challenge of turning
        ideas into successful realities. Let us guide you in making informed
        decisions. Through meticulous analysis and simulations across various
        platforms, we tackle design, electronics, and mathematical challenges
        head-on.
        <br />
        Embracing the future with AI and Machine Learning, we provide
        cutting-edge support to propel your projects forward with confidence.
      </>
    ),
  },
  {
    imgSrc: "/images/Services/pcb.png",
    heading: "heading-3",
    subheading:
      "Efficient PCB development and simulation for optimal performance",
    description: (
      <>
        At Conrads Consult and Engineering, our specialists excel in PCB
        development and assembly. Leveraging our in-house PCB printers, we
        deliver rapid turnaround times, crafting bespoke PCBs in mere hours
        instead of weeks. Utilizing industry-leading Autodesk products and
        advanced simulation software, we ensure that our designed products meet
        and exceed performance expectations.
        <br />
        Trust us to bring your visions to life with precision and efficiency.
      </>
    ),
  },
  {
    imgSrc: "/images/Services/cam.png",
    heading: "heading-4",
    subheading: "Expert design support for products, from small to complex",
    description: (
      <>
        Conrads Consult & Engineering offers expert product design services.
        Collaborate with our team to innovate and create new solutions tailored
        to your company&apos;s needs. From small components to complex
        instruments with thousands of parts, we&apos;re equipped to handle
        projects of any scale.
        <br />
        Trust us to support your endeavors now and in the long term.
      </>
    ),
  },
  {
    imgSrc: "/images/Services/programming.png",
    heading: "heading-5",
    subheading:
      "From firmware to GUI, we solve software challenges across platforms",
    description: (
      <>
        In an era where skilled programmers are in high demand, Conrads Consult
        & Engineering offers solutions to your software challenges. Whether
        it&apos;s firmware or GUI development for Windows, OS-X, or Linux
        platforms, we&apos;ve got you covered. Leveraging our expertise in
        MathWorks Matlab and Simulink, we tackle a wide range of contemporary
        workplace challenges.
        <br />
        Embrace the power of machine learning and AI with our support, and watch
        your business thrive.
      </>
    ),
  },
  {
    imgSrc: "/images/Services/consult.svg",
    heading: "heading-6",
    subheading: "Expert support for project, sales, and general management",
    description: (
      <>
        At Conrads Consult & Engineering, our team of experts is dedicated to
        enhancing your business operations swiftly. Whether you require project
        management, sales and marketing support, or general management
        assistance, we offer tailored solutions for short-term or long-term
        needs.
        <br />
        Let us optimize your business processes and propel your success to new
        heights.
      </>
    ),
  },
];

const Services = () => {
  const router = useRouter();
  const { t } = useTranslation("service-page");

  const section = router.asPath.split("#")[1]?.split("-")[1];

  useEffect(() => {
    if (section) {
      scrollToSection(section);
    }
  }, [section]);

  const scrollToSection = (index: string) => {
    const element = document.getElementById(`service-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
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
        height="320px"
      />
      <div className="mx-auto max-w-[1360px] px-4 sm:py-4 lg:px-8 my-12">
        {servicedata.map((items, index) => (
          <section
            id={`service-${index}`}
            className="mx-auto max-w-[1360px] mb-4 md:mb-8 px-4 sm:pb-4 lg:px-8"
            key={index}
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-20 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div
                className={`col-span-1 md:col-span-2 flex flex-col justify-center text-container md:order-${
                  index % 2 === 0 ? "2" : "1"
                }`}
              >
                <p className="text-lg text-center text-maingray">
                  {items.description}
                </p>
              </div>
              <div
                className={`col-span-1 flex flex-col justify-center items-center p-5 work-card rounded-lg ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="rounded-full flex justify-center p-3">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={120}
                    height={120}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white text-center py-3">
                  {t(items.heading)}
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

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "common",
      "header",
      "footer",
      "breadcrumb",
      "service-page",
    ])),
  },
});
