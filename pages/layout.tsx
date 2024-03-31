import Head from 'next/head';
import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import ScrollToTop from "@/pages/ScrollToTop";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const inter = Inter({ subsets: ["latin"] });

type Props = {
    // Define the props here
};

const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #801022;
  }

::-webkit-scrollbar-thumb:horizontal {
  min-width: 2px;
}

::-webkit-scrollbar-thumb:vertical {
  min-height: 10px;
}
`;

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <title>Conrads Consult & Engineering</title>
                <meta name="description" content='Conrads Consult & Engineering' />
                <link rel="shortcut icon" href="/logo.svg" />
            </Head>
            <main className={`${inter.className}`}>
                <style>{scrollbarStyles}</style>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </main>
        </>
    );
}

// export const getStaticProps: GetStaticProps<Props> = async ({
//     locale,
// }) => ({
//     props: {
//         ...(await serverSideTranslations(locale ?? 'en', [
//             'common',
//             'footer',
//         ])),
//     },
// })
