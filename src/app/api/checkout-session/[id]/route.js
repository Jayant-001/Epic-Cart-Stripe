import { NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";

export async function GET(req, { params }) {
    
    try {
        const { id } = await params;
        if (!id.startsWith("cs_")) {
            throw new Error("Incorrect checkout session id");
        }

        const checkoutSession = await stripe.checkout.sessions.retrieve(id);
        return NextResponse.json(checkoutSession, { status: 200 });

    } catch (error) {
        console.log("Server ", error);
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

export async function POST(req) {

    return NextResponse.json({messagge: "Response from POST"}, {status: 200})
}