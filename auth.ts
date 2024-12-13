import NextAuth from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import { User } from './model/user-model';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        CredentialProvider({
            async authorize(credentials) {
                if (credentials === null) return null;

                try {
                    const user = await User.findOne({
                        email: credentials?.email,
                    });
                    console.log(user);

                    if (user) {
                        const isMatch = await bcrypt.compare(credentials.password, user.password);

                        if (isMatch) {

                            return user;
                        } else {
                            throw new Error('Email or Password is not correct');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
        
        
        

    ],
    
    
    // callbacks: {
    //     async jwt({ token, user }) {
    //         console.log(`ИЗ ТОКЕНА!!!!${user}`);
    //         if (user) {
    //             token.id = user._id;
    //             token.email = user.email;
    //         }
    //         console.log(token);
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         // Добавить данные токена в сессию
    //         console.log(` СЕССИЯ!!!!${session}`)
    //         session.user.id = token.id;
    //         session.user.email = token.email;
    //         return session;
    //     },
    // },
    // secret: process.env.AUTH_SECRET, // Используется для подписи токена
});
