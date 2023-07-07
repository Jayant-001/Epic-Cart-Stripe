"use client";

import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

const ProductDetailPage = ({ product }) => {
    const { addItem } = useShoppingCart();
    const [count, setCount] = useState(1);

    const handleAddToCart = (e) => {
        e.preventDefault();

        const toastId = toast.loading(
            `Adding ${count} item${count > 1 ? "s" : ""}`
        );
        addItem(product, { count });
        toast.success(`${count} ${product.name} Added`, {
            id: toastId,
            duration: 3000,
        });
    };

    return (
        <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
            <Toaster />
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 border">
                    <Image
                        src={product.image}
                        fill={true}
                        sizes="100%"
                        alt="Product image"
                        styles={{ objectFit: "contain" }}
                    />
                </div>
                <div className="space-y-4 w-72 h-72">
                    <h3 className="text-3xl font-bold">{product.name}</h3>
                    <p className="text-green-500">In Stock</p>
                    <hr />
                    {/* <div> */}
                    <p>Price</p>
                    <p className="text-xl font-semibold">
                        {formatCurrencyString({
                            value: product.price,
                            currency: product.currency,
                        })}
                    </p>
                    {/* </div> */}
                    <hr />
                    <h4 className="">Quantity</h4>
                    <div className="flex items-center space-x-3 text-lg">
                        <button
                            onClick={(e) =>
                                setCount(Math.max(0, count - 1))
                            }
                            className="px-3 border hover:bg-rose-200 rounded-md"
                        >
                            -
                        </button>
                        <p className="text-xl font-semibold">{count}</p>
                        <button
                            onClick={(e) => setCount(count + 1)}
                            className="px-3 border hover:bg-lime-200 rounded-md"
                        >
                            +
                        </button>
                    </div>
                    <button
                        disabled={count === 0}
                        onClick={handleAddToCart}
                        className="bg-green-300 w-full shadow py-1 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
