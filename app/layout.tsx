import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


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
      </body>
    </html>
  )
}
