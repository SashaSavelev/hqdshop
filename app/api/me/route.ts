import { NextResponse } from 'next/server';

import { auth } from '@/auth';

export const GET = auth((req) => {
    console.log(req.auth, 'API CALL ME')

    
    if (req.auth) {
        return new NextResponse('ЭТО Я', {
            status: 201,
        });
        
    }
  
    return Response.json({ message: "Not authenticated" }, { status: 401 })
  }) // TODO: Fix `auth()` return type


