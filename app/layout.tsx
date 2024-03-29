"use client"
import './globals.css';
import React, { useState, useEffect } from 'react';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #801022;
  }

::-webkit-scrollbar-thumb:horizontal {
  min-width: 2px;
}

::-webkit-scrollbar-thumb:vertical {
  min-height: 10px;
}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isVisible, setIsVisible] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300); // Adjust the scroll position threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <html lang="en">
      <head>
        <title>Conrads Consult & Engineering</title>
        <meta name="description" content='Conrads Consult & Engineering' />
        <link rel="shortcut icon" href="/logo.svg" />
      </head>
      <body>
        <style>{scrollbarStyles}</style>
        <Navbar />
        {children}
        <Footer />
        <IconButton
          style={{
            display: isVisible ? 'block' : 'none',
          }}
          onClick={scrollToTop}
          size={isSmallScreen ? 'small' : 'medium'}
          sx={{
            position: 'fixed',
            bottom: isSmallScreen ? '1rem' : '2rem',
            right: isSmallScreen ? '1rem' : '2rem',
            backgroundColor: '#801022',
            opacity: '0.5',
            color: '#fff',
            boxShadow: "0 0 8px 4px rgba(0, 0, 0, 0.3)",
            '&:hover': {
              backgroundColor: '#801022',
              opacity: '1',
              boxShadow: "0 0 8px 4px rgba(128, 16, 34, 0.3)",
            },
            width: isSmallScreen ? '42px' : '52px',
            height: isSmallScreen ? '42px' : '52px',
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </body>
    </html>
  )
}
