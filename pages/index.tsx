import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Companies from "@/components/Trusted";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from './layout';

type Props = {
  // Define the props here
};

export default function Home() {
  return (
    <Layout>
        <Hero />
        <Services />
        <Work />
        <Companies />
        <Products />
        <WhyUs />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
      'header',
      'footer',
      'whyus',
      'work'
    ])),
  },
})
