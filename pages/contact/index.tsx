import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";

export const metadata: Metadata = {
    title: "Contact | Conrads Consult & Engineering",
    description: "This is Contact Page for Startup Nextjs Template",
};

const ContactPage = () => {
    return (
        <Layout>
            <Breadcrumb
                pageName="Contact"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />
        </Layout>
    );
};

export default ContactPage;
