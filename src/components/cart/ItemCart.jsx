"use client";

import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

const ItemCart = ({ product }) => {
    const productId = product[0];
    const productDetails = product[1];

    const { setItemQuantity, removeItem } = useShoppingCart();
    const removeProduct = (e) => {
        e.preventDefault();
        removeItem(productId);
    };

    return (
        <div className="border flex justify-between items-center hover:scale-105 cursor-pointer px-3 py-2 group shadow hover:shadow-lg">
            <div className="flex items-center gap-2">
                <div className="w-20 h-20 relative">
                    <Image
                        src={productDetails.image}
                        alt="Cart Product Image"
                        sizes="100%"
                        fill={true}
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <Link href={`product/${productId}`}>
                    <h3 className="group-hover:underline text-base md:text-lg font-semibold group-hover:text-slate-500">
                        {productDetails.name}
                    </h3>
                </Link>
            </div>

            <div className="flex items-center space-x-2 font-semibold text-sm md:text-lg">
                <div className="flex flex-col justify-center items-end space-y-1 px-2">
                    <div className="flex items-center space-x-1 ">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (productDetails.quantity === 1) return;
                                setItemQuantity(
                                    productId,
                                    productDetails.quantity - 1
                                );
                            }}
                            className="px-3 border hover:bg-rose-200 rounded-md"
                        >
                            -
                        </button>

                        <p>{productDetails.quantity}</p>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setItemQuantity(
                                    productId,
                                    productDetails.quantity + 1
                                );
                            }}
                            className="px-3 border hover:bg-lime-200 rounded-md"
                        >
                            +
                        </button>
                    </div>
                    <p>{productDetails.formattedValue}</p>
                </div>
                <button
                    onClick={removeProduct}
                    className="flex justify-center items-center w-6 h-6 text-base rounded-full hover:bg-rose-200 "
                >
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default ItemCart;
