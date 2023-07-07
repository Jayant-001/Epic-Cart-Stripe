"use client";

import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const ItemProductsList = ({ product, id }) => {
    const { addItem } = useShoppingCart();

    const hendleAddToCart = (e) => {
        e.preventDefault();
        const toastId = toast.loading("Adding 1 item...");
        addItem(product);
        toast.success(`${product.name} Added`, { id: toastId, duration: 3000 });
    };

    return (
        <Link
            href={`product/${product.id}`}
            className="border-2 rounded-md group overflow-hidden"
        >
            <Toaster position="top-center" reverseOrder={false} />
            <div className="relative w-full h-64">
                <Image
                    src={product.image}
                    fill={true}
                    alt={`${product.name} image`}
                    sizes="100%"
                    priority={id === 0}
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="mx-5 my-2" title={product.name}>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center justify-between">
                    <div className="">
                        <p>Price</p>
                        <p className="font-semibold">
                            {formatCurrencyString({
                                value: product.price,
                                currency: product.currency,
                            })}
                        </p>
                    </div>
                    <button
                        title="Add to cart"
                        className="bg-slate-500 shadow px-2 py-1 rounded-md text-slate-200 active:bg-slate-700 active:text-slate-100"
                        onClick={hendleAddToCart}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ItemProductsList;
