import * as React from 'react';
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

type Props = {
    // Define the props here
};

export const metadata: Metadata = {
    title: "Product | Conrads Consult & Engineering",
    description: "This is Product Page for Conrads Consult & Engineering",
};

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#801022',
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(128, 16, 34, 1)',
    },
}));

interface productdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const productdata: productdata[] = [
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Products-exm1',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Products-exm1',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    },
]
interface ElectronicsAndSoftwareCardProps {
    productName: string;
    productDescription: string;
    imageUrl: string;
}

const ElectronicsAndSoftwareCard: React.FC<ElectronicsAndSoftwareCardProps> = ({ productName, productDescription, imageUrl }) => {
    return (
        <div className="relative group">
            {/* Gradient overlay */}
            <div className="absolute transition opacity-40 -inset-1 bg-gradient-to-r from-[#592693] to-[#96225f] blur duration-400 group-hover:opacity-100 group-hover:duration-200" />

            {/* Product image */}
            <div
                className='relative'
                onMouseOver={(e) => {
                    const highlightElement = e.currentTarget.querySelector('.highlight') as HTMLElement | null;
                    if (highlightElement) {
                        highlightElement.style.opacity = '1';
                    }
                }}
                onMouseOut={(e) => {
                    const highlightElement = e.currentTarget.querySelector('.highlight') as HTMLElement | null;
                    if (highlightElement) {
                        highlightElement.style.opacity = '0.7';
                    }
                }}
            >
                <div
                    className="relative space-y-6 leading-none rounded-lg ring-1 ring-gray-900/5 highlight"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '240px',
                        opacity: 0.7,
                        transition: 'opacity 0.4s ease-in-out',
                    }}
                ></div>

                {/* Product information */}
                <div className="absolute bottom-0 left-0 right-0 p-2">
                    <h3 className="text-md text-white border p-1 border-white rounded-md z-10 inline-block">
                        {productName}
                    </h3>
                    <p className="leading-normal text-white text-lg py-3">
                        {productDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}


const Products = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Layout>
            <Breadcrumb
                pageName="Products"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
                backgroundImageUrl="/images/Breadcrumb/background.png"
            />
            <div className="mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12">
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="All" />
                    <StyledTab label="Automotive" />
                    <StyledTab label="AI" />
                    <StyledTab label="Electronic" />
                    <StyledTab label="Software" />
                </StyledTabs>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-y-20 mt-32" >
                    {productdata.map((items, index) => (
                        <ul className="space-y-8" key={index}>
                            <li className="text-sm leading-6">
                                <ElectronicsAndSoftwareCard
                                    productName={items.heading}
                                    productDescription={items.subheading}
                                    imageUrl={items.imgSrc}
                                />
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Products;

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
