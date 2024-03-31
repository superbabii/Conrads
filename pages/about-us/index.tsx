import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";

export const metadata: Metadata = {
    title: "About | Conrads Consult & Engineering",
    description: "This is About Page for Conrads Consult & Engineering",
};

const AboutPage = () => {
    return (
        <Layout>
            <Breadcrumb
                pageName="About Us"
                description="Conrads Consult & Engineering is a company working in the field of consulting for sales and management support. Our company has a team of expert for the mechanical design of test instrument and equipment. 
                This includes the complete design from CAD, PCB development and software development. Extensive simulations will be made for larger and more sophisticated project to reduce the development time and cost.
                Our team exist of physics, mathematics, electronic engineers, project managers and sales expert. This gives any company the opportunity to outsource some of their activities due to lack of personnel or knowledge resources.
                "
            />
        </Layout>
    );
};

export default AboutPage;
