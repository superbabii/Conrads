import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Companies from "@/components/Companies";
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
    ])),
  },
})
