"use client";

import { MdDone } from "react-icons/md";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Lottie from "lottie-react";
import delivery from "@/delivery.json";
import Link from "next/link";

const ClearCartProducts = ({ email }) => {
    const { clearCart } = useShoppingCart();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const deletee = () => {
            setLoading(true);
            clearCart();
        };

        if (loading === false) deletee();
    }, []);

    return (
        <div className="py-4 px-8 space-y-4 rounded-md max-w-lg mx-auto">
            <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
                Your order has been confirmed
            </h2>
            <Link className="text-blue-500 hover:underline text-lg" href="/">Go Home</Link>
            <p className="text-lg">For envoice check email - {email}</p>
            {/* <MdDone className="w-24 h-24 mx-auto flex-shrink-0 text-lime-600" /> */}
            <div className="w-auto h-auto ">
                <Lottie style={{objectFit: 'fill'}} animationData={delivery} height={10} width={"100%"} />
            </div>
        </div>
    );
};

export default ClearCartProducts;
