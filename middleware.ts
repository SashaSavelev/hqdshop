import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import {
  LOGIN,
  PUBLIC_ROUTES,
  ROOT,
  PROTECTED_SUB_ROUTES,
} from '@/lib/routes';
import { NextResponse, NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const { auth } = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { nextUrl, cookies } = request;
  const isAuthenticated = !!session?.user;

  const existingSession = cookies.get('sessionId');
  const response = NextResponse.next();

  if (!existingSession) {
    const sessionId = uuidv4();
    response.cookies.set('sessionId', sessionId, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30, 
    });
  }

  const isPublicRoute =
    (PUBLIC_ROUTES.find((route) => nextUrl.pathname.includes(route)) ||
      nextUrl.pathname === ROOT) &&
    !PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl));
  }

  return response;
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
