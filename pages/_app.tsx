import "@/styles/globals.css";
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CustomSpinner from './Spinner';
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleStart = () => {
      // Start the timer with a delay of 500 milliseconds (adjust as needed)
      timer = setTimeout(() => {
        setLoading(true);
      }, 500); // Adjust the delay time here (in milliseconds)
    };

    const handleComplete = () => {
      // Clear the timer to prevent the spinner from showing if the page loads quickly
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
        <CustomSpinner loading={loading} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */)
