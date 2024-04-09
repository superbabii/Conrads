import React from "react";
import Link from "next/link";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Imprint', href: '/about-us', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md w-full">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-5 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-white mainbutton"
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
