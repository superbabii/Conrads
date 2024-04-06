import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'next-i18next';
import { motion } from "framer-motion";
import { footerVariants } from "../../utils/motion";

// MIDDLE LINKS DATA
interface LinkType {
  name: string;
  href: string;
  current: boolean;
}
interface Social {
  imgsrc: string,
  href: string,
}

const Links: LinkType[] = [
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Products', href: '/products', current: false },
  { name: 'Terms of Service', href: '/terms-of-service', current: false },
  { name: 'Privacy Policy', href: '/privacy-policy', current: false },
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/insta.svg', href: "https://instagram.com/" },
  { imgsrc: '/images/Footer/dribble.svg', href: "https://dribble.com/" },
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/" },
  { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/" },
]

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="relative innerWidth mx-auto flexCenter flex-col"
    >
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl lg:mt-16 lg:mt-32 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-6'>
            <img
              className="block h-12 lg:h-16 w-24px mb-4"
              src={'/images/Logo/logo.png'}
              alt="conrads-engineering-Logo"
            />
            <h3 className='text-maingray text-sm font-normal leading-9 mb-4 lg:mb-16'>
              {t('description')}
            </h3>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img src={items.imgsrc} alt={items.imgsrc} className='footer-icons' />
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          <div className="group relative col-span-3">
            <p className="text-white text-xl font-medium mb-9">
              {t('Links')}
            </p>
            <ul>
              {Links.map((item, index) => (
                <li key={index} className='mb-5'>
                  <Link href={item.href} className="text-maingray text-sm font-normal mb-6 space-links">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3">
            <h3 className="text-white text-xl font-medium mb-9">
              {t("Contact Us")}
            </h3>
            <h4 className="text-maingray text-sm font-normal mb-6 flex gap-2" style={{ alignItems: 'flex-start' }}>
              <HomeIcon style={{ verticalAlign: 'top', color: 'white' }} />
              <span>
                Münderhäuser Straße 31, 36199<br />
                Rotenburg an der Fulda,<br />
                Germany
              </span>
            </h4>
            <h4 className="text-maingray text-sm font-normal mb-6 flex gap-2">
              <CallIcon style={{ color: 'white' }} />
              <a className="contact-obj" href="tel:+49-662-343-645-10" style={{ textDecoration: 'none' }}>
                +49 (66) 234 3645 10
              </a>
            </h4>
            <h4 className="text-maingray text-sm font-normal mb-6 flex gap-2">
              <EmailIcon style={{ color: 'white' }} />
              <a className="contact-obj" href="mailto:info@conrads-engineering.com" style={{ textDecoration: 'none' }}>
                info@conrads-engineering.com
              </a>
            </h4>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent" />
      <div className='py-8 px-4'>
        <h3 className='text-center text-maingray'>
          Copyright © 2024 Conrads Consult & Engineering | All rights reserved.
        </h3>
      </div>
    </motion.footer>
  )
}

export default Footer;
