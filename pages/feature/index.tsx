import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";

export const metadata: Metadata = {
    title: "Feature | Conrads Consult & Engineering",
    description: "This is Feature Page for Conrads Consult & Engineering",
};

const FeaturePage = () => {
    return (
        <Layout>
            <Breadcrumb
                pageName="Features"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />
        </Layout>
    );
};

export default FeaturePage;
