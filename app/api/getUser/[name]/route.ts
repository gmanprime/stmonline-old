import { NextResponse } from "next/server"

let user = {
   name: 'yonatan'
}

export async function GET(req:Request, {params}){
   user.name = params.name
   return NextResponse.json(user, {status: 200})
}