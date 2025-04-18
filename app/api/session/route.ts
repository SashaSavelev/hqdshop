// app/api/session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Session } from '@/model/session-model';

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const existingSession = cookieStore.get('sessionId');

    const sessionId = existingSession?.value;

    if (!sessionId) {
      return new Response('Session ID не найден в cookies', { status: 400 });
    }

    let session = await Session.findOne({ sessionId });

    if (!session) {
      const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); 



      session = await Session.create({
        sessionId,
        favorites: [],
        cartItems: [],
        expiresAt,
      });
    }
 

    return NextResponse.json({ message: 'Got session', session }, { status: 200 });

  } catch (error) {
    console.error('Ошибка получения сессии:', error);
    return new Response(`Что-то пошло не так: ${error}`, { status: 500 });
  }
}
