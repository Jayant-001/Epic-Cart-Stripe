"use client";

import { MdDone } from "react-icons/md";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const ClearCartProducts = ({ email }) => {
    const { clearCart } = useShoppingCart();
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const deletee = () => {
            setLoading(true)
            clearCart();
        }

            if(loading === false) 
        deletee();
    }, [])
    

    return (
        <div className="py-4 px-8 space-y-4 rounded-md max-w-lg mx-auto">
            <MdDone className="w-24 h-24 mx-auto flex-shrink-0 text-lime-600" />
            <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
                Your order has been confirmed
            </h2>
            <p className="text-lg">For envoice check email - {email}</p>
        </div>
    );
};

export default ClearCartProducts;
