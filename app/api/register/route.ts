import { NextResponse } from 'next/server';
import { createUser } from '@/lib/users';
import bcrypt from 'bcryptjs';
import { dbConnect } from '@/lib/mongo';
import { User } from '@/model/user-model';

export const POST = async request => {
    const { name, email, password, favorites, cart } = await request.json();

    await dbConnect();
    

    const potentialUser = await User.findOne({
        email: email,
    });

    if (potentialUser) {
        return new NextResponse('User already exists', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
        name,
        password: hashedPassword,
        email,
        favorites,
        cart
    };

    try {
        await createUser(newUser);
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }

    return new NextResponse('User has been created', {
        status: 201,
    });
};
