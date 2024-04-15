"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from 'next-i18next';
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
    imgSrc: '/images/Products/AI.png',
    heading: 'Artificial Intelligence',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/software.png',
    heading: 'Software',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/electronic2.jpg',
    heading: 'Electronic',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/IC.jpg',
    heading: 'Automotive',
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
  const [isScaled, setisScaled] = useState(false);
  return (
    <div
      className='relative rounded-lg product-card'
      onMouseEnter={() => setisScaled(true)}
      onMouseLeave={() => setisScaled(false)}
    >
      <div className='overflow-hidden rounded-lg'>
        <div
          className="relative rounded-lg bg-cover bg-center bg-no-repeat opacity-70 h-[280px] transition-transform duration-1000"
          style={{
            backgroundImage: `url(${imageLink})`,
            transform: isScaled ? 'scale(1.5)' : 'scale(1)',
            filter: isScaled ? 'brightness(90%) sepia(100%) saturate(100%) hue-rotate(10deg)' : 'none',
          }}
        >
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-2">
        <h3 className="text-md font-bold text-white border p-1 border-white rounded-md z-10 inline-block">
          {heading}
        </h3>
        <p className="leading-normal text-white text-lg py-3">
          {subheading}
        </p>
      </div>
    </div>
  );
}
//opacity-70 hover:opacity-100 transition-opacity duration-400
const Products = () => {
  const router = useRouter();
  const { t } = useTranslation('product');
  return (
    <div className='mx-auto max-w-[1360px] my-20 lg:my-32 px-10 lg:px-6 relative'>
      <div className='mb-12'>
        <motion.div
          variants={staggerContainer(0.25, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="innerWidth mx-auto flexCenter flex-col"
        >
          <h1 className='text-white text-3xl md:text-5xl mb-3 font-thin'>
            <TypingText title={t("Our Products")} />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" >
        {productdata.map((items, index) => (
          <Link
            className="space-y-8"
            href='/products'
            key={index}
          >
            <ProductsCard
              heading={items.heading}
              subheading={items.subheading}
              imageLink={items.imgSrc}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products;
