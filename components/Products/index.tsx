"use client"
import Image from 'next/image';

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
            opacity: 0.7,
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
    <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
      <div className="radial-bgone hidden lg:block"></div>
      <div className='text-center mb-14'>
        <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>
          Products
        </h3>
        <p className='text-offwhite md:text-lg font-normal leading-8'>
          Explore our range of cutting-edge solutions designed to drive innovation and enhance efficiency.<br />
          From advanced printed circuit boards to custom software integrations, our products are meticulously crafted to meet the diverse needs of modern businesses, empowering you to stay ahead in today&apos;s dynamic market.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-y-20 mt-32" >
        {productdata.map((items, index) => (
          <ul className="space-y-8" key={index}>
            <li className="text-sm leading-6">
              <ProductsCard
                heading={items.heading}
                subheading={items.subheading}
                imageLink={items.imgSrc}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Products;
