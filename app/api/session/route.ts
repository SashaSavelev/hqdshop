// app/api/session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Session } from '@/model/session-model';

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const existingSession = cookieStore.get('sessionId');
  
    const sessionId = existingSession?.value;
  
   let session = await Session.findOne({sessionId})
   
   if(!session) {
    session = await Session.create({
      sessionId,
      favorites: [],
      cartItems: [],
    });
    console.log(session)
   }

   console.log(session)
  
  
   return NextResponse.json({ message: 'Got session', session}, { status: 201 });

  } catch (error) {
    return new Response(`Что-то пошло не так ${error}`, { status: 500 });
  }
 
}
