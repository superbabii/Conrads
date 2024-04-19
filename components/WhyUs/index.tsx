"use client"
import { RepeatingText } from '../Effect/typing';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from 'next-i18next';

const WhyUs = () => {
    const router = useRouter();
    const { t } = useTranslation('whyus');

    return (
        <div className="why-bg mt-24 lg:mt-36">
            <div className="mx-auto max-w-5xl py-36 px-6">
                <h3 className="text-center text-white text-3xl lg:text-5xl font-thin mb-6">
                    Why <RepeatingText title1='Choose' title2='Need' /> Us <br />
                    Unlock a World of Possibilities
                </h3>
                <p className="text-center text-white text-lg font-normal mb-8">
                    {t("description")}
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-16">
                    <Link href="/services">
                        <button className='text-lg text-white mainbutton rounded-full' style={{ width: '200px' }}>
                            {t("Our Service")}
                        </button>
                    </Link>
                    <Link href="/about-us">
                        <button className='text-lg text-white mainbutton rounded-full' style={{ width: '200px' }}>
                            {t("Our Company")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;
