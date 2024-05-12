import { NextRequest, NextResponse } from 'next/server'
import { auth } from "@/data/FirebaseConfig";
import {cookies} from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutesAuth = ['/signin', '/signup']

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutesAuth.includes(path)

    // 3. Check if user is authenticate
    // const user = auth.currentUser;

    // Recuperer session ici
    const cookieStore = cookies()
    const token = cookieStore.get('token');

    console.log(token)
    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/auth/signin', req.nextUrl))
    }

    // 6. Redirect to /dashboard if the user is authenticated
    // if ( publicRoutesAuth && token) {
    //     return NextResponse.redirect(new URL('', req.nextUrl))
    // }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}