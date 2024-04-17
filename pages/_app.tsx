import "@/styles/globals.css";
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CCESpinner from './Spinner';
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleStart = () => {
      timer = setTimeout(() => {
        setLoading(true);
      }, 500);
    };

    const handleComplete = () => {
      clearTimeout(timer);
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      {loading ? (
        <CCESpinner loading={loading} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */)
