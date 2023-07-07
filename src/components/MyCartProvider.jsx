"use client";

import { CartProvider } from "use-shopping-cart";

const MyCartProvider = ({ children }) => {
    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_key;
    return (
        // Cart provider must be in client component
        <CartProvider
            stripe={stripeKey}
            cartMode="checkout-session"
            currency="USD"
        >
            {children}
        </CartProvider>
    );
};

export default MyCartProvider;
