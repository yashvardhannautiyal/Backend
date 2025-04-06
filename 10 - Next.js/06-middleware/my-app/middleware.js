
/*
// {METHOD 1} 
import { NextResponse } from 'next/server'
// This function can be marked `async` if using `await` inside
//this is the function that cna be used to modify the path before the request is made 
export function middleware(request) {
    //when we go to /about - /home is redirected this is bcoz of middleware which modifies the request before it is made
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// this is the matching path where the request is made
//matcher : is used to define the correct path to give the request
export const config = {
  matcher: '/about2/:path*',
}


*/



// {METHOS 2 : CONDITIONAL STATEMENTS} 

import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}