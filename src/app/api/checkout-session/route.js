import { stripe } from "@/utils/stripe";
import { NextResponse } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";

export async function POST(req) {
    try {
        const cartDetails = await req.json();

        const origin = req.headers.get('origin')
        // return NextResponse.json({abc: "hello"}, {status: 400})
        const inventory = await stripe.products.list({
            expand: ["data.default_price"],
        });

        const products = inventory.data.map((product) => {
            const price = product.default_price;
            return {
                currency: price.currency,
                id: product.id,
                name: product.name,
                price: price.unit_amount,
                image: product.images[0],
            };
        });

        const lineItems = validateCartItems(products, cartDetails);

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: lineItems,
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cart`,
        });

        return NextResponse.json(session, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                error: error.message,
                message: "Internal Server Error",
            },
            { status: 500 }
        );
    }
}


// Card number - 5105105105105100