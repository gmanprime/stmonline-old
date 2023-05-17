import { NextResponse as nRes , NextRequest as nReq} from "next/server";

export function middleware(req:nReq){
   const origin = req.headers.get('origin');
   console.log(origin)

   const res = nRes.next();
   res.headers.set('Access-Control-Allow-Origin', '*');
   res.headers.set('Access-Control-Allow-methods', 'GET POST, PUT, DELETE, OPTIONS');
   res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   res.headers.set('Access-Control-Max-Age', '86400');

   console.log('Middleware!')
   console.log(req.method)
   console.log(req.url)

   return res
}

export const config = {
   matcher: '/api/:path*'
}