import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error Page | Conrads Consult & Engineering",
  description: "This is Error Page for Conrads Consult & Engineering",
};

const ErrorPage = () => {
  return (
    <div className="relative z-10 pb-16 pt-36 mt-16 lg:mt-32 md:pb-20 lg:pb-28 lg:pt-32">
      <div className="mx-auto max-w-[1360px] text-center">
        <h1 className="text-9xl font-bold text-primary mb-32">404</h1>
        <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Sorry, the page can&apos;t be found
        </h3>
        <p className="mb-10 text-maingray sm:text-lg">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>
        <Link
          href="/"
          className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
