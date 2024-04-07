import React from 'react';
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "../layout";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

interface Product {
    imgSrc: string;
    heading: string;
    price: number;
    category: string;
}

const productData: Product[] = [
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Products-exm1',
        price: 1000,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Products-exm1',
        price: 100,
        category: 'Electronic',
    },
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Products-exm1',
        price: 1000,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Products-exm1',
        price: 100,
        category: 'Software',
    },
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Products-exm1',
        price: 1000,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Products-exm1',
        price: 100,
        category: 'Software',
    },
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Products-exm1',
        price: 1000,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Products-exm1',
        price: 100,
        category: 'Automotive',
    },
    // Add more products with different categories
];

const popularProducts = [
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Popular Product 1',
        price: 1500,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Popular Product 2',
        price: 1200,
        category: 'Electronic',
    },
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Popular Product 1',
        price: 1500,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Popular Product 2',
        price: 1200,
        category: 'Electronic',
    },
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Popular Product 1',
        price: 1500,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Popular Product 2',
        price: 1200,
        category: 'Electronic',
    },
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Popular Product 1',
        price: 1500,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Popular Product 2',
        price: 1200,
        category: 'Electronic',
    },
    {
        imgSrc: '/images/Products/AI.jpg',
        heading: 'Popular Product 1',
        price: 1500,
        category: 'AI',
    },
    {
        imgSrc: '/images/Products/simulation.jpg',
        heading: 'Popular Product 2',
        price: 1200,
        category: 'Electronic',
    },
];

interface PopularProductCardProps {
    productName: string;
    imageUrl: string;
    price: number;
}

const PopularProductCard: React.FC<PopularProductCardProps> = ({ productName, imageUrl, price }) => {
    return (
        <div className='work-card rounded-md flex'>
            <div className='rounded-md w-1/3'>
                <img src={imageUrl} alt={productName} width={200} height={200} />
            </div>
            <div className='flex flex-col justify-center w-2/3 px-4'>
                <h3 className='text-sm text-white rounded-md'>
                    {productName}
                </h3>
                <div className='flex'>
                    <p className="text-white text-lg">
                        Price: ${price}
                    </p>
                    <button className="ml-6 hover:text-primary text-white">
                        <ShoppingCartIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

interface ProductTabCardProps {
    productName: string;
    imageUrl: string;
    price: number;
    discount?: number;
}

const ProductTabCard: React.FC<ProductTabCardProps> = ({ productName, imageUrl, price, discount }) => {
    return (
        <div className="relative w-full">
            <div className="w-full h-72 overflow-hidden rounded-md">
                <Image
                    src={imageUrl}
                    alt={productName}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110"
                />
            </div>
            <h3 className="absolute top-2 left-2 bg-black bg-opacity-75 px-2 py-1 text-md text-white rounded-md z-10">
                {productName}
            </h3>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 px-2 py-1 text-white flex justify-between items-center">
                <span className="text-lg">Price: ${price}</span>
                {discount && (
                    <span className="text-lg">Discount: {discount}%</span>
                )}
                <button className="hover:text-primary text-white font-semibold py-2 px-4 rounded">
                    <ShoppingCartIcon />
                </button>
            </div>
        </div>
    );
}

const Products = () => {
    const [value, setValue] = React.useState(0);
    const [currentCategory, setCurrentCategory] = React.useState('All');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setCurrentCategory(newValue === 0 ? 'All' : ['All', 'Automotive', 'AI', 'Electronic', 'Software'][newValue]);
    };

    const filteredProducts = currentCategory === 'All' ? productData : productData.filter(product => product.category === currentCategory);

    return (
        <Layout>
            <Breadcrumb
                pageName="Products"
                heading="Diverse Offerings, Solutions Galore Here."
                description="Explore our diverse range of offerings, where solutions abound for your every need."
                backgroundImageUrl="/images/Breadcrumb/background.png"
            />
            <div className='flex flex-col lg:flex-row mx-auto max-w-7xl px-6 sm:py-4 lg:px-8 my-12'>
                <div className="lg:mr-16 w-full lg:w-1/4">
                    <h2 className="text-lg font-medium text-white">Popular Products</h2>
                    <div className="flex flex-col space-y-8 my-12">
                        {popularProducts.map((product, index) => (
                            <PopularProductCard
                                key={index}
                                productName={product.heading}
                                price={product.price}
                                imageUrl={product.imgSrc}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-grow">
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
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-y-20 mt-8">
                        {filteredProducts.map((product, index) => (
                            <ul className="space-y-8" key={index}>
                                <li className="text-sm leading-6">
                                    <ProductTabCard
                                        productName={product.heading}
                                        price={product.price}
                                        imageUrl={product.imgSrc}
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