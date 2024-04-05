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
                    <button className="ml-6 hover:bg-primary text-white font-semibold rounded">
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



// "use client"
// import * as React from "react";
// import { useState } from "react";
// import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';


// interface Name {
//     course: string;
//     imageSrc: string;
//     profession: string
//     price: string
//     category: 'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing';
// }

// const names: Name[] = [
//     {
//         course: 'HTML, CSS, JS',
//         imageSrc: '/assets/courses/coursesOne.svg',
//         profession: 'HTML, CSS, Javascript Development',
//         price: '40',
//         category: 'webdevelopment'
//     },
//     {
//         course: 'Node.js',
//         imageSrc: '/assets/courses/coursesTwo.svg',
//         profession: 'Backend with Node.js and Express.js',
//         price: '21',
//         category: 'webdevelopment'
//     },
//     {
//         course: 'Database',
//         imageSrc: '/assets/courses/coursesThree.svg',
//         profession: 'Learn Mongodb with Mongoose',
//         price: '21',
//         category: 'webdevelopment'
//     },
//     {
//         course: 'React.js',
//         imageSrc: '/assets/courses/coursesFour.svg',
//         profession: 'Learn React with Redux toolkit',
//         price: '99',
//         category: 'webdevelopment'
//     },
//     {
//         course: 'React Native',
//         imageSrc: '/assets/courses/coursesOne.svg',
//         profession: 'Learn React Native with Node.js',
//         price: '89',
//         category: 'mobiledevelopment'
//     },
//     {
//         course: 'Swift',
//         imageSrc: '/assets/courses/coursesThree.svg',
//         profession: 'Learn Swift from Scratch',
//         price: '89',
//         category: 'mobiledevelopment'
//     },
//     {
//         course: 'Flutter',
//         imageSrc: '/assets/courses/coursesFour.svg',
//         profession: 'Flutter App Development',
//         price: '69',
//         category: 'mobiledevelopment'
//     },
//     {
//         course: 'Onsen UI',
//         imageSrc: '/assets/courses/coursesTwo.svg',
//         profession: 'Learn Onsen Ui with HTML, CSS',
//         price: '69',
//         category: 'mobiledevelopment'
//     },
//     {
//         course: 'TensorFlow',
//         imageSrc: '/assets/courses/coursesTwo.svg',
//         profession: 'Learn TensorFlow with SQL',
//         price: '99',
//         category: 'datascience'
//     },
//     {
//         course: 'AWS',
//         imageSrc: '/assets/courses/coursesFour.svg',
//         profession: 'AWS Deep Learning AMI',
//         price: '99',
//         category: 'datascience'
//     },
//     {
//         course: 'Bokeh',
//         imageSrc: '/assets/courses/coursesOne.svg',
//         profession: 'Learn Bokeh with Python',
//         price: '99',
//         category: 'datascience'
//     },
//     {
//         course: 'Scikit',
//         imageSrc: '/assets/courses/coursesThree.svg',
//         profession: 'Scikit with Python Development',
//         price: '89',
//         category: 'datascience'
//     },
//     {
//         course: 'Laas',
//         imageSrc: '/assets/courses/coursesThree.svg',
//         profession: 'Infra-as-a-Service',
//         price: '21',
//         category: 'cloudcomputing'
//     },
//     {
//         course: 'Iaas',
//         imageSrc: '/assets/courses/coursesFour.svg',
//         profession: 'Info-as-a-Service',
//         price: '29',
//         category: 'cloudcomputing'
//     },
//     {
//         course: 'Paas',
//         imageSrc: '/assets/courses/coursesOne.svg',
//         profession: 'Platform-as-a-Service',
//         price: '99',
//         category: 'cloudcomputing'
//     },
//     {
//         course: 'Saas',
//         imageSrc: '/assets/courses/coursesTwo.svg',
//         profession: 'Software-as-a-Service',
//         price: '58',
//         category: 'cloudcomputing'
//     }
// ];

// const NamesList = () => {

//     const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null>('webdevelopment');

//     const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
//     const webDevelopment = names.filter((name) => name.category === 'webdevelopment');
//     const dataScience = names.filter((name) => name.category === 'datascience');
//     const cloudComputing = names.filter((name) => name.category === 'cloudcomputing');

//     let selectedNames: Name[] = [];

//     if (selectedButton === 'mobiledevelopment') {
//         selectedNames = mobileDevelopment;
//     } else if (selectedButton === 'webdevelopment') {
//         selectedNames = webDevelopment;
//     } else if (selectedButton === 'datascience') {
//         selectedNames = dataScience;
//     } else if (selectedButton === 'cloudcomputing') {
//         selectedNames = cloudComputing
//     }


//     const nameElements = selectedNames.map((name, index) => (

//         <div key={index}>
//             <div className=" text-lg sm:text-sm py-5 lg:py-0">
//                 <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                     <img
//                         src={name.imageSrc}
//                         alt={name.imageSrc}
//                         className="h-full w-full object-cover object-center"
//                     />
//                 </div>
//                 <div className='flex justify-between'>
//                     <div className="mt-6 block font-normal text-gray-900">
//                         {name.course}
//                     </div>
//                     <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
//                         ${name.price}
//                     </div>
//                 </div>
//                 <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
//                     {name.profession}
//                 </p>

//                 <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
//                     <p>12 Classes</p>
//                     <div className='flex flex-row space-x-4'>
//                         <div className='flex'>
//                             <img src={'/assets/courses/account.svg'} alt="circle" />
//                             <p className='text-lightgrey ml-1'>120</p>
//                         </div>
//                         <div className='flex'>
//                             <img src={'/assets/courses/Star.svg'} alt="star" />
//                             <p className='ml-1'>4.5</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     ));


//     return (
//         <div>
//             <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

//                 <div className='sm:flex justify-between items-center pb-12'>
//                     <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Popular Courses</h2>
//                     <div>
//                         <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
//                             Explore Classes
//                         </button>
//                     </div>
//                 </div>

//                 <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

//                     {/* FOR DESKTOP VIEW */}
//                     <button onClick={() => setSelectedButton('webdevelopment')} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Web Development</button>
//                     <button onClick={() => setSelectedButton('mobiledevelopment')} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Mobile Development</button>
//                     <button onClick={() => setSelectedButton('datascience')} className={"bg-white " + (selectedButton === 'datascience' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Data Science</button>
//                     <button onClick={() => setSelectedButton('cloudcomputing')} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Cloud Computing</button>

//                     {/* FOR MOBILE VIEW */}
//                     <GlobeAltIcon onClick={() => setSelectedButton('webdevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
//                     <DevicePhoneMobileIcon onClick={() => setSelectedButton('mobiledevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
//                     <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={70} height={70} className={"bg-white " + (selectedButton === 'datascience' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
//                     <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={70} height={70} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />

//                 </div>

//                 <div>
//                     <div className="mx-auto max-w-7xl">
//                         <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
//                             <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
//                                 {nameElements.length > 0 ? (
//                                     nameElements
//                                 ) : (
//                                     <p>No data to show</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default NamesList;




