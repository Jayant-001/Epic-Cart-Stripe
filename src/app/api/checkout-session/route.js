import { NextResponse } from "next/server";

export function POST(req) {
    return NextResponse.json({ hello: "jaynat" }, { status: 200 });
}
