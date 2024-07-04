import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const {userId} = 
    } catch (error) {
        console.log{"[STORES_POST]", error}
        return new NextResponse("Internal error", {status: 500})
    }
}