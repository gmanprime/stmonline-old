import { NextResponse } from "next/server"

let user = {
   name: 'yonatan'
}

export async function GET(req:Request){
   return NextResponse.json(user)
}