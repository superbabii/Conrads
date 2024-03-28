"use client"
import Image from 'next/image';

interface productdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const productdata: productdata[] = [
  {
    imgSrc: '/images/Products/electronic.jpg',
    heading: 'Electronic Engineering',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/electronic.jpg',
    heading: 'Find your Credit',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
  },
  {
    imgSrc: '/images/Products/electronic.jpg',
    heading: 'Exchange Currency',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/electronic.jpg',
    heading: 'Exchange Currency',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imgSrc: '/images/Products/electronic.jpg',
    heading: 'Exchange Currency',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },

]

interface ProductsCardProps {
  heading: string;
  subheading: string;
  photoLink: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ heading, subheading, photoLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition opacity-40 -inset-1 bg-gradient-to-r from-[#592693] to-[#96225f] blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <div className="relative space-y-6 leading-none rounded-lg ring-1 ring-gray-900/5 highlight"
        style={{
          backgroundImage: `url(${photoLink})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '240px',
        }}
      >
        <div className="flex items-center space-x-4">
          <div className="relative overflow-hidden p-2">
            <h3 className="text-md text-white border p-1 border-white rounded-md z-10 inline-block">
              {heading}
            </h3>
            <p className="leading-normal text-white text-lg py-2">
              {subheading}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Products = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
        <div className="radial-bgone hidden lg:block"></div>
        <div className='text-center mb-14'>
          <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Products</h3>
          <p className='text-offwhite md:text-lg font-normal leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-y-20 mt-32" >
          {productdata.map((items, i) => (
            <ul className="space-y-8" key={i}>
              <li className="text-sm leading-6">
                <ProductsCard
                  heading={items.heading}
                  subheading={items.subheading}
                  photoLink={items.imgSrc}
                />
              </li>
            </ul>
          ))}
        </div>
        {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {productdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div> */}

      </div>
    </div>
  )
}

export default Products;
