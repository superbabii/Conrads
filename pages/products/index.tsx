import * as React from 'react';
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
    price: number;
}

const productdata: productdata[] = [
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Products-exm1',
        price: 1000,
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Products-exm1',
        price: 100,
    },
]
interface ElectronicsAndSoftwareCardProps {
    productName: string;
    imageUrl: string;
    price: number;
    discount?: number;
}

const ElectronicsAndSoftwareCard: React.FC<ElectronicsAndSoftwareCardProps> = ({ productName, imageUrl, price, discount }) => {
    return (
        <div className="relative group">
            {/* Gradient overlay */}
            {/* <div className="absolute transition opacity-40 -inset-1 bg-gradient-to-r from-[#592693] to-[#96225f] blur duration-400 group-hover:opacity-100 group-hover:duration-200" /> */}

            <div
                className="relative space-y-6 leading-none rounded-lg highlight"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '240px',
                    opacity: 1,
                }}
            ></div>

            {/* Product information */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-80">
                <h3 className="text-md text-white border p-1 border-white rounded-md z-10 inline-block">
                    {productName}
                </h3>
                <div className="flex justify-between items-center">
                    <span className="text-white text-lg">
                        Price: ${price}
                    </span>
                    {discount && (
                        <span className="text-green-500 text-lg">
                            Discount: {discount}%
                        </span>
                    )}
                </div>
                <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block">
                    Add to Cart
                </button>
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
                heading = "Diverse Offerings, Solutions Galore Here."
                description="Explore our diverse range of offerings, where solutions abound for your every need."
                backgroundImageUrl="/images/Breadcrumb/background.png"
            />
            <div className='flex mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 my-12'>
                <div className="space-x-8 mr-32">
                    <h2 className="text-lg font-medium text-white">Popular Products</h2>
                    {/* Render your popular products list here */}
                </div>
                <div>
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
                                        price={items.price}
                                        imageUrl={items.imgSrc}
                                    />
                                </li>
                            </ul>
                        ))}
                    </div>

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
