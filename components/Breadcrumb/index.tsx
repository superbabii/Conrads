
import Link from "next/link";

const Breadcrumb = ({
    pageName,
    description,
}: {
    pageName: string;
    description: string;
}) => {
    return (
        <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
            <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 md:w-8/12 lg:w-8/12">
                    <div className="mb-8 max-w-5xl md:mb-0 lg:mb-12">
                        <h1 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                            {pageName}
                        </h1>
                        <p className="font-medium leading-relaxed text-maingray">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 md:w-4/12 lg:w-4/12">
                    <ul className="flex items-center md:justify-end">
                        <li className="flex items-center">
                            <Link
                                href="/"
                                className="pr-1 font-medium text-maingray hover:text-primary"
                            >
                                Home
                            </Link>
                            <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-maingray"></span>
                        </li>
                        <li className="font-medium text-primary">
                            {pageName}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
