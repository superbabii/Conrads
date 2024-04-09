"use client"
import Image from 'next/image';
import Link from 'next/link';
import { TypingText, TitleText } from '../Effect/typing';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

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
  {
    imgSrc: '/images/Products/electronic2.jpg',
    heading: 'Products-exm1',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/IC.jpg',
    heading: 'Products-exm1',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/electronic.jpg',
    heading: 'Products-exm1',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/electron-2.png',
    heading: 'Products-exm1',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

interface ProductsCardProps {
  heading: string;
  subheading: string;
  imageLink: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ heading, subheading, imageLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition opacity-40 -inset-1 bg-gradient-to-r from-[#592693] to-[#96225f] blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <div className='relative'
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
        <div className="relative space-y-6 leading-none rounded-lg ring-1 ring-gray-900/5 highlight"
          style={{
            backgroundImage: `url(${imageLink})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '240px',
            opacity: 0.9,
            transition: 'opacity 0.4s ease-in-out',
          }}
        >
        </div>
        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-md text-white border p-1 border-white rounded-md z-10 inline-block">
            {heading}
          </h3>
          <p className="leading-normal text-white text-lg py-3">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
}

const Products = () => {
  return (
    <div className='mx-auto max-w-7xl my-20 px-10 lg:px-6 relative'>
      <div className="radial-bgone hidden lg:block"></div>
      <div className='mb-12'>
        <motion.div
          variants={staggerContainer(0.25, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="innerWidth mx-auto flexCenter flex-col"
        >
          <h1 className='text-offwhite text-3xl md:text-5xl mb-3'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <TypingText title="Our Products" />
            <div className='bg-primary mt-1 w-[40px] md:w-[70px] h-[3px] md:h-[5px]' />
          </h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className='text-maingray text-md'
          >
            Experience the convergence of cutting-edge technology and expert craftsmanship with Conrads Consult & Engineering&apos;s innovative product solutions.
          </motion.p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 mt-12" >
        {productdata.map((items, index) => (
          <Link
            className="space-y-8"
            href='/products'
            key={index}
          >
            <li className="text-sm leading-6">
              <ProductsCard
                heading={items.heading}
                subheading={items.subheading}
                imageLink={items.imgSrc}
              />
            </li>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products;
