"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import ItemCart from "./ItemCart";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const extractCartDetails = (data) => Object.entries(data);

const ListCart = () => {
    const { cartCount, clearCart, cartDetails, formattedTotalPrice, redirectToCheckout } =
        useShoppingCart();

    const cartProducts = extractCartDetails(cartDetails);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleClearCart = (e) => {
        e.preventDefault();

        const toastId = toast.loading("Clearing cart...");
        clearCart();
        toast.success("Cart is cleared", { id: toastId, duration: 3000 });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        if (cartCount <= 0) return;

        console.log("checking...");
        setIsRedirecting(true);
        try {
            const {id} = await axios.post('/api/checkout-session', cartDetails)
            .then((res) => res.data);

            const result = await redirectToCheckout(id);

            if(result?.error) {
                console.log("Result Error ", result);
            }

        } catch (error) {
            console.log("Error: ", error)
        } finally { 
            setIsRedirecting(false);
        }
    };

    return (
        <div>
            <Toaster />
            {cartCount === 0 ? (
                <p>
                    Your Cart is empty. Checkout our awesome products{" "}
                    <Link
                        href="/"
                        className="text-red-400 hover:underline text-xl"
                    >
                        here
                    </Link>
                    {"."}
                </p>
            ) : (
                <div>
                    <h1 className="my-3">
                        You have total{" "}
                        <span className="font-semibold">{cartCount}</span> items
                        in your cart.{" "}
                        <button
                            className="text-red-400 hover:underline text-xl"
                            onClick={handleClearCart}
                        >
                            clear all
                        </button>
                    </h1>

                    <div className="space-y-5 mt-5">
                        {cartProducts.map((product, id) => {
                            return <ItemCart key={id} product={product} />;
                        })}
                    </div>
                </div>
            )}

            <div className="flex justify-end">
                {cartCount > 0 && (
                    <div className="">
                        <h3>Total</h3>
                        <p className="text-lg font-semibold">
                            {formattedTotalPrice}
                        </p>
                        <button
                            disabled={isRedirecting === true}
                            title="Checkout"
                            className="bg-green-300 px-3 shadow py-1 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={handleCheckout}
                        >
                            {isRedirecting ? "Redirecting..." : "Checkout"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListCart;
