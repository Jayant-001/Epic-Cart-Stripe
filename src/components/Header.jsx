'use client'

import Link from "next/link";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
    const { formattedTotalPrice, cartCount } = useShoppingCart();

    return (
        <header className="sticky top-0 z-10 shadow bg-white">
            <div className="mx-auto flex justify-between container py-5 px-10">
                <Link href="/">EpicStore</Link>
                <Link
                    className="space-x-1 flex hover:underline hover:text-blue-500 items-center"
                    href="/cart"
                >
                    <p className="font-semibold">Cart</p>
                    <p>{formattedTotalPrice}</p>
                    <p className="text-sm">({cartCount})</p>
                </Link>
            </div>
        </header>
    );
};

export default Header;
