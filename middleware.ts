import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { LOGIN, PUBLIC_ROUTES, ROOT, PROTECTED_SUB_ROUTES } from '@/lib/routes';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
    const session = await auth();
    const { nextUrl } = request;
    console.log(nextUrl.pathname, '!!!!');
    const isAuthenticated = !!session?.user;
    console.log(isAuthenticated, 'MIDDLEWARE');

    const isPublicRoute = ((PUBLIC_ROUTES.find(route => nextUrl.pathname.includes(route))
    || nextUrl.pathname === ROOT) && !PROTECTED_SUB_ROUTES.find(route => nextUrl.pathname.includes(route)));
    if (!isAuthenticated && !isPublicRoute) {
        return NextResponse.redirect(new URL(LOGIN, nextUrl));
    }
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]};
