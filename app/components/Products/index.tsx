"use client"
import Image from 'next/image';

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: '/images/Work/icon-one.svg',
    heading: 'Create Account',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
  {
    imgSrc: '/images/Work/icon-two.svg',
    heading: 'Find your Credit',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
  {
    imgSrc: '/images/Work/icon-three.svg',
    heading: 'Exchange Currency',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },

]

interface TweetProps {
  name: string;
  position: string;
  text: string;
  photoLink: string;
  tweetLink: string;
}

const Tweet: React.FC<TweetProps> = ({ name, position, text, photoLink, tweetLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-[#5b585f] to-[#2d2a33] blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={tweetLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {name}
              </h3>
              <p className="text-gray-500 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">
            {text}
          </p>
        </div>
      </a>
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
          <p className='text-bluish md:text-lg font-normal leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <Tweet
                name="Kanye West"
                position="Rapper & Entrepreneur"
                text="Find God."
                photoLink="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                tweetLink="https://twitter.com/kanyewest"
              />
            </li>
          </ul>
        </div>
        {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
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
